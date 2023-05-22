import { useLocation } from "react-router-dom"
import qs from 'query-string'

const RoutePage2 = () => {
    // url에서 ? 뒤에 붙는 쿼리스트링을 가져온다.
    const loc = useLocation().search
    const imoji = qs.parse(loc).item
    const imoji2 = qs.parse(loc).item2
    return(
     <article>
        <header><h1>RoutePage2</h1></header>
        {imoji}
        {imoji2}
    </article>
    )
}
export default RoutePage2