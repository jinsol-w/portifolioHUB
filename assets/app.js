const cards = document.querySelectorAll("[data-copy]");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const value = card.getAttribute("data-copy");
    if (!navigator.clipboard || !value) return;
    navigator.clipboard.writeText(value).catch(() => {});
  });
});
