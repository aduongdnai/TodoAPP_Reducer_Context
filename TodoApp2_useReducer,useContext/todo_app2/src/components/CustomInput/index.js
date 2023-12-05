import { useField } from "formik";
import { Input } from '@chakra-ui/react'
const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label>{label}</label>
            <input

                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ' '}
            >

            </input>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    )
}
export default CustomInput;