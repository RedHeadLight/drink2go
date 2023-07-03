// Меню
let menu_toggle = document.querySelector(".menu__toggle");
let menu_list = document.querySelector(".menu-list");

if (menu_toggle) {
  menu_toggle.classList.remove("menu__toggle--nojs");

  menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("menu__toggle--close");
    menu_toggle.classList.toggle("menu__toggle--open");

    menu_list.classList.toggle("menu-list--open");
    menu_list.classList.toggle("menu-list--close");
  });
}

if (menu_list) {
  menu_list.classList.remove("menu-list--nojs");
}

// Слайдер
let slider_prev = document.querySelector(".slider__btn--prev");
let slider_next = document.querySelector(".slider__btn--next");

if (slider_next) {
  slider_next.addEventListener("click", () => {
    let current = document.querySelector(".coffee-list--active");
    let target = current.nextElementSibling;

    current.classList.remove("coffee-list--active");

    if (target) {
      target.classList.add("coffee-list--active");
    } else {
      target = current.closest(".slider__list").querySelector(".coffee-list");

      target.classList.add("coffee-list--active");
    }

    let current_active_pagination = document.querySelector(
      ".slider__pagination--active"
    );
    current_active_pagination.classList.remove("slider__pagination--active");
    document
      .querySelector(
        `.slider__pagination[data-index="${target.dataset.index}"]`
      )
      .classList.add("slider__pagination--active");
  });
}

if (slider_prev) {
  slider_prev.addEventListener("click", () => {
    let current = document.querySelector(".coffee-list--active");
    let target = current.previousElementSibling;

    current.classList.remove("coffee-list--active");

    if (target && target.classList.contains("coffee-list")) {
      target.classList.add("coffee-list--active");
    } else {
      target = current
        .closest(".slider__list")
        .querySelector(".coffee-list:last-child");

      target.classList.add("coffee-list--active");
    }

    let current_active_pagination = document.querySelector(
      ".slider__pagination--active"
    );
    current_active_pagination.classList.remove("slider__pagination--active");
    document
      .querySelector(
        `.slider__pagination[data-index="${target.dataset.index}"]`
      )
      .classList.add("slider__pagination--active");
  });
}

let slider_pagination_btns = document.querySelectorAll(".slider__pagination");

if (slider_pagination_btns.length) {
  slider_pagination_btns.forEach((item) => {
    item.addEventListener("click", (evt) => {
      let current = document.querySelector(".coffee-list--active");
      current.classList.remove("coffee-list--active");

      let current_active_pagination = document.querySelector(
        ".slider__pagination--active"
      );
      current_active_pagination.classList.remove("slider__pagination--active");
      item.classList.add("slider__pagination--active");

      let target = document.querySelector(
        `.coffee-list[data-index="${item.dataset.index}"]`
      );
      target.classList.add("coffee-list--active");
    });
  });
}

// Карта
let map = document.querySelector("#map");

if (map) {
  let custom_icon = L.icon({
    iconUrl: "./img/marker-icon.png",
    iconSize: [38, 50],
  });

  var leaflet_map = L.map("map").setView(
    [59.96964187097085, 30.307493428504607],
    13
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
  }).addTo(leaflet_map);

  L.marker([59.96964187097085, 30.307493428504607], {
    icon: custom_icon,
  }).addTo(leaflet_map);
}
