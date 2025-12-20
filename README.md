# Family Tree Project

This is a personal family tree project.

## Overview

**The Family Legacy** is an interactive family tree visualization project that documents the Rimon-Givon lineage across multiple generations. The project combines a dynamic tree visualization with an interactive map showing ancestral locations and current residences.

## Features

### 🌳 Family Tree View
- **Interactive Tree Visualization**: Navigate through generations with an elegant, connected family tree layout
- **3D Flip Cards**: Hover over any family member to flip their card and view detailed information
- **Multiple Generations**: Track lineage from G-2 ancestors through to current generations
- **Visual Indicators**: Deceased members are shown with special styling (dashed borders, grayscale)
- **Zoom & Pan Controls**: Use zoom buttons to adjust view, scroll to navigate, or drag to pan

### 🗺️ Legacy Map View
- **Interactive Leaflet Map**: Locate ancestral homes and current family residences
- **Place Markers**: Click markers to see family member details
- **Historical Locations**: Track migration patterns across Poland, Israel, and other regions

### 🔍 Navigation Tools
- **Member Search**: Quickly find family members by name with autocomplete results
- **Lineage Buttons**: Jump directly to major family lines (Granat, Givon, Cohen, Diamentstein, Weissbarst)
- **Generation Filters**: View specific generations (Roots/G0 through Latest/G5)
- **Add Member Function**: Expand the tree by adding new family members with marriages, children, and locations

## Project Structure

```
family-tree-project/
├── index.html          # Main HTML document with modal structure
├── script.js           # Core family data structure and tree rendering logic
├── style.css           # Main styling and layout CSS
├── modal-styles.css    # Modal and form styling
├── add-member.js       # Form handling for adding new members
├── granat.ged          # GEDCOM file with family data (genealogy format)
└── README.md          # This file
```

## Key Components

### Family Data Structure (script.js)

The family tree is organized in a hierarchical object structure starting with root ancestors and branching into children. Each person has:

- `name`: Full name of the family member
- `role`: Generation marker and description (e.g., "G0: Patriarch")
- `image`: URL to profile image (optional)
- `partner`: Spouse information (first marriage)
- `secondPartner`: Second spouse for remarriages (optional)
- `coords`: [latitude, longitude] for map location
- `locationName`: Description of location
- `children`: Array of direct descendants
- `description`: Optional biographical information

### Multiple Marriages Support

The system supports family members with multiple spouses:
- **Primary partner**: Displayed left of the person (customizable with `partnerLeft` flag)
- **Second partner**: Displayed right of the person with a separate connector
- **Visual separation**: Each spouse is connected with a decorative heart symbol (❤)

### Card System

Member cards are interactive with 3D flip animation:
- **Front**: Name, role, profile image/icon
- **Back**: Legacy details and biographical information
- **Ventures**: Special styling for business ventures (blue accent)
- **Deceased**: Dashed borders and grayscale styling for historical members

## Usage

### Viewing the Tree

1. **Navigate**: Scroll to move around, use zoom buttons for sizing
2. **Select Generation**: Use "Roots" or "Latest" buttons to focus on specific generations
3. **Search Members**: Type in the search box to find anyone in the tree
4. **Jump to Lineage**: Click lineage buttons to center on major family branches
5. **Flip Cards**: Hover over any member card to see detailed information

### Adding New Members

1. Click **"Add to Legacy"** button
2. Fill in the form:
	- **Full Name**: New member's name
	- **Age/Generation**: Age or generation (e.g., "25" or "G5")
	- **Parent Link**: Select the parent to attach to
	- **Current Residence**: Location for map placement
3. Submit to add to the tree

### Map Features

1. Click **"🗺️ Legacy Map"** tab to view locations
2. Explore markers for ancestral and current residences
3. Click markers for member details
4. Use map controls to zoom and pan

## Genealogy Reference

### Main Lineages

**Rimon/Granat Line**: Starting with Josek Hersz Granat (1815–1878), founder of the family branch in Israel. Son Efraim Eliezer Rimon (1868–1919) was a poet and journalist.

**Cohen Line**: Paternal ancestry through Baruch Tzvi Hirsh Cohen (1852–1941) and Rabbi Mosheh David Rozental Hacohen.

**Supporting Families**: Givon, Diamentstein, Weissbarst, and others through marriages.

### Important Notes

- **Ancestor Home**: Biezun, Poland (ancestral seat of the Granat/Rimon family)
- **Immigration**: Many family members immigrated to Jaffa, Israel in early 1900s
- **Multiple Marriages**: Several family members remarried, noted with "second partner" entries

## Technical Details

### Technologies Used

- **HTML5**: Semantic markup and modal structure
- **CSS3**: Flexbox layout, 3D transforms, backdrop blur, animations
- **Vanilla JavaScript**: Tree rendering, event handling, search functionality
- **Leaflet.js**: Interactive mapping library
- **Google Fonts**: Outfit (sans-serif) and Playfair Display (serif) typography

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Responsive design supports mobile viewing (optimize for desktop for best experience)

## Notes

- All dates and locations are subject to historical records
- Deceased members are marked with (Deceased) and year ranges where known
- The GEDCOM file (granat.ged) maintains genealogical data in standard format
- Some historical details may be incomplete due to historical record availability

## Future Enhancements

- Photo uploads for family members
- Timeline view showing life events
- DNA/genetic connection visualizations
- Export functionality (PDF, image)
- Multi-language support
- Advanced filtering by location, era, or achievements

## License & Attribution

This family tree project preserves the legacy of the Rimon, Givon, Granat, Cohen, and related families. Created with care to honor family history and connections.

---

*Last updated: December 2025*
