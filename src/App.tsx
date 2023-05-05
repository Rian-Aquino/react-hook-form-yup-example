import { useForm } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Field } from "./components/Field";
import { InputText } from "./elements/InputText";
import { Form } from "./components/Form";

const schema = Yup.object({
    nome: Yup.string().required(),
    email: Yup.string().email().required(),
    fruta: Yup.mixed().required(),
});

type FormFields = Yup.InferType<typeof schema>;

function App() {
    const methods = useForm<FormFields>({ resolver: yupResolver(schema) });

    return (
        <div className="w-50">
            <Form methods={methods} onSubmit={(data) => console.log(data)}>
                <Field
                    label="E-mail"
                    name="email"
                    render={{
                        uncontrolled: ({ field }) => (
                            <InputText {...field} placeholder="digite seu e-mail" />
                        ),
                    }}
                />

                <Field
                    label="Fruta"
                    name="fruta"
                    render={{
                        controlled: ({ field }) => (
                            <Select
                                {...field}
                                options={[
                                    { label: "Maçã", value: "maça" },
                                    { label: "Banana", value: "banana" },
                                    { label: "Morango", value: "morango" },
                                    { label: "Laranja", value: "laranja" },
                                    { label: "Uva", value: "uva" },
                                ]}
                            />
                        ),
                    }}
                />

                <Field
                    label="Nome"
                    name="nome"
                    render={{
                        uncontrolled: ({ field }) => (
                            <input
                                {...field}
                                id="nome"
                                placeholder="digite seu nome"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                defaultValue=""
                            />
                        ),
                    }}
                />

                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                    Enviar
                </button>
            </Form>
        </div>
    );
}

export default App;
