const subdropdownList = document.querySelector(".subdropdown-list");
subdropdownList.addEventListener("mouseover", function (e) {
    subdropdownList.classList.remove("hidden");
});
console.log(subdropdownList);

const pillarImgAnimate = document.querySelector(".pillar-img");
const pillarAnimationArea = document.querySelector("pillars-outer-box");

pillarAnimationArea.addEventListener("mouseover", function () {
    pillarImgAnimate.classList.add("animate");
});
pillarAnimationArea.addEventListener("mouseleave", function () {
    pillarImgAnimate.classList.remove("animate");
});
