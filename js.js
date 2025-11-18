document.addEventListener("DOMContentLoaded", () => {
  var butt = document.getElementById("button");
  var block = document.createElement("div");
  var bacund = document.createElement("div");

  butt.addEventListener("click", () => {

    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var mess = document.getElementById("mess").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name != "" && emailRegex.test(mail) ) {
      block.setAttribute("class", "ans");
      bacund.setAttribute("class", "bg")
      block.innerHTML = `
      <p>ДАННЫЕ</p>
      <p>Имя: <span>${name}</span></p>

      <p>Почта: <span>${mail}</span></p>

      <p>Сообщение: <span>${mess}</span></p>

      `;
      document.body.appendChild(block);
      document.body.appendChild(bacund);
    }
    else if (emailRegex.test(mail) == false) {
      alert("Неверно введена почта");
    }
    else if (name === "") {
      alert("Имя не введено");
    }
  });
  bacund.addEventListener("click", () => {
    document.body.removeChild(bacund);
    document.body.removeChild(block);
  });
});
