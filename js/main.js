// Burger

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header-content-right-burger').addEventListener('click', function () {
    document.querySelector('#header-content-right-menu').classList.toggle('is-active')
    document.querySelector('#header-content-right-burger').classList.toggle('is-active')
  })
})

// Swiper

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },

  effect: 'fade',
});

// Lazyload

lazyload();

// Accordion

$('.accordion').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  header: '> .accordion-item > .accordion-header',
});

//Maps

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.7591, 37.642], zoom: 17
  });

  myGeoObject = new ymaps.GeoObject({
    // Описание геометрии.
    geometry: {
      type: "Point",
      coordinates: [55.759137, 37.642860]
    },
    // Свойства.
    properties: {
      // Контент метки.
      iconContent: 'Учебный Центр "ИзиФизи"',
    }
  }, {
    // Опции.
    // Иконка метки будет растягиваться под размер ее содержимого.
    preset: 'islands#blackStretchyIcon',
  });

  myMap.geoObjects.add(myGeoObject);
}