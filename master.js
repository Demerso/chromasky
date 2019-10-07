$(document).ready(function()
  {
    $("#back, body").vegas({
        slides: [
            { src: "img/slideshow/img1.png" },
            { src: "img/slideshow/img2.png" },
            { src: "img/slideshow/img3.png" },
            { src: "img/slideshow/img4.png" },
            { src: "img/slideshow/img5.png" },
            { src: "img/slideshow/img6.png" }],
        color: 'black',
        transition: 'fade',
        preloadImage: true,
        shuffle: true,
        delay: 10000,
        animation: 'kenburns',
        timer: false
    });
  })
