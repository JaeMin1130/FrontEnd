import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import locData from "./json/getxy.json"

const FcstMain = function () {

    const dateRef = useRef()
    const [dateTxt, setDateTxt] = useState("")
    const [locTxt, setLocTxt] = useState("")

    const url_ultra = '/ultra?date=' + dateTxt + '&location=' + locTxt
    const url_village = '/village?date=' + dateTxt + '&location=' + locTxt
    const locRef = useRef()
    const locTag = locData.map((item, idx) => <option value={[item["격자 X"], item["격자 Y"]]} key={"loc" + idx}>{item["1단계"]}</option>)

    return (
        <article>
            <header>
                <h2>단기예보 선택</h2>
            </header>
            <div className="grid">
                <input ref={dateRef} type="date" id="date" name="date" onChange={() => setDateTxt(dateRef.current.value)} />
                <select ref={locRef} name="location" onChange={() => setLocTxt(locRef.current.value)}>
                    <option>지역선택</option>
                    {locTag}
                </select>
            </div>

            <div className="grid">
                <button><Link to={url_ultra} role="button" >초단기예보</Link></button>
                <button><Link to={url_village} role="button">단기예보</Link></button>
            </div>
        </article>
    )
}
export default FcstMain