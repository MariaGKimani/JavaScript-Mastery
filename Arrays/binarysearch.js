//given an array of numbers search for the following target and return -1 of notfound
//else the index
function binary(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;

    console.log({leftIndex});
    console.log("right1",rightIndex);
 //leftside is always lesser than right 
 //while loop  
    while( leftIndex <=rightIndex){
        console.log("left2",leftIndex);
        console.log("right2",rightIndex);
        //leftand right should always in brackets
        let middle = Math.floor(( leftIndex + rightIndex)/2);
        if(arr[middle] === target){
            return middle;
        }else if(arr[middle] > target){
            rightIndex = middle-1;
        }else{
             leftIndex = middle + 1;
        }
    }
    return -1;
}
let num =[1,3,6,8,9,56,89];
let target =9;
console.log(binary(num,target));