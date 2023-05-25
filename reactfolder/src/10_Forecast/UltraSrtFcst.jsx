import data from "./json/getcode.json"
import FcstTable from "./FcstTable"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import qs from 'query-string'

const UltraSrtFcst = function () {

    const arr = data.map((item) => item).filter((item) => item.예보구분 == "초단기예보")
    const tag = arr.map((item, idx) => <option value={[item["항목값"], item["단위"]]} key={"loc" + idx}>{item["항목명"]}({item["단위"]})</option>)
    const category = useRef()
    const [text, setText] = useState()
    const [unit, setUnit] = useState()
    const [info, setInfo] = useState()

    const loc = useLocation().search
    const date = qs.parse(loc).date
    const location = qs.parse(loc).location
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=pwxPD7SvaQhz8AtCIjk2pem2kA4vkXCY5n4RIlREYOy1syfPerNWQQ09wWOQehCXOrObm74%2BO04%2BSTm04ksrzg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=0630&nx=${location.split(",")[0]}&ny=${location.split(",")[1]}`

    const fetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setInfo(data.response.body.items.item.map((item) => item)))
            .catch((err) => console.log(err))
    }
    useEffect(() => { fetchData(url); }, [])

    const setParam = function () {
        setText(category.current.value.split(",")[0])
        setUnit(category.current.value.split(",")[1])
    }
    return (
        <article>
            <div className="grid">
                <h2>초단기예보</h2>
            </div>
            <select ref={category} name="항목명" onChange={() => setParam()}>
                <option value="항목선택" selected hidden>항목선택</option>
                {tag}
            </select>
            <FcstTable info={info} text={text} unit={unit} />
        </article>
    )
}
export default UltraSrtFcst