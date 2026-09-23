/* eslint-disable react-hooks/set-state-in-effect */
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";
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
            <h1 className="text-2xl text-pink-900">This is home page</h1>
            <AlertDialog>
                <AlertDialogTrigger render={<Button variant="outline" className={"bg-amber-700"}>Show Dialog</Button>} />
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            {
                !products &&
                <div>
                    <h1>No product</h1>
                    <button onClick={() => { setRetry(!retry) }}>retry</button>
                </div>
            }
            <div className="flex w-[80%] m-auto flex-wrap">
                {
                    products?.map((pro, i) => (

                        <Card title={pro.title} key={i} className="relative  mx-auto w-full max-w-xs pt-0">
                            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img
                                src={pro.image ? pro.image : "https://avatar.vercel.sh/shadcn1"}
                                alt="Event cover"
                                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                            />
                            <CardHeader>
                                <CardAction>
                                    <Badge variant="secondary">{pro.price}</Badge>
                                </CardAction>
                                <CardTitle className={"line-clamp-1"}>{pro.title}</CardTitle>
                                <span className="pointer-events-none absolute left-0 top-full z-50 mt-1 hidden w-max max-w-[280px] rounded-md bg-black px-2 py-1 text-sm text-white shadow-lg group-hover/title:block group-focus/title:block">
                                    {pro.title}
                                </span>
                                <p>${pro.price}</p>
                                <CardDescription className={"w-[100%] line-clamp-2"}>
                                    {pro.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button className="w-full">View Details</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>




        </div>
    )
}