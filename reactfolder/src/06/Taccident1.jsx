import style from "./Style.module.css"

const Taccident1 = function ({ c1, sel1, setSel1 }) {

    // 대분류 태그 만들기
    const btTag1 = c1.map(item =>
        <li key={item}>
            <button onClick={() => setSel1(item)} 
            className={item === sel1? style.bt1 : style.bt11}>
                {item}
            </button>
        </li>)
    
    return (
        <nav>
            <ul>
                <h3>사고유형 대분류</h3>
            </ul>
            <ul>
                {btTag1}
            </ul>
        </nav>
    )
}
export default Taccident1