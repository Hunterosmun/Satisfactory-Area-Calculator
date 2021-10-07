area = require('./areacalc')
const buildings = require('./buildingarea.json')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function userInput () {
  const counts = {}
  for (const key in buildings) {
    counts[key] = await getNumber(`how many ${key} do you want? \n`)
  }
  //console.log(counts)
  rl.close()
  let totalarea = 0

  for (const key in buildings) {
    totalarea += counts[key] * area(buildings[key])
  }

  console.log('Your total area  needed is: ' + totalarea)
  let concreteNeeded = Math.ceil(totalarea / 64)
  console.log(`You will need ${concreteNeeded} concrete in order to make that.`)
  //concrete costs 6 and covers a 8x8 (64)
}

function getNumber (question) {
  return new Promise(function (resolve) {
    rl.question(question, answer => {
      if (isNaN(answer)) {
        console.log('please enter a number.')
        getNumber(question).then(resolve)
      } else {
        resolve(+answer)
      }
    })
  })
}

userInput()
