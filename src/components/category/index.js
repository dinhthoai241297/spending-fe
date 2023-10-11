'use client'

import useCategories from "@/hooks/useCategories";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import { paths } from "@/constants/paths";

import CategoryTable from "./category-table";

const Categories = () => {
    const { categories = [], loading } = useCategories();

    return (
        <Box py={8}>
            <Flex mb={6} justifyContent="space-between">
                <Heading size="lg">
                    Categories
                </Heading>
                <Link href={{ pathname: `${paths.categories}/create` }}>
                    <Button type="submit" colorScheme="teal">
                        Add Category
                    </Button>
                </Link>
            </Flex>
            <CategoryTable categories={categories || []} loading={loading} />
        </Box>
    );
};

export default Categories;