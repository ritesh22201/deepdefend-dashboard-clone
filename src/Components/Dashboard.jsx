import React from 'react';
import {
    Box, Flex, VStack, Heading, Text, Select, Button, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
}
from '@chakra-ui/react';
import { GiSpeedometer } from 'react-icons/gi';
import { PiDotsSixBold } from 'react-icons/pi';
import { CgNotes } from 'react-icons/cg';
import { FaMizuni, FaXmark } from 'react-icons/fa6';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { TfiBoltAlt } from 'react-icons/tfi';
import { AiOutlineFileSearch, AiOutlineQuestionCircle } from 'react-icons/ai';
import { LineGraph } from './LineGraph';

const Dashboard = () => {
    return (
        <Box bg={'#000'} minH={'100vh'}>
            <Flex>
                <VStack p={'10px 0'} justifyContent={'space-between'} h={'100vh'} fontSize={'20px'} bg={'#171717'} w={'6%'} alignItems={'center'} color={'gray.200'}>
                    <GiSpeedometer style={{ color: '#9F7AEA' }} />
                    <PiDotsSixBold style={{ fontWeight: 'bolder' }} />
                    <CgNotes />
                    <FaXmark />
                    <FaMizuni />
                    <RxDragHandleDots2 />
                    <FiSettings />
                    <AiOutlineFileSearch />
                    <AiOutlineQuestionCircle style={{ marginTop: '120px' }} />
                </VStack>
                <Box bg={'#15191c'} p={'5px 15px'} w={'94%'}>

                    {/*  Section 1 code starts from here */}

                    <Flex gap={'15px'} p={'10px'} bg={'#23262b'}>
                        <Box textAlign={'center'} bg={'#2f343a'} p={'5px'} w={'14%'}>
                            <Heading size={'sm'} mb={'10px'} color={'white'}>Security Score</Heading>
                            <Box className='hexagon'>
                                <Heading className='heading' fontSize={'22px'}>C</Heading>
                            </Box>
                            <Heading mt={'7px'} size={'sm'} mb={'15px'} color={'white'}>75</Heading>
                            <Heading mt={'-10px'} justifyContent={'center'} display={'flex'} alignItems={'center'} color={'white'} fontSize={'13px'}>3 <TfiBoltAlt style={{ fontWeight: 'bold' }} /> From last month</Heading>
                        </Box>
                        <Box w={'30%'}>
                            <Text color={'gray.300'}>Compare Scenarios</Text>
                            <Flex gap={'10px'} mt={'10px'} alignItems={'center'} color={'gray.200'} fontSize={'14px'}>
                                <Box w={'10px'} h={'10px'} borderRadius={'50%'} bg={'#fb8022'}></Box>
                                <Text>Azure to AWS_2</Text>
                            </Flex>
                            <Flex gap={'10px'} mt={'10px'} alignItems={'center'} color={'gray.200'} fontSize={'14px'}>
                                <Box w={'10px'} h={'10px'} borderRadius={'50%'} bg={'purple.400'}></Box>
                                <Text>Hybrid Risk to customer data</Text>
                            </Flex>
                            <Flex gap={'10px'} mt={'10px'} alignItems={'center'} color={'gray.200'} fontSize={'14px'}>
                                <Box w={'10px'} h={'10px'} borderRadius={'50%'} bg={'green.300'}></Box>
                                <Text>Log4Shell (CVE-2021-44228) | Risk from...</Text>
                            </Flex>
                        </Box>
                        <Box w={'66%'} h={'160px'}>
                            <LineGraph />
                        </Box>
                    </Flex>

                    {/* Section 2 code starts from here */}

                    <section>
                        <Box>
                            <Flex fontSize={'14px'} w={'25%'} pt={'10px'} color={'gray.200'}>
                                <Select bg={'#15191c'} variant={'ghost'}>
                                    <option value="">All Scenarios</option>
                                </Select>
                                <Select bg={'#15191c'} variant={'ghost'}>
                                    <option value="">Past 14 days</option>
                                </Select>
                            </Flex>
                            <Flex gap={'15px'}>
                                <Box w={'50%'}>
                                    <Box color={'gray.300'}>
                                        <Flex alignItems={'center'} fontSize={'15px'} gap={'10px'}>
                                            <Text>Scenarios at high risk</Text>
                                            <Button color={'gray.200'} fontSize={'12px'} _hover={'none'} _active={'none'} variant={'ghost'}>View all</Button>
                                        </Flex>
                                    </Box>
                                    <Flex direction={'column'} gap={'10px'} bg={'#23262b'} p={'20px'}>
                                        <Flex alignItems={'center'} justifyContent={'space-between'} color={'gray.200'}>
                                            <Box className='hexagonB'>
                                                <Heading color={'black'} className='heading' fontSize={'22px'}>F</Heading>
                                            </Box>
                                            <Text>(22)-On-Premium Risk | Workstations {'>'} DC...</Text>
                                            <Button _hover={'none'} _active={'none'} color={'gray.200'} variant={'outline'}>Take action</Button>
                                        </Flex>
                                        <Flex alignItems={'center'} justifyContent={'space-between'} color={'gray.200'}>
                                            <Box className='hexagonB'>
                                                <Heading color={'black'} className='heading' fontSize={'22px'}>F</Heading>
                                            </Box>
                                            <Text>(24) - AWS - Publice EC2 to Sensitive Data S3</Text>
                                            <Button _hover={'none'} _active={'none'} color={'gray.200'} variant={'outline'}>Take action</Button>
                                        </Flex>
                                        <Flex alignItems={'center'} justifyContent={'space-between'} color={'gray.200'}>
                                            <Box className='hexagonB'>
                                                <Heading color={'black'} className='heading' fontSize={'22px'}>F</Heading>
                                            </Box>
                                            <Text>(24) - Azure External Users {'>'} Azure Custome...</Text>
                                            <Button _hover={'none'} _active={'none'} color={'gray.200'} variant={'outline'}>Take action</Button>
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Box w={'50%'}>
                                    <Box color={'gray.300'}>
                                        <Flex alignItems={'center'} fontSize={'15px'} gap={'10px'}>
                                            <Text>Critical assets at risk</Text>
                                            <Button color={'gray.200'} fontSize={'12px'} _hover={'none'} _active={'none'} variant={'ghost'}>View all</Button>
                                        </Flex>
                                    </Box>
                                    <Flex>
                                        <Box>
                                            <Text color={'gray.200'} fontSize={'13px'}>Critical assets compromised by attack vectors with the lowest average complexity</Text>

                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </section>
                </Box>
            </Flex>
        </Box>
    )
}

export default Dashboard;
