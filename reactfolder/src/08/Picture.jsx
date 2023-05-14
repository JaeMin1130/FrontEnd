import style from "./design.module.css"
import { useRef, useState } from "react"
const Picture = function ({ pictureArr, text, setPictureArr}) {
    const[clickedKey, setClickedKey] = useState("")
    // 태그 생성 함수
    const prodTag = function (item, idx) {
        let keyword = item.galSearchKeyword.split(",").sort()
        return (
            <article key={idx}>
                <header>
                    <hgroup>
                        <h2>{item.galTitle}</h2><h6>{item.galPhotographyLocation}</h6>
                    </hgroup>
                </header>
                <img src={item.galWebImageUrl} alt="" />
                {keyword.map((item) => <div className={style.keyword} 
                                            onClick={(e) => {setClickedKey(item); search(e)}}>
                    {item.replaceAll("?", "")}{/* 오탈자 제거 */}
                </div>)}
            </article>)
    }
    // keyword 클릭하면 바로 검색
    const search = function (e) {
        e.preventDefault()
        let encodedText = encodeURI(clickedKey)
        let url = `http://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=pwxPD7SvaQhz8AtCIjk2pem2kA4vkXCY5n4RIlREYOy1syfPerNWQQ09wWOQehCXOrObm74%2BO04%2BSTm04ksrzg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodedText}&_type=json`
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                let arr = data.response.body.items.item
                setPictureArr(arr)
            })
            .catch((err) => console.log(err))
        text.current.value = clickedKey
    }

    let evenTag = []
    let oddTag = []
    let spareTag

    // 짝수개면 두 개씩 출력
    if (pictureArr.length % 2 == 0) {
        pictureArr.map((item, idx) => (idx % 2 != 0) ? oddTag.push(prodTag(item, idx)) : evenTag.push(prodTag(item, idx)))

        // 홀수개면 남은 하나 따로 출력
    } else {
        pictureArr.map((item, idx) => {
            if (idx < pictureArr.length - 1) {
                (idx % 2 != 0) ? oddTag.push(prodTag(item, idx)) : evenTag.push(prodTag(item, idx))
            }
        })
        spareTag = prodTag(pictureArr[pictureArr.length - 1], pictureArr.length - 1)
    }

    return (
        <>
            <div className="grid">
                <div>{oddTag}</div>
                <div>{evenTag}</div>
            </div>
            <div>{spareTag}</div>
        </>
    )
}
export default Picture