import butStyle from './Button.module.css'



export const Button = ({ color = "orange", bg, text, click }) => {
    // console.log();

    return (
        <div>
            <button onClick={click}  style={{ backgroundColor: `${bg}`, color: `${color}` }}>{text}</button>
        </div>
    )
}

// export const Button = (props) => {
//     console.log(props);
    
//     return (
//         <div>
//             <button style={{ backgroundColor: `${props.bg}`, color: `${props.color}` }}>{props.text}</button>
//         </div>
//     )
// }



