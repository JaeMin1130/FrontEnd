// const show = () => {
//     event.preventDefault();
//     let n = Math.floor(Math.random() * 6) + 1;
//     document.querySelector(".h2Class").innerHTML = `<img src = "./diceImg/${n}.png">`;

//     // radio의 'checked' 속성 활용
//     // value : String, n : Integer
//     if (document.querySelector('input[type="radio"]:checked').value === String(n)) {
//         document.querySelector("header h1:nth-of-type(2)").textContent = "정답";
//     } else {
//         document.querySelector("header h1:nth-of-type(2)").textContent = "오답";
//     }
// }

// 'click' 이벤트 달기                        콜백 함수
document.addEventListener("DOMContentLoaded", () => {

    const bt1 = document.querySelector("#bt1");

    // addEventListener(type, listener)
    bt1.addEventListener("click", () => {
        event.preventDefault();

        let n = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".h2Class").innerHTML = `<img src = "./diceImg/${n}.png">`;

        if (document.querySelector('input[type="radio"]:checked').value === String(n)) {
            document.querySelector("header h1:nth-of-type(2)").textContent = "정답";
        } else {
            document.querySelector("header h1:nth-of-type(2)").textContent = "오답";
        }
    })
});
