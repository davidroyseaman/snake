class Key
  constructor: (@up, @down) ->
    unless @down
      @down = "#{@up}_down"
      @up = "#{@up}_up"

KeyEvent =
  'left': new Key 'left'
  'right': new Key 'right'
  'up': new Key 'up'
  'down': new Key 'down'
KeyCodes =
  37: 'left'
  38: 'up'
  39: 'right'
  40: 'down'

class Snake.KeyDispatcher extends Snake.EventEmitter
  constructor: (element) ->
    console.log element
    element.addEventListener 'keydown', @down
    element.addEventListener 'keyup', @up
  down: (e) =>
    @emit (KeyEvent[ KeyCodes[ e.keyCode ] ])?.down
    console.log (KeyEvent[ KeyCodes[ e.keyCode ] ])?.down
  up: (e) =>
    @emit (KeyEvent[ KeyCodes[ e.keyCode ] ])?.up
    console.log (KeyEvent[ KeyCodes[ e.keyCode ] ])?.up