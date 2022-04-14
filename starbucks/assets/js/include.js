Array.from(document.querySelectorAll("*[data-include]")).map(async (v, i) => {
  const include = v.dataset.include;
  let html = null;

  try {
    const response = await axios.get(include);
    html = response.data;
  } catch (e) {
    console.error(e);
  }

  if (html != null) {
    v.outerHTML = html;
  }

  if (include.indexOf("header.html") > -1) {
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
  }
});
