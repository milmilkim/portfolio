{
  const controller = new ScrollMagic.Controller();

  const tween = TweenMax.to([".title", ".down"], 0.5, {
    opacity: 0,
  });

  const scene = new ScrollMagic.Scene({
    triggerElement: ".space",
    duration: "100%",
    triggerHook: 0.8,
  })
    .setTween(tween)
    .addTo(controller)
    .addIndicators({
      name: "1",
    });
}

{
  const height = document.body.clientHeight;
  console.log(height);
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
    .addTo(controller)
    .addIndicators({
      name: "2",
    });

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: height - window.outerHeight,
    triggerHook: 0,
  })
    .setTween(tween2)
    .addTo(controller)
    .addIndicators({
      name: "2",
    });
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
    .setPin(".skills_title")
    .addIndicators({
      name: "5",
    });
}
