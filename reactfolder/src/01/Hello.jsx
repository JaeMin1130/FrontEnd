import logo from '../logo.svg';


const Hello = function () {
    let name = "김재민"
    let git = "https://github.com/JaeMin1130"

    return (
        // 최상위에는 div 하나만 있어야 한다. => fragment 태그를 사용하면 된다.
        <main className="container">
            <article data-theme = "dark">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <footer>
                    <hgroup>
                    <h1>{name}</h1>
                    <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>
        </main>
    );
}

export default Hello;