const Taccident2 = function ({ c2, sel1, sel2, setSel2 }) {

    // 대분류 태그 만들기
    let arr = []
    for (let i = 0; i < c2.length; i++) {
        if (c2[i][0] == sel1) {
            arr.push(c2[i][1])
        }
    }
    
    const btTag2 = arr.map(item => 
        // 태그 끼울때는 {} 안 한다.
        <li key={item}>
            <button onClick={() => setSel2(item)}>
                {item}
            </button>
        </li>
    )

    return (
        <nav>
            <ul>
                <h3>사고유형 중분류</h3>
            </ul>
            <ul>
                {btTag2}
            </ul>
        </nav>
    )
}

export default Taccident2;