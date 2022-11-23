type NumOrStr = number | string
type NumOrStrOrUn = NumOrStr | undefined
type ReIndexType = (arr: NumOrStrOrUn[]) => NumOrStr[]

const reIndex_ts: ReIndexType = (arr) => {
    const newArr: NumOrStr[] = []
    for ( let i = 0; i < arr.length; i += 1 ) {
        if (arr[i] !== undefined) newArr.push(arr[i]!)
    }
    return newArr
}

const deleteLastPosition_ts: ReIndexType = (arr) => {
    arr[arr.length - 1] = undefined
    return reIndex_ts(arr)
}

const nums_ts: NumOrStrOrUn[] = [1, 2, 3]
const newNums_ts = deleteLastPosition_ts(nums_ts)
console.log(newNums_ts)
