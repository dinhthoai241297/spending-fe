import { moneyMovementOptions, transactionPeriodOptions, transactionTypeOptions } from '@/constants/master-data';
import useCategories from '@/hooks/useCategories';
import { Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useRef } from 'react';
import { useMemo } from 'react';
import SelectField from '../common/form/select-field';

const emptyForm = Object.freeze({
    category: '',
    money_movement: '',
    tx_type: '',
    tx_period: '',
});

const TransactionFilter = ({
    initialValues,
    onFilterChange,
}) => {
    const formRef = useRef();
    const { categories } = useCategories();
    const categoriesOptions = useMemo(() => (categories || []).map(cat => ({ label: cat.name, value: cat.id })), [categories]);

    const handleFilterChange = fieldName => (e) => {
        onFilterChange({ [fieldName]: e.target.value });
    }

    const handleReset = () => {
        formRef.current.setValues(emptyForm);
        onFilterChange(emptyForm);
    }

    return (
        <Formik
            initialValues={{
                ...emptyForm,
                ...initialValues
            }}
            innerRef={formRef}
        >
            <Flex direction="column" gap={4}>
                <SimpleGrid minChildWidth="120px" spacing="24px">
                    <SelectField
                        label="Loại"
                        name="category"
                        options={categoriesOptions}
                        onChange={handleFilterChange('category')}
                    />

                    <SelectField
                        label="Vào / Ra"
                        name="money_movement"
                        options={moneyMovementOptions}
                        onChange={handleFilterChange('money_movement')}
                    />

                    <SelectField
                        label="Kiểu"
                        name="tx_type"
                        options={transactionTypeOptions}
                        onChange={handleFilterChange('tx_type')}
                    />

                    <SelectField
                        label="Kỳ áp dụng"
                        name="tx_period"
                        options={transactionPeriodOptions}
                        onChange={handleFilterChange('tx_period')}
                    />

                </SimpleGrid>
                <Button ml="auto" onClick={handleReset}>Reset</Button>
            </Flex>
        </Formik>
    );
};

export default TransactionFilter;