window.addEventListener("load", function () {
  const how = document.querySelector(".about-comp");

  how.click();
});

const btn = document.querySelectorAll(".comp");

const mission = document.querySelectorAll(".mission");

btn.forEach((bt) => {
  bt.addEventListener("click", function (e) {
    mission.forEach((mi) => {
      mi.style.display = "none";
    });
    btn.forEach((b) => {
      b.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    addingActive(e.currentTarget.dataset.id);
  });
});

function addingActive(take) {
  const test = document.getElementById(`${take}`);

  test.style.display = "block";
}

//  this is the beggining of the review sectiions
