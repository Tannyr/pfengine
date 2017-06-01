"use strict"

const log = (...arguements) => arguements.forEach((arguement) => {console.log(arguement); return})

const Engine = (() => {
	var initialized = false, 
	current_scene = null,
	ctx = null

	const clearScreen = context => context.clearRect(0, 0, window.innerWidth, window.innerHeight)
	const createCanvas = (id, width = 800, height = 600) => document.body.appendChild(Object.assign(document.createElement("canvas"),{id: id, width: width, height: height}))

	const loop = () => {
	  clearScreen(ctx)
	  current_scene.render(ctx)
	  current_scene.update()
	  window.requestAnimationFrame(loop)
	}

	const init = () => {
  		Key.init()
  		ctx = createCanvas("game", window.innerWidth, window.innerHeight).getContext("2d")
  		log('Engine Initialized')
	}

	return {
		loadScene: (s) => {
		  if (!initialized) init()
		  current_scene = s
		  current_scene.load(ctx)
		  loop()
		}
	}
})()





