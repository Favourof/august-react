import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schema/Login.schema"
import { publicInstance } from "@/lib/axios"



export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })


    const onSubmit = async (data) => {
        try {
            const res = await publicInstance.post("/auth/register", data)
            console.log(res);

        } catch (error) {
            console.log(error.response?.data?.message);
        }





    }
    console.log("Errors", errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[50%] p-5 mt-20 m-auto border-2 border-black rounded-2xl max-w-sm">
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="form-name">FirstName</FieldLabel>
                    <Input
                        id="form-name"
                        type="text"
                        placeholder="Evil Rabbit"
                        {...register("firstName")}
                    />
                    {errors.firstName && <p className="text-red-400">{errors.firstName.message} </p>}
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-name">LastName</FieldLabel>
                    <Input
                        id="form-name"
                        type="text"
                        placeholder="Evil Rabbit"
                        {...register("lastName")}
                    />
                    {errors.lastName && <p className="text-red-400">{errors.lastName.message} </p>}
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-email">Email</FieldLabel>
                    <Input {...register('email')} id="form-email" type="email" placeholder="john@example.com" />
                    {errors.email && <p className="text-red-400">{errors.email.message} </p>}
                    <FieldDescription>
                        We&apos;ll never share your email with anyone.
                    </FieldDescription>

                </Field>
                <div className="grid grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="form-password">Password</FieldLabel>
                        <Input {...register('password')} id="form-password" type="text" placeholder="************" />
                        {errors.password && <p className="text-red-400">{errors.password.message} </p>}
                    </Field>
                </div>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline">
                        Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </Field>
            </FieldGroup>
        </form>
    )
}
