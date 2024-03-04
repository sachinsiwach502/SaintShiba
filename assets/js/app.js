document.addEventListener("DOMContentLoaded", function () {
    let icon = document.querySelector("#menuIcon");
    let view = document.querySelector(".lg-view");

    icon.addEventListener("click", () => {
        view.classList.toggle("show");
    });
});


let accordian = document.querySelectorAll(".full-part")
let img = document.querySelector(".accord-img");
let txt = document.querySelector(".accord-para");
img.style.transform = "rotate(180deg)";
txt.style.display = "block";
accordian.forEach(element => {
    let img = element.querySelector(".accord-img");
    let clicable = element.querySelector(".top-part");
    let txt = element.querySelector(".accord-para");


    clicable.addEventListener("click", () => {
        let disp_text = window.getComputedStyle(txt).display;
        accordian.forEach(otherelement => {
            if (otherelement !== element) {
                let txt = otherelement.querySelector(".accord-para");
                let img = otherelement.querySelector(".accord-img");

                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }
            if (disp_text === "none") {
                txt.style.display = "block";
                img.style.transform = "rotate(180deg)";
            } else {
                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }

        });
    });
});

