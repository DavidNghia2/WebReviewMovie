# CineScope Review — Project Context

Static multi-page movie review site. No build step. Edit HTML/CSS/JS directly, then open the file in a browser.

## Pages

- `index.html` — home with hero slider, trending, top-rated, latest reviews, favorites
- `popular.html` — full movie library with search/filter/sort
- `action.html` — action genre filter
- `drama.html` — drama genre filter
- `movie.html` — full spoiler story + owner review for one movie (`?id=...`)
- `reviews.html` — write and browse user reviews
- `contact.html` — contact form

Shared header/footer across all pages. Each page is a standalone HTML file — no SPA router.

## JS Architecture (DO NOT MODIFY unless asked)

`js/script.js` is the single runtime. It contains:
- Inline movie data (`MOVIES` array, `MOVIE_PLOTS`, `OWNER_REVIEWS`, `SEEDED_REVIEWS`)
- DOM rendering functions that build cards, modals, reviews from data
- Event delegation on `document` for all interactions
- localStorage helpers

**Critical rule:** Never rename, remove, or restructure the `data-*` attributes and CSS classes that `script.js` queries. The JS is tightly coupled to these selectors.

## JS Selectors (DO NOT BREAK)

These `data-*` attributes are queried by `script.js`:

| Attribute | Used for |
|-----------|----------|
| `data-action` | click delegation: `details`, `favorite`, `rate`, `close-modal`, `delete-review`, `review-star` |
| `data-movie-id` | identifies which movie a button targets |
| `data-rating-value` | star rating value (1-5) |
| `data-review-star` | review form star value |
| `data-review-id` | delete review target |
| `data-page` | on `<body>` — identifies current page for active nav |
| `data-page-link` | on nav `<a>` — matched against `data-page` |
| `data-nav-toggle` | hamburger menu button |
| `data-nav` | the `<nav>` element to open/close |
| `data-theme-toggle` | dark/light toggle button |
| `data-theme-icon` | span inside toggle showing "Dark"/"Light" |
| `data-theme-symbol` | span for sun/moon icon |
| `data-slider` | hero slider stage container |
| `data-slide` | individual slide article |
| `data-slider-dot` | dot navigation button |
| `data-slider-action` | prev/next arrow |
| `data-render` | movie grid container — values: `home-popular`, `top-rated`, `popular`, `genre` |
| `data-genre` | on genre grids — e.g. `Action`, `Drama` |
| `data-movie-controls` | toolbar wrapper for filter inputs |
| `data-movie-search` | search input |
| `data-genre-filter` | genre `<select>` |
| `data-sort-select` | sort `<select>` |
| `data-favorite-filter` | favorites-only checkbox |
| `data-clear-filters` | clear all filters button |
| `data-results-count` | result count text |
| `data-count-scope` | scope for result count — `home` |
| `data-empty-state` | empty state message |
| `data-favorite-list` | favorites mini-list container |
| `data-favorites-empty` | empty favorites message |
| `data-rating-stars` | star rating group container |
| `data-favorite-btn` | favorite toggle button |
| `data-user-rating-label` | shows user's rating for a movie |
| `data-movie-image` | on `<img>` — used for fallback poster generation |
| `data-movie-detail` | on `<main>` of movie.html — triggers detail page init |
| `data-detail-hero` | hero section of movie detail page |
| `data-modal` | modal container |
| `data-modal-content` | modal inner content |
| `data-review-form` | review submission form |
| `data-review-name` | reviewer name input |
| `data-review-movie` | movie select in review form |
| `data-review-star-input` | star input container |
| `data-review-text` | review textarea |
| `data-review-list` | reviews list container |
| `data-review-filter` | filter reviews by movie |
| `data-review-movie` | movie select dropdown |
| `data-home-reviews` | home page latest reviews container |
| `data-home-reviews-empty` | empty state for home reviews |
| `data-contact-form` | contact form |
| `data-contact-status` | form status message |
| `data-stats` | stats strip — values: `home`, `popular`, `reviews` |
| `data-toast` | toast notification |

**CSS classes JS depends on:**
- `.is-active` — active nav link, active slider dot, active star, active favorite
- `.is-open` — mobile nav open state
- `.is-ready` — body class set after DOMContentLoaded (controls loading skeletons)
- `.modal-open` — body class when modal is visible
- `.has-image-fallback` — added when poster image fails to load
- `.ui-icon`, `.nav-icon`, `.button-icon`, `.label-icon`, `.toggle-icon`, `.stat-icon`, `.favorite-icon`, `.fact-icon`, `.quote-icon`, `.theme-symbol` — icon sizing/coloring
- `.review-feature`, `.review-thumb`, `.review-thumb-empty` — review card layout
- `.small-danger` — delete button style

## localStorage Keys

| Key | Purpose |
|-----|---------|
| `movieReviewFavorites` | Array of favorited movie IDs |
| `movieReviewRatings` | Object `{ movieId: rating }` |
| `movieReviewUserReviews` | Array of user-submitted review objects |
| `movieReviewContacts` | Array of contact form submissions |
| `movieReviewTheme` | `"dark"` or `"light"` |

