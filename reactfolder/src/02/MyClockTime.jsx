import { useState } from "react";

const MyClockTime = function () {

    const [myTime, setMyTime] = useState(new Date().toLocaleTimeString());

    // 콜백 함수 :  함수의 매개변수로 전달되는 함수
    setTimeout(() => setMyTime(new Date().toLocaleTimeString()), 1000);

    // let myTime = new Date().toLocaleTimeString();

    return (

        <footer>
            <h1>
                {myTime}
            </h1>
        </footer>

    )
}

export default MyClockTime;