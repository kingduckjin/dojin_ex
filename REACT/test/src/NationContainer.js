// import NationBox from "./NationBox";

// export default function NationContainer() {
//     return (
//         <div className="nation_container">
//             <NationBox num='1' />
//             <NationBox num='2' />
//             <NationBox num='3' />
//             <NationBox num='4' />
//             <NationBox num='5' />
//         </div>);
// }


export default function NationContainer({children}) {
    return (
        <div className="nation_container">
            {children}
        </div>
    )
} 