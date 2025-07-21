let input = document.getElementById("searchInput");
let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  let filter = searchInput.value.toLowerCase();
  let cards = document.querySelectorAll("#produk #card");
  cards.forEach(function (card) {
    let title = card.querySelector("h2").textContent.toLowerCase();
    if (title.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});