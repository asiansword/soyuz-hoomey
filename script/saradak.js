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
                    "https://www.youtube.com/embed/lRfJYA3vuhY",
                    "https://www.youtube.com/embed/g0APWm47J5w",
                    "https://www.youtube.com/embed/iUCfY9C7eQE",
                    "https://www.youtube.com/embed/2AV5-jvaitk",
                    "https://www.youtube.com/embed/6WI1dwBjRJk",
                    "https://www.youtube.com/embed/ptNdOWozIkA",
                    "https://www.youtube.com/embed/Fl8H6d7Ji_k",
                    "https://www.youtube.com/embed/tmL_qGIBosE",
                    "https://www.youtube.com/embed/MhkiqoPG5xg",
                    "https://www.youtube.com/embed/FHiHaDZkoAk",
                    "https://www.youtube.com/embed/TMchLXt-wMU",
                    "https://www.youtube.com/embed/pL8qGWLcS7c",
                    "https://www.youtube.com/embed/bxERuStE4-w",
                    "https://www.youtube.com/embed/ZQ6iOJGriM4",
                    "https://www.youtube.com/embed/OQPIZ10IigE",
                    "https://www.youtube.com/embed/jjddcjZUpnA",
                    "https://www.youtube.com/embed/cHHbVtOXAcI",
                    "https://www.youtube.com/embed/a0CfwYI1E6A",
                    "https://www.youtube.com/embed/wF0vKpdk5Lg",
                    "https://www.youtube.com/embed/UpXaswpWLhQ",
                    "https://www.youtube.com/embed/WiYIkeZt3Zw",
                    "https://www.youtube.com/embed/ojB4JhZO27k",
                    "https://www.youtube.com/embed/uK_ajjp_ubc",
                    "https://www.youtube.com/embed/hbZfVZuMZmY",
                    "https://www.youtube.com/embed/oFEfpgzTIKI",
                    "https://www.youtube.com/embed/ds8TOPm2lrA",
                    "https://www.youtube.com/embed/fyiGLVfgT-Y",
                    "https://www.youtube.com/embed/XeTZ49ok7Jo",
                    "https://www.youtube.com/embed/har6S4KDluQ",
                    "https://www.youtube.com/embed/vbH9RhuOvwA",
                    "https://www.youtube.com/embed/In_C63C-sS8",
                    "https://www.youtube.com/embed/ZDiA3XY31uk",
                    "https://www.youtube.com/embed/Yd5OzX3cHUQ",
                    "https://www.youtube.com/embed/Kmi2VTJ4mcQ",
                    "https://www.youtube.com/embed/tHsvrnK1Izw",
                    "https://www.youtube.com/embed/vAKvcENB2gE",
                    "https://www.youtube.com/embed/6XYOShR2Prk",
                    "https://www.youtube.com/embed/YAfCrWJTWSs",
                    "https://www.youtube.com/embed/kO6HDk6heTU",
                    "https://www.youtube.com/embed/-GIXc_Wl-1c",
                    "https://www.youtube.com/embed/SduIQQixuPw"];

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
