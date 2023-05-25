import { useEffect, useState } from "react"
import data from "./json/getcode.json"

const FcstTable = function ({ info, text, unit, day }) {
    const [table, setTable] = useState()
    let type = []
    if (text == "SKY") {
        type = [null, "🌞", null, "⛅", "☁️"]
    } else {
        type = ["없음", "비", "비/눈", "눈", "소나기"]
    }

    const createTable = function () {
        if (text != undefined && info != undefined) {
            setTable(info.filter((item) => (day == undefined) ? item.category == text :
                item.category == text && item.fcstDate == day).map((item, idx) =>
                    <tr key={idx}>
                        <td>{item["fcstDate"].replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")}</td>
                        <td>{item["fcstTime"].replace(/(\d{2})(\d{2})/, "$1:$2")}</td>
                        <td>{(text == "SKY") ? type[item["fcstValue"]] : (text == "PTY") ?
                            type[item["fcstValue"]] : `${item["fcstValue"]} (${unit})`}</td>
                    </tr>
                ))
        }
    }

    useEffect(() => { createTable() }, [text])
    useEffect(() => { createTable() }, [day])

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