import Picture from "./Picture"
import style from "./design.module.css"
import { useState, useEffect, useRef } from "react"

const Tour = function () {

    const text = useRef()

    useEffect(() => {
        text.current.focus()
    }, [])

    const [pictureArr, setPictureArr] = useState([])

    const show = function (e) {
        e.preventDefault()
        let encodedText = encodeURI(text.current.value)
        let url = `http://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=pwxPD7SvaQhz8AtCIjk2pem2kA4vkXCY5n4RIlREYOy1syfPerNWQQ09wWOQehCXOrObm74%2BO04%2BSTm04ksrzg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodedText}&_type=json`
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                let arr = data.response.body.items.item
                setPictureArr(arr)
            })
            .catch((err) => console.log(err))
    }

    const clear = (e) => {
        e.preventDefault()
        text.current.value = ""
        text.current.focus()
    }

    return (
        <main className="container">
            <article>
                <header>
                    <h3>한국관광공사 관광사진 정보</h3>
                    <div className="grid">
                        <input ref={text} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." />
                        <div className="grid">
                            <button className="contrast" onClick={(e) => show(e)}>검색</button>
                            <button className="contrast" onClick={(e) => clear(e)}>취소</button>
                        </div>
                    </div>
                </header>
            </article>
            <Picture pictureArr={pictureArr} text = {text} setPictureArr = {setPictureArr} />
        </main>
    )
}
export default Tour