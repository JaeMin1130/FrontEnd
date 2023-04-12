const show = () => {
    event.preventDefault();
    document.querySelector('#h2Id').innerHTML = randomDice(); 
    }
    // 다른 방법(백틱, setAttribute)
    // let n = Math.floor(Math.random() * diceArr.length);
    // document.getElementById("h2Id").innerHTML = `<img src ="./diceImg/${n}.png">`;
    // document.querySelector(".h2Class > img").setAttribute("src", `./diceImg/${n}.png`); 
function randomDice (){
        let diceArr = ["<img src = './diceImg/1.png'>", 
                        "<img src = './diceImg/2.png'>", 
                        "<img src = './diceImg/3.png'>", 
                        "<img src = './diceImg/4.png'>", 
                        "<img src = './diceImg/5.png'>", 
                        "<img src = './diceImg/6.png'>"] ;
    
        let randomDice = diceArr[Math.floor(Math.random() * diceArr.length)];
    
        return randomDice;
    }