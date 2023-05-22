import { useRef, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import qs from 'query-string'
import data from "./json/getcode.json"

const VillageFcst = function () {
    const arr = data.map((item) => item).filter((item) => item.예보구분 == "단기예보")
    const tag = arr.map((item, idx) => <option value={item["항목값"]} key={"loc" + idx}>{item["항목명"]}</option>)
    const category = useRef()

    const [table, setTable] = useState()
    const [info, setInfo] = useState()

    const loc = useLocation().search
    const date = qs.parse(loc).date.replaceAll("-", "")
    const location = qs.parse(loc).location
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=pwxPD7SvaQhz8AtCIjk2pem2kA4vkXCY5n4RIlREYOy1syfPerNWQQ09wWOQehCXOrObm74%2BO04%2BSTm04ksrzg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=0630&nx=${location[0]}&ny=${location[1]}`

    const fetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setInfo(data.response.body.items.item.map((item) => item)))
            .catch((err) => console.log(err))
        }

    useEffect(() => {fetchData(url)}, [])

    const createTable = function(){
        if(category.current.value != undefined){
            setTable(info.filter((item) => item.category == category.current.value).map((item, idx) => <tr key = {idx}>
                                                <td>{item["fcstDate"]}</td>
                                                <td>{item["fcstTime"]}</td>
                                                <td>{item["fcstValue"]}</td>
                                            </tr>
                                        ))}}
    return (
        <article>
            <div className="grid">
                <h2>단기예보</h2>
            </div>
            <select ref = {category} name="항목명" onChange={() => {createTable()}}>
                <option>항목선택</option>
                {tag}
            </select>
            {table}
        </article>
    )
}
export default VillageFcst