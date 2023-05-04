import { useState, useRef } from "react";

const Ref = () => {

    let cnt1 = 1;
    const [cnt2, setCnt2] = useState(1) // 값이 바뀔 때마다 렌더링이 일어난다.
    const cnt3 = useRef(1) // 다른 부분에서 렌더링이 일어날 때 같이 적용된다.

    const showcnt = function () {
        console.log("cnt1 :", cnt1, "cnt2 :", cnt2, "cnt3 :", cnt3.current)
    }
    const showcnt1 = function () {
        cnt1++
        showcnt()
    }
    const showcnt2 = function () {
        setCnt2(cnt2 + 1)
        showcnt()
    }
    const showcnt3 = function () {
        cnt3.current++
        showcnt()
    }

    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div className="grid">컴포넌트 변수 : {cnt1}</div>
                        <div className="grid">State 변수 : {cnt2}</div>
                        <div className="grid">Ref 변수 : {cnt3.current}</div>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showcnt1()}>컴포넌트 변수</button>
                    <button onClick={() => showcnt2()}>State 변수</button>
                    <button onClick={() => showcnt3()}>Ref 변수</button>
                </div>
            </article>
        </main>
    )
}

export default Ref