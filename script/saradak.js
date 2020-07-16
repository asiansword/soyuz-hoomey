var participants = document.querySelectorAll(".participant");
var iframe = document.querySelector("iframe");

var videoSources = ["https://www.youtube.com/embed/T8VL2-I5-UI?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/pTXB71AfJHg?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/KRdRx9s_6IM?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/9jK4lRtC69Q?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/AFbKKMpPcrQ?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/2Rs2cgWWtak?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/m84Q34E8MBY?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/Q54TRSuDkho?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/gbZNHyYDEXY?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/A-c1N4fV6Rs?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/RAk8eWsR_Gs?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/QCDX2Mdechc?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/bQ1vZ6l1H-8?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/hGwXNNVG28Q?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/LWrp8VQlMiI?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/aQm9NhvmXA8?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/5Ro9R7aaPhc?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/Pc0_HWvetXw?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/iBLrCETnNK0?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/a53_i1m6UjI?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/B3oiDlhZjxs?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/zyXQRxsscVw?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/seqEwHed_9Q?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/ptfTV_eMhYs?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/tUuSyG8s7zs?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/Hq6WxDzou6k?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/Y1Tb7Va63Io?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/7I9Snq91cVE?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/tqjeMAdEYPY?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/rKP8aXu0MoM?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/NEuYRP7uJls?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/Ga8ZoW5dBKA?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/Tv-6163LT-E?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/KlvhRrAq9Js?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/MUM-3UYXD3w?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG",
                    "https://www.youtube.com/embed/WchvEF8_PsQ?list=PLuaCJ79vD1WLoXylWF5cFmectZFWE3jUG"];

participants.forEach(function(item, i, array) {
  item.addEventListener("click", function(){
    for (var partNum = 0; partNum < participants.length; partNum++) {
      participants[partNum].classList.remove("participant-active");
    }
    this.classList.add("participant-active");
    iframe.setAttribute("src", videoSources[i]);
  });
});
