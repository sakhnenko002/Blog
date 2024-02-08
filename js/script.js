const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  
  if (isMobile.any()) {
    document.body.classList.add("_touch");
  
    let menuArrows = document.querySelectorAll(".checkbox");
    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
          menuArrow.parentElement.classList.toggle("_active");
        });
      }
    }
  } else {
    document.body.classList.add("_pc");
  }
  
  //Меню бургер
  
  const iconMenu = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".menu__body");
  if (iconMenu) {
    const menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    });
  }



  // const nightThemeBtn = document.getElementById("checkbox");

  // nightThemeBtn.addEventListener("click", function() {
  //     document.body.classList.toggle("dark-theme"); // Видалено крапку перед "dark-theme"
  // });
  

  const nightThemeBtn = document.getElementById("checkbox");

  nightThemeBtn.addEventListener("click", function() {
      const elementsToToggleClass = document.querySelectorAll(".hero__card, body, h1, h2, p, .gallery__item");
  
      for (const element of elementsToToggleClass) {
          element.classList.toggle("dark-theme");
      }
  });
  
