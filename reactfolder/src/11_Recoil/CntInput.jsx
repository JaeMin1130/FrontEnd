const CntInput = function ({ val, setVal }) {

    const clickMinus = function (e) {
        e.preventDefault()
        if (val <= 0) {
            setVal(0)
        } else {
            setVal(val - 1)
        }
    }

    const clickPlus = function (e) {
        e.preventDefault()
        if (val >= 100) {
            setVal(100)
        } else {
            setVal(val + 1)
        }
    }

    return (
        <article>
            {/* form 태그를 쓰면 계속 초기화 된다. -> preventDefault 해야함 */}
            <form action="">
                <div className="grid">
                    <button onClick={(e) => { clickMinus(e) }}>-</button>
                    <input type="text" value={val} readOnly />
                    <button onClick={(e) => { clickPlus(e) }}>+</button>
                </div>
            </form>
        </article>
    )
}
export default CntInput