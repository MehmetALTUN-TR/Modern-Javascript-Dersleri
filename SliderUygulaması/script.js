var models = [
  {
    name: "Bmw 418d",
    image: "images/bmw.jpg",
    link: "https://www.google.com/search?sca_esv=6449538529ffda2f&sxsrf=ADLYWIJzq3r0YdqPyX1FgOs93aYoqZf5tQ:1728118348553&q=bmw+418d+sedan&udm=2&fbs=AEQNm0CgMcZ11KbHg1uunEmuo39LYaLxf_n_v5Qu9vkTINnKPMbduOyFcod3WemnFU8VIAPc_K9eydDYeoMFToDrupT5GRaRF_bdw538ALsAG-ZT9ITDOvBESL03MqoQpC0A3xvzjI7q1Iu2PlgBF0Fn2XXqEZMS60C7NR-uMFxtRpWTAOCLUlIs-9U7XTglRkxuWd2rUm334kxai64uTmHpXhySjWwY1jlpNAdE43n__27lbxU4BWs&sa=X&ved=2ahUKEwjthK7C7vaIAxUrSvEDHfsVLGA4ChC0qAt6BAgQEAE&biw=1536&bih=826&dpr=1.25",
  },
  {
    name: "Mazda CX-3",
    image: "images/mazda.jpg",
    link: "https://www.google.com/search?q=mazda+cx-3&sca_esv=6449538529ffda2f&udm=2&biw=1536&bih=826&sxsrf=ADLYWIJ5Wxjm3Wa2WRKYca3rk7QC9pt0bQ%3A1728118375224&ei=Z_4AZ5yeDdCL7NYPmtbMqQc&ved=0ahUKEwjc7YnP7vaIAxXQBdsEHRorM3UQ4dUDCBA&uact=5&oq=mazda+cx-3&gs_lp=Egxnd3Mtd2l6LXNlcnAiCm1hemRhIGN4LTMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESPUOUABY1Q1wAHgAkAEAmAGRAaABgQmqAQQwLjEwuAEDyAEA-AEBmAIKoAKPCcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAggQABiABBixA8ICChAAGIAEGEMYigXCAg0QABiABBixAxhDGIoFwgIEEAAYA8ICEBAAGIAEGLEDGEMYgwEYigWYAwCSBwQwLjEwoAfgMA&sclient=gws-wiz-serp",
  },
  {
    name: "Volvo S60",
    image: "images/volvo.jpg",
    link: "https://www.google.com/search?q=Volvo+S60&sca_esv=6449538529ffda2f&udm=2&biw=1536&bih=826&sxsrf=ADLYWILAxp42fsj5NM6TjueIV8ySibOEkQ%3A1728118456027&ei=uP4AZ-SsAfTjxc8P-fmE6A4&ved=0ahUKEwjk6M317vaIAxX0cfEDHfk8Ae0Q4dUDCBA&uact=5&oq=Volvo+S60&gs_lp=Egxnd3Mtd2l6LXNlcnAiCVZvbHZvIFM2MDIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIzwhQAFgAcAB4AJABAJgBcKABcKoBAzAuMbgBA8gBAPgBAvgBAZgCAaACc5gDAJIHAzAuMaAHyQQ&sclient=gws-wiz-serp",
  },
  {
    name: "Honda Civic",
    image: "images/honda.jpg",
    link: "https://www.google.com/search?q=Honda+Civic&sca_esv=6449538529ffda2f&udm=2&biw=1536&bih=826&sxsrf=ADLYWILna1f_U7z1cD4fzUJwa1HD7DOIsg%3A1728118521398&ei=-f4AZ9bjF7uPxc8PzLaToQ4&ved=0ahUKEwiWxOOU7_aIAxW7R_EDHUzbJOQQ4dUDCBA&uact=5&oq=Honda+Civic&gs_lp=Egxnd3Mtd2l6LXNlcnAiC0hvbmRhIENpdmljMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMgUQABiABDINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBUj2CFAAWABwAHgAkAEAmAGEAaABhAGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAogBmAMAkgcDMC4xoAekBQ&sclient=gws-wiz-serp",
  },
  {
    name: "Skoda Superb",
    image: "images/skoda.jpg",
    link: "https://www.google.com/search?q=Skoda+Superb&sca_esv=6449538529ffda2f&udm=2&biw=1536&bih=826&sxsrf=ADLYWILZ-lTWrxcTEvWdmDr_vv3uTrWpAw%3A1728118503568&ei=5_4AZ6-wIvCNxc8P9Nq9kAE&ved=0ahUKEwjvv6OM7_aIAxXwRvEDHXRtDxIQ4dUDCBA&uact=5&oq=Skoda+Superb&gs_lp=Egxnd3Mtd2l6LXNlcnAiDFNrb2RhIFN1cGVyYjIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIIEAAYgAQYsQMyBRAAGIAEMgoQABiABBhDGIoFMgUQABiABEjFGVAAWPwTcAB4AJABAJgBc6ABswOqAQMwLjS4AQPIAQD4AQL4AQGYAgSgAroDwgIKEAAYgAQYsQMYCsICBxAAGIAEGAqYAwCSBwMwLjSgB8Ya&sclient=gws-wiz-serp",
  },
];

let index = 0;
let slaytCount = models.length;
var settings = {
  duration: "1000",
  random: false,
};
init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {
  index--;
  showSlide(index);
});

document.querySelector(".fa-circle-arrow-right").addEventListener("click", function () {
  index++;
  showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

let prev;
function init(options) {
  interval = setInterval(function () {
    if (options.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index === prev);
      prev = index;
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      index++;
    }
    showSlide(index);
  }, options.duration);
}

function showSlide(i) {
  if (i < 0) {
    index = models.length - 1;
  } else if (i > models.length - 1) {
    index = 0;
  }
  console.log(index);
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-img-top").setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
