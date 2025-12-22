/**
 * Debug Logger - Captures all console logs and errors to file
 */

class DebugLogger {
    constructor() {
        this.logs = [];
        this.setupLogging();
    }

    setupLogging() {
        // Capture console.log
        const originalLog = console.log;
        console.log = (...args) => {
            this.addLog('LOG', args);
            originalLog.apply(console, args);
        };

        // Capture console.error
        const originalError = console.error;
        console.error = (...args) => {
            this.addLog('ERROR', args);
            originalError.apply(console, args);
        };

        // Capture console.warn
        const originalWarn = console.warn;
        console.warn = (...args) => {
            this.addLog('WARN', args);
            originalWarn.apply(console, args);
        };

        // Capture unhandled errors
        window.addEventListener('error', (e) => {
            this.addLog('UNCAUGHT_ERROR', [e.message, e.filename, e.lineno]);
        });
    }

    addLog(type, args) {
        const timestamp = new Date().toISOString();
        const message = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ');
        
        this.logs.push(`[${timestamp}] ${type}: ${message}`);
    }

    downloadLogs() {
        const logContent = this.logs.join('\n');
        const blob = new Blob([logContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `debug-${new Date().toISOString().split('T')[0]}.log`;
        a.click();
        URL.revokeObjectURL(url);
    }

    clearLogs() {
        this.logs = [];
    }
}

// Initialize debug logger
const debugLogger = new DebugLogger();

// Add download button to page
document.addEventListener('DOMContentLoaded', () => {
    const debugBtn = document.createElement('button');
    debugBtn.textContent = '📄 Download Debug Log';
    debugBtn.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 9999;
        background: #1e293b;
        color: white;
        border: 1px solid #38bdf8;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
    `;
    debugBtn.onclick = () => debugLogger.downloadLogs();
    document.body.appendChild(debugBtn);
});