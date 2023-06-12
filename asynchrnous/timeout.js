const work =()=>{
    console.log('Let us work');
}
work()

const remainder=() =>{
    console.log('Please attend the meeting');
}
setTimeout(remainder,4000)
setInterval(work,1000)

const takeBreak=() =>{
    console.log('Please rest!');
}
takeBreak();
