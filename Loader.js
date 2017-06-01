"use strict";

const Loader = (() => {
  let images = 0,
      loadedImages = 0

  const loadingIsComplete =  () => loadedImages == images
  const updateLoadScreen = () => log("Loaded an item!  That makes " + loadedImages)

  return {
    loadImage: (imageurl) => {
      images++
      var img = Object.assign(new Image(), {src: imageurl})
      img.onload = () => {
        loadedImages++
        updateLoadScreen()
        if (loadingIsComplete()) {
          log("Loading Complete.  Images loaded: " + loadedImages)
        }
    }
    return img
  }
}})()
