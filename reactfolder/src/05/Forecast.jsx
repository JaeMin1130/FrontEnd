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
    const [info, setInfo] = useState("")
    const [tdState, settdState] = useState("")
    
    // 날짜태그
    let dtTag = []
    dtTag = Object.keys(dtcn).map((item, idx) =>
        <div className={tdState == item ? style.td1 : style.td} key={idx} onClick={() => detail(item)}>
            {item}
        </div>)

    // 날짜 누르면 정보 나오게 하는 함수
    function detail(item) {

        let a = dtcn[item].split(",")
        a = a.map((i) => i.split(":"))

        a = a.map((j) => <div className={style.jAll}>
                            <span className={style.j0}>{j[0]}</span>
                            <span className = {j[1].trim() == "높음" ? style.s21
                                                : j[1].trim() == "보통" ? style.s22 : style.s23}> 
                                {j[1]} 
                            </span>
                        </div>
        )

        setInfo(a)
        settdState(item)
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
                    {info}
                </div>
            </article>
        </main>
    )

}
export default Forecast