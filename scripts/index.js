const burgerMenu = document.querySelector(".header__burger-menu");
const headerMenu = document.querySelector(".header__menu");
const headerLogo = document.querySelector(".header__logo");
const headerContainer = document.querySelector(".header__container");

burgerMenu.addEventListener("click", () => {
  const screenWidth = window.screen.width;
  if (headerMenu.style.display === "flex") {
    burgerMenu.style.background = `url("../images/burger-menu.svg") no-repeat center / cover`;
    burgerMenu.style.width = "32px";
    burgerMenu.style.height = "23px";
    headerMenu.style.display = "none";
    headerContainer.style.width = "100%";
    headerLogo.style.display = "block";
  } else {
    burgerMenu.style.background = `url("../images/burger-menu-opened.svg") no-repeat center / cover`;
    burgerMenu.style.width = "27px";
    burgerMenu.style.height = "40px";
    headerMenu.style.display = "flex";
    headerMenu.style.justifyContent = "center";
    if(screenWidth >= 768) {
      headerLogo.style.display = "none";
      headerMenu.style.justifyContent = "start";
      headerContainer.style.width = "auto";
    }
  }
});

const enrollForm = document.querySelector(".enroll");
const enrollInput = enrollForm.querySelector(".enroll__input");
const enrollSendButton = enrollForm.querySelector(".enroll__send-button");

enrollInput.addEventListener("focus", () => {
  enrollInput.placeholder = "";
  enrollSendButton.textContent = "Записаться!";
});

enrollInput.addEventListener("blur", () => {
  enrollInput.placeholder = "Ваша почта";
});

enrollForm.addEventListener('submit', submitHandlerEnroll);

function submitHandlerEnroll(evt) {
  evt.preventDefault();
  enrollSendButton.textContent = "Спасибо!";
}


const mediaQueryMobile = window.matchMedia('(min-width: 320px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesctop = window.matchMedia('(min-width: 1440px)');
mediaQueryMobile.addEventListener('change', handleTabletChange);
mediaQueryTablet.addEventListener('change', handleTabletChange);
mediaQueryDesctop.addEventListener('change', handleTabletChange);

function handleTabletChange() {
  const screenWidth = window.screen.width;
  if ((screenWidth >= 1440) && (headerMenu.style.display === "flex")) {
    headerLogo.style.display = "block";
    headerMenu.style.justifyContent = "end";
  } else if ((screenWidth >= 768) && (headerMenu.style.display === "flex")) {
    headerLogo.style.display = "none";
    headerMenu.style.justifyContent = "start";
  }  else if ((screenWidth >= 320) && (headerMenu.style.display === "flex")) {
    headerLogo.style.display = "block";
    headerMenu.style.justifyContent = "center";
  }
};


