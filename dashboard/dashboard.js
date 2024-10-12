const cardContainer = document.getElementById("card-container");

function createCard(card) {
  return `
    <div class="d-flex flex-column mb-2 col-12 col-md-6 col-lg-4 card-container">
      <div class="mb-3">
        <img src="../image/ellipse.svg" />
        <span class="card-title">${card.title}</span>
      </div>

      <div class="borda"></div>

      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-lg-5">
          <h5 class="card-sub-title">COMPRA</h5>
          <div class="d-flex align-items-center">
            <img class="text-gap" src="../image/ellipse.svg" />
            <span>${card.buyPlatform}</span>
          </div>
          <p class="card-text-price">${card.buyPrice}</p>
        </div>

        <div class="col-12 col-md-2 col-lg-2 d-flex justify-content-center">
          <img src="../image/arrow-white.svg" />
        </div>

        <div class="col-12 col-md-5 col-lg-5 mb-3">
          <h5 class="card-sub-title text-right">VENDA</h5>
          <div class="d-flex align-items-center justify-content-end">
            <span class="text-gap">${card.sellPlatform}</span>
            <img src="../image/ellipse.svg" />
          </div>
          <p class="text-right card-text-price">${card.sellPrice}</p>
        </div>
      </div>

      <div class="borda"></div>

      <div class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <p class="card-sub-title">SPREAD</p>
          <p class="card-text-percentage">${card.spread}</p>
        </div>
        <div class="col-12 col-md-6 col-lg-6 text-right">
          <p class="card-sub-title">TAXAS</p>
          <p class="card-text-tax">${card.fees}</p>
        </div>
      </div>

      <button>Order book</button>
    </div>
  `;
}

async function loadCardData() {
  try {
    const response = await fetch("cardData.json");
    const cardData = await response.json();
    cardData.forEach((card) => {
      cardContainer.innerHTML += createCard(card);
    });
  } catch (error) {
    console.error("Erro ao carregar os dados dos cards:", error);
  }
}

loadCardData();

function logout() {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "../index.html";
}

document.getElementById("logout-button").addEventListener("click", function () {
  logout();
});

document.getElementById("logout-icon").addEventListener("click", function () {
  logout();
});

document.getElementById("profile-link").addEventListener("click", function () {
  const nameModal = new bootstrap.Modal(document.getElementById("nameModal"));
  nameModal.show();
});

document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newName = document.getElementById("newName").value;
    if (newName) {
      document.querySelector(
        ".profile-info h3"
      ).textContent = `Olá, ${newName}!`;
      const nameModal = bootstrap.Modal.getInstance(
        document.getElementById("nameModal")
      );
      nameModal.hide();
    }
  });
