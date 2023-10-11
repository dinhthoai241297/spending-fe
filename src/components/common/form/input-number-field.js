import { FormControl, FormErrorMessage, FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react';
import { useField } from 'formik';

const InputNumberField = ({
    label,
    name,
    placeholder,
}) => {
    const [field, meta] = useField(name);
    const isError = meta.touched && meta.error;

    return (
        <FormControl isInvalid={isError}>
            {!!label && <FormLabel>{label}</FormLabel>}
            <NumberInput
                {...field}
                id={name}
                placeholder={placeholder}
            >
                <NumberInputField onChange={field.onChange} />
            </NumberInput>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default InputNumberField;