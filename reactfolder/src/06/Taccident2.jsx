const Taccident2 = function ({ c2, sel1, sel2, setSel2 }) {

    // 대분류 태그 만들기
    let arr = c2.filter((item) => item[0] == sel1);
    console.log(arr);
    
    const btTag2 = arr.map(item => {
        <li key={item[1]}>
            <button>
                {item[1]}
            </button>
        </li>
    }
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
export default Taccident2