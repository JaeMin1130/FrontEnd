import MyClockTime from "./MyClockTime"
import MyClockImg from "./MyClockImg"
import '../01/Hello.css'

const MyClock = function () {

    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImg />
                <MyClockTime />
            </article>
        </main>
    )
}

export default MyClock