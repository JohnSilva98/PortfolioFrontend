document.addEventListener("DOMContentLoaded", function () {
  const userTitle = document.querySelector("#userTitle");
  const userName = document.querySelector(".userName");
  const userPhoto = document.querySelector("#usrPhoto");
  const infoIcons = document.querySelector(".info");
  const refreshbutton = document.querySelector(".refresh");
  const URL = "https://randomuser.me/api/?nat=BR,US,CN";

  refreshbutton.addEventListener("click", function () {
    location.reload();
  });

  async function callAPI() {
    try {
      const res = await fetch(URL);
      if (res.status === 200) {
        const data = await res.json();
        const user = data.results[0];
        console.log(user);
        // Cria um elemento de imagem e define o seu src
        let img = document.createElement("img");
        img.src = user.picture.large;
        // Limpa o conteúdo da div e adiciona a imagem
        userPhoto.innerHTML = ""; // Limpa qualquer conteúdo existente
        userPhoto.appendChild(img);
        userName.innerHTML = `${user.name.first} ${user.name.last}`;

        // Cria o conteúdo HTML
        let content = `
          <li data-title="My name is: " data-value=" ${user.name.first} ${user.name.last}" class="icon">
            <img src="icons/circle-user.svg" alt="" />
          </li>
          <li data-title="My email is: " data-value=" ${user.email}" class="icon">
            <img src="icons/mail.svg" alt="" />
          </li>
          <li data-title="My age is: " data-value=" ${user.dob.age} yrs" class="icon">
            <img src="icons/calendar.svg" alt="" />
          </li>
          <li data-title="My address is: " data-value=" ${user.location.city} ${user.location.country}" class="icon">
            <img src="icons/map-pin-house.svg" alt="" />
          </li>
          <li data-title="My phone is: " data-value=" ${user.cell}" class="icon">
            <img src="icons/phone.svg" alt="" />
          </li>
          <li data-title="My password is: " data-value=" ${user.login.password}" class="icon">
            <img src="icons/lock-keyhole.svg" alt="" />
          </li>
        `;

        // Adiciona o conteúdo HTML ao elemento infoIcons
        infoIcons.innerHTML = content;

        // Adiciona os ouvintes de eventos `mouseover` após o conteúdo ser inserido
        const icons = document.querySelectorAll(".icon");
        icons.forEach(function (item) {
          item.addEventListener("mouseover", function () {
            let titleData = item.getAttribute("data-title");
            let dataValue = item.getAttribute("data-value");
            userTitle.innerHTML = titleData;
            userName.innerHTML = dataValue;

            let activeClass = document.querySelectorAll(".active");
            activeClass.forEach(function (active_) {
              active_.classList.remove("active");
            });
            item.classList.add("active");
          });
        });
      } else {
        console.error("Erro na requisição:", res.status);
      }
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  }

  callAPI();
});
