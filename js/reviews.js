console.log("this is the reviews ");

const link = document.querySelectorAll("a");

console.log(link);

const shiftImg = document.querySelectorAll(".shift-img");

link.forEach((lin) => {
  lin.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

// shift article

const shiftArticle = document.querySelectorAll(".shift-article");

const right = document.querySelector(".left");

const left = document.querySelector(".right");

let counter = 0;

// adding left position to shift image

shiftImg.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

// adding left postion to shift article

shiftArticle.forEach((art, index) => {
  art.style.left = `${index * 100}%`;
});

left.addEventListener("click", function (e) {
  decrease();
  console("left has been clicked");
});

right.addEventListener("click", function () {
  increase();
});

function increase() {
  counter++;

  if (counter > shiftArticle.length - 1) {
    counter = 0;
  }

  shiftArticle.forEach((art) => {
    art.style.transform = `translateX(-${counter * 100}%)`;
  });

  shiftImg.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
}

function decrease() {
  counter--;
  if (counter < 0) {
    counter = shiftArticle.length - 1;
  }
  shiftArticle.forEach((art) => {
    art.style.transform = `translateX(-${counter * 100}%)`;
  });

  shiftImg.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
}
