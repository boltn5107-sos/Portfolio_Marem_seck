const root = document.documentElement;

export function initTheme(): void {
  // L'état de base sombre est posé dans le <head> (avant le paint).
  // Ici on synchronise le bouton.
  const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  if (!toggle) return;

  const sync = () => {
    const dark = root.classList.contains("dark");
    toggle.setAttribute("aria-pressed", String(dark));
    toggle.setAttribute(
      "aria-label",
      dark ? "Passer au mode clair" : "Passer au mode sombre",
    );
  };
  sync();

  toggle.addEventListener("click", () => {
    const dark = root.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
    sync();
  });
}

export function initMobileMenu(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-menu-panel]");
  const iconOpen = button?.querySelector("[data-icon-open]");
  const iconClose = button?.querySelector("[data-icon-close]");

  if (!button || !panel) return;

  const sync = () => {
    const open = panel.classList.contains("is-open");
    button.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
    iconOpen?.classList.toggle("hidden", open);
    iconClose?.classList.toggle("hidden", !open);
  };
  sync();

  button.addEventListener("click", () => {
    panel.classList.toggle("is-open");
    sync();
  });

  panel.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest("a");
    if (target) {
      panel.classList.remove("is-open");
      sync();
    }
  });
}

export function initScrollSpy(): void {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section[id]"),
  );
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a[data-spy]"),
  );
  if (!sections.length || !links.length) return;

  const map = new Map<string, HTMLAnchorElement>();
  links.forEach((l) => {
    const id = l.getAttribute("href")?.slice(1);
    if (id) map.set(id, l);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove("active"));
        const link = map.get(entry.target.id);
        link?.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  sections.forEach((s) => observer.observe(s));
}

export function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!items.length) return;

  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  items.forEach((el) => observer.observe(el));
}

export function initFilter(): void {
  const container = document.querySelector<HTMLElement>("[data-filter-root]");
  if (!container) return;

  const buttons = Array.from(
    container.querySelectorAll<HTMLButtonElement>("[data-filter-btn]"),
  );
  const cards = Array.from(
    container.querySelectorAll<HTMLElement>("[data-filter-card]"),
  );

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter ?? "all";
      buttons.forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });

      cards.forEach((card) => {
        const cats = (card.dataset.filterCard ?? "").split(" ");
        const match = filter === "all" || cats.includes(filter);
        card.classList.toggle("is-hidden", !match);
        if (match && !card.classList.contains("in")) card.classList.add("in");
      });
    });
  });
}

export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form) return;
  const email = form.dataset.email ?? "";
  const status = form.querySelector<HTMLElement>("[data-form-status]");

  const setError = (name: string, message: string) => {
    const field = form.querySelector<HTMLElement>(`[data-error="${name}"]`);
    if (field) field.textContent = message;
  };
  const clearErrors = () => {
    form.querySelectorAll("[data-error]").forEach((el) => (el.textContent = ""));
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    // Anti-spam : champ piège rempli par les robots.
    const honeypot = form.querySelector<HTMLInputElement>(".hpot");
    if (honeypot?.value) {
      if (status) {
        status.textContent = "Message envoyé avec succès.";
        status.className = "ok";
      }
      form.reset();
      return;
    }

    const name = form.elements.namedItem("name") as HTMLInputElement;
    const sender = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement;

    let valid = true;
    if (!name.value.trim()) {
      setError("name", "Merci d'indiquer votre nom.");
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(sender.value.trim())) {
      setError("email", "Merci d'indiquer un email valide.");
      valid = false;
    }
    if (message.value.trim().length < 10) {
      setError(
        "message",
        "Votre message doit contenir au moins 10 caractères.",
      );
      valid = false;
    }
    if (!valid) return;

    const subject = `Contact portfolio — ${name.value.trim()}`;
    const body =
      `Nom : ${name.value.trim()}\n` +
      `Email : ${sender.value.trim()}\n\n` +
      message.value.trim();

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    if (status) {
      status.textContent =
        "Votre client de messagerie s'est ouvert : il ne reste qu'à envoyer l'email.";
      status.className = "ok";
    }
  });
}

let initialized = false;

function initAll(): void {
  if (initialized) return;
  initialized = true;
  initTheme();
  initMobileMenu();
  initScrollSpy();
  initReveal();
  initFilter();
  initContactForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll, { once: true });
} else {
  initAll();
}

document.addEventListener("astro:page-load", initAll);