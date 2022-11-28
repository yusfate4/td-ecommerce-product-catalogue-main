// ==================================
// 1. Toggle humbugger menu;

// ==================================

const links = document.querySelector(".link");
const hamburger = document.querySelector(".hamburger");
const displayLink = () => {
  links.style.display = "none";
};
displayLink();
hamburger.addEventListener("click", () => {
  hamburger.style.display = "block";
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});



// ======================================


const search = document.querySelector(".search_product");
search.addEventListener("input", () => {
  const catalogue = document.querySelectorAll(".catalogue");
  const check = document.querySelector(".check");

  catalogue.forEach((element) => {
    element.style.display = "none";

    product = search.value;
    productEl = element.textContent.toUpperCase();
    elProduct = element.textContent.toLowerCase();

    if (
      productEl.includes(product) ||
      elProduct.includes(product) ||
      element.textContent.includes(product)
    ) {
      element.style.display = "block";
      check.textContent = " ";
    } else {
      element.style.display = "none";
      check.textContent = "The Item Can't be Found!!!";
      check.style.color = "white";
      check.style.backgroundColor = "#EA047E";
      check.style.fontSize = "40px";
    }
  });
});
