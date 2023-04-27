import { useState} from "react";
const MyClockTime = function() {

    const[myTime, setMyTime] = useState(new Date().toLocaleTimeString());
    
    // setTimeout(setMyTime(new Date().toLocaleTimeString()), 1000);
    
    // let myTime = new Date().toLocaleTimeString();
    return(
        <footer>
            <h1>
                {myTime}
            </h1>
        </footer>

    )
}

export default MyClockTime ;