const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];

if ("IntersectionObserver" in window && sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((a) =>
        a.classList.toggle("is-active", a.getAttribute("href") === `#${visible.target.id}`)
      );
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

const dialog = document.querySelector(".lightbox");
const dialogImg = dialog?.querySelector("img");

document.querySelectorAll("[data-full]").forEach((btn) => {
  btn.addEventListener("click", () => {
    dialogImg.src = btn.dataset.full;
    dialogImg.alt = btn.querySelector("img")?.alt ?? "";
    dialog.showModal();
  });
});

dialog?.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
