function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Vakeiro" && password === "123456") {
    document.getElementById("login").style.display = "none";
    document.getElementById("mensagem").style.display = "block";
    typeText("O Vakeiro é viado e todo mundo sabe 😎");
  } else {
    document.getElementById("error").innerText = "Usuário ou senha incorretos!";
  }
}

function typeText(text) {
  const el = document.getElementById("typedText");
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 100);
}
