// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key,value){
    // let neww = {...driver}
    //     neww[key] = value
        return Object.assign({}, driver, { [key]:value } );
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
driver[key] = value
return driver
}

function deleteFromDriverByKey(driver, key){

    let newD = {...driver}
delete newD[key]
return newD
}

// updateDriverWithKeyAndValue(driver, key,value)

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
     
}