import butStyle from './Button.module.css'


export const Button = () => {
    return (
        <div>
            <button className={butStyle.button}>Submit</button>
            <button className={butStyle.but}>Log in</button>
        </div>
    )
}
