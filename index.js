// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return { ...driver, ...{ [key]: value } }
  // return Object.assign({}, driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
    const newObj = { ...driver }
   // const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
  }


  // DESTRUCTIVE UPDATE 
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

 // DESTRUCTIVE DELETE
  function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
  }