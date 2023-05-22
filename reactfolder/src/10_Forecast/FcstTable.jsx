import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import qs from 'query-string'

const FcstTable = function ({ text }) {
    const [table, setTable] = useState()
    const [info, setInfo] = useState()
    const loc = useLocation().search
    const date = qs.parse(loc).date.replaceAll("-", "")
    const location = qs.parse(loc).location
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=pwxPD7SvaQhz8AtCIjk2pem2kA4vkXCY5n4RIlREYOy1syfPerNWQQ09wWOQehCXOrObm74%2BO04%2BSTm04ksrzg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=0630&nx=${location[0]}&ny=${location[1]}`

    const fetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setInfo(data.response.body.items.item.map((item) => item).filter((item) => (item.category == text))))
            .catch((err) => console.log(err))
        }
    
    useEffect(() => {
        if(text != undefined){
            fetchData(url)
        }
        if(info != undefined){
            setTable(info.map((item, idx) => <tr key = {idx}>
                                                <td>{item["fcstDate"]}</td>
                                                <td>{item["fcstTime"]}</td>
                                                <td>{item["fcstValue"]}</td>
                                            </tr>
                                        ))}}, [text])
    console.log(info)
    return (
        <table>
            <tbody>
                <tr>
                    <td>날짜</td>
                    <td>시간</td>
                    <td>상태</td>
                </tr>
                {table}
            </tbody>

        </table>
    )
}

export default FcstTable