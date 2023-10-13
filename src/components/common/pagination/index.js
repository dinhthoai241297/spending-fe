import { Button } from '@chakra-ui/react';
import classNames from 'classnames';
import RCPagination from 'rc-pagination';
import { useCallback } from 'react';

import { AiOutlineEllipsis, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from './index.module.scss';

const Pagination = ({ className, ...props }) => {
    const itemRender = useCallback((page, type, element) => {
        if (['jump-prev', 'jump-next'].includes(type)) {
            return <Button variant="ghost" size="sm"><AiOutlineEllipsis fontSize={24} /></Button>;
        }

        if (type === 'page') {
            return (
                <Button
                    size="sm"
                    colorScheme="gray"
                >
                    {page}
                </Button>
            );
        }

        if (['prev', 'next'].includes(type)) {
            return (
                <Button size="sm">
                    {type === 'next' ? <AiOutlineRight /> : <AiOutlineLeft />}
                </Button>
            );
        }

        return element;
    }, [])

    return (
        <RCPagination
            itemRender={itemRender}
            className={classNames(styles.customPagination, className)}
            {...props}
        />
    );
};

export default Pagination;