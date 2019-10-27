$(document).ready(function(event) {
  makeSquares("#menu");

  $("#menu")
    .children()
    .mouseenter(function(event) {
      changeBack("enter", this);
    })
    .mouseleave(function(event) {
      changeBack("leave", this);
    });

  $("#btnForm").click(function(event) {
    goToAnchor("form");
  });

  $("#brnRules").click(function(event) {
    goToAnchor("rules");
  });

  $("#btnPg").click(function(event) {
    window.open("https://www.facebook.com/memestraduitsqc/");
  });

  $("#btnDon").click(function(event) {
    goToAnchor("don");
  });

  $("body").vegas({
    slides: [
      { src: "./img/slideshow/img1.png" },
      { src: "./img/slideshow/img2.png" },
      { src: "./img/slideshow/img3.png" },
      { src: "./img/slideshow/img4.png" },
      { src: "./img/slideshow/img5.png" },
      { src: "./img/slideshow/img6.png" }
    ],
    color: "black",
    transition: "fade",
    preloadImage: true,
    shuffle: true,
    delay: 5000,
    animation: "kenburns",
    timer: false
  });
});

$(window).resize(function(event) {
  makeSquares("#menu");
});

function makeSquares(id) {
  var width = $(id)
    .children()
    .css("width");
  width = Math.floor(parseFloat(width));
  $(id)
    .children()
    .css("width", width);
  $(id)
    .children()
    .css("height", width);
}

function changeBack(state, element) {
  var num = Math.floor(Math.random() * 4) + 1;
  if (state == "enter") {
    $(element).css(
      "background-image",
      "url(img/buttons/btn".concat(num, ".png)")
    );
  } else {
    $(element).css("background-image", "url(img/stone.png)");
  }
}

function goToAnchor(anchor) {
  var loc = document.location.toString().split("#")[0];
  document.location = loc + "#" + anchor;
}
