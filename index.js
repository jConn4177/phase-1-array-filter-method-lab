// Code your solution here
function findMatching(drivers, name) {
  const nameMatchMid = drivers.filter((driverName) => {
    return driverName.toLowerCase() === name.toLowerCase();
  });
  return nameMatchMid;
}

function fuzzyMatch(drivers, name) {
  const nameMatchSoft = drivers.filter((driverName) => {
    return driverName[0] === name[0];
  });
  return nameMatchSoft;
}

function matchName(drivers, name) {
  const nameMatchHard = drivers.filter((driver) => driver.name === name);
  return nameMatchHard;
}
