import data from "./dataTaccident.json"
import Taccident1 from "./Taccident1"
import Taccident2 from "./Taccident2"
import Taccident3 from "./Taccident3"
import { useState, useEffect } from "react"

const Taccident = function () {
    let category1 = []
    for (let i = 0; i < data["data"].length; i++) {
        // if (category1.indexOf(data["data"][i].사고유형_대분류) == -1) {
        //     category1.push(data["data"][i].사고유형_대분류)
        // }
        category1.push(data["data"][i].사고유형_대분류)
    }
    // Set 객체 생성 -> 중복값 제거됨
    category1 = new Set(category1)  // Object
    category1 = [...category1]      // Array

    const category2 = data.data.map(item => [item.사고유형_대분류, item.사고유형_중분류])
    // for (let i = 0; i < data["data"].length; i++) {
        //     category2.push(data["data"][i].사고유형_대분류 + ", " + data["data"][i].사고유형_중분류)
        // }
    const category3 = data.data.map(item => [item.사고건수, item.부상신고자수, item.경상자수, item.중상자수, item.사망자수])
    const list = Object.keys(data.data[0])
    
    const[sel1, setSel1] = useState(0)
    const[sel2, setSel2] = useState([])

    // console.log(list[1])/
    return (
        <main className="container">
            <article>
                <header>
                        {/* 사용자 태그(컴포넌트) 끼우기 변수랑 함수 넘기기*/}
                        <Taccident1 c1 = {category1} setSel1 = {setSel1}/> 
                        <Taccident2 c2 = {category2} sel1 = {sel1} setSel2 = {setSel2}/> 
                </header>
            <Taccident3 c3 = {category3} list = {list} />
            </article>
        </main>
    )
}
export default Taccident