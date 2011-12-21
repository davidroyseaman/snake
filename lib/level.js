
/*
  The level class is loaded up with the url to an image file. The image file is used 
  to define what the level looks like, and how pathing works.

  The file is loaded into the canvas, and an imageData is pulled from it for reading.
  Rather than transforming the imageData into something more 'level like' I will simply 
  use a facade to make it behave more level like.
  (ImageData types are pretty fast, transforming the data on load may not give any benefit)
*/

(function() {
  var LevelData, loadImageData,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Snake.Level = (function(_super) {

    __extends(Level, _super);

    function Level(level_image_url, level_mask_url) {
      this.level_image_url = level_image_url;
      this.level_mask_url = level_mask_url;
      console.log(this.level_image_url);
      loadImageData(this.level_image_url);
    }

    return Level;

  })(Snake.EventEmitter);

  /*
    The LevelData class acts as a wrapper for the imageData object returned by the canvas.
  */

  LevelData = (function() {

    function LevelData(imageData, maskData) {
      this.imageData = imageData;
      this.maskData = maskData;
    }

    LevelData.prototype.mask = function(_arg) {
      var x, y;
      x = _arg.x, y = _arg.y;
      return this.maskData[y * this.width(+x)];
    };

    LevelData.prototype.pathable = function(_arg) {
      var x, y;
      x = _arg.x, y = _arg.y;
      return this.mask({
        x: x,
        y: y
      })[0] === 0;
    };

    return LevelData;

  })();

  /*
    Some helper functions for stuff that might need to be changed when moved to serverside
  */

  loadImageData = function(url) {
    var img;
    img = document.createElement('img');
    img.addEventListener('load', function() {
      var x;
      console.log(img);
      for (x in img) {
        console.log(x);
      }
      return console.log(img.naturalWidth);
    });
    return img.src = url;
  };

}).call(this);
