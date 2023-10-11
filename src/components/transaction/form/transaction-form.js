import InputNumberField from '@/components/common/form/input-number-field';
import InputTextField from '@/components/common/form/input-text-field';
import SelectField from '@/components/common/form/select-field';
import { DATE_VALUE, eMoneyMovement, eTransactionPeriod, eTransactionType } from '@/constants';
import { moneyMovementOptions, transactionPeriodOptions, transactionTypeOptions } from '@/constants/master-data';
import useCategories from '@/hooks/useCategories';
import { Button, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { useEffect, useRef } from 'react';
import * as Yup from 'yup';

const CategoryForm = ({ onSubmit, data, isCreate }) => {
    const formRef = useRef();
    const { categories } = useCategories();

    const categoriesOptions = useMemo(() => (categories || []).map(cat => ({ label: cat.name, value: cat.id })), [ categories ]);

    const initialValues = {
        date: '',
        amount: 0,
        note: '',
        category: '',
        money_movement: eMoneyMovement.OUT,
        tx_period: eTransactionPeriod.MONTH,
        tx_type: eTransactionType.ACTUAL,
    };

    const validationSchema = Yup.object({
        date: Yup.date().required('Date is required'),
        amount: Yup.number().required('Amount is required'),
        note: Yup.string().required('Note is required'),
        category: Yup.string().required('Category is required'),
        money_movement: Yup.string().required('Money Movement is required'),
        tx_period: Yup.string().required('Transaction Period is required'),
        tx_type: Yup.string().required('Transaction Type is required'),
    });

    useEffect(() => {
        if (data) {
            formRef.current.setValues({
                ...data,
                date: dayjs(date).format(DATE_VALUE),
            });
        }
    }, [data]);

    console.log(formRef.current);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            innerRef={formRef}
        >
            <VStack as={Form} spacing={6}>
                <InputTextField
                    label="Date"
                    name="date"
                    type="date"
                />

                <InputNumberField
                    label="Amount"
                    name="amount"
                />

                <SelectField
                    label="Loại"
                    name="category"
                    options={categoriesOptions}
                />

                <InputTextField
                    label="Note"
                    name="note"
                    type="textarea"
                />

                <SelectField
                    label="Vào / Ra"
                    name="money_movement"
                    options={moneyMovementOptions}
                />


                <SelectField
                    label="Kiểu"
                    name="tx_type"
                    options={transactionTypeOptions}
                />

                <SelectField
                    label="Kỳ áp dụng"
                    name="tx_period"
                    options={transactionPeriodOptions}
                />

                <Button type="submit" mt={4} colorScheme="teal">
                    {isCreate ? 'Create Transaction' : 'Save Transaction'}
                </Button>
            </VStack>
        </Formik>
    );
};

export default CategoryForm;