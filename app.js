const keys=document.querySelectorAll('.key');
const range=document.querySelector('#audio-range');



range.addEventListener("input",()=>{
    console.log(range.value);
})

function playSound(newUrl){
    console.log('key clicked');
    let a=new Audio(newUrl);
    a.volume=(range.value)/10;
    a.play();
}

keys.forEach((key,i)=>{
    const number=((i < 9)?('0' + (i + 1)):(i + 1));
    const newUrl=`./24-piano-keys/key${number}.mp3`;
    key.addEventListener('click',()=>{
        console.log(newUrl);
        playSound(newUrl);
    });
})

