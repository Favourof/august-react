import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { loginSchema } from "../schema/Login.schema"



export const Login = () => {

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const countries = [
        { label: "United States", value: "us" },
        { label: "United Kingdom", value: "uk" },
        { label: "Canada", value: "ca" },
    ]


    const onSubmit = (data) => {
        console.log(data);

    }
    console.log("Errors", errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[50%] p-5 mt-20 m-auto border-2 border-black rounded-2xl max-w-sm">
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="form-name">Name</FieldLabel>
                    <Input
                        id="form-name"
                        type="text"
                        placeholder="Evil Rabbit"
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-400">{errors.name.message} </p>}
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
                        <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                        <Input {...register('phoneNumber')} id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="form-country">Country</FieldLabel>
                        <Controller
                            name="country"
                            control={control}
                            render={({ field }) => (
                                // Radix/shadcn Select components need the exact value and onChange bound here
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value || ""}
                                >
                                    <SelectTrigger id="form-country" ref={field.ref}>
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {countries.map((country) => (
                                                <SelectItem key={country.value} value={country.value}>
                                                    {country.label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </Field>
                </div>
                <Field>
                    <FieldLabel htmlFor="form-address">Address</FieldLabel>
                    <Input {...register('address')} id="form-address" type="text" placeholder="123 Main St" />
                </Field>
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
