(()=>{

let menu = document.querySelector(".page-header__nav");
let closedButton = document.querySelector(".page-header__nav-btn");

menu.classList.add("page-header__nav--closed");
closedButton.classList.add("page-header__nav-btn--closed");

closedButton.addEventListener("click",()=>{
  if(closedButton.classList.contains("page-header__nav-btn--closed")) {
    menu.classList.remove("page-header__nav--closed");
    closedButton.classList.remove("page-header__nav-btn--closed");
  }
  else {
    menu.classList.add("page-header__nav--closed");
    closedButton.classList.add("page-header__nav-btn--closed");
  }
});

})();