// id가 dynamic인 태그를 선택해라 
let target = document.querySelector("#dynamic");

// 커서 깜빡임 효과
function blink() {
    // target의 클래스에 "active" 넣어라
    target.classList.toggle("active");
}
// 0.6초에 한 번 넣어라
setInterval(blink, 600);

// 한 글자씩 떼서 배열로 만드는 함수
function randomString() {
    // 배열 변수 생성
    let stringArr = ["Learn to HTML", "Learn to CSS",
        "Learn to JavaScript", "Learn to JAVA", "Learn to Python"];
    // stringArr[] 랜덤 출력,       floor : 소수점 떼기,  random : 0 ~ 1 랜덤값
    let oneString = stringArr[Math.floor(Math.random() * stringArr.length)];
    // split : 한 글자씩 나눠서 배열에 넣기
    let letterArr = oneString.split("");

    return letterArr;
}

// 한 글자씩 텍스트 출력하는 함수
function typing(randomArr) {
    if (randomArr.length > 0) {
        // shift : 배열의 앞 값부터 배열에서 빼고 출력
        // target의 글씨에 추가해라
        target.textContent += randomArr.shift();
        // 0.07초에 한 번 함수를 실행해라
        setTimeout(function () { typing(randomArr); }, 70);
    } else {
        // 3초 뒤에 resetTyping 함수를 실행해라
        setTimeout(resetTyping, 3000);
    }
}

// 타이핑 리셋 함수
function resetTyping() {
    // 지금 있는 글자 지우기
    target.textContent = "";
    typing(randomString());
}
// typing(selectStringArr)
typing(randomString());