document.addEventListener("DOMContentLoaded", () => {

    const t1 = document.querySelector("#t1")
    const t2 = document.querySelector("#t2")
    // 배열로 출력
    const button = document.querySelectorAll(".button")

    for (const i of button) {
        i.addEventListener("click", function (event) {
            event.preventDefault();
            // 회문 : 1, 숫자 : 2
            let a = i.getAttribute("id").slice(-1)
            if (a == 1) {
                reverse()
            } else {
                sum()
            }
        })
    }
});

function reverse() {
    if (t1.value.length == 0) {
        alert("단어를 입력하세요.")
        // document.querySelector("h2").textContent = "입력해주세요"
    }
    // 방법1
    // for (let i = t1.value.length - 1; i >= 0; i--) {
    //     t2.value += t1.value[i]
    // }
    // if (t1.value == t2.value) {
    //     t2.value = "회문입니다.";
    // } else {
    //     t2.value = "회문이 아닙니다.";
    // }

    // 방법2
    // split() : 한 글자씩 분리해서 배열로, reverse() : 배열 거꾸로
    let arr = t1.value.split('').reverse()
    // tostring()하면 쉼표로 구분됨 -> join() 사용
    if (t1.value == arr.join('')) {
        t2.value = "회문입니다.";
    } else {
        t2.value = "회문이 아닙니다.";
    }

}
function sum() {
    let arr = t1.value.split('')
    let sum = 0
    for (const i of arr) {
        if (isNaN(i)) {
            continue
        } else {
            sum += parseInt(i);
        }
    }
    t2.value = sum
}