type InsertLastPosition = <T extends number | string>(arr: T[], val: T) => void

const insertLastPosition_ts: InsertLastPosition = (arr, val) => {
    const len = arr.length;    
    arr[len] = val
}

const nums: number[] = [1, 2, 3]
insertLastPosition_ts(nums, 4)
console.log(nums) // [1, 2, 3, 4]


