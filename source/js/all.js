/*setting #googlemap*/ 
var map;
function initMap () {
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 24.9948, lng: 121.4875},
    zoom: 15,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]
  });
  var maker = new google.maps.Marker({
    map: map,
    position:{lat: 24.9948, lng: 121.4875}
  });
}
/*setting owl-carousel*/

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 25,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: {items: 3},
      992: { items: 4 }
    }
  });
});

/*setting content*/

$(document).ready(function(){
//切換文字
  let i = true;
  let blinkText = () => {
    if(i){
      $('.blinkText').text("Path to becoming a frontend developer").fadeIn(800).delay(2000).fadeOut(800);
      i = !i;
    }else {
      $('.blinkText').text("Click arrow to know about me").fadeIn(800).delay(2000).fadeOut(800);
      i = !i;
    }
  }
  setInterval(blinkText, 4000);
//移至錨點

  $('.arrow-down a').click(function(e){
    e.preventDefault(); 
    let navOffset =  $('nav#navbar').offset().top;           
    $('html, body').animate({scrollTop : navOffset}, 800);
  });

  $('.links a, .navbar a').click(function(e){
    e.preventDefault();
    let offset = $($(this).attr('href')).offset().top
    $('html, body').stop().animate({scrollTop : offset}, 800);
  });

//判斷高度

  $(window).scroll(function(){
    //導覽列固定
    if ($(window).scrollTop() >= $('#content').offset().top) {
      $("#sidebar").show();
      $('#navbar').addClass('fixed');
    } else {
      $("#sidebar").hide();
      $('#navbar').removeClass('fixed');
    }

    //標題動畫
    if ($(window).scrollTop() >= $('#about').offset().top - 200) {
      $('#about .js-title').addClass('bounce');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 200) {
      $('#skills .js-title').addClass('rotate');
      $('#skills .progress-right').addClass('run');
      $('#skills .progress').eq(0).addClass('red');
      $('#skills .progress').eq(1).addClass('orange');
      $('#skills .progress').eq(2).addClass('yellow');
    }
    if ($(window).scrollTop() >= $('#otherskills').offset().top - 200) {
      $('#otherskills .js-title h2, #otherskills .js-title p').addClass('tracking');
    }
    if ($(window).scrollTop() >= $('#portfolio').offset().top - 200) {
      $('#portfolio .js-title').addClass('slide-down');
    }
    if ($(window).scrollTop() >= $('#contact').offset().top - 200) {
      $('#contact .js-title').addClass('bounce');
      $('.contact-form').addClass('slide-left');
      $('.map').addClass('slide-right');
    }
  });
});