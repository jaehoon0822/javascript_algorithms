type strOrNum = string | number
type strOrNumOrUn = strOrNum | undefined
type deleteFnType = <T extends strOrNumOrUn[]>(arr: T) => strOrNum[] 

const reIndex_ts2: deleteFnType = (arr) => {
    const newArr: strOrNum[] = [] 
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== undefined) newArr.push(arr[i]!)
    }
    return newArr
}

const deleteFirstPosition_ts: deleteFnType = (arr) => {
    arr[0] = undefined
    return reIndex_ts2(arr)
}

const nums2 = [1, 2, 3]
const newNums2 = deleteFirstPosition_ts(nums2)
console.log(newNums2) // [2, 3]
