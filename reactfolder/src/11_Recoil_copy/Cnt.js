import { useRef, useState, useEffect } from "react"
import {RecoilRoot} from 'recoil'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CntDisp from "../11_Recoil_copy/CntDisp"
import CntInput from "../11_Recoil_copy/CntInput"

const Cnt = function () {
    return (
        <BrowserRouter>
                <main class="container">
                    <RecoilRoot>
                        <Routes>
                            <Route path='/' element={<CntInput/>} />
                            <Route path='/disp' element={<CntDisp/>} />
                        </Routes>
                    </RecoilRoot>
                </main>
        </BrowserRouter>
    )
}
export default Cnt