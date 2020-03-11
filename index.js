let driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign({}, driver, {
        [key]: value
    })
};

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value;

    return driver;
}




function deleteFromDriverByKey(driver, key) {
    const driverNew = Object.assign({}, driver);
    delete driverNew[key];

    return driverNew;
};

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]

    return driver
}