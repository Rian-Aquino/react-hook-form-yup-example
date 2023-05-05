import {
    Controller,
    ControllerFieldState,
    ControllerRenderProps,
    FieldValues,
    UseFormRegisterReturn,
    UseFormStateReturn,
    useFormContext,
} from "react-hook-form";

interface FieldProps {
    name: string;
    label: string;
    render: {
        controlled?: (props: {
            field: Omit<ControllerRenderProps, "ref">;
            fieldState: ControllerFieldState;
            formState: UseFormStateReturn<FieldValues>;
        }) => React.ReactElement;
        uncontrolled?: (props: { field: UseFormRegisterReturn }) => React.ReactElement;
    };
}

export function Field({ label, render, ...rest }: FieldProps) {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label className="text-lg text-gray-700 leading-relaxed mt-4">{label}</label>

            {render.uncontrolled ? (
                render.uncontrolled({ field: { ...register(rest.name) } })
            ) : (
                <Controller
                    render={({ field: { ref, ...field }, ...props }) =>
                        render.controlled ? render.controlled({ field, ...props }) : <></>
                    }
                    control={control}
                    {...rest}
                />
            )}

            <span className="text-red-700">{errors[rest.name]?.message?.toString()}</span>
        </div>
    );
}
