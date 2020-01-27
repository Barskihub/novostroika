// Burger Actions
const burgerMotion = () => {
    const burger = document.querySelector(".header__btn");

    const BurgerMotion = () => {
        // Анимация бургера
        burger.classList.toggle("header__btn-toggle");
    };

    burger.addEventListener("click", () => {
        BurgerMotion();
    });
};

burgerMotion();

//Slider
const sliderH = () => {
    let sliderHItems = document.querySelectorAll(".slider-h__item");
    let sliderHItemsVideo = document.querySelectorAll(".slider-h__item_vid");
    let sliderHList = document.querySelector(".slider-h__list");
    let sliderW = document.querySelector(".slider-w");
    let sliderWYouTube = document.querySelector(".slider-w-video");
    let sliderVideoFrame = document.querySelector(".slider-w-video-if");

    const btnHnext = document.querySelector(".slider-h__btn-next");
    const btnHprev = document.querySelector(".slider-h__btn-prev");
    const btnWprev = document.querySelector(".slider-w__btn-prev");
    const btnWnext = document.querySelector(".slider-w__btn-next");
    let step = 0;
    let backStep = 0;

    const sliderMotionBack = () => {
        step = step + 91;
        sliderHList.style.top = step+'px';

        if (step === 91) {
            step = 0;
            sliderHList.style.top = step +'px';
        }
    };

    const sliderMotionForward = () => {
        step = step - 91;
        sliderHList.style.top = step+'px';
        if (step === -364) {
            step = 0;
            sliderHList.style.top = step +'px';
        }
    };

    const sliderMotionWBack = () => {
        sliderW.style.backgroundImage = `url("./img/h${backStep = backStep - 1}.png")`;

        if (backStep === -1) {
            backStep = 0;
            sliderW.style.backgroundImage = `url("./img/h0.png")`
        }
    };

    const sliderMotionWForward = () => {
        sliderW.style.backgroundImage = `url("./img/h${backStep = backStep + 1}.png")`;

        if (backStep === 6) {
            backStep = 0;
            sliderW.style.backgroundImage = `url("./img/h0.png")`
        }
    };


    for (let i = 0; i < sliderHItemsVideo.length; i++) {
            sliderHItemsVideo[i].addEventListener("click", ()=>{
              sliderWYouTube.classList.add("slider-w-video_on");

              if (sliderHItemsVideo[i].classList.contains("video_1")) {
                  sliderVideoFrame.src="https://www.youtube.com/embed/NqXFHeaxN7w";
                }

              if (sliderHItemsVideo[i].classList.contains("video_2")) {
                  sliderVideoFrame.src="https://www.youtube.com/embed/wjPrS76cMDY";
              }
            });
        }

    btnHprev.addEventListener("click", sliderMotionBack);
    btnHnext.addEventListener("click", sliderMotionForward);
    btnWprev.addEventListener("click", sliderMotionWBack);
    btnWnext.addEventListener("click", sliderMotionWForward);


    for (let i = 0; i < sliderHItems.length; i++) {
        sliderHItems[i].addEventListener("click", () => {
            sliderHItems[i].classList.toggle("active");

            if (sliderHItems[i].classList.contains('active')) {
                sliderW.style.backgroundImage = `url("./img/h${i}.png")`;
                sliderHItems[i].classList.toggle("active");
            }

            if (sliderHItems[i].classList.contains('video-off')) {
                sliderWYouTube.classList.remove("slider-w-video_on");
            }
        });
    }
    console.log(sliderHItems);
};

sliderH();


