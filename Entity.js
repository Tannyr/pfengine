"use strict";

const Entity = function(id, xpos, ypos, width, height, speed, imageURL, eventsObj) {
  var x = xpos,
      y = ypos,
      width = width,
      height = height,
      speed = speed,
      image = imageURL

  return {
    id: id,
    speed: () => speed,
    x: val => val ? x = val : x,
    y: val => val ? y = val : y,
    width: () => width,
    height: () => height,
    image: val => val ? image = val : image,

    move: direction => {
      if (direction == "up") y -= speed
      if (direction == "down") y += speed
      if (direction == "left") x -= speed
      if (direction == "right") x += speed
    },
    render: (ctx) => {
      image ? ctx.drawImage(image, x, y): ctx.fillRect(x,y,width,height)

    },
    collision: eventsObj.collision,
    update: eventsObj.update
  }
}