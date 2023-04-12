document.addEventListener("DOMContentLoaded", function () {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const d1 = document.querySelector("#d1");
    const d2 = document.querySelector("#d2");

    const t1 = document.querySelector("#t1");
    const t2 = document.querySelector("#t2");

    d1.textContent = sel1.value;
    d2.textContent = sel2.value;
});

sel1.addEventListener("change", function (event) {
    // 섭씨면 화씨로, 화씨면 섭씨로
    if (sel1.value == "℃") {
        sel2.value = "℉";
    } else {
        sel2.value = "℃";
    }

    d1.textContent = sel1.value;
    d2.textContent = sel2.value;
    // selector 바꾸면 값 초기화
    t1.value = '';
    t2.value = '';
})
sel2.addEventListener("change", function () {
    if (sel2.value == "℃") {
        sel1.value = "℉";
    } else {
        sel1.value = "℃";
    }

    d1.textContent = sel1.value;
    d2.textContent = sel2.value;
    t1.value = '';
    t2.value = '';
});

t1.addEventListener("input", (e) => {
    if (sel1.value == sel2.value) {
        t2.value = t1.value;
        // C -> F
    } else if (sel1.value == "℃") {
        t2.value = convCF(t1.value);
        // F -> C
    } else if (sel1.value == "℉")
        t2.value = convFC(t1.value);
})

const convCF = (cTemp) => {
    let fTemp = (cTemp * 9 / 5) + 32;
    return fTemp;
};

const convFC = (fTemp) => {
    let cTemp = (fTemp.value - 32) * 5 / 9;
    return cTemp;
};

function base(s1, s2, d1, d2, t1, t2){
    if (s1.value == "℃") {
        s2.value = "℉";
    } else {
        s2.value = "℃";
    }

    d1.textContent = s1.value;
    d2.textContent = s2.value;
    // selector 바꾸면 값 초기화
    t1.value = '';
    t2.value = '';
}
