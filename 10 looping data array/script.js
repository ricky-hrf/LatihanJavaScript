let products = [
  {
    "nama": "Laptop",
    "harga": 7500000,
    "stok": 5,
    "gambar": "gambar/babi.jpg"
  },
  {
    "nama": "Charger",
    "harga": 250000,
    "stok": 46,
    "gambar": "gambar/babi.jpg"
  },
  {
    "nama": "Mouse",
    "harga": 45000,
    "stok": 15,
    "gambar": "gambar/babi.jpg"
  },
  {
    "nama": "hp",
    "harga": 4500000,
    "stok": 12,
    "gambar": "gambar/babi.jpg"
  }
]
let container = document.querySelector(".container");
products.forEach(product => {
  let card = document.createElement("div");
  card.className = "card";
  container.appendChild(card)
  let cardTop = document.createElement("div");
  cardTop.className = "cardTop";
  card.appendChild(cardTop)
  let gambar = document.createElement("img");
  gambar.src = product["gambar"]
  gambar.alt = product["nama"]
  cardTop.appendChild(gambar)
  let cardMain = document.createElement("div");
  cardMain.className = "cardMain";
  let spanNama = document.createElement("span");
  spanNama.innerHTML = product["nama"]
  cardMain.appendChild(spanNama)
  let spanHarga = document.createElement("span");
  spanHarga.innerHTML = `Rp ${product["harga"].toLocaleString("id-ID")
}`
  cardMain.appendChild(spanHarga)
  card.appendChild(cardMain);
  let cardFooter = document.createElement("div");
  card.appendChild(cardFooter)
  let button = document.createElement("button");
  button.innerHTML = "Beli";
  cardFooter.appendChild(button);
});