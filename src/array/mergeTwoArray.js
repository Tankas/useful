
// 合并两个数组, 生序排列

const a = [1,2,3]

const b = [1]

const sp = (arr, m) => {
  for (let i = m; i < arr.length; i++ ) {
    arr[i] = undefined
  }
}
const merge  = (arr1, m, arr2 , n) => {
  const map = {}
  let index1 = 0; // a的索引
  let index2 = 0; // b的索引
  // 先修剪
  sp(arr1, m)
  sp(arr2, n)
  if (arr1.length === 1 && arr1[0] === 0) {
    arr1[0] = undefined
  }

  for (let i = 0; i < (m + n); i++) {
    if (arr1[index1] === undefined) {
      map[i] = arr2[index2]
      index2++
    } else if (arr2[index2] === undefined) {
      map[i] = arr1[index1]
      index1++
    }else if (arr1[index1] > arr2[index2]) {
      map[i] = arr2[index2]
      index2++
    } else {
      map[i] = arr1[index1]
      index1++
    }
  }

  for (let i = 0; i < (m + n); i++) {
    arr1[i] = map[i]
  }  

  console.log(arr1)
  return arr1
}

export default merge