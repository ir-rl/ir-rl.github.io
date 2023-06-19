window.HELP_IMPROVE_VIDEOJS = false;

var NUM_INTERP_FRAMES = 30;

// var interp_images = [];
function preloadInterpolationImages(image_path_base, images) {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    video_i = i * 50
    var INTERP_BASE = image_path_base // "./img/samples/ram/acc/seed1";
    var path = INTERP_BASE + '/video_' + String(video_i) + '.gif';
    images[i] = new Image();
    images[i].src = path;
  }
}

function setInterpolationImage(img_wrapper_id, i, images) {
  i = i / 50
  var image = images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#'+img_wrapper_id).empty().append(image);
}

var images_list1 = [];
var images_list2 = [];
var images_list3 = [];

function preloadImages() {
  var random_seed = document.getElementById("single-menu-seeds").value;

  var image_path_base = "./img/samples/ram/acc/seed" + String(random_seed);
  preloadInterpolationImages(image_path_base, images_list1);

  var image_path_base = "./img/samples/ram/clipped_log/seed" + String(random_seed);
  preloadInterpolationImages(image_path_base, images_list2);

  var image_path_base = "./img/samples/ram/clipped_linear/seed" + String(random_seed);
  preloadInterpolationImages(image_path_base, images_list3);
}

function setImages() {
  // RAM, accuracy-based
  var id1 = 'sliding-image-wrapper1';
  $('#slider1').on('input', function(event) {
    setInterpolationImage(id1, this.value, images_list1);
  });
  setInterpolationImage(id1, document.getElementById("slider1").value, images_list1);
  // $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

  // RAM, clipped log
  var id2 = 'sliding-image-wrapper2';
  $('#slider2').on('input', function(event) {
    setInterpolationImage(id2, this.value, images_list2);
  });
  setInterpolationImage(id2, document.getElementById("slider2").value, images_list2);

  // RAM, clipped linear
  var id3 = 'sliding-image-wrapper3';
  $('#slider3').on('input', function(event) {
    setInterpolationImage(id3, this.value, images_list3);
  });
  setInterpolationImage(id3, document.getElementById("slider3").value, images_list3);
}

function preloadAndSetImages() {
  // preload images
  preloadImages();
  setImages();

}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/

    preloadAndSetImages();
    bulmaSlider.attach();
})
