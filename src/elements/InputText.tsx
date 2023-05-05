import { InputHTMLAttributes, forwardRef } from "react";

export const InputText = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    (props, ref) => {
        return (
            <input
                {...props}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={ref}
            />
        );
    }
);
