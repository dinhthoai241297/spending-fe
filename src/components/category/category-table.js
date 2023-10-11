import { paths } from "@/constants/paths";
import { Table, Thead, Tbody, Tr, Th, Td, Spinner, Center } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";

const CategoryTable = ({ categories, loading }) => {
    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Parent ID</Th>
                    <Th>Slug</Th>
                    <Th><Center>Actions</Center></Th>
                </Tr>
            </Thead>
            <Tbody>
                {categories.map((category) => (
                    <Tr key={category.id}>
                        <Td>{category.id}</Td>
                        <Td>{category.name}</Td>
                        <Td>{category.description}</Td>
                        <Td>{category.parent_id || '-'}</Td>
                        <Td>{category.slug}</Td>
                        <Td>
                            <Center>
                                <Link href={`${paths.categories}/${category.id}`}><AiOutlineEdit /></Link>
                            </Center>
                        </Td>
                    </Tr>
                ))}
                {loading && (
                    <Tr>
                        <Td colSpan={6}>
                            <Center><Spinner /></Center>
                        </Td>
                    </Tr>
                )}
            </Tbody>
        </Table>
    );
};

export default CategoryTable;