###
  The level class is loaded up with the url to an image file. The image file is used 
  to define what the level looks like, and how pathing works.

  The file is loaded into the canvas, and an imageData is pulled from it for reading.
  Rather than transforming the imageData into something more 'level like' I will simply 
  use a facade to make it behave more level like.
  (ImageData types are pretty fast, transforming the data on load may not give any benefit)
###
class Level
  constructor: (@level_image_url, @level_mask_url) ->
    console.log @level_image_url


###
  The LevelData class acts as a wrapper for the imageData object returned by the canvas.
###
class LevelData
  constructor: (@imageData, @maskData) ->
  mask: ({x,y}) ->
    return @maskData[(y*@width +x)]
  pathable: ({x,y}) ->
    return @mask({x,y})[0] == 0



Snake.Level = Level