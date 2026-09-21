/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

export const Home = () => {
    const [products, setProducts] = useState(null);
    const [retry, setRetry] = useState(false);

    const handleGetProduct = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            if (res.ok) {
                const resJons = await res.json()
                setProducts(resJons)
            }

        } catch (error) {
            console.log(error.message);

        }
    }
    console.log(products);

    useEffect(() => {
        handleGetProduct()
    }, [retry]);


    return (
        <div>
            <h1>This is home page</h1>
            {
                !products &&
                <div>
                    <h1>No product</h1>
                    <button onClick={() => { setRetry(!retry) }}>retry</button>
                </div>
            }

            {
                products?.map((pro, i) => (
                    <ul key={i}>
                        <li>{pro.title}</li>
                        <li><img width={"200px"} src={pro.image} alt={pro.title} /></li>
                        <li>{pro.description}</li>
                    </ul>
                ))
            }



        </div>
    )
}