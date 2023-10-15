import { DATE_DISPLAY, eMoneyMovement } from "@/constants";
import { moneyMovementOptions, transactionPeriodOptions, transactionTypeOptions } from "@/constants/master-data";
import { paths } from "@/constants/paths";
import { formatNumber, getLabel } from "@/utils";
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
import dayjs from "dayjs";
import Link from "next/link";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TransactionTable = ({ transactions, loading, handleDelete }) => {
    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date</Th>
                        <Th>Amount</Th>
                        <Th>Category</Th>
                        <Th textAlign="center">Money movement</Th>
                        <Th>TX period</Th>
                        <Th>TX type</Th>
                        <Th><Center>Actions</Center></Th>
                    </Tr>
                </Thead>
                <Tbody position="relative" h={65}>
                    {transactions.map((transaction) => (
                        <Tr key={transaction.id}>
                            <Td>{transaction.id}</Td>
                            <Td>{dayjs(transaction.date).format(DATE_DISPLAY)}</Td>
                            <Td>{formatNumber(transaction.amount)}</Td>
                            <Td>{transaction.category?.name || '-'}</Td>
                            <Td textAlign="center">
                                <Badge colorScheme={transaction.money_movement == eMoneyMovement.IN ? 'green' : 'orange'}>
                                    {getLabel(moneyMovementOptions, transaction.money_movement)}
                                </Badge>
                            </Td>
                            <Td>{getLabel(transactionPeriodOptions, transaction.tx_period)}</Td>
                            <Td>{getLabel(transactionTypeOptions, transaction.tx_type)}</Td>
                            <Td>
                                <HStack justifyContent="center">
                                    <Link href={`${paths.transactions}/${transaction.id}`}>
                                        <Button variant="ghost" size="sm"><AiOutlineEdit color="orange" size={18} /></Button>
                                    </Link>
                                    <Popover placement="top">
                                        <PopoverTrigger>
                                            <Button variant="ghost" size="sm"><AiOutlineDelete color="red" size={18} /></Button>
                                        </PopoverTrigger>
                                        <PopoverContent w={220} m="0 16px">
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>Delete transaction?</PopoverHeader>
                                            <PopoverBody textAlign="right">
                                                <Button
                                                    size="sm"
                                                    colorScheme="red"
                                                    onClick={() => handleDelete(transaction.id)}
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
                        <Tr><Td colSpan={8}><Center position="absolute" w="100%" h="100%" top={0} bg="#ffffffa1" backdropBlur="8px"><Spinner /></Center></Td></Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TransactionTable;