
export interface InputProps {
    type: 'text' | 'radio-group' | 'email' | 'password' | 'select' | 'checkbox'
    name: string
    value: string | number | boolean
    validations: Validation[]
    placeholder?: string
    typeValue?: 'string' | 'boolean'
    label?: string
    options?: Opt[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue'
    value?: string | number | boolean
    message: string
}

export const forms: { [x: string]: InputProps[] } =
{
    login: [
        {
            type: "text",
            name: "name",
            placeholder: "Nombre Completo",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 carácteres",
                },
                {
                    type: "required",
                    message: "El nombre es requerido"
                },
            ],

        },
        {
            type: "email",
            name: "email",
            placeholder: "E-mail",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "El email es requerido"
                },
                {
                    type: "isEmail",
                    message: "El email no es válido"
                }
            ],

        },
        {
            type: "password",
            name: "password",
            placeholder: "Contraseña",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "La contraseña es requerida"
                }
            ],

        },
        {
            type: "select",
            name: "rol",
            label: "Elige una opción: ",
            value: "",
            options: [
                {
                    value: "admin",
                    desc: "Administrador",
                },
                {
                    value: "user",
                    desc: "Usuario"
                },
                {
                    value: "employee",
                    desc: "Empleado"
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "El rol es requerido"
                }
            ]
        },
        {
            type: "radio-group",
            name: "gender",
            label: "Género: ",
            value: "",
            options: [
                {
                    value: 'man',
                    desc: "Hombre"
                },
                {

                    value: "woman",
                    desc: "Mujer"
                },
                {

                    value: "other",
                    desc: "Otro"
                },
            ],
            validations: [
                {
                    type: "required",
                    message: "El género es requerido"
                }
            ]
        },
        {
            type: "checkbox",
            name: "terms",
            typeValue: "boolean",
            label: "Términos y condiciones",
            value: false,
            validations: [
                {
                    type: "isTrue",
                    message: "Debe aceptar los términos y condiciones"
                }
            ]
        },
    ],
}