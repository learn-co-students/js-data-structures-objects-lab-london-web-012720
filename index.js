// Write your solution in this file!
const driver = {name: 'bruno'}; // this creates object of driver 

console.log(updateDriverWithKeyAndValue(driver, "age", 21))
console.log(destructivelyDeleteFromDriverByKey(driver, "name"))
console.log(deleteFromDriverByKey(driver, "name"))
console.log(destructivelyUpdateDriverWithKeyAndValue(driver, "age", 25))

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
//     const newDriver = { ...driver}
//     delete newDriver[key];
//     return newDriver
// }
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver 
    //deletes the original driver object
}