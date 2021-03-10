const totalRecipes = {
  RecipesAvailable: {
    name: "Recipes Available",
    count: 23567,
  },
  ActiveUsers: {
    name: "Active Users",
    count: 431729,
  },
  PositiveReviews: {
    name: "Positive Reviews",
    count: 892173,
  },
  PhotosAndVideos: {
    name: "Photos & Videos",
    count: 56581,
  },
  SpicesAndHerbs: {
    name: "Spices and Herbs",
    count: 3182,
  },
};

function addingTotalRecipes(nameCategories, totaleRecipes, id) {
  browseCuisines.innerHTML += `
          <div class="total-recipes__body">
            <p id="out-${id}" class="total-recipes__count">${totaleRecipes}</p>
            <p class="total-recipes__text">${nameCategories}</p>
          </div>
      `;
}

let id = 1;

function drawTotalRecipes() {
  for (let key in totalRecipes) {
    let nameCategories, totaleRecipes;
    nameCategories = totalRecipes[key].name;
    totaleRecipes = totalRecipes[key].count;
    addingTotalRecipes(nameCategories, totaleRecipes, id++);
  }
}
drawTotalRecipes();

function outNum(num, el) {
  let l = document.querySelector("#" + el);
  let n = 0;
  let step = 1;
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  }, 0.1);
}

//Сделал без перебора данных,
//потому что не хватает мощности процессора
//для быстрого одновременного вычесления
outNum(23567, "out-1");
outNum(431729, "out-2");
outNum(892173, "out-3");
outNum(56581, "out-4");
outNum(3182, "out-5");