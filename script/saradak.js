var participants = document.querySelectorAll(".participant");
var ageOrigin = document.querySelectorAll(".participant-list span")
var iframe = document.querySelector("iframe");

var videoSources = ["https://www.youtube.com/embed/FXnlJXM1rVQ",
                    "https://www.youtube.com/embed/p_h4W9XxH8Q",
                    "https://www.youtube.com/embed/04EHBGtTjfo",
                    "https://www.youtube.com/embed/iKfFySPkQOM",
                    "https://www.youtube.com/embed/0y3eKvmZsPg",
                    "https://www.youtube.com/embed/nijaKp-kJ2s",
                    "https://www.youtube.com/embed/f5e1Ann3wlE",
                    "https://www.youtube.com/embed/eaSVTaXngDE",
                    "https://www.youtube.com/embed/7jIY09fdLJg",
                    "https://www.youtube.com/embed/RYdYYTKsaZE",
                    "https://www.youtube.com/embed/cwFfQawZN_s",
                    "https://www.youtube.com/embed/SFCWYs5gmcE",
                    "https://www.youtube.com/embed/xxWZiKH-678",
                    "https://www.youtube.com/embed/HxdqQPUwoOU",
                    "https://www.youtube.com/embed/vA7MCDtN2Ww",
                    "https://www.youtube.com/embed/sP2QjQh9zTg",
                    "https://www.youtube.com/embed/eFWAbuEwHXU",
                    "https://www.youtube.com/embed/Lmprs2F7E54",
                    "https://www.youtube.com/embed/3zKNMatrGBk",
                    "https://www.youtube.com/embed/lRfJYA3vuhY"];

participants.forEach(function(item, i, array) {
  item.addEventListener("click", function(){
    for (var partNum = 0; partNum < participants.length; partNum++) {
      participants[partNum].classList.remove("participant-active");
    }
    this.classList.add("participant-active");
    for (var ageNum = 0; ageNum < ageOrigin.length; ageNum++) {
      ageOrigin[ageNum].classList.remove("age-origin-show");
      ageOrigin[ageNum].classList.add("age-origin-hide");
    }
    ageOrigin[i].classList.add("age-origin-show");
    iframe.setAttribute("src", videoSources[i] + "?rel=0");
  });
});

// <iframe width="1086" height="611" src="https://www.youtube.com/embed/dsM_wQR6hDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// <iframe width="1086" height="611" src="https://www.youtube.com/embed/YvEMPX8k4gE?list=PLuaCJ79vD1WI7IRTzkmLRALVrxMYDm3I1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// <iframe width="1086" height="611" src="https://www.youtube.com/embed/dsM_wQR6hDA?list=PLuaCJ79vD1WI7IRTzkmLRALVrxMYDm3I1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
