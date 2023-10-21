'use client'

import { Box, Button, Container, Flex, SimpleGrid, Tag } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useMemo, useRef, useState } from 'react';
import ReactSelectField from '../common/form/react-select-field';

import datas, { genders, positions, skillUses, areas, years, skinCounts } from './datas';
import HeroList from './HeroList';

const mapFilterToAttr = {
    gender: 'info1',
    position: 'info2',
    skillUse: 'info3',
    area: 'info4',
    year: 'info5',
    skinCount: 'info6',
}

const filterfields = [
    {
        label: 'Giới tính',
        name: 'gender',
        options: genders,
    },
    {
        label: 'Vị trí',
        name: 'position',
        options: positions,
    },
    {
        label: 'Kỹ năng sử dụng',
        name: 'skillUse',
        options: skillUses,
    },
    {
        label: 'Khu vực',
        name: 'area',
        options: areas,
    },
    {
        label: 'Năm',
        name: 'year',
        options: years,
    },
    {
        label: 'Trang phục',
        name: 'skinCount',
        options: skinCounts,
    },
]

const Hero = () => {
    const [heros] = useState(datas);
    const [filterEqual, setFilterEqual] = useState({});
    const [filterNotEqual, setFilterNotEqual] = useState({});
    const filterEqualRef = useRef();
    const filterNotEqualRef = useRef();

    const handleFilterChange = setFilter => fieldName => e => {
        setFilter(prev => ({
            ...prev,
            [fieldName]: e,
        }))
    }

    const renderHeros = useMemo(() => {
        const equalKeys = Object.keys(filterEqual);
        const notEqualKeys = Object.keys(filterNotEqual);

        return heros.filter(hero => {
            const validEqual = equalKeys.every(key => !filterEqual[key] || filterEqual[key] === hero[mapFilterToAttr[key]]);
            const validNotEqual = notEqualKeys.every(key => !filterNotEqual[key].includes(hero[mapFilterToAttr[key]]));
            return validEqual && validNotEqual;
        });
    }, [filterEqual, filterNotEqual]);

    return (
        <Container py={8} maxW={1600}>
            <SimpleGrid columns={2} spacing={16}>
                <Formik
                    initialValues={{
                        gender: '',
                        position: '',
                        skillUse: '',
                        area: '',
                        year: '',
                        skinCount: '',
                    }}
                    innerRef={filterEqualRef}
                >
                    <Flex direction="column" gap={4}>
                        <div><Tag size="lg" colorScheme="green">Filter Equal</Tag></div>
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
                            {filterfields.map((field, index) => (
                                <ReactSelectField
                                    key={index}
                                    label={field.label}
                                    name={field.name}
                                    onChange={handleFilterChange(setFilterEqual)(field.name)}
                                    options={field.options}
                                    isClearable
                                    placeholder=""
                                />
                            ))}
                        </SimpleGrid>
                        <Button
                            type="button"
                            onClick={() => {
                                filterEqualRef.current.resetForm();
                                setFilterEqual({});
                            }}
                        >
                            Clear
                        </Button>
                    </Flex>
                </Formik>
                <Formik
                    initialValues={{
                        gender: [],
                        position: [],
                        skillUse: [],
                        area: [],
                        year: [],
                        skinCount: [],
                    }}
                    innerRef={filterNotEqualRef}
                >
                    <Flex direction="column" gap={4}>
                        <div><Tag size="lg" colorScheme="orange">Filter Not Equal</Tag></div>
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
                        {filterfields.map((field, index) => (
                                <ReactSelectField
                                    key={index}
                                    label={field.label}
                                    name={field.name}
                                    onChange={handleFilterChange(setFilterNotEqual)(field.name)}
                                    options={field.options}
                                    isClearable
                                    isMulti
                                    placeholder=""
                                />
                            ))}
                        </SimpleGrid>
                        <Button
                            type="button"
                            onClick={() => {
                                filterNotEqualRef.current.resetForm();
                                setFilterNotEqual({});
                            }}
                        >
                            Clear
                        </Button>
                    </Flex>
                </Formik>
            </SimpleGrid>
            <Box mt={12} mb={2}><b>Result({renderHeros.length})</b></Box>
            <HeroList list={renderHeros} />
        </Container>
    );
};

export default Hero;