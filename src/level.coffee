###
  The level class is loaded up with the url to an image file. The image file is used 
  to define what the level looks like, and how pathing works.

  The file is loaded into the canvas, and an imageData is pulled from it for reading.
  Rather than transforming the imageData into something more 'level like' I will simply 
  use a facade to make it behave more level like.
  (ImageData types are pretty fast, transforming the data on load may not give any benefit)
###

class Snake.Level extends Snake.EventEmitter
  constructor: (@level_image_url, @level_mask_url) ->
    console.log @level_image_url
    loadImageData @level_image_url


###
  The LevelData class acts as a wrapper for the imageData object returned by the canvas.
###
class LevelData
  constructor: (@imageData, @maskData) ->
  mask: ({x,y}) ->
    return @maskData[(y*@width +x)]
  pathable: ({x,y}) ->
    return @mask({x,y})[0] == 0


###
  Some helper functions for stuff that might need to be changed when moved to serverside
###
loadImageData = (url) ->
  # Extract Image data from the source images:
  img = document.createElement 'img'
  img.addEventListener 'load', ->
    console.log(img)
    console.log x for x of img

    console.log img.naturalWidth


  img.src = url

  #document.body.appendChild img

