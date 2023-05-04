const Detail = function ({ selData }) {

    const key = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"]

    let viewTag = key.map((item, idx) =>
        <div key = {'key' + idx}>
            {item} {parseInt(selData[item]).toLocaleString()}
        </div>)
    
    return (
        <div className="grid">{viewTag}</div>
    )
}

export default Detail