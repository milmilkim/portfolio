function ajax(url, method = "GET") {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
      const ajax = e.target;

      if (ajax.readyState == XMLHttpRequest.DONE) {
        if (ajax.status == 200) {
          const json = JSON.parse(ajax.responseText);

          resolve(json);
        } else {
          const s = parseInt(ajax.status / 100);
          let msg = null;
          if (s == 4) {
            msg = "요청 주소가 잘못되었습니다.";
          } else if (s == 5) {
            msg = "서버의 응답이 없습니다.";
          } else {
            msg = "요청에 실패했습니다.";
          }

          reject({ status: ajax.status, text: ajax.statusText, msg: msg });
        }
      }
    };

    xhr.open(method, url);
    xhr.send();
  });
}

const ghPageUrl = "https://milmilkim.github.io/portfolio/hyundai";

(async () => {
  try {
    const res = await ajax(`${ghPageUrl}/assets/json/content.json`);
    const articles = res.content;
    const articleArea = document.querySelector(".articleArea");

    articles.map((v, i) => {
      const img = document.createElement("img");
      img.setAttribute("src", "." + v.img_pc);
      img.setAttribute("alt", v.subject);
      img.setAttribute("width", v.width + "px");

      if (i < 2) {
        const span = document.querySelectorAll(".section.content span");
        const p = document.querySelectorAll(".section.content p");
        const imgArea = document.querySelectorAll(".section.content .imgArea");

        imgArea[i].appendChild(img);
        imgArea[i].addEventListener("click", (e) => {
          window.open("about:blank").location.href = v.url;
        });
        span[i].innerHTML = v.category;
        p[i].innerHTML = v.subject;
      } else {
        const imgArea = document.createElement("div");
        imgArea.classList.add("imgArea");

        imgArea.appendChild(img);

        const a = document.createElement("a");
        a.setAttribute("href", v.url);
        a.setAttribute("target", "_black");

        const col = document.createElement("div");
        col.classList.add("col");
        col.style.width = v.width + "px";

        const caption = document.createElement("div");
        caption.classList.add("caption");
        const span = document.createElement("span");
        span.innerHTML = v.category;
        a.appendChild(col);
        col.appendChild(imgArea);
        col.appendChild(caption);

        const p = document.createElement("p");
        p.innerHTML = v.subject;

        caption.appendChild(span);
        caption.appendChild(p);

        if (i % 3 == 2) {
          const row = document.createElement("div");
          row.classList.add("row");
          articleArea.appendChild(row);
          row.appendChild(a);
        } else {
          articleArea.lastChild.appendChild(a);
        }
      }
    });
  } catch (e) {
    console.error(e);
  }
})();

(async () => {
  try {
    const res = await ajax(`${ghPageUrl}/assets/json/social.json`);
    const social = res.social;

    const section = document.querySelector(".section.sns");

    social.map((v, i) => {
      const square = document.createElement("div");
      square.classList.add("square");

      const inner = document.createElement("div");
      inner.classList.add("inner");
      const span = document.createElement("span");
      span.classList.add("icon_insta");

      inner.innerHTML = v.text;

      square.appendChild(inner);
      inner.appendChild(span);

      square.addEventListener("mouseover", (e) => {
        const square = e.currentTarget.querySelector(".inner");
        square.classList.add("opacity1");
      });
      square.addEventListener("mouseout", (e) => {
        const square = e.currentTarget.querySelector(".inner");
        square.classList.remove("opacity1");
      });
      square.addEventListener("click", (e) => {
        window.open("about:blank").location.href = v.url;
      });

      square.style.background = `url(.${v.img})`;

      if (i % 3 == 0) {
        const row = document.createElement("div");
        row.classList.add("row");
        section.appendChild(row);
        row.appendChild(square);
      } else {
        section.lastChild.appendChild(square);
      }
    });
  } catch (e) {
    console.error(e);
  }
})();
