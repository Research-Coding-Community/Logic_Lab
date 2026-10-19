/* Native links are the fallback. With JavaScript, all three views become tabs. */
(() => {
  const panels = [...document.querySelectorAll("[data-panel]")];
  if (!panels.length) return;

  const tabs = [...document.querySelectorAll(".page-nav [data-view]")];
  const routes = {
    about: { file: "index.html", title: "About the Lab | Logic Lab" },
    august: {
      file: "august-2026.html",
      title: "20 August 2026 · AI in Research and the Workplace | Logic Lab",
    },
    october: {
      file: "next-session.html",
      title: "15 October 2026 · How Do You Learn? | Logic Lab",
    },
  };
  const main = document.querySelector("#main");
  const tablist = document.querySelector(".page-nav");
  const descriptions = Object.fromEntries(
    panels.map((panel) => [
      panel.dataset.panel,
      panel.querySelector(".lead")?.textContent ||
        panel.querySelector("h1")?.textContent ||
        "",
    ]),
  );
  let active = panels.find((panel) => !panel.hidden).dataset.panel;

  tablist.setAttribute("role", "tablist");
  tablist.setAttribute("aria-label", "Logic Lab pages");
  tabs.forEach((tab) => {
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `panel-${tab.dataset.view}`);
  });
  panels.forEach((panel) => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `tab-${panel.dataset.panel}`);
    panel.tabIndex = 0;
  });

  function select(view, { push = false, focus = null, anchor = "" } = {}) {
    if (!routes[view]) return;
    const changed = active !== view;
    active = view;
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== view;
    });
    tabs.forEach((tab) => {
      const selected = tab.dataset.view === view;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    });
    document.title = routes[view].title;
    document.querySelector('meta[name="description"]').content =
      descriptions[view];
    if (push && (changed || anchor)) {
      const url = new URL(routes[view].file, window.location.href);
      url.hash = anchor;
      window.history.pushState({ view }, "", url);
    }
    if (focus === "tab")
      tabs
        .find((tab) => tab.dataset.view === view)
        .focus({ preventScroll: true });
    if (focus === "main") main.focus({ preventScroll: true });
    const target = anchor ? document.getElementById(anchor) : null;
    if (target) target.scrollIntoView();
    else if (changed) window.scrollTo(0, 0);
  }
  select(active);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-view]");
    if (
      !link ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const view = link.dataset.view;
    if (!routes[view]) return;
    event.preventDefault();
    select(view, {
      push: true,
      focus: link.getAttribute("role") === "tab" ? "tab" : "main",
      anchor: link.dataset.anchor || "",
    });
  });

  tablist.addEventListener("keydown", (event) => {
    const current = tabs.indexOf(event.target);
    if (current < 0) return;
    let next;
    if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
    else if (event.key === "ArrowLeft")
      next = (current + tabs.length - 1) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else if (event.key === " ") next = current;
    else return;
    event.preventDefault();
    select(tabs[next].dataset.view, { push: true, focus: "tab" });
  });

  window.addEventListener("popstate", () => {
    const file = window.location.pathname.split("/").pop() || "index.html";
    const view =
      Object.keys(routes).find((key) => routes[key].file === file) || "about";
    select(view, { focus: "tab", anchor: window.location.hash.slice(1) });
  });
})();
