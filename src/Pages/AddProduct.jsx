

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { productSchema } from "../schema/Product.schema"
import { privateInstance } from "@/lib/axios"

export const AddProduct = () => {
    const [submitted, setSubmitted] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: { title: "", description: "", price: undefined, category: "", stock: undefined, image: undefined },
    })

    const submitProduct = async (values) => {
        const payload = new FormData()
        Object.entries(values).forEach(([key, value]) => payload.append(key, value))

        try {

            const product = await privateInstance.post("/products", payload)
            console.log(product);

            if (product) {
                console.log(product);
            }
            console.log("Product payload", payload)
        } catch (error) {
            console.log(error.response.data.error);

        }



        setSubmitted(true)
        // reset()
    }

    const fieldError = (name) => errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
    )

    return (
        <div className="mx-auto max-w-2xl">
            <div className="mb-6">
                <p className="text-sm text-muted-foreground">Catalog</p>
                <h1 className="text-2xl font-semibold tracking-tight">Add product</h1>
                <p className="mt-1 text-sm text-muted-foreground">Add a product to your inventory with its image and details.</p>
            </div>

            <form onSubmit={handleSubmit(submitProduct)} encType="multipart/form-data" className="rounded-2xl border bg-card p-6 shadow-sm">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="product-title">Title</FieldLabel>
                        <Input id="product-title" placeholder="e.g. Classic leather bag" aria-invalid={Boolean(errors.title)} {...register("title")} />
                        {fieldError("title")}
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="product-description">Description</FieldLabel>
                        <textarea id="product-description" rows={5} placeholder="Describe the product..." aria-invalid={Boolean(errors.description)} className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50" {...register("description")} />
                        {fieldError("description")}
                    </Field>

                    <div className="grid gap-4 sm:grid-cols-3">
                        <Field>
                            <FieldLabel htmlFor="product-price">Price</FieldLabel>
                            <Input id="product-price" type="number" min="0" step="0.01" placeholder="0.00" aria-invalid={Boolean(errors.price)} {...register("price", { valueAsNumber: true })} />
                            {fieldError("price")}
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="product-category">Category</FieldLabel>
                            <Input id="product-category" placeholder="e.g. Accessories" aria-invalid={Boolean(errors.category)} {...register("category")} />
                            {fieldError("category")}
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="product-stock">Stock</FieldLabel>
                            <Input id="product-stock" type="number" min="0" step="1" placeholder="0" aria-invalid={Boolean(errors.stock)} {...register("stock", { valueAsNumber: true })} />
                            {fieldError("stock")}
                        </Field>
                    </div>

                    <Field>
                        <FieldLabel htmlFor="product-image">Image</FieldLabel>
                        <Input id="product-image" type="file" accept="image/*" aria-invalid={Boolean(errors.image)} {...register("image", { setValueAs: (files) => files?.[0] })} />
                        <FieldDescription>Upload one product image.</FieldDescription>
                        {fieldError("image")}
                    </Field>

                    {submitted && <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">Product payload is ready to send.</p>}

                    <div className="flex justify-end gap-3">
                        <Button type="button" variant="outline" onClick={() => { reset(); setSubmitted(false) }}>Clear</Button>
                        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Add product"}</Button>
                    </div>
                </FieldGroup>
            </form>
        </div>
    )
}
