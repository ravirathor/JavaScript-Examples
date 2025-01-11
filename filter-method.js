var filter = function(arr, fn) {
   const filteredArr = [];
   for(let i=0; i<arr.length;i++){
    if(fn(arr[i],i)){
        filteredArr.push(arr[i])
    }
    
   }
   return filteredArr;
};
const fn= (num,index) => num%2==0;
