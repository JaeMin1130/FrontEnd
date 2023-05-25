import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import locData from "./json/getxy.json"
import style from "./style.module.css"

const FcstMain = function () {

    const [dateTxt, setDateTxt] = useState("")
    const [locTxt, setLocTxt] = useState("")

    const url_ultra = '/ultra?date=' + dateTxt + '&location=' + locTxt
    const url_village = '/village?date=' + dateTxt + '&location=' + locTxt
    const locRef = useRef()
    const locTag = locData.map((item, idx) => <option value={[item["격자 X"], item["격자 Y"]]} key={"loc" + idx}>{item["1단계"]}</option>)

    let today = new Date()
    today = Number(String(today.toLocaleDateString().replace(/[.]\s/, "0").replace(/[.]\s/, "").replace(/[.]/, "")))
    let yesterday = today - 1

    let linkTagUl = (locTxt == "" || dateTxt == "") ? <button className={style.link} onClick={() => block()}>이동</button> : <Link to={url_ultra} role="button" className={style.link}>이동</Link>
    let linkTagVil = (locTxt == "" || dateTxt == "") ? <button className={style.link} onClick={() => block()}>이동</button> : <Link to={url_village} role="button" className={style.link}>이동</Link>
    const block = function () {
        if (locTxt == "") {
            alert("지역을 선택해 주세요.")
        }
        if (dateTxt == "") {
            alert("날짜를 선택해 주세요.")
        }
    }
    return (
        <article>
            <h2>예보 선택</h2>
            <select ref={locRef} name="location" onChange={() => setLocTxt(locRef.current.value)}>
                <option value="지역선택" selected hidden>지역선택</option>
                {locTag}
            </select>

            <div className={style.grid}>
                <article>
                    <h5 className={style.head}>초단기예보</h5>
                    <div className={style.button}>
                        <label className={style.yesterday}><input type="radio" name="ultra" value={yesterday} onChange={() => setDateTxt(yesterday)} />어제</label>
                        <label className={style.today}><input type="radio" name="ultra" value={today} onChange={() => setDateTxt(today)} />오늘</label>
                        {linkTagUl}
                    </div>
                </article>
                <article>
                    <h5 className={style.head}>단기예보</h5>
                    <div className={style.button}>
                        <label className={style.yesterday}><input type="radio" name="village" value={yesterday} onChange={() => setDateTxt(yesterday)} />어제</label>
                        <label className={style.today}><input type="radio" name="village" value={today} onChange={() => setDateTxt(today)} />오늘</label>
                        {linkTagVil}
                    </div>
                </article>
            </div>
        </article>
    )
}
export default FcstMain