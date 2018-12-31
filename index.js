module.exports = function(arr){

  let newArr = [];
  let i = 0;
  let l = arr.length;
  for(i;i<l;i++){
    newArr.push( Object.keys(arr[i]).map(function(k) { return arr[i][k] }))
  }
  //csv convert
  let csv ="";
  newArr.forEach(function(element){
    let me = element.join(",");
    csv += me + "\n";
  })
  return csv;
}
