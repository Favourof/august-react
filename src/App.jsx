import { Card } from "./Card"
import './App.css'
import { useRef, useState } from "react"





export const App = () => {

  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState();
  const emailRef = useRef()

  // let count = 0
  const name = "ayo"
  const gender = "male"
  const age = 8
  const user = {
    name: "Tayo",
    age: 100,
    country: "Canada",
    gender: "female",
    active: false
  }


  // const handleInputChange = (e) => {
  //   setEmail(emailRef.current.value)
  //   console.log(email);

  // }
  console.log(email);




  const handleIncrement = () => {
    setCount(count + 1)
    console.log(count);

  }
  // console.log(count);
  const product = [
    {
      id: 1,
      title: "Bag",
      price: 1000,
      description: "This is a bag",
      rating: 5
    },
    {
      id: 2,
      title: "Book",
      price: 1000,
      description: "This is a Book",
      rating: 4
    }
    ,
    {
      id: 3,
      title: "Jug",
      price: 1000,
      description: "This is a Jug",
      rating: 2
    }
    ,
    {
      id: 4,
      title: "Phone",
      price: 3000,
      description: "This is a Phone",
      rating: 5
    },
    {
      id: 5,
      title: "laptop",
      price: 5000,
      description: "This is a laptop",
      rating: 5
    }
  ]



  return (
    <div>
      <label htmlFor=""> email
        <input type="email" ref={emailRef} name="" id="" />
        {/* <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="" id="" /> */}
        {/* <input type="email" onChange={handleInputChange} value={email} name="" id="" /> */}

      </label>
      {/* <button onClick={() => { setShowEmail(email), setEmail("") }}>Show</button> */}
      <button onClick={() => { setEmail(emailRef.current.value) }}>Show</button>
      <p>User email: {email}</p>














      <h1>Gender: {gender.toUpperCase()}</h1>
      <h1>count: {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
      <h1>Hello world</h1>
      <p className="p">Here is a p tag</p>
      <p>{name}</p>
      <p>Age {age * 2}</p>

      <h1>{user.name} Profile</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}, {user.name} is {user.age >= 18 ? "an adult" : "not an adult"}</li>
        <li>Country: {user.country}</li>
        <li>Gender: {user.gender}</li>
        <li>{user.name} is {user.active ? "active" : "not active"}</li>
      </ul>


      {product.map((prod, i) => (
        <ul key={i}>
          <li>{prod.title.toUpperCase()}</li>
          <li>{prod.description}</li>
          <li>${prod.price}</li>
          <li>{prod.rating}</li>
        </ul>
      ))}



      <Card />



    </div>


  )
}

// export default App