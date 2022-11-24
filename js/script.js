let navbar = document.querySelector(".navbar");

let mobileNavbar = document.querySelector(".mobile-navbar");
let toggleButton = document.querySelector(".toggle");
let scrollBtn = document.querySelector(".scroll-btn");

toggleButton.addEventListener("click", function (e) {
  if (mobileNavbar.classList.contains("opacity-0")) {
    mobileNavbar.classList.remove("opacity-0");
    mobileNavbar.classList.remove("pointer-events-none");
    mobileNavbar.classList.add("opacity-100");
    mobileNavbar.classList.add("pointer-events-auto");
  } else {
    mobileNavbar.classList.remove("opacity-100");
    mobileNavbar.classList.remove("pointer-events-auto");
    mobileNavbar.classList.add("opacity-0");
    mobileNavbar.classList.add("pointer-events-none");
  }
});

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

function closeHamBurgerMenu() {
  if (mobileNavbar.classList.contains("opacity-100")) {
    mobileNavbar.classList.remove("opacity-100");
    mobileNavbar.classList.remove("pointer-events-auto");
    mobileNavbar.classList.add("opacity-0");
    mobileNavbar.classList.add("pointer-events-none");
  }
}

function toggle(obj) {
  var obj = document.getElementById(obj);
  if (obj.style.display == "block") obj.style.display = "none";
  else obj.style.display = "block";
}

// Scroll to top Function

const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {
  console.log("hello world");
  if (window.scrollY != 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
scrollBtn.addEventListener("click", scrollWindow);
