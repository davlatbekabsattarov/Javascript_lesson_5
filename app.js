
let total_seconds=3*10;
let minutes=parseInt(total_seconds/60)
let seconds=parseInt(total_seconds%60)

function CheckTime()
{
    document.getElementById("time-left").innerHTML=`Time left: ${minutes} minutes ${seconds} seconds`
    if(total_seconds<=0)
    {
        setTimeout('()',1)
        alert("Afsuski yutqazdingiz")

    }
    else
    {
        total_seconds=total_seconds-1;
        minutes=parseInt(total_seconds/60);
        seconds=parseInt(total_seconds%60);
        setTimeout('CheckTime()',1000);

    }
}
setTimeout('CheckTime()',1000);


let wrapper=document.querySelector('.wrapper')
let hisoblash=0;

let savollar=[ 
    {
        savol:'Osmonning rangi qanaqa?',
        javob:'moviy'
    },
    {
        savol:'Javacriptdagi sikl operatorlaridan biri',
        javob:'while'
    }
]

let son=Math.floor(Math.random()*savollar.length);
console.log(savollar[son]);

let h1=document.createElement('h1');
h1.textContent=savollar[son].savol;
wrapper.append(h1);



let javob=savollar[son].javob.split('')
console.log(javob);
javob.forEach((h,i) => {
    let button=document.createElement('button')
    button.setAttribute('id',`b${i}`)
    button.style.width='15px'
    button.style.height='20px'
    button.style.textAlign='center'
    wrapper.append(button);
   

})



let alfavit=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let hr=document.createElement('button')
let imkoniyat=3;
wrapper.append(h1)
alfavit.forEach(h=>{
    let button=document.createElement('button')
    button.textContent=h
    button.style.textAlign='center'
    button.addEventListener('click',()=>{
        let index=javob.indexOf(h)

        if(index>=0)
        {
            let b=document.getElementById(`b${index}`)
            b.textContent=h
            console.log(`${h} harfi bor ekan`);
            hisoblash++
            if(hisoblash==javob.length)
            {
                alert("G'olib bo'ldingiz")
                
            }

        
        }
        else{
            console.log(`${h} harfi yo'q ekan`);
            imkoniyat--;
            console.log(`${imkoniyat} ta imkoniyatingniz qoldi!!!`);
            
            if(imkoniyat==0)
            {
                alert("Afsuski yutqazdingiz")
                return 0;
                
            }

        }
    }
    )
    wrapper.append(button)
})
