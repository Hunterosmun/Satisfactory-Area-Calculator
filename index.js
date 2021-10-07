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
    counts[key] = await getNumber(`how many ${key} do you want?`)
  }
  //console.log(counts)
  rl.close()
  let totalarea = 0

  totalarea += addAreas(counts.Constructors, buildings.Constructors)
  totalarea += addAreas(counts.Smelteries, buildings.Smelteries)
  totalarea += addAreas(counts.Miners, buildings.Miners)

  console.log('Your total area  needed is: ' + totalarea)
}

function addAreas (num, building) {
  let tempnumber = 0
  for (let i = 0; i < num; i++) {
    tempnumber += area(building)
  }
  return tempnumber
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
