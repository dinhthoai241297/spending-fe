'use client'

import { Box, Container, SimpleGrid, Image, Flex, Button, Center } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useMemo } from 'react';
import { useState } from 'react';
import SelectField from '../common/form/select-field';

import datas from './datas';

const genders = [
    { label: 'Nữ', value: 'Nữ' },
    { label: 'Nam', value: 'Nam' },
]

const positions = [
    {
        "label": "Đấu sĩ, Sát thủ",
        "value": "Đấu sĩ, Sát thủ"
    },
    {
        "label": "Pháp sư",
        "value": "Pháp sư"
    },
    {
        "label": "Trợ thủ",
        "value": "Trợ thủ"
    },
    {
        "label": "Đấu sĩ",
        "value": "Đấu sĩ"
    },
    {
        "label": "Pháp sư, Trợ thủ",
        "value": "Pháp sư, Trợ thủ"
    },
    {
        "label": "Sát thủ",
        "value": "Sát thủ"
    },
    {
        "label": "Đấu sĩ, Đỡ đòn",
        "value": "Đấu sĩ, Đỡ đòn"
    },
    {
        "label": "Đỡ đòn, Trợ thủ",
        "value": "Đỡ đòn, Trợ thủ"
    },
    {
        "label": "Đỡ đòn",
        "value": "Đỡ đòn"
    },
    {
        "label": "Xạ thủ",
        "value": "Xạ thủ"
    },
    {
        "label": "Sát thủ, Pháp sư",
        "value": "Sát thủ, Pháp sư"
    }
]

const skillUses = [
    {
        "label": "Không",
        "value": "Không"
    },
    {
        "label": "Mana",
        "value": "Mana"
    },
    {
        "label": "Nội năng",
        "value": "Nội năng"
    },
    {
        "label": "Máu",
        "value": "Máu"
    }
]

const areas = [
    {
        "label": "Đảo Sương Mù",
        "value": "Đảo Sương Mù"
    },
    {
        "label": "Vực Hỗn Mang",
        "value": "Vực Hỗn Mang"
    },
    {
        "label": "Norman",
        "value": "Norman"
    },
    {
        "label": "Tân Liên Hiệp",
        "value": "Tân Liên Hiệp"
    },
    {
        "label": "Học Viện Carano",
        "value": "Học Viện Carano"
    },
    {
        "label": "Vương Quốc Okka",
        "value": "Vương Quốc Okka"
    },
    {
        "label": "Rừng Nguyên Sinh",
        "value": "Rừng Nguyên Sinh"
    },
    {
        "label": "Helios",
        "value": "Helios"
    },
    {
        "label": "Tháp Quang Minh",
        "value": "Tháp Quang Minh"
    },
    {
        "label": "Chưa rõ",
        "value": "Chưa rõ"
    },
    {
        "label": "Vương Quốc Rồng",
        "value": "Vương Quốc Rồng"
    }
]

const years = [
    {
        "label": "2017",
        "value": "2017"
    },
    {
        "label": "2016",
        "value": "2016"
    },
    {
        "label": "2020",
        "value": "2020"
    },
    {
        "label": "2018",
        "value": "2018"
    },
    {
        "label": "2021",
        "value": "2021"
    },
    {
        "label": "2023",
        "value": "2023"
    },
    {
        "label": "2019",
        "value": "2019"
    },
    {
        "label": "2022",
        "value": "2022"
    }
]

const skinCounts = [
    {
        "label": "14",
        "value": "14"
    },
    {
        "label": "9",
        "value": "9"
    },
    {
        "label": "11",
        "value": "11"
    },
    {
        "label": "7",
        "value": "7"
    },
    {
        "label": "8",
        "value": "8"
    },
    {
        "label": "10",
        "value": "10"
    },
    {
        "label": "6",
        "value": "6"
    },
    {
        "label": "4",
        "value": "4"
    },
    {
        "label": "5",
        "value": "5"
    },
    {
        "label": "3",
        "value": "3"
    },
    {
        "label": "2",
        "value": "2"
    },
    {
        "label": "13",
        "value": "13"
    },
    {
        "label": "12",
        "value": "12"
    },
    {
        "label": "17",
        "value": "17"
    },
    {
        "label": "15",
        "value": "15"
    },
    {
        "label": "1",
        "value": "1"
    }
]

const mapFilterToAttr = {
    gender: 'info1',
    position: 'info2',
    skillUse: 'info3',
    area: 'info4',
    year: 'info5',
    skinCount: 'info6',
}

const Hero = () => {
    const [heros, setHeros] = useState(datas);
    const [filter, setFilter] = useState({});

    const handleFilterChange = fieldName => e => {
        setFilter(prev => ({
            ...prev,
            [fieldName]: e.target.value,
        }))
    }

    console.log(filter);

    const renderHeros = useMemo(() => {
        const keys = Object.keys(filter);
        return heros.filter(hero => keys.every(key => !filter[key] || filter[key] === hero[mapFilterToAttr[key]]));
    }, [ filter ]);

    return (
        <Container py={8} maxW={1600}>
            <Formik
                initialValues={{}}
            >
                <Flex direction="column" gap={4}>
                    <SimpleGrid minChildWidth="120px" spacing="24px">
                        <SelectField
                            label="Giới tính"
                            name="gender"
                            onChange={handleFilterChange('gender')}
                            options={genders}
                        />
                        <SelectField
                            label="Vị trí"
                            name="position"
                            onChange={handleFilterChange('position')}
                            options={positions}
                        />
                        <SelectField
                            label="Kỹ năng sử dụng"
                            name="skillUse"
                            onChange={handleFilterChange('skillUse')}
                            options={skillUses}
                        />
                        <SelectField
                            label="Khu vực"
                            name="area"
                            onChange={handleFilterChange('area')}
                            options={areas}
                        />
                        <SelectField
                            label="Năm"
                            name="year"
                            onChange={handleFilterChange('year')}
                            options={years}
                        />
                        <SelectField
                            label="Trang phục"
                            name="skinCount"
                            onChange={handleFilterChange('skinCount')}
                            options={skinCounts}
                        />
                    </SimpleGrid>
                </Flex>
            </Formik>
            <SimpleGrid minChildWidth='120px' spacing='40px' mt={12}>
                {renderHeros.map(hero => (
                    <Box key={hero.id} textAlign="center">
                        <Image width="80px" src={hero.icon} alt={hero.name} borderRadius={4} mx="auto" />
                        <b>{hero.name}</b>
                        {/* <Box textAlign="left" fontSize={12}>
                            <p>Giới tính: {hero.info1}</p>
                            <p>Vị trí: {hero.info2}</p>
                            <p>Kỹ năng sử dụng: {hero.info3}</p>
                            <p>Khu vực: {hero.info5}</p>
                            <p>{hero.info5} - {hero.info6}</p>
                        </Box> */}
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Hero;