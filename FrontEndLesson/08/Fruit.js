document.addEventListener("DOMContentLoaded", () => {
    const b1 = document.querySelectorAll(".produce")
    const b2 = document.querySelectorAll(".remove")
    const b3 = document.querySelectorAll(".change")
    const result = document.querySelector("#result")
    let arr= [];

    for (const i of b1) {
        // i가 눌렸을 때 작동
        i.addEventListener("click", produce(i))
    }
})
    // for (let i of b2) {
    //     b1.addEventListener("click", function(){
    //         console.log(i)
            
    //     })
    // }
    // for (let i of b3) {
    //     b1.addEventListener("click", function(){
    //         console.log(i)

    //     })
    // }

 function produce(i) {
    event.preventDefault(); 
    let arr= [];

    const b1 = document.querySelectorAll(".produce")   
    switch (b1.textContent) {
        case "사과" 
            :arr.push('🍎')
            break;
        case "바나나" 
            :arr.push('🍌')
            break;
        case "오렌지" 
            :arr.push('🍊')
            break;
        case "수박" 
            :arr.push('🍉')
            break;    
    
        default:
            break;
    }
    result.value = arr.join(',')
} 
// function remove() { }
// function change() { }