// const MyDivArticle = ({name}) => {

import style from "./MyDiv.module.css"
import { useState } from "react"

const MyDivArticle = (props) => {
    const name = props.name
    let n = name === undefined ? "0" : name.slice(-1)
    let cnt = 0

    // state : 리액트 컴포넌트의 변경 가능한 데이터
    const [count, setcount] = useState(0)

    // click event
    function like(n) {
        cnt += n;
        setcount(count + 1)
        console.log(cnt)
    }
    
    return (
        <article>
            <header>
                <h1 className={style.title}>{name || "Div0"}</h1>
            </header>
            <ul className={style.aul}>
                <li className={style.ali}>{name === '0' ? "Div0" : "Div" + n}1</li>
                <li className={style.ali}>{name || "Div0"}2</li>
            </ul>
            {n === "1" &&
                <footer>
                    <h2>
                        {/* 한번 렌더링이 되면 값이 안 바뀐다.(cnt) -> state 사용 */}
                        <span onClick={() => like(1)}>❤</span> {count}
                    </h2>
                </footer>
            }
        </article>
    )

}

export default MyDivArticle