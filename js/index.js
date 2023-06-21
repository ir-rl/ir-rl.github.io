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

var images_list_ram_acc = [];
var images_list_ram_clipped_log = [];
var images_list_ram_clipped_linear = [];
var images_list_dt_ram_acc = [];
var images_list_dt_ram_clipped_log = [];
var images_list_dt_ram_clipped_linear = [];

function preloadImages_ram() {
    var random_seed_ram = document.getElementById("single-menu-seeds-ram").value;

    var image_path_base_ram_acc = "./img/samples/ram/acc/seed" + String(random_seed_ram);
    preloadInterpolationImages(image_path_base_ram_acc, images_list_ram_acc);

    var image_path_base_ram_clipped_log = "./img/samples/ram/clipped_log/seed" + String(random_seed_ram);
    preloadInterpolationImages(image_path_base_ram_clipped_log, images_list_ram_clipped_log);

    var image_path_base_ram_clipped_linear = "./img/samples/ram/clipped_linear/seed" + String(random_seed_ram);
    preloadInterpolationImages(image_path_base_ram_clipped_linear, images_list_ram_clipped_linear);
    
}
function preloadImages_dt_ram() {
    var random_seed_dt_ram = document.getElementById("single-menu-seeds-dt-ram").value;

    var image_path_base_dt_ram_acc = "./img/samples/dt-ram/acc/seed" + String(random_seed_dt_ram);
    preloadInterpolationImages(image_path_base_dt_ram_acc, images_list_dt_ram_acc);

    var image_path_base_dt_ram_clipped_log = "./img/samples/dt-ram/clipped_log/seed" + String(random_seed_dt_ram);
    preloadInterpolationImages(image_path_base_dt_ram_clipped_log, images_list_dt_ram_clipped_log);

    var image_path_base_dt_ram_clipped_linear = "./img/samples/dt-ram/clipped_linear/seed" + String(random_seed_dt_ram);
    preloadInterpolationImages(image_path_base_dt_ram_clipped_linear, images_list_dt_ram_clipped_linear);
}

function setImages_ram() {
    // RAM, accuracy-based
    var image_wrapper_id_ram_acc = 'sliding-image-wrapper-ram-acc';
    $('#slider-ram-acc').on('input', function(event) {
      setInterpolationImage(image_wrapper_id_ram_acc, this.value, images_list_ram_acc);
    });
    setInterpolationImage(image_wrapper_id_ram_acc, document.getElementById("slider-ram-acc").value, images_list_ram_acc);
    // $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    // RAM, clipped log
    var image_wrapper_id_ram_clipped_log = 'sliding-image-wrapper-ram-clipped-log';
    $('#slider-ram-clipped-log').on('input', function(event) {
      setInterpolationImage(image_wrapper_id_ram_clipped_log, this.value, images_list_ram_clipped_log);
    });
    setInterpolationImage(image_wrapper_id_ram_clipped_log, document.getElementById("slider-ram-clipped-log").value, images_list_ram_clipped_log);

    // RAM, clipped linear
    var image_wrapper_id_ram_clipped_linear = 'sliding-image-wrapper-ram-clipped-linear';
    $('#slider-ram-clipped-linear').on('input', function(event) {
      setInterpolationImage(image_wrapper_id_ram_clipped_linear, this.value, images_list_ram_clipped_linear);
    });
    setInterpolationImage(image_wrapper_id_ram_clipped_linear, document.getElementById("slider-ram-clipped-linear").value, images_list_ram_clipped_linear);
  }

function setImages_dt_ram() {
    // DT-RAM, accuracy-based
    var image_wrapper_id_dt_ram_acc = 'sliding-image-wrapper-dt-ram-acc';
    $('#slider-dt-ram-acc').on('input', function(event) {
      setInterpolationImage(image_wrapper_id_dt_ram_acc, this.value, images_list_dt_ram_acc);
    });
    setInterpolationImage(image_wrapper_id_dt_ram_acc, document.getElementById("slider-dt-ram-acc").value, images_list_dt_ram_acc);
    // $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    // DT-RAM, clipped log
    var image_wrapper_id_dt_ram_clipped_log = 'sliding-image-wrapper-dt-ram-clipped-log';
    $('#slider-dt-ram-clipped-log').on('input', function(event) {
      setInterpolationImage(image_wrapper_id_dt_ram_clipped_log, this.value, images_list_dt_ram_clipped_log);
    });
    setInterpolationImage(image_wrapper_id_dt_ram_clipped_log, document.getElementById("slider-dt-ram-clipped-log").value, images_list_dt_ram_clipped_log);

    // DT-RAM, clipped linear
    var image_wrapper_id_dt_ram_clipped_linear = 'sliding-image-wrapper-dt-ram-clipped-linear';
    $('#slider-dt-ram-clipped-linear').on('input', function(event) {
      setInterpolationImage(image_wrapper_id_dt_ram_clipped_linear, this.value, images_list_dt_ram_clipped_linear);
    });
    setInterpolationImage(image_wrapper_id_dt_ram_clipped_linear, document.getElementById("slider-dt-ram-clipped-linear").value, images_list_dt_ram_clipped_linear);
}

function preloadAndSetImages_ram() {
  preloadImages_ram();
  setImages_ram();
}

function preloadAndSetImages_dt_ram() {
  preloadImages_dt_ram();
  setImages_dt_ram();
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

    preloadAndSetImages_ram();
    preloadAndSetImages_dt_ram();
    bulmaSlider.attach();
})
