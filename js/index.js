
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


// Object counting
// var casesData = {'70': {'Case num.': 1, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Wrong (count more)'}, '60': {'Case num.': 2, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Wrong (count less)', 'Accuracy-based reward': 'Wrong (count less)'}, '35': {'Case num.': 3, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '56': {'Case num.': 4, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '53': {'Case num.': 5, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '48': {'Case num.': 6, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '54': {'Case num.': 7, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '66': {'Case num.': 8, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '97': {'Case num.': 9, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '38': {'Case num.': 10, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Guess correctly'}, '87': {'Case num.': 11, 'Clipped linear reward': 'Wrong (count more)', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '45': {'Case num.': 12, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '89': {'Case num.': 13, 'Clipped linear reward': 'Wrong (count more)', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Wrong (count more)'}, '99': {'Case num.': 14, 'Clipped linear reward': 'Wrong (count less)', 'Clipped logarithmic reward': 'Wrong (count less)', 'Accuracy-based reward': 'Wrong (count less)'}, '67': {'Case num.': 15, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Guess correctly'}, '80': {'Case num.': 16, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '86': {'Case num.': 17, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '79': {'Case num.': 18, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Guess correctly'}, '63': {'Case num.': 19, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '12': {'Case num.': 20, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '29': {'Case num.': 21, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '20': {'Case num.': 22, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Good'}, '94': {'Case num.': 23, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '76': {'Case num.': 24, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '71': {'Case num.': 25, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '31': {'Case num.': 26, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Wrong (count more)'}, '52': {'Case num.': 27, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '75': {'Case num.': 28, 'Clipped linear reward': 'Guess correctly', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Guess correctly'}, '51': {'Case num.': 29, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '34': {'Case num.': 30, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Guess correctly'}, '43': {'Case num.': 31, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Wrong (count less)', 'Accuracy-based reward': 'Wrong (count less)'}, '93': {'Case num.': 32, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Wrong (count less)'}, '16': {'Case num.': 33, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Wrong (count less)'}, '39': {'Case num.': 34, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Guess correctly'}, '27': {'Case num.': 35, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Wrong (count more)'}, '98': {'Case num.': 36, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Wrong (count more)', 'Accuracy-based reward': 'Wrong (count less)'}, '73': {'Case num.': 37, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Wrong (count less)'}, '50': {'Case num.': 38, 'Clipped linear reward': 'Wrong (count less)', 'Clipped logarithmic reward': 'Wrong (count less)', 'Accuracy-based reward': 'Wrong (count less)'}, '32': {'Case num.': 39, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Wrong (count less)'}, '49': {'Case num.': 40, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Wrong (count less)', 'Accuracy-based reward': 'Guess correctly'}, '65': {'Case num.': 41, 'Clipped linear reward': 'Wrong (count more)', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Wrong (count more)'}, '24': {'Case num.': 42, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Wrong (count less)'}, '95': {'Case num.': 43, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '68': {'Case num.': 44, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '18': {'Case num.': 45, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Wrong (count less)', 'Accuracy-based reward': 'Wrong (count less)'}, '82': {'Case num.': 46, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '72': {'Case num.': 47, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '88': {'Case num.': 48, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Good'}, '59': {'Case num.': 49, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Good', 'Accuracy-based reward': 'Guess correctly'}, '78': {'Case num.': 50, 'Clipped linear reward': 'Good', 'Clipped logarithmic reward': 'Guess correctly', 'Accuracy-based reward': 'Guess correctly'}};
// meta data of the 50 cases
var casesData = {
'70': {'case number': 1, 'goal object': 'cube_medium_red ', 'lable': 3, 'linear prediction': 3, 'linear comment': 'Good', 'log prediction': 3, 'log comment': 'Good', 'acc prediction': 4, 'acc comment': 'Wrong'}, 
'60': {'case number': 2, 'goal object': 'cube_small_blue ', 'lable': 5, 'linear prediction': 5, 'linear comment': 'Good', 'log prediction': 4, 'log comment': 'Wrong', 'acc prediction': 4, 'acc comment': 'Wrong'}, 
'35': {'case number': 3, 'goal object': 'cube_medium_red ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'56': {'case number': 4, 'goal object': 'cube_medium_red ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'53': {'case number': 5, 'goal object': 'cube_small_red ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Guess correctly'}, 
'48': {'case number': 6, 'goal object': 'cube_small_blue ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'54': {'case number': 7, 'goal object': 'cube_medium_blue ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Guess correctly'}, 
'66': {'case number': 8, 'goal object': 'cube_medium_blue ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Guess correctly'}, 
'97': {'case number': 9, 'goal object': 'cube_small_blue ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Guess correctly'}, 
'38': {'case number': 10, 'goal object': 'cube_medium_blue ', 'lable': 5, 'linear prediction': 5, 'linear comment': 'Good', 'log prediction': 5, 'log comment': 'Guess correctly', 'acc prediction': 5, 'acc comment': 'Guess correctly'}, 
'87': {'case number': 11, 'goal object': 'cube_small_blue ', 'lable': 0, 'linear prediction': 1, 'linear comment': 'Wrong', 'log prediction': 0, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Good'}, 
'45': {'case number': 12, 'goal object': 'cube_small_blue ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Guess correctly'}, 
'89': {'case number': 13, 'goal object': 'cube_small_red ', 'lable': 0, 'linear prediction': 1, 'linear comment': 'Wrong', 'log prediction': 0, 'log comment': 'Guess correctly', 'acc prediction': 1, 'acc comment': 'Wrong'}, 
'99': {'case number': 14, 'goal object': 'cube_small_blue ', 'lable': 3, 'linear prediction': 2, 'linear comment': 'Wrong', 'log prediction': 2, 'log comment': 'Wrong', 'acc prediction': 2, 'acc comment': 'Wrong'}, 
'67': {'case number': 15, 'goal object': 'cube_medium_blue ', 'lable': 4, 'linear prediction': 4, 'linear comment': 'Good', 'log prediction': 4, 'log comment': 'Guess correctly', 'acc prediction': 4, 'acc comment': 'Guess correctly'}, 
'80': {'case number': 16, 'goal object': 'cube_small_blue ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Good'}, 
'86': {'case number': 17, 'goal object': 'cube_medium_red ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Guess correctly'}, 
'79': {'case number': 18, 'goal object': 'cube_small_blue ', 'lable': 3, 'linear prediction': 3, 'linear comment': 'Good', 'log prediction': 3, 'log comment': 'Guess correctly', 'acc prediction': 3, 'acc comment': 'Guess correctly'}, 
'63': {'case number': 19, 'goal object': 'cube_small_red ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Good'}, 
'12': {'case number': 20, 'goal object': 'cube_medium_blue ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Good'}, 
'29': {'case number': 21, 'goal object': 'cube_medium_blue ', 'lable': 3, 'linear prediction': 3, 'linear comment': 'Good', 'log prediction': 3, 'log comment': 'Good', 'acc prediction': 3, 'acc comment': 'Guess correctly'}, 
'20': {'case number': 22, 'goal object': 'cube_medium_blue ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Guess correctly', 'acc prediction': 0, 'acc comment': 'Good'}, 
'94': {'case number': 23, 'goal object': 'cube_small_red ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Guess correctly'}, 
'76': {'case number': 24, 'goal object': 'cube_small_red ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Good'}, 
'71': {'case number': 25, 'goal object': 'cube_medium_red ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'31': {'case number': 26, 'goal object': 'cube_small_red ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Guess correctly', 'acc prediction': 1, 'acc comment': 'Wrong'}, 
'52': {'case number': 27, 'goal object': 'cube_medium_red ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'75': {'case number': 28, 'goal object': 'cube_small_blue ', 'lable': 6, 'linear prediction': 6, 'linear comment': 'Guess correctly', 'log prediction': 6, 'log comment': 'Guess correctly', 'acc prediction': 6, 'acc comment': 'Guess correctly'}, 
'51': {'case number': 29, 'goal object': 'cube_small_red ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Good'}, 
'34': {'case number': 30, 'goal object': 'cube_small_red ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Guess correctly', 'acc prediction': 0, 'acc comment': 'Guess correctly'}, 
'43': {'case number': 31, 'goal object': 'cube_medium_blue ', 'lable': 5, 'linear prediction': 5, 'linear comment': 'Good', 'log prediction': 5, 'log comment': 'Wrong', 'acc prediction': 5, 'acc comment': 'Wrong'}, 
'93': {'case number': 32, 'goal object': 'cube_small_red ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Wrong'}, 
'16': {'case number': 33, 'goal object': 'cube_small_blue ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Wrong'}, 
'39': {'case number': 34, 'goal object': 'cube_small_red ', 'lable': 0, 'linear prediction': 0, 'linear comment': 'Good', 'log prediction': 0, 'log comment': 'Guess correctly', 'acc prediction': 0, 'acc comment': 'Guess correctly'}, 
'27': {'case number': 35, 'goal object': 'cube_small_red ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Guess correctly', 'acc prediction': 3, 'acc comment': 'Wrong'}, 
'98': {'case number': 36, 'goal object': 'cube_small_red ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Wrong', 'acc prediction': 0, 'acc comment': 'Wrong'}, 
'73': {'case number': 37, 'goal object': 'cube_small_blue ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Wrong'}, 
'50': {'case number': 38, 'goal object': 'cube_medium_red ', 'lable': 2, 'linear prediction': 1, 'linear comment': 'Wrong', 'log prediction': 1, 'log comment': 'Wrong', 'acc prediction': 1, 'acc comment': 'Wrong'}, 
'32': {'case number': 39, 'goal object': 'cube_medium_red ', 'lable': 3, 'linear prediction': 3, 'linear comment': 'Good', 'log prediction': 3, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Wrong'}, 
'49': {'case number': 40, 'goal object': 'cube_small_red ', 'lable': 4, 'linear prediction': 4, 'linear comment': 'Good', 'log prediction': 3, 'log comment': 'Wrong', 'acc prediction': 4, 'acc comment': 'Guess correctly'}, 
'65': {'case number': 41, 'goal object': 'cube_small_blue ', 'lable': 3, 'linear prediction': 4, 'linear comment': 'Wrong', 'log prediction': 3, 'log comment': 'Guess correctly', 'acc prediction': 4, 'acc comment': 'Wrong'}, 
'24': {'case number': 42, 'goal object': 'cube_small_blue ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 0, 'acc comment': 'Wrong'}, 
'95': {'case number': 43, 'goal object': 'cube_medium_red ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Guess correctly'}, 
'68': {'case number': 44, 'goal object': 'cube_small_blue ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'18': {'case number': 45, 'goal object': 'cube_small_red ', 'lable': 3, 'linear prediction': 3, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Wrong', 'acc prediction': 2, 'acc comment': 'Wrong'}, 
'82': {'case number': 46, 'goal object': 'cube_small_red ', 'lable': 3, 'linear prediction': 3, 'linear comment': 'Good', 'log prediction': 3, 'log comment': 'Good', 'acc prediction': 3, 'acc comment': 'Guess correctly'}, 
'72': {'case number': 47, 'goal object': 'cube_medium_red ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'88': {'case number': 48, 'goal object': 'cube_medium_blue ', 'lable': 1, 'linear prediction': 1, 'linear comment': 'Good', 'log prediction': 1, 'log comment': 'Good', 'acc prediction': 1, 'acc comment': 'Good'}, 
'59': {'case number': 49, 'goal object': 'cube_medium_blue ', 'lable': 2, 'linear prediction': 2, 'linear comment': 'Good', 'log prediction': 2, 'log comment': 'Good', 'acc prediction': 2, 'acc comment': 'Guess correctly'}, 
'78': {'case number': 50, 'goal object': 'cube_small_blue ', 'lable': 4, 'linear prediction': 4, 'linear comment': 'Good', 'log prediction': 4, 'log comment': 'Guess correctly', 'acc prediction': 4, 'acc comment': 'Guess correctly'}}

// build a dict for keys of casesData
var casesDataKeys = {};
for (var key in casesData){
  casesDataKeys[String(casesData[key]['case number'])] = key;
}

function preloadInterpolationImagesObjCounting(image_path_base, images) {
  for (var i = 0; i < 50; i++) {
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    video_i = i + 1
    var base = image_path_base // "./img/samples/ram/acc/seed1";
    var path = base + '/obs_video_' + String(casesDataKeys[video_i]) + '_' + String(video_i) + '.gif';
    console.log(path)
    images[i] = new Image();
    images[i].src = path;
  }
}
function setInterpolationImageObjCounting(img_wrapper_id, i, images) {
  var image = images[i-1];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#'+img_wrapper_id).empty().append(image);
}

var images_list_obj_counting_acc = [];
var images_list_obj_counting_clipped_log = [];
var images_list_obj_counting_clipped_linear= [];

function preloadImagesObjCounting() {
    // var random_seed_ram = document.getElementById("single-menu-seeds-ram").value;
    var image_path_base_obj_counting_acc = "./img/samples/object-counting/acc/seed1"
    preloadInterpolationImagesObjCounting(image_path_base_obj_counting_acc, images_list_obj_counting_acc);

    var image_path_base_obj_counting_clipped_log = "./img/samples/object-counting/clipped_log/seed1"
    preloadInterpolationImagesObjCounting(image_path_base_obj_counting_clipped_log, images_list_obj_counting_clipped_log);

    var image_path_base_obj_counting_clipped_linear = "./img/samples/object-counting/clipped_linear/seed1"
    preloadInterpolationImagesObjCounting(image_path_base_obj_counting_clipped_linear, images_list_obj_counting_clipped_linear);
    
}

function setCaseIntroText(i) {
  goalObj = casesData[casesDataKeys[i]]['goal object']
  lable = casesData[casesDataKeys[i]]['lable']
	document.getElementById('text-goal').innerHTML = "<b>Goal object</b>: " + String(goalObj);
	document.getElementById('text-label').innerHTML = "<b>Ground-truth label</b>: " + String(lable)
}

function getColor(comment) {
  if (comment == "Good") {
    textColor = "#009933"
  } else if (comment == "Wrong") {
    textColor = "#ff0000"
  } else {
    textColor = "#ff9900"
  }

  return textColor;
}

function setCasePredText(i) {
  linearPred = casesData[casesDataKeys[i]]['linear prediction']
  linearComment = casesData[casesDataKeys[i]]['linear comment']
  logPred = casesData[casesDataKeys[i]]['log prediction']
  logComment = casesData[casesDataKeys[i]]['log comment']
  accPred = casesData[casesDataKeys[i]]['acc prediction']
  accComment = casesData[casesDataKeys[i]]['acc comment']
  
  // get text color
  linearColor = getColor(linearComment)
  logColor = getColor(logComment)
  accColor = getColor(accComment)

  // set color and text
  document.getElementById('text-linear-pred').style.color = linearColor;
  document.getElementById('text-log-pred').style.color = logColor;
  document.getElementById('text-acc-pred').style.color = accColor;
	document.getElementById('text-linear-pred').innerHTML = "Prediction: " + String(linearPred) + "<br>" + String(linearComment);
	document.getElementById('text-log-pred').innerHTML = "Prediction: " + String(logPred) + "<br>" + String(logComment);
	document.getElementById('text-acc-pred').innerHTML = "Prediction: " + String(accPred) + "<br>" + String(accComment);
}

function setImagesObjCounting() {
    // clipped linear
    var image_wrapper_id_obj_counting_clipped_linear = 'sliding-image-wrapper-obj-counting-clipped-linear';
    setInterpolationImageObjCounting(image_wrapper_id_obj_counting_clipped_linear, document.getElementById("slider-obj-counting").value, images_list_obj_counting_clipped_linear);

    // clipped log
    var image_wrapper_id_obj_counting_clipped_log = 'sliding-image-wrapper-obj-counting-clipped-log';
    setInterpolationImageObjCounting(image_wrapper_id_obj_counting_clipped_log, document.getElementById("slider-obj-counting").value, images_list_obj_counting_clipped_log);

    // accuracy-based
    var image_wrapper_id_obj_counting_acc = 'sliding-image-wrapper-obj-counting-acc';
    setInterpolationImageObjCounting(image_wrapper_id_obj_counting_acc, document.getElementById("slider-obj-counting").value, images_list_obj_counting_acc);

    // show the sample information text and prediction text
    setCaseIntroText(1)
    setCasePredText(1)

    // update images and the sample information text when sliding the slider
    $('#slider-obj-counting').on('input', function(event) {
      setInterpolationImageObjCounting(image_wrapper_id_obj_counting_clipped_linear, this.value, images_list_obj_counting_clipped_linear);
      setInterpolationImageObjCounting(image_wrapper_id_obj_counting_clipped_log, this.value, images_list_obj_counting_clipped_log);
      setInterpolationImageObjCounting(image_wrapper_id_obj_counting_acc, this.value, images_list_obj_counting_acc);
      setCaseIntroText(this.value)
      setCasePredText(this.value)
    });

  }

function preloadAndSetImagesObjCounting() {
  preloadImagesObjCounting();
  setImagesObjCounting();
}


// Main 
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
    preloadAndSetImagesObjCounting();
    bulmaSlider.attach();
})
