
const button = document.getElementById("themeToggle");


if (button) {
  
  button.onclick = function () {
   
    if (document.body.style.backgroundColor === "pink") {
      document.body.style.backgroundColor = "white"; // Fundo branco
    } else {
      document.body.style.backgroundColor = "pink"; // Fundo rosa
    }
  };
} else {
  console.error("Botão com id 'themeToggle' não foi encontrado.");
}

