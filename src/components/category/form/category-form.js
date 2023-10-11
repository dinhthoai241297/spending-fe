import InputTextField from '@/components/common/form/input-text-field';
import { Button, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useEffect, useRef } from 'react';
import * as Yup from 'yup';

const CategoryForm = ({ onSubmit, data, isCreate }) => {
    const formRef = useRef();

    const initialValues = {
        name: '',
        description: '',
        slug: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        slug: Yup.string().required('Slug is required'),
    });

    useEffect(() => {
        if (data) {
            formRef.current.setValues(data);
        }
    }, [ data ]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            innerRef={formRef}
        >
            <VStack as={Form} spacing={6}>
                <InputTextField
                    label="Name"
                    name="name"
                    placeholder="Category Name"
                />

                <InputTextField
                    label="Description"
                    name="description"
                    placeholder="Category Description"
                    type="textarea"
                />

                <InputTextField
                    label="Slug"
                    name="slug"
                    placeholder="Category Slug"
                />

                <Button type="submit" mt={4} colorScheme="teal">
                    {isCreate ? 'Create Category' : 'Save Category'}
                </Button>
            </VStack>
        </Formik>
    );
};

export default CategoryForm;