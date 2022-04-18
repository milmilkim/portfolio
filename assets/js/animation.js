{
  const controller = new ScrollMagic.Controller();

  const tween = TweenMax.to([".title", ".down"], 0.5, {
    opacity: 0,
  });

  const scene = new ScrollMagic.Scene({
    triggerElement: ".space1",
    duration: "100%",
    triggerHook: 0.8,
  })
    .setTween(tween)
    .addTo(controller);
}

{
  const height = document.body.clientHeight;
  const controller = new ScrollMagic.Controller();

  const tween = TweenMax.to(".progress", 0.5, {
    width: "100%",
    backgroundColor: "rgb(20, 255, 226)",
  });

  const tween2 = TweenMax.to("body", 0.5, {
    backgroundColor: "#461259",
    color: "#461259",
  });

  const scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: height - window.outerHeight,
    triggerHook: 0,
  })
    .setTween(tween)
    .addTo(controller);
  const scene2 = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: height - window.outerHeight,
    triggerHook: 0,
  })
    .setTween(tween2)
    .addTo(controller);
}

{
  const controller = new ScrollMagic.Controller();

  const tween = TweenMax.to(".skills_title", 1, {
    opacity: 1,
  });

  const scene = new ScrollMagic.Scene({
    triggerElement: ".skills",
    duration: "100%",
    triggerHook: 0.3,
  })
    .setTween(tween)
    .addTo(controller)
    .setPin(".skills_title");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelector(".button_wrap>.menu").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("opened");
  e.currentTarget.setAttribute(
    "aria-expanded",
    e.currentTarget.classList.contains("opened")
  );

  document.querySelector("nav").classList.toggle("opend");
});

document.querySelectorAll("nav>ul>li").forEach((v) => {
  v.addEventListener("click", (e) => {
    document.querySelector("nav").classList.remove("opend");
    document.querySelector(".button_wrap>.menu").classList.remove("opened");
  });
});
