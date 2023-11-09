import React from 'react';
import {
    Box, Flex, VStack, Heading, Text, Select, Button, Progress, Image
}
    from '@chakra-ui/react';
import { GiSpeedometer } from 'react-icons/gi';
import { PiArrowFatRightFill, PiDotsSixBold } from 'react-icons/pi';
import { CgNotes } from 'react-icons/cg';
import { FaMizuni, FaXmark } from 'react-icons/fa6';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { TfiBoltAlt } from 'react-icons/tfi';
import { AiOutlineFileSearch, AiOutlineQuestionCircle } from 'react-icons/ai';
import { LineGraph } from './LineGraph';
import { MdWindow } from 'react-icons/md';
import Doughnut from './Doughnut Chart/Doughnut';
import honeycomb from '../Assets/honeycomb.png';

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
                                <Box w={'45%'}>
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
                                <Box w={'55%'}>
                                    <Box color={'gray.300'}>
                                        <Flex alignItems={'center'} fontSize={'15px'} gap={'10px'}>
                                            <Text>Critical assets at risk</Text>
                                            <Button color={'gray.200'} fontSize={'12px'} _hover={'none'} _active={'none'} variant={'ghost'}>View all</Button>
                                        </Flex>
                                    </Box>
                                    <Flex bg={'#23262b'} justifyContent={'space-between'} alignItems={'center'} p={'15px 15px 14px 15px'}>
                                        <Box color={'gray.200'} lineHeight={'22px'}>
                                            <Text fontSize={'12px'}>Critical assets compromised by attack vectors with the lowest average complexity</Text>
                                            <Flex color={'gray.300'} mt={'15px'} justifyContent={'space-between'}>
                                                <Heading fontSize={'13px'}>Critical asset name</Heading>
                                                <Flex gap={'40px'}>
                                                    <Heading fontSize={'13px'}>Avg Complexi...</Heading>
                                                    <Heading fontSize={'13px'}>Trend</Heading>
                                                </Flex>
                                            </Flex>
                                            <hr style={{ marginTop: '5px' }} />
                                            <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                                                <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Raymond Butcher</Text>
                                                <Flex w={'38%'} justifyContent={'space-between'}>
                                                    <Text display={'flex'} alignItems={'center'} fontSize={'13px'} gap={'2px'}>
                                                        <Text mr={'6px'}>2</Text>
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={100} />
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={0} />
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={0} />
                                                        <Text ml={'6px'} color='#cd1541'>Low</Text>
                                                    </Text>
                                                    <Text fontSize={'14px'} mt={'5px'} color={'white'}><PiArrowFatRightFill /></Text>
                                                </Flex>
                                            </Flex>
                                            <hr style={{ marginTop: '5px' }} />
                                            <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                                                <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Raymond Butcher</Text>
                                                <Flex w={'38%'} justifyContent={'space-between'}>
                                                    <Text display={'flex'} alignItems={'center'} fontSize={'13px'} gap={'2px'}>
                                                        <Text mr={'6px'}>2</Text>
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={100} />
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={0} />
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={0} />
                                                        <Text ml={'6px'} color='#cd1541'>Low</Text>
                                                    </Text>
                                                    <Text fontSize={'14px'} mt={'5px'} color={'white'}><PiArrowFatRightFill /></Text>
                                                </Flex>
                                            </Flex>
                                            <hr style={{ marginTop: '5px' }} />
                                            <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                                                <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Raymond Butcher</Text>
                                                <Flex w={'38%'} justifyContent={'space-between'}>
                                                    <Text display={'flex'} alignItems={'center'} fontSize={'13px'} gap={'2px'}>
                                                        <Text mr={'6px'}>2</Text>
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={100} />
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={0} />
                                                        <Progress w={'10px'} colorScheme='none' color='#cd1541' bg={'#cd1541'} size='md' value={0} />
                                                        <Text ml={'6px'} color='#cd1541'>Low</Text>
                                                    </Text>
                                                    <Text fontSize={'14px'} mt={'5px'} color={'white'}><PiArrowFatRightFill /></Text>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                        <Box>
                                            <Doughnut />
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </section>

                    {/* Section 3 starts from here */}

                    <section>
                        <Flex pt={'15px'}>
                            <Box w={'55%'}>
                                <Box color={'gray.300'}>
                                    <Flex alignItems={'center'} fontSize={'15px'} gap={'10px'}>
                                        <Text>Top check points</Text>
                                        <Button color={'gray.200'} fontSize={'12px'} _hover={'none'} _active={'none'} variant={'ghost'}>View all</Button>
                                    </Flex>
                                </Box>
                                <Flex bg={'#23262b'} justifyContent={'space-between'} alignItems={'center'} p={'15px 15px 14px 15px'}>
                                    <Box color={'gray.200'} lineHeight={'22px'}>
                                        <Text fontSize={'12px'}>Top 3 Entities which are part of the most attack vectors to critical assets that affect 43.1% of critical assets (267/619)</Text>
                                        <Flex color={'gray.300'} mt={'15px'} justifyContent={'space-between'}>
                                            <Heading fontSize={'13px'}>Entity name</Heading>
                                            <Flex gap={'40px'}>
                                                <Heading fontSize={'13px'}>Critical as...</Heading>
                                                <Heading fontSize={'13px'}>Trend</Heading>
                                            </Flex>
                                        </Flex>
                                        <hr style={{ marginTop: '5px' }} />
                                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Raymond Butcher</Text>
                                            <Flex w={'38%'} justifyContent={'space-between'}>
                                                <Text display={'flex'} alignItems={'center'} fontSize={'13px'} gap={'2px'}>
                                                    <Text mr={'6px'}>233</Text>
                                                    <Progress bg={'#353f4b'} borderRadius={'9px'} w={'85px'} colorScheme='red' size='md' value={28} />
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <hr style={{ marginTop: '5px' }} />
                                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Raymond Butcher</Text>
                                            <Flex w={'38%'} justifyContent={'space-between'}>
                                                <Text display={'flex'} alignItems={'center'} fontSize={'13px'} gap={'2px'}>
                                                    <Text mr={'6px'}>141</Text>
                                                    <Progress bg={'#353f4b'} borderRadius={'9px'} w={'85px'} colorScheme='red' size='md' value={15} />
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <hr style={{ marginTop: '5px' }} />
                                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Raymond Butcher</Text>
                                            <Flex w={'38%'} justifyContent={'space-between'}>
                                                <Text display={'flex'} alignItems={'center'} fontSize={'13px'} gap={'2px'}>
                                                    <Text mr={'6px'}>64</Text>
                                                    <Progress bg={'#353f4b'} borderRadius={'9px'} w={'85px'} colorScheme='red' size='md' value={9} />
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Image src={honeycomb}/>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </section>
                </Box>
            </Flex>
        </Box>
    )
}

export default Dashboard;
