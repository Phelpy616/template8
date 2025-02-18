/*automatic car img change for desktop*/
const images = document.querySelectorAll(".showCaseScndChild img");
let index = 0;
function changeImage() {
  try {
    images[index].classList.remove("active"); // Hide current image
    index = (index + 1) % images.length; // Move to next image
    images[index].classList.add("active"); // Show new image
  } catch (error) {}
}
setInterval(changeImage, 5000); // Change image every 5 seconds

/*automatic name of car change*/
const carNames = document.querySelectorAll(".showCaseThrdChild h2");
let index2 = 0;
function changeCarName() {
  try {
    carNames[index2].classList.remove("active2"); // Hide current name
    index2 = (index2 + 1) % carNames.length; // Move to next name
    carNames[index2].classList.add("active2"); // Show new name
  } catch (error) {}
}
setInterval(changeCarName, 5000);

/*toggle the display of car info on the fleet page when clicked the name of car*/
function toggleInfo(index) {
  const infoElements = document.querySelectorAll(".info");
  infoElements[index].classList.toggle("active");
}

/*navigate throught .header*/
const headerElements = document.querySelectorAll(".header h4");
console.log(headerElements);

headerElements.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

const getAQuoteBtn = document.querySelectorAll(".getAQuoteBtn");
getAQuoteBtn.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = logo.dataset.url;
});

/*go to about us when "read more" is clicked on "our history"*/
const ourHistoryReadMore = document.querySelector(
  ".ourHistory div:nth-child(2) p span"
);
try {
  ourHistoryReadMore.addEventListener("click", () => {
    window.location.href = ourHistoryReadMore.dataset.url;
  });
} catch (error) {
  console.log(error);
}

/*go to fleet when showcase "read more" is clicked*/
const showcaseReadMore = document.querySelector(
  ".showCase .showCaseFrstChild div:nth-child(2) h3 span"
);

try {
  showcaseReadMore.addEventListener("click", () => {
    window.location.href = showcaseReadMore.dataset.url;
  });
} catch (error) {
  console.log(error);
}

/*automatic car img change for mobile*/
// const imagesMobile = document.querySelectorAll(".showCaseScndChild2 img");
// if (window.innerWidth <= 450) {
//   try {
//     let indexMobile = 0;
//     function changeImageMobile() {
//       imagesMobile[indexMobile].classList.remove("active2"); // Hide current image
//       indexMobile = (indexMobile + 1) % imagesMobile.length; // Move to next image
//       imagesMobile[indexMobile].classList.add("active2"); // Show new image
//     }
//     setInterval(changeImageMobile, 5000); // Change image every 5 seconds
//   } catch (error) {
//     console.log(error);
//   }
// }

const imagesMobile = document.querySelectorAll(".ALTshowcase img");
// if (window.innerWidth <= 450) {
//   try {
let indexMobile = 0;
function changeImageMobile() {
  imagesMobile[indexMobile].classList.remove("active2"); // Hide current image
  indexMobile = (indexMobile + 1) % imagesMobile.length; // Move to next image
  imagesMobile[indexMobile].classList.add("active2"); // Show new image
}
setInterval(changeImageMobile, 5000); // Change image every 5 seconds
//   } catch (error) {
//     console.log(error);
//   }
// }

/*go to get a quote throught .header2 on mobile*/
const getAQuoteBtnMobile = document.querySelector(".header2 div");
getAQuoteBtnMobile.addEventListener("click", () => {
  window.location.href = getAQuoteBtnMobile.dataset.url;
});

/*display/ hide menu*/
const menuBtn = document.querySelector(".header2 img");
const menu = document.querySelector(".menu");
const menuCloseBtn = document.querySelector(".menu div img");
menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.classList.add("no-scroll"); // Disable scrolling
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.classList.remove("no-scroll"); // Re-able scrolling
});

/*navigate through menu*/
const menuElements = document.querySelectorAll(".menu .menuNavigation p");
menuElements.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

/*go to home through .header2 and .menu on mobile*/
const logoMobileHeader2 = document.querySelector(".header2 h1");
if (logoMobileHeader2) {
  logoMobileHeader2.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

const logoMobileMenu = document.querySelector(".menu div h1");
if (logoMobileMenu) {
  logoMobileMenu.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
