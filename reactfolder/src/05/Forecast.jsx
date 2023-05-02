import data from "./dataFrcst.json"
import style from "./Forecast.module.css"
import { useState } from "react"
const Forecast = function () {

    const object1 = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]
    const object2 = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"]

    const dtcn = {}
    for (let i = 0; i < object1.length; i++) {
        // 객체에 key, value 추가하기
        dtcn[data[object1[i]]] = data[object2[i]]
    }

    // state 생성
    const [infoTag, setInfoTag] = useState("")
    const [bodyTag, setBodyTag] = useState("")

    // 날짜태그
    let dtTag = []
    dtTag = Object.keys(dtcn).map((item, idx) =>
        // 리액트는 모든 기본 이벤트를 on으로 시작하는 props로 나타낸다
        <div className={bodyTag == item ? style.td1 : style.td} key={idx} onClick={() => detail(item)}>
            {item}
        </div>)

    // 날짜 누르면 정보 나오게 하는 함수
    function detail(item) {

        let a = dtcn[item].split(",")
        a = a.map((i) => i.split(":"))

        a = a.map((j) => <div className={style.jAll}>
            <span className={style.j0}>{j[0]}</span>
            <span className={j[1].trim() == "높음" ? style.s21
                : j[1].trim() == "보통" ? style.s22 : style.s23}>
                {j[1]}
            </span>
        </div>
        )

        setInfoTag(a)
        setBodyTag(item)
    }

    return (
        <main className="container">
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                    <div className="grid">
                        {dtTag}
                    </div>
                </header>
                <div className="grid">
                    {infoTag}
                </div>
            </article>
        </main>
    )

}
export default Forecast