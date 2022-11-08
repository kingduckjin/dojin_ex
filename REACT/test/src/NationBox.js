// export default function NationBox({ num }) {
//     return <a href="#" className={`nationBox nation${num}`}>{num}</a>;
// }

export default function NationBox({ num, opacity }) {
    return <a href="." className="nationBox" style={{ opacity }}>{num}</a>;
}