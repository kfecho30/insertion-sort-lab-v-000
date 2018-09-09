function findMinAndRemove(array){
  let min = array[0]
  for(let i = 0; i < array.length; i++){
    if(min > array[i]) {
      console.log(array.splice(i, 1))
    }
    return min
  }


}

function insertionSort(array){

}
