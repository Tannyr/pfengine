"use strict";

const Key = (() => {
  var pressed = {}

  const Pressed = e => {
    pressed[e.key] = true;
  },
  Released = e => {
    delete pressed[e.key];
  }

  return {
    UP: "w",
    RIGHT: "d",
    DOWN: "s",
    LEFT: "a",

    isDown: key => {return pressed[key]},
    init: () => {
    //  Register Keyboard Event listeners
    window.addEventListener("keydown", Pressed)
    window.addEventListener("keyup", Released)
    }
  }
})()


