import { useState } from "react";
import { Button } from "./Button";


export const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    // console.log(inputValue);

    const handleAddTodo = () => {
        if (inputValue == "") {
            return alert("You can not add an empty todo")
        }

        const todo = {
            id: todos.length + 1,
            todo: inputValue,
            active: false
        }

        setTodos([...todos, todo])


        setInputValue("")


    }

    const handleUpdateTodo = (id) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, active: !item.active } : item

        ))

    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    // console.log(todos);
    return (
        <div>
            <Button text={"green"} color="black" />
            <h1>TodoList</h1>
            <label htmlFor="">Todo
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name="" id="" />
                {/* <button onClick={handleAddTodo}>Add Todo</button> */}
                <Button bg="green" click={handleAddTodo} text="Add Todo" />
            </label>

            <div>
                <h1>List Items</h1>
                {todos.length > 0 && todos.map((item) => (
                    <ul key={item.id}>
                        <li onClick={() => handleUpdateTodo(item.id)}>{item.todo} {item.active ? "✅" : "❌"}</li>
                        {/* <button onClick={() => deleteTodo(item.id)}>Delete</button> */}
                        <Button text={"delete"} bg={"red"} click={() => deleteTodo(item.id)} />

                    </ul>
                ))}
            </div>
        </div>
    )
}
