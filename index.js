area = require('./areacalc')
const buildings = require('./buildingarea.json')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function userInput () {
  getNumber(
    'How many Constructors would you like to build? ',
    numConstructors => {
      getNumber('How many Smelters would you like to build? ', numSmelters => {
        getNumber('How many Miners would you like to build? ', numMiners => {
          rl.close()
          let totalarea = 0

          totalarea += addAreas(numConstructors, buildings.Constructor)
          totalarea += addAreas(numSmelters, buildings.Smeltery)
          totalarea += addAreas(numMiners, buildings.Miner)
          console.log('Your total area  needed is: ' + totalarea)
        })
      })
    }
  )
}

function addAreas (num, building) {
  let tempnumber = 0
  for (let i = 0; i < num; i++) {
    tempnumber += area(building)
  }
  return tempnumber
}

function getNumber (question, cb) {
  rl.question(question, answer => {
    if (isNaN(answer)) {
      console.log('please enter a number.')
      getNumber(question, cb)
    } else {
      cb(+answer)
    }
  })
}

userInput()
