"use strict"

var Camera = () => {
	var 
  x = 0,
  y = 0,
	boundary = 20,
	order =  null,
	target = null,
	speed = null
  
	const 
  pan = (direction) => {
		if (direction == 'up'){y += speed}
		if (direction == 'down'){y -= speed}
		if (direction == 'left'){x += speed}
		if (direction == 'right'){x -= speed}
  },
	follow = (target) => {
		if ((target.y < Camera.topEdge() + boundary) && (Camera.topEdge() > 0)){pan('up', speed)}
		if ((target.y + target.size > Camera.bottomEdge() - boundary) && (Camera.bottomEdge() < Engine.getScene().getSceneHeight())){pan('down', speed)}
		if ((target.x < Camera.leftEdge() + boundary) && (Camera.leftEdge() > 0)){pan('left', speed)}
		if ((target.x + target.size > Camera.rightEdge() - boundary) && (Camera.rightEdge() < Engine.getScene().getSceneWidth())){pan('right', speed)}
  }

	return {
		getOffset: () => {return {x,y}},
		leftEdge: () => {return -x},
		rightEdge: () => {return -x + window.innerWidth},
		topEdge: () => {return -y},
		bottomEdge: () => {return -y + window.innerHeight},
		center: {
			x:() => {return (rightEdge() / 2)},
			y:() => {return (bottomEdge() / 2)}
    },
		setFollow: (followtarget) => {
			order = follow 
			target = followtarget
			speed = target.speed
			follow(target)
    },
	update: () => {order(target)}
	}
}
