import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { useField } from 'formik';

const SelectField = ({
    label,
    placeholder,
    options = [],
    onChange,
    ...rest
}) => {
    const [field, meta] = useField(rest);
    const isError = meta.touched && meta.error;

    const handleChange = e => {
        field.onChange(e);
        onChange?.(e);
    }

    return (
        <FormControl isInvalid={isError}>
            {!!label && <FormLabel>{label}</FormLabel>}
            <Select
                {...field}
                onChange={handleChange}
                placeholder={placeholder}
            >
                <option value=""> -- select</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </Select>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default SelectField;