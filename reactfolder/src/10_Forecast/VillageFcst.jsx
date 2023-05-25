import { useRef, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import qs from 'query-string'
import data from "./json/getcode.json"
import FcstTable from "./FcstTable"

const VillageFcst = function () {
    const arr = data.map((item) => item).filter((item) => item.예보구분 == "단기예보")
    const tag = arr.map((item, idx) => <option value={[item["항목값"], item["단위"]]} key={"loc" + idx}>{item["항목명"]}({item["단위"]})</option>)
    const category = useRef()

    const [text, setText] = useState()
    const [unit, setUnit] = useState()
    const [info, setInfo] = useState()
    const [day, setDay] = useState()
    
    const loc = useLocation().search
    const date = qs.parse(loc).date
    const location = qs.parse(loc).location

    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=pwxPD7SvaQhz8AtCIjk2pem2kA4vkXCY5n4RIlREYOy1syfPerNWQQ09wWOQehCXOrObm74%2BO04%2BSTm04ksrzg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=0500&nx=${location.split(",")[0]}&ny=${location.split(",")[1]}`
    const dateArr = [date, String(Number(date) + 1), String(Number(date) + 2)]
    const fetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setInfo(data.response.body.items.item.map((item) => item)))
            .catch((err) => console.log(err))
    }

    useEffect(() => { fetchData(url) }, [])

    const setParam = function () {
        setText(category.current.value.split(",")[0])
        setUnit(category.current.value.split(",")[1])
    }

    return (
        <article>
            <div className="grid">
                <h2>단기예보</h2>
            </div>
            <select ref={category} name="항목명" onChange={() => setParam()}>
                <option value="항목선택" selected hidden>항목선택</option>
                {tag}
            </select>
            <div className="grid">
                <label><input type="radio" name="date" onChange={() => { setDay(dateArr[0]) }} />{dateArr[0][6] + dateArr[0][7]}일</label>
                <label><input type="radio" name="date" onChange={() => { setDay(dateArr[1]) }} />{dateArr[1][6] + dateArr[1][7]}일</label>
                <label><input type="radio" name="date" onChange={() => { setDay(dateArr[2]) }} />{dateArr[2][6] + dateArr[2][7]}일</label>
            </div>
            <FcstTable info={info} text={text} unit={unit} day={day} />
        </article>
    )
}
export default VillageFcst