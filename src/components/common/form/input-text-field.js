import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import { useMemo } from 'react';

const InputTextField = ({
    label,
    name,
    placeholder,
    type = 'input',
}) => {
    const [field, meta] = useField(name);
    const isError = meta.touched && meta.error;

    const InputComponent = useMemo(() => {
        return type === 'textarea' ? Textarea : Input;
    }, [type]);

    return (
        <FormControl isInvalid={isError}>
            {!!label && <FormLabel>{label}</FormLabel>}
            <InputComponent
                type={type}
                {...field}
                id={name}
                placeholder={placeholder}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default InputTextField;