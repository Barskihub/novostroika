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