const userLogIn = document.querySelector(".nav__link-login"),
  userSignIn = document.querySelector(".nav__link-signup"),
  buttonBurger = document.querySelector("#burger-input"),
  inputUser = document.querySelectorAll(".lf--input"),
  modalUserLogin = document.querySelector(".modal-user__login"),
  modalUserSignup = document.querySelector(".modal-user__signup"),
  catalogRecipes = document.querySelector(".browse-by-cuisines__content"),
  browseCuisines = document.querySelector(
    ".browse-by-cuisines__footer-container"
  ),
  navItemMenu = document.querySelector("#menu");

const recipes = {
  ITALIAN: {
    nameRecipes: "ITALIAN",
    countRecipes: 327,
    src: "images/browseByCuisines/Italian.png",
  },
  INDIAN: {
    nameRecipes: "INDIAN",
    countRecipes: 856,
    src: "images/browseByCuisines/Indian.png",
  },
  FRENCH: {
    nameRecipes: "FRENCH",
    countRecipes: 27,
    src: "images/browseByCuisines/French.png",
  },
  STEAKHOUSE: {
    nameRecipes: "STEAKHOUSE",
    countRecipes: 731,
    src: "images/browseByCuisines/Steakhouse.png",
  },
  SEAFOOD: {
    nameRecipes: "SEAFOOD",
    countRecipes: 731,
    src: "images/browseByCuisines/Italian.png",
  },
  SUSHI: {
    nameRecipes: "SUSHI",
    countRecipes: 237,
    src: "images/browseByCuisines/Sushi.png",
  },
  MEXICAN: {
    nameRecipes: "MEXICAN",
    countRecipes: 529,
    src: "images/browseByCuisines/Mexican.png",
  },
  CHINESE: {
    nameRecipes: "CHINESE",
    countRecipes: 145,
    src: "images/browseByCuisines/Chinese.png",
  },
  PIZZA: {
    nameRecipes: "PIZZA",
    countRecipes: 327,
    src: "images/browseByCuisines/Pizza.png",
  },
  AMERICAN: {
    nameRecipes: "AMERICAN",
    countRecipes: 1437,
    src: "images/browseByCuisines/American.png",
  },
};

function addingCuisines(nameRecipes, countRecipes, src) {
  catalogRecipes.innerHTML += `
      <div class="cuisines">
        <img
          src="${src}"
          alt="${nameRecipes}"
          class="cuisines__img"
        />
        <p class="recipes-count">${countRecipes} Recipes</p>
        <p class="recipes-name">${nameRecipes}</p>
      </div>
    `;
}

function drawRecipes() {
  for (let key in recipes) {
    let nameRecipes, countRecipes, src;
    nameRecipes = recipes[key].nameRecipes;
    countRecipes = recipes[key].countRecipes;
    src = recipes[key].src;
    addingCuisines(nameRecipes, countRecipes, src);
  }
}

drawRecipes();