# Logic Lab accessibility review

Reviewed 19 October 2026 against [WCAG 2.2, levels A and AA](https://www.w3.org/TR/WCAG22/), for the three main session views and the separate learning-materials page. The design is primarily black and white, with Exeter Dark Green (`#003c3c`) drawn from the [University’s brand guidelines](https://brand.exeter.ac.uk/uoe.pdf).

## Checks performed

- axe-core audits on every page at 1440px, 390px and 320px, using WCAG 2.0 A/AA, 2.1 A/AA, 2.2 AA and best-practice rules: **zero reported violations**. The embedded PDF viewer produces a `frame-tested` result requiring manual review; the complete HTML text alternative remains available.
- Tab and Shift+Tab navigation, visible focus on every link and no keyboard traps. The first focused element is the skip link; activating it focuses the main content.
- 200% text enlargement and WCAG text-spacing overrides on every page. Also tested both settings together at 320px, checking individual text elements for horizontal overflow.
- 320px reflow, desktop, mobile and landscape layouts, with no horizontal page scrolling.
- Every standalone navigation/control target is at least 24 × 24 CSS pixels, with a minimum height of 44px. Inline text links use the WCAG inline-link exception.
- Chrome’s accessibility tree exposes a banner, named navigation, main and footer landmark; each visible view has one level-one heading and a logical heading hierarchy. Inactive tab panels are hidden from display and assistive technology.
- Visual inspection of desktop and mobile screenshots. Main content uses real text and semantic HTML. The supplied logo has an appropriate alternative name; the worksheet image has a full HTML text alternative.

Generated audit snapshots and browser screenshots are local verification artifacts and are not included in the repository.

## Contrast

| Foreground / background                                               |   Ratio |
| --------------------------------------------------------------------- | ------: |
| Main text (`#18231f`) / white                                         | 16.17:1 |
| Secondary text (`#505d57`) / white                                    |  6.90:1 |
| Secondary text / panel grey (`#f5f8f6`)                               |  6.45:1 |
| White hero and active-navigation text / Exeter Dark Green (`#003c3c`) | 12.27:1 |
| Exeter Dark Green links / white                                       | 12.27:1 |
| Green button borders / white                                          | 12.27:1 |
| Navigation labels (`#33413a`) / inactive tab grey (`#f0f3f1`)         |  9.60:1 |

Text combinations exceed the 4.5:1 AA normal-text threshold. Essential button borders and active-navigation indicators exceed 3:1. Keyboard focus uses a 3px black outline with a white surround; this stays visible on both white and green backgrounds. Neutral panel outlines and the bright-green hero stripe are decorative and do not convey essential information.

## Applicable criteria and implementation

| Criteria              | Review                                                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1.1                 | The supplied logo names its home link. The worksheet preview has descriptive alternative text, with a full text alternative on the learning-materials page. The favicon is decorative. |
| 1.3.1–1.3.3           | Semantic headings, paragraphs, lists and landmarks; DOM order follows reading order. Instructions do not depend on colour, shape or location.                                          |
| 1.3.4                 | Portrait and landscape layouts supported.                                                                                                                                              |
| 1.4.1                 | Links are underlined or identifiable navigation/controls. The current page has both a border/weight change and `aria-current`. Colour is never the only indicator.                     |
| 1.4.3                 | Contrast ratios above verified by calculation and axe-core.                                                                                                                            |
| 1.4.4, 1.4.10, 1.4.12 | Relative text sizing, a single reading column, wrapping navigation and responsive spacing. Enlargement, reflow and spacing checks passed.                                              |
| 1.4.5                 | The logo uses the logo exception. The worksheet image and presentation download have a full equivalent HTML text version. Core page content is real text.                              |
| 1.4.11                | Contrast checked for control borders, active navigation and focus indicators.                                                                                                          |
| 2.1.1–2.1.2           | Links work by keyboard. The tabs support Left/Right arrows, Home/End, Enter and Space, with one tab in the Tab sequence. Skip-link activation and forward keyboard focus were checked. |
| 2.4.1–2.4.4           | Working skip link, unique descriptive titles, logical focus order and links with purpose identifiable from their names/context.                                                        |
| 2.4.5                 | Pages are available from the shared navigation and contextual session links.                                                                                                           |
| 2.4.6–2.4.7           | Descriptive headings and labels, and visible keyboard focus.                                                                                                                           |
| 2.4.11                | No sticky header, overlay or modal can obscure focused controls. Keyboard focus was checked within the viewport.                                                                       |
| 2.5.2                 | Native link activation occurs on click/release rather than pointer-down.                                                                                                               |
| 2.5.3                 | Link names use their visible text; an overriding brand label was removed after the audit identified a mismatch.                                                                        |
| 2.5.8                 | Standalone targets satisfy minimum dimensions; inline prose links are exempt.                                                                                                          |
| 3.1.1–3.1.2           | Each page declares `en-GB`; no passages in a different language.                                                                                                                       |
| 3.2.1, 3.2.3–3.2.4    | Focusing a link does not navigate. Navigation order, names and behaviour remain consistent.                                                                                            |
| 4.1.2                 | Enhanced tabs expose tablist/tab/tabpanel roles, selected states, controls/label relationships and roving focus. Native links remain the fallback. Accessibility-tree checks passed.   |

## Features absent from this website

The remaining A/AA criteria have no applicable trigger in these static pages: prerecorded/live media (1.2.1–1.2.5); input-purpose fields (1.3.5); audio (1.4.2); hover/focus disclosures (1.4.13); character shortcuts (2.1.4); time limits or automatic movement (2.2.1–2.2.2); flashing (2.3.1); custom gestures or device-motion interaction (2.5.1, 2.5.4); dragging (2.5.7); input-triggered context changes (3.2.2); repeated help mechanisms (3.2.6); input validation or consequential submissions (3.3.1–3.3.4); repeated data entry (3.3.7); authentication (3.3.8); and dynamically updated status messages (4.1.3).

## Scope and limits

No WCAG 2.2 A/AA failures were identified in the checks above. This is an implementation review, not independent certification of full conformance. Actual use with VoiceOver, NVDA or JAWS has not been tested; the assistive-technology check inspected the browser accessibility tree. The supplied PDF is untagged and the worksheet is a raster image; their complete presentation text and worksheet prompts are available in HTML at `website/dist/learning-resources.html`. The original downloads have not been remediated or independently audited. External sites, including the presenter profile, Research Coding Community and Community Fair, are outside this review.

Recheck accessibility when changing colours, layouts, navigation or adding interactive features. The survey workbook remains outside the public directory.

## Session tabs, supplied assets and downloads

The main view is About the Lab, followed by 20 August and 15 October. All three views are included in each main document; inactive panels are hidden. JavaScript enhances native links into tabs and updates the URL, title, description and selected state. Browser back/forward navigation and reloading a selected session were tested. Direct page links and navigation without JavaScript were also tested.

The supplied logo is displayed without altering its pixels or colours. Its surrounding blank space is framed with CSS. Downloaded presentation and worksheet bytes were checked against the local resource files; the worksheet preview was scrolled into view and decoded successfully.

The October resource text includes all presentation topics, a description and attribution for the desire-path photograph, all worksheet rating scales, the learning-preference descriptions and reflection prompts. The preview is supplementary to that HTML alternative. No participant information is collected or stored.

## Embedded October presentation

The presentation is now embedded in a titled iframe, with links to open the PDF, read its web-text equivalent or skip the viewer. Chrome rendered the supplied slides successfully. The original untagged PDF and browser-native PDF controls have not been independently tested with assistive technology; automated audits flag the viewer for manual review. The reusable Top Trumps printout remains available as an unchanged PNG download and as HTML prompts. Published invitation figures are 23 acceptances and 18 tentative responses; no October attendance total is stated.

## DisCouRSE acknowledgement

The funding acknowledgement appears once in the footer of every page and remains available when switching session tabs. The notice uses readable secondary text and an underlined inline link. The network’s unchanged official SVG logo has alternative text and appears to the left of the vertically centred acknowledgement, with the existing footer links underneath. There is no separate funding heading or content section. Desktop and 320px checks on all four pages confirmed logo rendering, reflow and enlarged text; eight automated accessibility audits reported zero violations.
