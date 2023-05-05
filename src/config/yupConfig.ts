import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: "Este campo é obrigatório",
        notOneOf: "Este valor não é permitido",
    },
    string: {
        min: "Mínimo de ${min} caracteres",
        email: "E-máil inválido",
    },
    number: {
        min: "Este campo deve ser maior ou igual a ${min}",
    },
});
