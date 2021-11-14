function slowDown(velocity, printer){
  let deceleration = 20

  while (velocityy > 0) {
    printer(velocity)
    velocity -= deceleration
  }

  alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity){
  console.log("Velocidade atual: " + velocity)
})