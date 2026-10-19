# The Logic Lab

The website for the Logic Lab, founded and led by Cat Russon with support from the University of Exeter Research Coding Community.

The site introduces the Lab and records its sessions on 20 August and 15 October 2026. It includes the October presentation and reusable Learning Profile Top Trumps printouts.

## Repository layout

```text
website/dist/
  index.html                    About the Lab
  august-2026.html              August pilot session
  next-session.html            October session
  learning-resources.html      Text version of the learning materials
  assets/
    css/styles.css             Shared styling
    js/site.js                 Accessible tabs and browser history
    images/logic-lab-logo.png   Supplied logo
  resources/2026-10-15/
    how-do-you-learn.pdf
    learning-profile-top-trumps.png
docs/
  accessibility.md             Accessibility checks and review limits
```

There are no dependencies to install and no build step. Only `website/dist` is intended to be served as the website.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8123 --bind 127.0.0.1 --directory website/dist
```

Open <http://localhost:8123/>. Stop the server with Ctrl+C.

The static files also work under a repository subpath on GitHub Pages. Publish `website/dist`, including its asset and resource directories, when configuring hosting.

## Navigation and editing

About the Lab opens first. The main tabs switch between About, August and October. Left and Right arrows cycle through them; Home and End select the first and last tab. Each view has its own URL, and browser back and forward navigation work. Without JavaScript, the links open the corresponding HTML documents.

The three main entry documents contain matching session panels, with different initial visibility, titles and selected navigation. Keep shared panel content in sync when editing. Tab IDs, panel IDs and `data-view` values connect the controls to their content. The October URL retains `next-session.html` so earlier links continue to work.

The files in `resources/2026-10-15` are the supplied presentation and worksheet. The logo is kept in its original form in `assets/images`; its surrounding blank space is framed with CSS. No duplicate originals are needed in the repository root.

## Content and privacy

The August pilot used AI as a starting point to explore what people wanted from future Labs. Its invitation received 31 acceptances and 17 tentative responses. Six people completed the feedback survey, including four attendees. The site includes only the anonymous summary.

The October session covered learning and pedagogy and included the Top Trumps activity. Its invitation received 23 acceptances and 18 tentative responses. Invitation figures are not attendance totals.

The raw feedback workbook is retained locally in the ignored `.private/feedback` directory. It contains respondent information and is not part of the website or Git history. Do not add it to the repository.

The [Community Fair](https://research-coding-community.github.io/Community_Fair/) inspired the event overview, activities and review structure. The site links to the wider [Research Coding Community](https://research-coding-community.github.io/Research_Coding_Community/).

## Accessibility

See [the accessibility review](docs/accessibility.md) for verification and its limits. The supplied PDF is untagged and the worksheet is an image, so the site also provides their content as HTML text.
