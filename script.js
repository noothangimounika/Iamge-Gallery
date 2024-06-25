let scrollContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");


scrollContainer.addEventListener("wheel",(evt) => {
    evt.defaultPrevented();
    scrollContainer.scrollLeft +=evt.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior = "auti";
});

nextBtn.addEventListener("click", () =>{
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft +=900;
});


backBtn.addEventListener("click", () =>{
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -=900;
});
