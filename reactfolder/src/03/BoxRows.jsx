// probs : 컴포넌트 간의 데이터 이동수단
// const BoxRows = function(probs){
// const mvList = [...probs.mv]
import { useState } from "react"

const BoxRows = function ({ mv }) {
    let trList = []
    let imoji = ""
    const [foot, setfoot] = useState(" ")

    function showMv(props) {
        setfoot(props.movieNm)
    }

    for (let item of mv) {
        if (item.rankInten > 0) {
            imoji = "🔼"
        } else if (item.rankInten < 0) {
            imoji = "🔽"
        } else {
            imoji = "⏺"
        }

        trList.push(
            <tr className="tr" key={item.movieCd} onClick={() => showMv(item)}>
                <td className="rank">{item.rank}위</td>
                <td className="name">{item.movieNm}</td>
                <td className="sales">{parseInt(item.salesAmt).toLocaleString()}원</td>
                <td className="increase">{imoji} {Math.abs(item.rankInten)}</td>
            </tr>)
    }

    return (
        <>
            <tbody>
                {trList}
            </tbody>
            <tfoot>
                <tr>
                    {/* colSpan : column 합치기 */}
                    <td colSpan={4}>{foot}</td>
                </tr>
            </tfoot>
        </>
    )

}
export default BoxRows