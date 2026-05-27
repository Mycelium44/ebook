# Elysium Clone — Pixel-Perfect Refinement Briefing

**Date:** 2026-05-27
**Status:** ✅ Complete
**Dev Server:** http://localhost:3000

---

## Reference

**thenetworkstate.com** — Single-page book reader with a fixed 64px header, 2-column grid (320px sidebar + fluid content), fixed-width book cover (200×300), pill-shaped sidebar navigation buttons (40px height), and card-style chapter list items (48px height). Clean sans-serif typography, low-contrast secondary text (#555), minimal borders (#e5e5e5), and CSS-only hover state transitions.

---

## Specs Implemented

### 1. Header — 64px fixed top bar
- Fixed position, top 0, full width
- Background: `#ffffff` with `1px solid #e5e5e5` bottom border
- Left: `book-header-logo` — Georgia serif, 17px, bold ("Elysium")
- Right: nav link "School" + menu button (40×40px, circular, border #e5e5e5)
- Navigation link has `color: #000000` transition on hover to `#555555`
- Menu button transitions border → `#555555`, background → `#f9f9f9`

### 2. Grid Layout — 1120px max, 320px sidebar
- Container: `display: flex; justify-content: center; padding-top: 64px`
- Grid: `max-width: 1120px; grid-template-columns: 320px 1fr`
- Sidebar: `border-right: 1px solid #e5e5e5`, padded 32px 24px
- Main content: `padding: 40px 0 40px 60px`

### 3. Book Cover — 200×300px
- Exact dimensions: `width: 200px; height: 300px`
- Box shadow: `0 4px 12px rgba(0,0,0,0.15)`, border-radius 4px
- Dark gradient fill (navy): `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`
- Hover: shadow lifts to `0 8px 24px rgba(0,0,0,0.20)`, translates -2px on Y
- Label: Georgia serif, 20px, bold, white, centered with padding

### 4. Sidebar Buttons — 40px height, full pill (20px radius)
- `height: 40px; border-radius: 20px` (full pill — no inheritance from prior `9999px` Tailwind pattern)
- Border: `1px solid #e5e5e5`
- Background: `#ffffff`
- Font: Inter 14px, weight 600, color `#000000`
- Hover: `background-color: #f3f3f3; border-color: #c0c0c0; transition: 0.15s ease`
- Active: `background-color: #ebebeb`
- Badge: `#007AFF` pill on "School" button (NEW)
- All transitions via CSS class (no longer inline JS handlers)

### 5. List Items — 48px height
- Used in chapter `chapter-list` container (`border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden`)
- Each `chapter-list-item`: `height: 48px; padding: 0 16px`
- Font: Inter 14px, weight 500, color `#000000`
- Left arrow icon ↗ in `#555555` (secondary color)
- Hover: `background-color: #f9f9f9` via CSS (`transition: background-color 0.15s ease`)
- Active: `background-color: #f0f0f0`
- Separating borders via `.chapter-list-item + .chapter-list-item { border-top: 1px solid #e5e5e5 }`

### 6. Color — Secondary Text #555555
- Applied consistently: breadcrumb text, list arrow icons, nav link hover, description text
- `#000000` = primary (headings, buttons)
- `#555555` = secondary (supporting text, icons)
- `#e5e5e5` = borders/dividers
- `#f9f9f9` = subtle hover/selected backgrounds

### 7. Hover States — CSS-only
- All hover states defined as CSS classes in `globals.css`
- Removed all `onMouseEnter`/`onMouseLeave` inline JS handlers
- Replaced with `:hover` pseudo-classes via `.sidebar-btn:hover`, `.chapter-list-item:hover`, `.chapter-section-header:hover`, `.book-cover:hover`

---

## Files Changed

| File | Action | Summary |
|------|--------|---------|
| `app/globals.css` | Rewrite | Complete CSS class system: layout, header, cover, buttons, list items, hover states |
| `app/page.tsx` | Rewrite | Home page using CSS classes; removed JS hover handlers; deduplicated sidebar constant |
| `app/[slug]/page.tsx` | Rewrite | Chapter page using same CSS class system; consistent header/sidebar/content |

---

## Remaining / Suggested Next Steps

1. **Menu button functionality** — The ☰ button currently does nothing. Add a drawer/overlay in the future if needed.
2. **Submenu** — Chapter section headers currently link directly to the first sub-item. In TNS, the section header triggers a submenu reveal. Consider implementing an inline chapter submenu (expand/collapse) for a more progressive feel.
3. **Active state** — Highlight the current chapter in the sidebar and in chapter lists (e.g., `background: #f9f9f9`) using `usePathname()`.
4. **Mobile responsiveness** — Single-column stack below 768px (collapse sidebar, show hamburger).
5. **Content pages** — Only `/preamble` has authored body content so far. Remaining 32 chapters show "Content coming soon."
6. **Real book cover image** — Replace the CSS gradient placeholder with an actual cover image (SVG or PNG at 2× for retina).
7. **Typography Polish** — Body text uses Inter at 15px/1.6. TNS uses Georgia for chapter titles (~36px) and slightly smaller body text. The chapter titles already use Georgia. Consider `<article>` semantics for the reading area.

---

*Subagent task complete. Briefing written to `/tmp/ebook/briefing.md`.*
