function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Vakeiro" && password === "123456") {
    document.getElementById("login").style.display = "none";
    document.getElementById("mensagem").style.display = "block";

    const mensagem = `
    🎮 VAKEIRO LOGADO COM SUCESSO 🎮

    Ele é streamer, é lenda, é o terror das ranqueadas!
    Carisma de sobra, mira afiada, humildade no sangue.
    Todo mundo respeita o VAKEIRO 💚
    
    Se tá ao vivo, para tudo e assiste — o entretenimento é garantido.
    Esse é o VAKEIRO: talento puro, zoeira controlada, e coração gigante.
    
    #RESPEITAOHOMEM
    `;
    
    typeText(mensagem);
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
  }, 40);
}
