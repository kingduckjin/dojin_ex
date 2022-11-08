export default function Event1({style}) {
    function setBg(e) {
        e.preventDefault();
        e.target.style.backgroundColor = 'blue';
    }

    return (
        <div>
            <a href="/" style={style} onClick={setBg}>첫 번째 요소</a>
        </div>
    )
}