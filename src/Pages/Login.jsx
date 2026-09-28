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
import { Controller, useForm } from "react-hook-form"


export const Login = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm()

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
                        {...register("name", { required: { value: true, message: "Name is required" }, minLength: { value: 3, message: "Name must be at least 3 character" } })}
                    />
                    {errors.name && <p className="text-red-400">{errors.name.message} </p>}
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-email">Email</FieldLabel>
                    <Input {...register('email', { required: { value: true, message: "Email is required" } })} id="form-email" type="email" placeholder="john@example.com" />
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
                            control={control} // Obtained from const { control, register } = useForm();
                            defaultValue="us"
                            render={({ field: { onChange, value, ref } }) => (
                                <Select
                                    onValueChange={onChange} // Custom components usually name this onValueChange
                                    value={value}
                                    defaultValue="us"
                                    items={countries}
                                >
                                    <SelectTrigger id="form-country" ref={ref}>
                                        <SelectValue />
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
