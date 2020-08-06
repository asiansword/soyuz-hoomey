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
                    "https://www.youtube.com/embed/WiYIkeZt3Zw",
                    "https://www.youtube.com/embed/vTH6KgY-Rw4",
                    "https://www.youtube.com/embed/V4wyCgk8VHU",
                    "https://www.youtube.com/embed/t5Qm6OrcHKo",
                    "https://www.youtube.com/embed/x_bDVKiMRCs",
                    "https://www.youtube.com/embed/msdWy-olKL8",
                    "https://www.youtube.com/embed/ve6v9IzaZhg",
                    "https://www.youtube.com/embed/msdWy-olKL8",
                    "https://www.youtube.com/embed/RqYjjZNh6z0",
                    "https://www.youtube.com/embed/TiRix1-v4RY",
                    "https://www.youtube.com/embed/d99Iqo7STiQ",
                    "https://www.youtube.com/embed/0e9gjruwIAg",
                    "https://www.youtube.com/embed/rgZmqr6d3vs",
                    "https://www.youtube.com/embed/Uv3EMe1hABw",
                    "https://www.youtube.com/embed/7_QS4hiSlzo",
                    "https://www.youtube.com/embed/woZd2ZsSnNY",
                    "https://www.youtube.com/embed/VQSbUqthUIU",
                    "https://www.youtube.com/embed/vIvBUyhGiAk",
                    "https://www.youtube.com/embed/FrvAwlhVQt8",
                    "https://www.youtube.com/embed/CR2UENNojdE",
                    "https://www.youtube.com/embed/QsBpf5-8dk4",
                    "https://www.youtube.com/embed/7hvqjJz-Krc",
                    "https://www.youtube.com/embed/z6lWYin2X5Y"];

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
