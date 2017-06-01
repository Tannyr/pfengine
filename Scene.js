"use strict"

const Scene = (id, backgroundURL, ...entities) => {
  var id = id,
      background = backgroundURL,
      entities = entities

  const collisionHasOccured = (e1, e2) => {
      if (e1.x() < e2.x() + e2.width() && e1.x() + e1.width() > e2.x() && e1.y() < e2.y() + e2.height() && e1.height() + e1.y() > e2.y()) return true
    }
  const collisionWithPlayer = entity => !isPlayer(entity) ? collisionHasOccured(entities.find(isPlayer), entity) : false
  const isPlayer = entity => entity.id == "player"

  const loadImage = entity => {entity.image(Loader.loadImage(entity.image)); return entity}

  const renderEntities = ctx => entities.forEach((entity) => entity.render(ctx))
  const renderBackground = ctx => ctx.drawImage(background, 0, 0)

  const hasAction = action  => {return typeof action == "function"}
  const hasUpdate = entity => hasAction(entity.update)
  const hasCollision = entity => hasAction(entity.collision)

  const updateEntity = entity => entity.update() 

  return {
    load: () => {
      background = Loader.loadImage(background)
      entities.forEach((entity) => {
        if (entity.image()){
          entity.image(Loader.loadImage(entity.image()))
        }
      }) 

      log('Finished queing all scene assets')
    },
    render: (ctx) => {
      renderBackground(ctx)
      renderEntities(ctx)
    },
    update: () => {
      entities
        .filter(hasUpdate)
        .map(updateEntity)
      entities
        .filter(hasCollision)
        .filter(collisionWithPlayer)
        .forEach((entity) => entity.collision())
    }
  }
}