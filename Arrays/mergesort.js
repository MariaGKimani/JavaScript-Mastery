function dividesArray(arr){
    if(arr.length <= 1){
        return arr;
    };
    let middle =Math.floor(arr.length / 2);
    let left = arr.slice(0,middle);
    let right =arr.slice(middle);
    console.log({left});
    console.log({right});
    
    return sortArray(dividesArray(left),dividesArray(right));
}
function sortArray(left,right){
    let emptyArray =[];
    while(left.length && right.length){
        if(right[0] < left[0]){
            emptyArray.push(right.shift());
        }else{
            emptyArray.push(left.shift());
        }
    }
    console.log({emptyArray})
    return[... emptyArray,...left, ...right]
}

let arr =[2,10,3,26,15,11,4];
console.log(dividesArray(arr));