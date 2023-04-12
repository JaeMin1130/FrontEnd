
document.addEventListener("DOMContentLoaded", () => {
    const bts = document.querySelectorAll("button");
    console.log(bts);
    for (let i = 0; i < bts.length; i++) {
        console.log(bts[i].textContent);
        document.querySelector("#h2Id").textContent = bts[i].textContent;
    }
    // 버튼 안의 내용을 h2에 넣어라
    // document.querySelector("#h2Id").textContent = bts.textContent;

    // for문
    // for (let i = 0; i < bts.length; i++) {
    //     console.log(bts[i].textContent);
    // }

    // forEach문
    // bts.forEach((item, i) => {
    //     console.log(i, item.textContent);
    // });

    // for in문
    // for (let i in bts) {
    //     console.log(bts[i].textContent);
    // }

    // for of문
    // for (const item of bts) {
    //     console.log(item.textContent)
    // }
    // for(const [i, item] of bts.entries()){
    //     console.log(i, item.textContent);
    // }
 }
)
;