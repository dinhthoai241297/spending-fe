import { paths } from "@/constants/paths";
import {
    Badge,
    Button,
    Center,
    HStack,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent, PopoverHeader,
    PopoverTrigger,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const CategoryTable = ({ categories, loading, handleDelete }) => {
    return (
        <TableContainer>
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
                                <HStack>
                                    <Link href={`${paths.categories}/${category.id}`}>
                                        <Button variant="ghost" size="sm"><AiOutlineEdit /></Button>
                                    </Link>
                                    <Popover placement="top">
                                        <PopoverTrigger>
                                            <Button variant="ghost" size="sm"><AiOutlineDelete /></Button>
                                        </PopoverTrigger>
                                        <PopoverContent w={220} m="0 16px">
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>Delete category?</PopoverHeader>
                                            <PopoverBody textAlign="right">
                                                <Button
                                                    size="sm"
                                                    colorScheme="red"
                                                    onClick={() => handleDelete(category.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </HStack>
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
        </TableContainer>
    );
};

export default CategoryTable;