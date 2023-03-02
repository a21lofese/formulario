import * as Yup from 'yup';
import { useFormik } from "formik";
import { Layout } from "../components"

export const FormikBasic = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            rol: '',
            gender: '',
            terms: false
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(3, 'Min. 3 carácteres').required('Required'),
            email: Yup.string().email('Debe de ser un email válido').required('Required'),
            password: Yup.string().min(6, 'Min. 6 carácteres').required('Required'),
            terms: Yup.boolean().isTrue('Debes aceptar los términos y condiciones'),
            rol: Yup.string().required('Required'),
            gender: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            // TODO: some action
        }
    });

    return (
        <Layout title="Formik Basic">
            <form noValidate onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Nombre Completo"
                    {...getFieldProps('fullName')}
                    className={`${(touched.fullName && errors.fullName) && 'error_input'}`}
                />
                {(touched.fullName && errors.fullName) && <span className="error">{errors.fullName}</span>}
                <input
                    type="email"
                    placeholder="E-mail"
                    {...getFieldProps('email')}
                    className={`${(touched.email && errors.email) && 'error_input'}`}
                />
                {(touched.email && errors.email) && <span className="error">{errors.email}</span>}
                <input
                    type="password"
                    placeholder="Contraseña"
                    {...getFieldProps('password')}
                    className={`${(touched.password && errors.password) && 'error_input'}`}
                />
                {(touched.password && errors.password) && <span className="error">{errors.password}</span>}
                <div>
                    <label htmlFor="rol">Select an option:</label>

                    <select id="rol" {...getFieldProps('rol')} >
                        <option value="">--- Select ---</option>
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                        <option value="employee">Empleado</option>
                    </select>
                </div>


                <div className='radio-group'>
                    <b>Gender: </b>
                    <label >
                        <input type="radio"
                            {...getFieldProps('gender')}
                            checked={getFieldProps('gender').value === 'Hombre'}
                            value='Hombre'
                        />
                        Hombre
                    </label>
                    <label >
                        <input type="radio"
                            {...getFieldProps('gender')}
                            checked={getFieldProps('gender').value === 'Mujer'}
                            value='Mujer'
                        />
                        Mujer
                    </label>
                    <label >
                        <input type="radio"
                            {...getFieldProps('gender')}
                            checked={getFieldProps('gender').value === 'Otro'}
                            value='Otro'
                        />
                        Otro
                    </label>

                    {(touched.gender && errors.gender) && <span className="error">{errors.gender}</span>}
                </div>
                {(touched.rol && errors.rol) && <span className="error">{errors.rol}</span>}
                <label>
                    <input type="checkbox" {...getFieldProps('terms')} />
                    Términos y condiciones
                    {(touched.terms && errors.terms) && <span className="error">{errors.terms}</span>}
                </label>

                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}