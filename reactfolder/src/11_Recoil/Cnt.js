import { useRef, useState, useEffect } from "react"
import CntDisp from "./CntDisp"
import CntInput from "./CntInput"

const Cnt = function () {
    const [val, setVal] = useState(0)
    useEffect(() => {}, [val])
    return (
        <main class="container">
            <CntInput val = {val} setVal = {setVal}/>
            <CntDisp val = {val}/>
        </main>
    )
}
export default Cnt