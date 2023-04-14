document.addEventListener("DOMContentLoaded", () => {

    const b1 = document.querySelectorAll(".produce")
    const b2 = document.querySelectorAll(".remove")
    const b3 = document.querySelectorAll(".change")

    const result = document.querySelector("#result")
    const reset = document.querySelector("#reset")
    let arr = [];

    reset.addEventListener("click", function () {
        arr = [];
    })

    // i가 눌렸을 때 작동
    for (const i of b1) {
        i.addEventListener("click", function (event) {
            event.preventDefault();

            switch (i.textContent) {
                case "사과"
                    : arr.push('🍎')
                    break;
                case "바나나"
                    : arr.push('🍌')
                    break;
                case "오렌지"
                    : arr.push('🍊')
                    break;
                case "수박"
                    : arr.push('🍉')
                    break;

                default:
                    break;
            }
            result.value = arr.join()
        })
    }

    for (let i = 0; i < b2.length; i++) {
        b2[i].addEventListener("click", function (event) {
            event.preventDefault();
            // b2[i].textContent.replace(" 삭제", "")
            switch (b2[i].textContent) {
                case "사과 삭제"
                    // filter : 사과가 아니면 배열에 넣어라('item'은 임의로 지정한 이름)
                    : arr = arr.filter(item => item != '🍎')
                    break;
                case "바나나 삭제"
                    : arr = arr.filter(item => item != '🍌')
                    break;
                case "오렌지 삭제"
                    : arr = arr.filter(item => item != '🍊')
                    break;
                case "수박 삭제"
                    : arr = arr.filter(item => item != '🍉')
                    break;

                default:
                    break;
            }
            result.value = arr.join()
        })
    }

    for (let i = 0; i < b3.length; i++) {
        b3[i].addEventListener("click", function (event) {
            event.preventDefault();
            // b3[i].textContent.split(" -> ")[0].trim()  trim() : 앞뒤 공백 제거
            switch (b3[i].textContent) {
                case "사과 -> 당근"
                    : arr = arr.map(item => item == '🍎' ? item = '🥕' : item)
                    break;
                case "바나나 -> 오이"
                    : arr = arr.map(item => item == '🍌' ? item = '🥒' : item)
                    break;
                case "오렌지 -> 아보카도"
                    : arr = arr.map(item => item == '🍊' ? item = '🥑' : item)
                    break;
                case "수박 -> 브로콜리"
                    : arr = arr.map(item => item == '🍉' ? item = '🥦' : item)
                    break;

                default:
                    break;
            }
            result.value = arr.join()
        })
    }
})


// function produce() {}
// function remove() { }
// function change() { }