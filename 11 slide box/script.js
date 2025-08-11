const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showCard(index) {
  for (let i = 0; i < cards.length; i++) {
    if (i === index) {
      cards[i].classList.add('active');
    } else {
      cards[i].classList.remove('active');
    }
  }
}

prevBtn.addEventListener('click', function () {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }
  showCard(currentIndex);
});

nextBtn.addEventListener('click', function () {
  currentIndex = currentIndex + 1;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  showCard(currentIndex);
});

showCard(currentIndex); // Tampilkan pertama kali

// Auto slide setiap 5 detik
setInterval(function () {
  currentIndex = currentIndex + 1;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  showCard(currentIndex);
}, 10000);

const tema = document.getElementById('tema')
tema.addEventListener('click', function (event) {
  event.preventDefault()
  document.body.classList.toggle('gelap');
})

const input = document.getElementById('inputField');
const hasil = document.getElementById('result');
input.addEventListener('keydown', function (event) {
  let ini = event.key;
  hasil.textContent = ini;
})