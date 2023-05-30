import { CntAtoms, CntAtomsTwice } from "./CntAtoms"
import { useRecoilValue } from "recoil"
import { Link } from "react-router-dom"

const CntDisp = function () {
    // useRecoilValue : 변경 없이 값만 사용할 때
    const val = useRecoilValue(CntAtoms)
    const valTwice = useRecoilValue(CntAtomsTwice)

    return (
        <article>
            <h3>
                입력값 : {val} <br />
                입력값 x2 : {valTwice}
            </h3>
            <Link to="/">뒤로 가기</Link>
        </article>
    )
}

export default CntDisp