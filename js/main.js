// Nav list
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');


navBtn.onclick = function () {
   navIcon.classList.toggle('nav-icon--active')
   nav.classList.toggle('header__top-row--mobile')
   document.body.classList.toggle('no-scroll');
}


// Phone Mask
mask('[data-telinput]'); 

// Удаляем "+" если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-telinput]');

phoneInputs.forEach((input) => {
   input.addEventListener('input', () => {
      if (input.value == '+') input.value = '';
   })

   input.addEventListener('blur', () => {
      if (input.value == '+') input.value = '';
   })
}) 

// YandexMap

initMap();

async function initMap() {
   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
   await ymaps3.ready;

   const {YMap, YMapDefaultSchemeLayer} = ymaps3;

   // Иницилиазируем карту
   const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),

      // Передаём параметры инициализации карты
      {
         location: {
               // Координаты центра карты
               center: [37.588144, 55.733842],

               // Уровень масштабирования
               zoom: 17
         }
      }
   );

   // Добавляем слой для отображения схематической карты
   map.addChild(new YMapDefaultSchemeLayer());

   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(myPlacemark);
}