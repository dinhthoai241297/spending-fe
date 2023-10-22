import { FormControl, FormErrorMessage, FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react';
import { useField } from 'formik';

const InputNumberField = ({
    label,
    name,
    placeholder,
    format,
    pattern,
}) => {
    const [field, meta] = useField(name);
    const isError = meta.touched && meta.error;

    const handleChange = e => {
        if (format) {
            e.target.value = e.target.value.replace(/\$\s?|(,*)/g, '')
        }
        field.onChange(e);
    }

    return (
        <FormControl isInvalid={isError}>
            {!!label && <FormLabel>{label}</FormLabel>}
            <NumberInput
                id={name}
                value={field.value}
                format={format}
                placeholder={placeholder}
                pattern={pattern}
            >
                <NumberInputField onChange={handleChange} />
            </NumberInput>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default InputNumberField;