import BoxRows from "./BoxRows"
import "./Box.css"
import { useState, useRef, useEffect } from "react"
const Box = function () {
    const [mvList, setMvList] = useState([])
    const dateRef = useRef()

    // 중복되는 부분 함수로 만들기
    const fetchData = function (date) {
        let url1 = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + date
        fetch(url1)
            .then((resp) => resp.json())
            .then((data) => { setMvList(data.boxOfficeResult.dailyBoxOfficeList) })
            .catch((err) => { console.log(err) })
    }

    // 어제 list, 한 번만 실행
    useEffect(() => {
        let yesterday = new Date()
        yesterday = Number(yesterday.toLocaleDateString().replaceAll('. ', '0').replace('.', '')) - 1
        fetchData(yesterday)
    }, [])

    // 날짜별 list
    const getDT = () => {
        let dt = dateRef.current.value.replaceAll('-', '')
        fetchData(dt)
    }

    return (
        <main className="container">
            <article>
                <header>
                    <nav>
                        <ul>
                            <li><h1>일일박스오피스</h1></li>
                        </ul>
                        <ul>
                            <li><input ref={dateRef} type="date" id="dt1" name="dt1" onChange={() => getDT()}></input></li>
                        </ul>
                    </nav>

                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화제목</th>
                            <th scope="col">매출액</th>
                            <th scope="col">순위증감</th>
                        </tr>
                    </thead>
                    <BoxRows mv={mvList} />
                </table>
            </article>
        </main>
    )
}
export default Box