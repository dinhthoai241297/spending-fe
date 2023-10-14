'use client'

import useCategories from "@/hooks/useCategories";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import { paths } from "@/constants/paths";
import apiConfig from "@/constants/apiConfig";
import useFetch from "@/hooks/useFetch";
import useMessage from "@/hooks/useMessage";
import CategoryTable from "./category-table";

const Categories = () => {
    const { showSuccess } = useMessage();
    const { categories = [], loading, execute } = useCategories();
    const { execute: executeDelete } = useFetch(apiConfig.categories.delete);

    const handleDelete = id => {
        executeDelete({
            pathParams: { id },
            onCompleted: () => {
                execute({});
                showSuccess('Delete category success!');
            }
        })
    }

    return (
        <Box py={8}>
            <Flex mb={6} justifyContent="space-between">
                <Heading size="lg">
                    Categories
                </Heading>
                <Link href={{ pathname: `${paths.categories}/create` }}>
                    <Button type="submit" colorScheme="green">
                        Add Category
                    </Button>
                </Link>
            </Flex>
            <CategoryTable
                categories={categories || []}
                loading={loading}
                handleDelete={handleDelete}
            />
        </Box>
    );
};

export default Categories;