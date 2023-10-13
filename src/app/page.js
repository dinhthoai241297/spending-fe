'use client'

import Pagination from '@/components/common/pagination'
import { useState } from 'react';
import styles from './page.module.scss'

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <main className={styles.homePage}>
            <Pagination
                total={500}
                pageSize={10}
                current={currentPage}
                onChange={e => setCurrentPage(e)}
            />
        </main>
    )
}
