function getDisplayNone(block) {
  block.style.display = "none";
}

function getDisplayFlex(block) {
  block.style.display = "flex";
}

userLogIn.onclick = function () {
  getDisplayFlex(modalUserLogin);
};

userSignIn.onclick = function () {
  getDisplayFlex(modalUserSignup);
};

window.onclick = function (e) {
  if (e.target == modalUserLogin) {
    getDisplayNone(modalUserLogin);
    for (let i = 0; i < inputUser.length; i++) {
      inputUser[i].value = "";
    }
  }
  if (e.target == modalUserSignup) {
    getDisplayNone(modalUserSignup);
    for (let i = 0; i < inputUser.length; i++) {
      inputUser[i].value = "";
    }
  }
};