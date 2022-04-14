document
  .querySelector(".btn_search>img")
  .addEventListener("click", function (e) {
    e.currentTarget.parentNode.style.width = "182px";
    const total_search = document.querySelector("#total_search");
    total_search.style.display = "block";

    e.currentTarget.removeEventListener("click", arguments.callee); //이벤트 제거

    e.currentTarget.addEventListener("click", (e) => {
      if (!total_search.value) {
        alert("검색어를 입력하세요");
      } else {
        console.log(total_search.value);
      }
    });
  });

const category = document.querySelectorAll(".category>ul>li");

category.forEach((v, i) => {
  const gnb_nav = Array.from(document.querySelectorAll(".sub_wrap"));

  v.addEventListener("mouseover", (e) => {
    gnb_nav[i].style.maxHeight = "1000px";
    gnb_nav[i].style.zIndex = "99999";
  });

  v.addEventListener("mouseout", (e) => {
    gnb_nav[i].style.maxHeight = "0";
    gnb_nav[i].style.zIndex = "999";
  });
});

const length = document.querySelectorAll(".notice li").length;
const line = document.querySelector(".line");

let px = 0;
let i = 0;

setInterval(() => {
  i % length == 0 ? (px = 0) : (px -= 16);
  line.style.top = px + "px";
  i++;
}, 1500);

/** 프로모션 버튼 */

const button = document.querySelector(".promotion_button");
button.addEventListener("click", (e) => {
  document.querySelector(".swiper").classList.toggle("open");
  e.currentTarget.classList.toggle("open");
});

/** 스크롤 애니메이션 */

const scroll = document.querySelectorAll(".scroll");

const handleScrollAnimation = () => {
  scroll.forEach((v) => {
    const top = v.getBoundingClientRect().top;
    if (top <= window.innerHeight) {
      v.classList.add(v.dataset.animation);
    } else {
      v.classList.remove(v.dataset.animation);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
