window.app.map = () => {

    ymaps.ready(init);

    function init(){
        let map = new ymaps.Map('map', {
            center: [66.099967,76.677345],
            zoom: 16,
        });

        let placemark = new ymaps.Placemark([66.099967,76.677345], {}, {
            iconLayout: 'default#image',
            iconImageHref: './assets/images/geo.svg',
            iconImageSize: [65, 70],
            iconImageOffset: [-20, -70]
        });

        

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        //map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил
        //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

        map.geoObjects.add(placemark);

        placemark.events.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', './assets/images/geo-hover.svg');
            e.get('target').options.set('iconImageSize', [74, 70]); //меняется ширина иконки
            e.get('target').options.set('iconImageOffset', [-25, -70]); //меняется позиционирование
        })
        placemark.events.add('mouseleave', function (e) {
            e.get('target').options.set('iconImageHref', './assets/images/geo.svg');
            e.get('target').options.set('iconImageSize', [65, 70]);
            e.get('target').options.set('iconImageOffset', [-20, -70]);
        });
    }
    

};

window.app.map();
