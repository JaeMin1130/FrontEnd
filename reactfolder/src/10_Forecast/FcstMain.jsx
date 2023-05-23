import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import locData from "./json/getxy.json"

const FcstMain = function () {

    const [dateTxt, setDateTxt] = useState("")
    const [locTxt, setLocTxt] = useState("")

    const url_ultra = '/ultra?date=' + dateTxt + '&location=' + locTxt
    const url_village = '/village?date=' + dateTxt + '&location=' + locTxt
    const locRef = useRef()
    const dateRef = useRef()
    const locTag = locData.map((item, idx) => <option value={[item["격자 X"], item["격자 Y"]]} key={"loc" + idx}>{item["1단계"]}</option>)

    let today = new Date()
    today = Number(String(today.toLocaleDateString().replace(/[.]\s/, "0").replace(/[.]\s/, "").replace(/[.]/, "")))
    let yesterday = today - 1

    return (
        <article>
            <header>
                <h2>예보 선택</h2>
            </header>
            <div className="grid">
                <select ref={locRef} name="location" onChange={() => setLocTxt(locRef.current.value)}>
                    <option>지역선택</option>
                    {locTag}
                </select>
            </div>
            초단기예보
            <div className="grid">
                <label><input type="radio" name="ultra" ref={dateRef} value={yesterday} onChange={() => setDateTxt(dateRef.current.value)}/>어제</label>
                <label><input type="radio" name="ultra" ref={dateRef} value={today} onChange={() => setDateTxt(dateRef.current.value)}/>오늘</label>
                <a><Link to={url_ultra} role="button" >이동</Link></a><br/>
            </div>
            단기예보
            <div className="grid">
                <label><input type="radio" name="village" ref={dateRef} value={yesterday} onChange={() => setDateTxt(dateRef.current.value)}/>어제</label>
                <label><input type="radio" name="village" ref={dateRef} value={today} onChange={() => setDateTxt(dateRef.current.value)}/>오늘</label>
                <a><Link to={url_village} role="button" >이동</Link></a>
            </div>
        </article>
    )
}
export default FcstMain