import { useState, useRef, useEffect } from "react";

const Ref = () => {
    const txtRef = useRef()
    const itemArr = useRef([])

    const [itemTag, setItemTag] = useState()

    // 처음 렌더링이 될 때 한 번 실행
    useEffect(() => {
        // focus() : 커서가 자동으로 input 태그 안에 놓인다(클릭된다).
        txtRef.current.focus()
    }, [])

    const addItem = function (e) {
        e.preventDefault()
        // 기존 배열에 value 추가
        itemArr.current = [...itemArr.current, txtRef.current.value]
    }
    const resetItem = function () {

    }

    return (
        <main className="container">
            <article>
                <header>
                    <form action="">
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소</label>
                                <input ref={txtRef} type="text" id="txt1" name="txt1" required />
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div className="grid">
                    {itemTag}
                </div>
            </article>
        </main>
    )
}

export default Ref