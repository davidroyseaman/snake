(function() {
  var Key, KeyCodes, KeyEvent,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Key = (function() {

    function Key(up, down) {
      this.up = up;
      this.down = down;
      if (!this.down) {
        this.down = "" + this.up + "_down";
        this.up = "" + this.up + "_up";
      }
    }

    return Key;

  })();

  KeyEvent = {
    'left': new Key('left'),
    'right': new Key('right'),
    'up': new Key('up'),
    'down': new Key('down')
  };

  KeyCodes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  Snake.KeyDispatcher = (function(_super) {

    __extends(KeyDispatcher, _super);

    function KeyDispatcher(element) {
      this.up = __bind(this.up, this);
      this.down = __bind(this.down, this);      console.log(element);
      element.addEventListener('keydown', this.down);
      element.addEventListener('keyup', this.up);
    }

    KeyDispatcher.prototype.down = function(e) {
      var _ref, _ref2;
      this.emit((_ref = KeyEvent[KeyCodes[e.keyCode]]) != null ? _ref.down : void 0);
      return console.log((_ref2 = KeyEvent[KeyCodes[e.keyCode]]) != null ? _ref2.down : void 0);
    };

    KeyDispatcher.prototype.up = function(e) {
      var _ref, _ref2;
      this.emit((_ref = KeyEvent[KeyCodes[e.keyCode]]) != null ? _ref.up : void 0);
      return console.log((_ref2 = KeyEvent[KeyCodes[e.keyCode]]) != null ? _ref2.up : void 0);
    };

    return KeyDispatcher;

  })(Snake.EventEmitter);

}).call(this);
