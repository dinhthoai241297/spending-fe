import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { useField } from 'formik';
import Select from 'react-select'

const ReactSelectField = ({
    label,
    options = [],
    onChange,
    isMulti,
    ...rest
}) => {
    const [field, meta, helper] = useField(rest);
    const isError = meta.touched && meta.error;

    const handleChange = selectedOption => {
        let value = isMulti ? selectedOption?.map(el => el.value) || [] : selectedOption?.value || '';
        helper.setValue(value);
        onChange?.(value);
    }

    const getValueSelected = () => {
        if (isMulti) {
            return options.filter(opt => field.value.includes(opt.value));
        }

        return options.find(opt => field.value === opt.value) || '';
    }

    return (
        <FormControl isInvalid={isError}>
            {!!label && <FormLabel>{label}</FormLabel>}
            <Select
                {...field}
                value={getValueSelected()}
                onChange={handleChange}
                options={options}
                isMulti={isMulti}
                {...rest}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default ReactSelectField;