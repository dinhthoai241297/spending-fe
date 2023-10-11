import { DATE_DISPLAY } from "@/constants";
import { paths } from "@/constants/paths";
import { Center, Spinner, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";

const TransactionTable = ({ transactions, loading }) => {
    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Date</Th>
                    <Th>Amount</Th>
                    <Th>Category</Th>
                    <Th>Money movement</Th>
                    <Th>TX period</Th>
                    <Th>TX type</Th>
                    <Th><Center>Actions</Center></Th>
                </Tr>
            </Thead>
            <Tbody>
                {transactions.map((transaction) => (
                    <Tr key={transaction.id}>
                        <Td>{transaction.id}</Td>
                        <Td>{dayjs(transaction.date).format(DATE_DISPLAY)}</Td>
                        <Td>{transaction.amount}</Td>
                        <Td>{transaction.category}</Td>
                        <Td>{transaction.money_movement}</Td>
                        <Td>{transaction.tx_period}</Td>
                        <Td>{transaction.tx_type}</Td>
                        <Td>
                            <Center>
                                <Link href={`${paths.transactions}/${transaction.id}`}><AiOutlineEdit /></Link>
                            </Center>
                        </Td>
                    </Tr>
                ))}
                {loading && (
                    <Tr>
                        <Td colSpan={8}>
                            <Center><Spinner /></Center>
                        </Td>
                    </Tr>
                )}
            </Tbody>
        </Table>
    );
};

export default TransactionTable;