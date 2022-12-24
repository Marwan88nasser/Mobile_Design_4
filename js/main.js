if (document.querySelector(".main-swiper")) {
  const swiperElement = document.querySelectorAll(".main-swiper");
  swiperElement.forEach(swiperEle => {
    const swiper = new Swiper(swiperEle, {
      spaceBetween: 10,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
}

if (document.querySelector('.login-slider')) {
  const sliderElement = document.querySelector('.login-slider');
  const swiper = new Swiper(sliderElement, {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// btn-inp-check
if (document.querySelector(".btn-inp-check .inp")) {
  let inputsCheck = document.querySelectorAll(".btn-inp-check .inp");
  inputsCheck.forEach(inp => {
    inp.addEventListener("input", () => {
      if (inp.checked == true) {
        inp.closest(".btn-inp-check").classList.add("check");
      } else {
        inp.closest(".btn-inp-check").classList.remove("check");
      }
    })
  })
}

// make modal Bootstrap popup show without click
if (document.querySelector("#popup_show")) {
  let myModal = new bootstrap.Modal(document.getElementById("popup_show"));
  myModal.show();
}

// initialize bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))