## CSS Design System

All visual tokens are CSS custom properties on `:root`. Never hardcode colors — update the variable instead.

**Dark mode (default):**
- `--bg: #070b14` | `--bg-elevated: #0c1220` | `--bg-soft: #10192b`
- `--panel: rgba(14, 20, 34, 0.86)` | `--panel-strong: #131d31`
- `--text: #f5f7fb` | `--muted: #9aa6bd` | `--muted-strong: #c5cede`
- `--brand: #ff5a4f` (red) | `--accent: #16c98d` (green) | `--gold: #f5b942` (yellow)
- `--danger: #ff6679`

**Light mode (`:root[data-theme="light"]`):**
- `--bg: #f4f6fa` | `--panel: rgba(255,255,255,0.88)`
- `--text: #0f172a` | `--muted: #607089`
- `--brand: #e63f34` | `--accent: #0f9f6e` | `--gold: #c98e15`

**Spacing & sizing:**
- Radii: `--radius-sm: 12px`, `--radius-md: 18px`, `--radius-lg: 28px`
- Max content width: `--content: 1240px`
- Header height: `--header-height: 78px`
- Easing: `--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1)`

**Responsive breakpoints:**
- `1100px` — tablet: hamburger nav, 3-col grid, stacked layouts
- `860px` — small tablet: 2-col grid
- `700px` — mobile: 1-col everything, hidden brand text
- `460px` — small mobile: tighter padding

**Accessibility:**
- `prefers-reduced-motion: reduce` kills all animations
- `:focus-visible` uses accent-colored ring
- Skip-to-content link on every page (`<a class="skip-link">`)

## Images

Movie posters/backdrops come from TMDB (`image.tmdb.org/t/p/...`). If they fail, JS generates canvas-based fallbacks with seeded random patterns per movie palette. Each movie has a `palette: [dark, mid, bright]` array used for gradients.

## How to Work on This Project

**Editing:** Just edit the files. No build step, no package.json, no bundler.

**Preview:** Open any `.html` file directly in browser, or run a local server:
```bash
# Python
python -m http.server 3000

# Node (if installed)
npx serve .
```
Then open `http://localhost:3000`.

**Verification checklist after changes:**
1. Open `index.html` — slider rotates, nav works, theme toggle works
2. Navigate to each page — all render without console errors
3. Search/filter/sort on popular/action/drama pages
4. Click "View Details" — modal opens with correct data
5. Click "Full Story" — movie detail page loads
6. Submit a review — appears in list
7. Submit contact form — success message shows
8. Toggle dark/light — all pages update
9. Resize to mobile widths — hamburger menu, stacked layouts
10. Check browser console for JS errors

**Rules of thumb:**
- CSS changes are safe — just don't remove classes JS depends on
- HTML changes are safe — keep all `data-*` attributes and class names intact
- JS changes are risky — `script.js` is 2300+ lines of tightly coupled code
- When adding new features, prefer CSS-only solutions first
- New pages should follow the existing pattern: shared header/footer, `data-page` on body, `section-shell` wrapper
You are helping design a detailed implementation plan for the CineScope project at e:\Web.

The user has approved the following plan (summarized):

Sprint 1 — Polish foundation:
1. Fix review placeholder "Nguyen An" → generic name
2. Add meta description to all 7 HTML pages
3. Make contact info clickable (mailto, tel)
4. Standardize CSS/JS version query strings
5. Add button active states
6. Add theme color transition

Sprint 2 — Cinematic animation:
1. Scroll reveal with IntersectionObserver
2. Stagger card/review animation
3. Favorite heart pop animation
4. Mobile nav stagger
5. Modal close animation (scale out + backdrop fade)

Sprint 3 — Feature completeness:
1. Require star selection before review submit
2. Expand search to director/cast/genre/review
3. Improve movie detail not found fallback
4. Add local contact message viewer (optional)

The codebase structure:
- e:\Web\index.html
- e:\Web\popular.html
- e:\Web\action.html
- e:\Web\drama.html
- e:\Web\movie.html
- e:\Web\reviews.html
- e:\Web\contact.html
- e:\Web\css\styles.css (925 lines)
- e:\Web\js\script.js (2302 lines)

CRITICAL constraints from CLAUDE.md:
- Never rename, remove, or restructure `data-*` attributes that script.js queries
- Never remove CSS classes JS depends on (`.is-active`, `.is-open`, `.is-ready`, `.modal-open`, `.has-image-fallback`, etc.)
- JS changes are risky - script.js is 2300+ lines tightly coupled
- Prefer CSS-only solutions first
- All visual tokens are CSS custom properties on `:root` - never hardcode colors

Please produce a detailed step-by-step file-by-file implementation plan. For each step specify:
1. Which file(s) to modify
2. What to add/change
3. Any risks or constraints

Focus on safety - especially around JS changes since script.js is tightly coupled.