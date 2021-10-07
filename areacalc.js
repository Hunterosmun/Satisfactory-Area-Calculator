const buildings = require('./buildingarea.json')

function getarea (building) {
  let base = building[0] * building[1]
  return base
}
console.log(
  2 * getarea(buildings.Constructor) + 3 * getarea(buildings.Smeltery)
)
