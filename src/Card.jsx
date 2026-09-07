import { Button } from "./Button"

export const Card = () => {
    const h1 = {
        fontSize: "50px",
        background: "blue",
        fontFamily: "Arial"
    }
    const card = {
        width: "50%",
        margin: "auto"
    }
    return (
        <div>
            <div style={card} className="card">
                {/* <h1 style={{ fontSize: "50px", background: "blue", fontFamily: "Arial" }}>The Card</h1> */}
                <h1 style={h1}>The Card</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum hic ipsa itaque quos sunt? Natus at nesciunt a culpa, impedit magnam? Molestias odio quos hic vitae corporis quia iusto.</p>
                <Button text="see more" bg="red" color="white" />
                <div></div>
            </div>
            <div></div>
        </div>


    )
}