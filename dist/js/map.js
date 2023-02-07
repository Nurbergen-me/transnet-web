
// Yandex map

function toggleMenu(state) {
    var element = document.getElementById("hidden-menu");

    if (state === 'close') {
        element.classList.remove("active");
    } else {
        element.classList.toggle("active");
    }
}

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [53.836223, 60.626646],
            zoom: 4,
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            clusterize: false,
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    objectManager.objects.options.set({
        iconLayout: 'default#image',
        iconImageHref: 'dist/img/placemark.svg',
        iconImageSize: [32, 32],
        iconImageOffset: [-5, -38]
    });
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}

