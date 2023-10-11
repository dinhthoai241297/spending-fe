import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { useField } from 'formik';

const SelectField = ({
    label,
    name,
    placeholder,
    type = 'input',
    options = [],
}) => {
    const [field, meta] = useField(name);
    const isError = meta.touched && meta.error;

    return (
        <FormControl isInvalid={isError}>
            {!!label && <FormLabel>{label}</FormLabel>}
            <Select
                {...field}
                id={name}
                placeholder={placeholder}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </Select>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default SelectField;