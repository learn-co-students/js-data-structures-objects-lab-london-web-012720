// Write your solution in this file!
const driver = {}; // this creates object of driver 



function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
    // using Object.assign and passing in empty object so it does not modify the original object 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
    //this is deleting the original driver object 
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign( {}, driver)
    delete newDriver[key];
    return newDriver
    //create a new object and deletes its key 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver 
    //deletes the original driver object
}