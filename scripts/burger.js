const itemsRecipes = [
  "ITALIAN",
  "INDIAN",
  "FRENCH",
  "STEAKHOUSE",
  "SEAFOOD",
  "SUSHI",
  "MEXICAN",
  "CHINESE",
  "PIZZA",
  "AMERICAN",
];

function addingNavItem(name) {
  navItemMenu.innerHTML += `
    <li><a href="#">${name}</a></li>
    `;
}

function drawList() {
  for (let key in itemsRecipes) {
    let name = itemsRecipes[key];
    addingNavItem(name);
  }
}

drawList();

buttonBurger.addEventListener("click", () => {
  let x = navItemMenu.className;
  switch (x) {
    case "displayNone":
      navItemMenu.className = "displayBlock";
      break;
    case "displayBlock":
      navItemMenu.className = "displayNone";
      break;
    default:
      x = "";
  }
});