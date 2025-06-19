document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Username dan password yang sudah ditentukan
  const validUsername = "admin";
  const validPassword = "123456";

  // Ambil input user
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validasi login
  if (username === validUsername && password === validPassword) {
    // Redirect ke halaman website kamu
    // window.location.href = "";
    alert("BERHASIL LOGIN")
  } else {
    // Tampilkan pesan error
    document.getElementById("error").textContent = "Username atau password salah!";
  }
});
