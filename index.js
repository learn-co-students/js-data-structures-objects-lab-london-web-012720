// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    // Alternate using ES6 Spread operators:
    return { ...driver, ...{ [key]: value } };
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
  }
  
  function deleteFromDriverByKey(driver, key) {
    // Alternate using ES6 Spread operators:
    const newObj = { ...driver }
  
    delete newObj[key];
  
    return newObj;
  }
  
  function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }