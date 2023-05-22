import { useParams } from "react-router-dom"

const RoutePage1 = () => {
    const imoji1 = useParams().item
    const imoji2 = useParams().item2
    return (
        <article>
            <header><h1>RoutePage1</h1></header>
            {imoji1}
            {imoji2}
        </article>
    )
}
export default RoutePage1