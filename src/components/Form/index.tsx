import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { FormHTMLAttributes, PropsWithChildren } from "react";

interface FormProps<T extends FieldValues>
    extends PropsWithChildren,
        FormHTMLAttributes<HTMLFormElement> {
    methods: UseFormReturn<T, any>;
    onSubmit: SubmitHandler<FieldValues>;
}

export function Form<T extends FieldValues>({
    methods,
    onSubmit,
    children,
    ...rest
}: FormProps<T>) {
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
                {children}
            </form>
        </FormProvider>
    );
}
