function myEach(collection, callback){
    for (let element in collection){
        callback(collection[element])
    }
    return collection
}

function myMap(collection, callback){
    let newCollection = []
    for (let element in collection){
        newCollection.push(callback(collection[element]))
    }
    return newCollection

}

function myReduce(collection, callback, acc){
    let arr = Object.values(collection)
   // console.log(arr)

    let copy = [... arr]
    acc = acc || copy.shift()
    for (let element in copy){
        acc = callback(acc, copy[element], copy)
    }

    return acc
}

function myFind(collection, predicate){
    for (let element in collection){
        if (predicate(collection[element])){
            return collection[element]
        }
    }
}

function myFilter(collection, predicate){
    let array = []
    for (let element in collection){
        if (predicate(collection[element])){
            array.push(collection[element])
        }
    }
    return array
}

function mySize(collection){
    let i = 0
    for (let element in collection){
        i ++
    }
    return i
}

function myFirst(array, n=1){
   let arr = [...array]

    if (n === 1){
        return arr.shift()
    }
    else {
        arr = array.slice(0, n)
        return arr
    }
}

function myLast(array, n=1){
    let arr = [...array]

    if (n === 1){
        return arr.pop()
    }
    else {
        arr = array.slice(-n)
        return arr
    }
}

function myKeys(object){
    let arr = []
    for (let key in object){
        arr.push(key)
    }
    return arr
}

function myValues(object){
    let arr = []
    for (let key in object){
        arr.push(object[key])
    }
    return arr
}



// B O N U S
function mySortBy(array, callback){

//     Return value:
// A new array

// Behavior:
// Returns a sorted copy of array, ranked in ascending order by the results of running each value through callback. The values from the original array (not the transformed values) should be returned in the sorted copy, in ascending order by the value returned by callback.

}

function myFlatten(array, [shallow], newArr=[]){

// Parameter(s):
// an array
// a boolean value (optional)
// a new array (with an assigned default value of an empty array) that will contain the flattened elements

// Return value:
// The new array

// Behavior:
// Flattens a nested array (the nesting can be to any depth).
// If you pass true for the second argument, the array will only be flattened a single level.

}