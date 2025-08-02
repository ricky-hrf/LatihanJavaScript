function getData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);
    } else {
      callback("gagal muat data", null);
    }
  };

  xhr.onerror = function () {
    callback("Terjadi error jaringan", null);
  };

  xhr.send();
}

let container = document.querySelector(".container");
getData("data/data.json", function (error, data) {
  if (error) {
    console.error(error);
    return;
  }
  data.forEach(product => {
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
})