document.getElementsByClassName('button')[0].addEventListener('click', ()=>{
    let moneyVal = Number(document.getElementById('money').textContent);
    let bettingVal = Number(document.getElementById('betting').value);
    if(bettingVal>moneyVal){
        alert('베팅금이 보유액보다 많습니다.');
    }else{
        let random = Math.floor(Math.random()*10 + 1);
        if(random<=5){
            document.getElementById('money').textContent = moneyVal + bettingVal
        }else{
            document.getElementById('money').textContent = moneyVal - bettingVal
        }
    }
})

