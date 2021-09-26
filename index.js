// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = () => drivers.slice(2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
    const multiplier = function () {
        return fare * 2
        
    }
    fare()
    return multiplier
    
}