// Burger Actions
const burgerMotion = () => {
    const burger = document.querySelector(".header__btn");
    const menu = document.querySelector(".header__menu");

    const BurgerMotion = () => {
        // Анимация бургера
        burger.classList.toggle("header__btn-toggle");
    };

    const menuMotion = () => {
        menu.classList.toggle("header__menu_active");
    };

    burger.addEventListener("click", () => {
        BurgerMotion();
        menuMotion();
    });


};
burgerMotion();

//Slider
const sliderReview = () => {
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

    //Ссылки на видео
    let link1 = "https://www.youtube.com/embed/NqXFHeaxN7w";
    let link2 = "https://www.youtube.com/embed/wjPrS76cMDY";

    //Настройки событий кнопок
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

    //Загрзка видео с кнопок
    const videoControl = () => {
        if (backStep === 2) {
            sliderVideoFrame.src=link1+"?autoplay=1&loop=1&&playlist=Video_ID";
            sliderWYouTube.classList.add("slider-w-video_on");
        } else if (backStep === 4) {
            sliderVideoFrame.src=link2+"?autoplay=1&loop=1&&playlist=Video_ID";
            sliderWYouTube.classList.add("slider-w-video_on");
        } else {
            sliderVideoFrame.src="";
            sliderWYouTube.classList.remove("slider-w-video_on");
        }
    };

    const sliderMotionWBack = () => {
        sliderW.style.backgroundImage = `url("./img/h${backStep = backStep - 1}.png")`;

        if (backStep === -1) {
            backStep = 0;
            sliderW.style.backgroundImage = `url("./img/h0.png")`
        }
        videoControl();
    };

    const sliderMotionWForward = () => {
        sliderW.style.backgroundImage = `url("./img/h${backStep = backStep + 1}.png")`;
        //Перемотка на начало
        if (backStep === 6) {
            backStep = 0;
            sliderW.style.backgroundImage = `url("./img/h0.png")`
        }
        videoControl();
    };

    // Включение и выключение видео и настройка пути c превью
    for (let i = 0; i < sliderHItemsVideo.length; i++) {
            sliderHItemsVideo[i].addEventListener("click", ()=>{

                  //    Первое видео
                  if (sliderHItemsVideo[i].classList.contains("video_1")) {
                      sliderVideoFrame.src=link1+"?autoplay=1&loop=1&&playlist=Video_ID";
                      sliderWYouTube.classList.add("slider-w-video_on");
                  }
                  //  Второе видео
                  if (sliderHItemsVideo[i].classList.contains("video_2")) {
                      sliderVideoFrame.src=link2+"?autoplay=1&loop=1&&playlist=Video_ID";
                      sliderWYouTube.classList.add("slider-w-video_on");
                  }
            });
        }

    //Действия с кнопками
    btnHprev.addEventListener("click", sliderMotionBack);
    btnHnext.addEventListener("click", sliderMotionForward);
    btnWprev.addEventListener("click", sliderMotionWBack);
    btnWnext.addEventListener("click", sliderMotionWForward);

    //Cмена слайдов
    for (let i = 0; i < sliderHItems.length; i++) {
        sliderHItems[i].addEventListener("click", () => {
            sliderHItems[i].classList.toggle("active");

            if (sliderHItems[i].classList.contains('active')) {
                sliderW.style.backgroundImage = `url("./img/h${i}.png")`;
                sliderHItems[i].classList.toggle("active");
            }

            if (sliderHItems[i].classList.contains('video-off')) {
                sliderWYouTube.classList.remove("slider-w-video_on");
                sliderVideoFrame.src="";
            }
        });
    }
};
sliderReview();

//SliderHouses
const sliderHouse = () => {
    const houseSlider = document.querySelector(".house__slider-inner");
    const houseSliderBtnLeft = document.querySelector(".house__slider-btn-prev");
    const houseSliderBtnRight = document.querySelector(".house__slider-btn-next");

    let houseSlides = document.querySelectorAll(".house__card");
    let step = 0;


    houseSliderBtnRight.addEventListener("click", () => {
        step = step - 455;
        houseSlider.style.left = step+'px';

        if (step === -910) {
            step = 0;
            houseSlider.style.left = step +'px';
        }
    });

    houseSliderBtnLeft.addEventListener("click", () => {
        step = step + 455;
        houseSlider.style.left = step+'px';

        if (step === 455) {
            step = -455;
            houseSlider.style.left = step +'px';
        }
    });
};
sliderHouse();

//PLansShow
const plans = () => {
    const plansItems = document.querySelectorAll(".plans__item");
    const plansInfo = document.querySelectorAll(".plans__info");
    const plansWrap = document.querySelectorAll(".plans__item-wrap");

    for (let i = 0; i < plansItems.length; i++) {
        plansItems[i].addEventListener("click", () => {
            plansInfo[i].classList.toggle("plans__info_active");
            plansItems[i].classList.toggle("plans__item_active");
            plansWrap[i].classList.toggle("plans__item-wrap_active");

            if (plansWrap[i].classList.contains("plans__item-wrap_right")) {
                plansInfo[i].classList.add("plans__info_right");
            }
        });
    }
};
plans();
//Benefits < 689px
const benefits = () => {
    const title = document.querySelectorAll(".benefits__article-title");
    const article = document.querySelectorAll(".benefits__article");

    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener('click', () => {
            article[i].classList.toggle('benefits__article_show');
        })
    }
};
benefits();
//features
const features = () => {
    const title = document.querySelectorAll(".feature__item-title");
    const content = document.querySelectorAll(".feature__item");

    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener('click', () => {
            content[i].classList.toggle('feature__item_show');
        })
    }
};
features();
//VideoDesc
const videoDesk = () => {
    const deskVideo = document.querySelectorAll(".desc__content-video");
    const youTube = document.querySelectorAll(".desc__content-video-youtube");
    const link = document.querySelectorAll(".desc-youtube");

    const link1 = "https://www.youtube.com/embed/zkfXyNRnIqU?autoplay=1&loop=1&&playlist=Video_ID";
    const link2 = "https://www.youtube.com/embed/tfsNHeVVhdQ?autoplay=1&loop=1&&playlist=Video_ID";

    for (let i = 0; i < deskVideo.length; i++) {
        deskVideo[i].addEventListener("click", () => {
            youTube[i].classList.add("desc__content-video-youtube_active");
        });
    }
    deskVideo[0].addEventListener("click", () => {
        link[0].src = link1;
    });
    deskVideo[1].addEventListener("click", () => {
        link[1].src = link2;
    });
};
videoDesk();
//Popup Show
const popup = () => {
  const call = document.querySelector(".call");
  const popupShow = document.querySelectorAll(".popup-show");
  const btnClose = document.querySelector(".call__form-btn-close");

  for (let i = 0; i < popupShow.length; i++) {
      popupShow[i].addEventListener("click", () => {
          call.classList.add("call_active");
      })
  }
  btnClose.addEventListener("click", () => {
      call.classList.remove("call_active");
  })
};

popup();
