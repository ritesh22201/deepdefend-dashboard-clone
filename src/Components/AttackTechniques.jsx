import React from 'react';
import { Box, Flex, Text, Divider, Grid, Heading, Progress, Button, VStack } from '@chakra-ui/react';
import { BiFilter, BiSearch } from 'react-icons/bi';
import { AiOutlineDown, AiOutlineExport } from 'react-icons/ai';
import { TbArrowBigRightFilled, TbBandageOff } from 'react-icons/tb';
import { BsArrowLeft, BsFillDiamondFill, BsShieldShaded } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdWindow } from 'react-icons/md';
import { PiArrowFatRightFill } from 'react-icons/pi';
import { GiLampreyMouth } from 'react-icons/gi';

const AttackTechniques = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box fontSize={'13px'} color={'gray.200'} minH={'100vh'} position={'absolute'} right={'0'} bg={'#15191c'} p={'5px 15px'} w={'94%'}>
            <Flex justifyContent={'space-between'} p={'10px'}>
                <Flex gap={'25px'}>
                    <Flex gap={'10px'} alignItems={'center'}>
                        <BsArrowLeft className='leftArrow' onClick={() => navigate(location.state)} style={{ marginTop: '5px', fontSize: '19px' }} />
                        <Text mt={'4px'}>All Attack Techniques</Text>
                    </Flex>
                </Flex>
                <Flex gap={'30px'}>
                    <Text>Executive report</Text>
                    <Text>Global report</Text>
                    <Box w={'1px'}>
                        <Divider orientation='vertical' />
                    </Box>
                    <Flex gap={'5px'} alignItems={'center'}>
                        <Text>All Scenarios</Text>
                        <AiOutlineDown />
                    </Flex>
                    <Flex gap={'5px'} alignItems={'center'}>
                        <Text>Past 30 days</Text>
                        <AiOutlineDown />
                    </Flex>
                </Flex>
            </Flex>
            <Flex bg={'#23262b'} p={'10px'} justifyContent={'space-between'}>
                <Box>
                    <Heading fontSize={'15px'}>Azure Add Role Assignment</Heading>
                    <Text m={'5px 0 10px 0'} fontSize={'11px'}>Critical Assets at Risk (181/619)</Text>
                    <Progress h={'6px'} borderRadius={'9px'} colorScheme='red' size={'md'} value={35} />
                </Box>
                <Flex gap={'30px'} alignItems={'center'} textAlign={'center'} color={'#cd1541'}>
                    <Box>
                        <Heading fontSize={'18px'}>9</Heading>
                        <Text color={'gray.400'}>Affected entities</Text>
                    </Box>
                    <TbArrowBigRightFilled />
                    <Box>
                        <Heading fontSize={'18px'}>8</Heading>
                        <Text color={'gray.400'}>Check points</Text>
                    </Box>
                    <TbArrowBigRightFilled />
                    <Box>
                        <Flex justifyContent={'center'} gap={'8px'} alignItems={'center'}>
                            <BsFillDiamondFill />
                            <Heading fontSize={'20px'}>29%</Heading>
                        </Flex>
                        <Text color={'gray.400'}>Critical assets at risk</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.200'}>Complexity</Text>
                        <Flex gap={'2px'} alignItems={'center'}>
                            <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={80} />
                            <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={0} />
                            <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={0} />
                            <Text>Low</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Text color={'gray.200'}>Severity</Text>
                        <Flex gap={'2px'} alignItems={'center'}>
                            <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={100} />
                            <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={100} />
                            <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={80} />
                            <Text>High</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Flex fontSize={'12px'} color={'gray.300'} mt={'10px'} bg={'#23262b'} p={'20px'} minH={'75vh'}>
                <Box w={'53%'}>
                    <Heading color={'gray.200'} fontSize={'16px'}>Technique Description</Heading>
                    <Text m={'10px 0'}>An attacker with Azure user account that has Microsoft Authorization/roleAssignments/write permission can assign itself an RBAC role and compromise all the resources on the specified scope.</Text>

                    <Box>
                        <Heading m={'25px 0 15px 0'} color={'gray.200'} fontSize={'16px'}>MITRE technique alignment</Heading>
                        <Text textDecoration={'underline'}>T1078</Text>
                        <Text textDecoration={'underline'}>T1078 004</Text>
                    </Box>
                    <Box>
                        <Heading m={'25px 0 15px 0'} color={'gray.200'} fontSize={'16px'}>Attacker commands</Heading>
                        <Text mb={'10px'}>For example, the RBAC rule here is owner:</Text>
                        <Text >az role assignment create --assignee userCanCreateRoleAssignment@domain.onmicrosoft.com --rc</Text>
                    </Box>
                    <Box>
                        <Heading m={'25px 0 15px 0'} color={'gray.200'} fontSize={'16px'}>References</Heading>
                        <ul style={{ paddingLeft: '30px', textDecoration: 'underline' }}>
                            <li>Manage role assignment using the AZ-cli</li>
                        </ul>
                    </Box>
                    <Progress h={'6px'} borderRadius={'9px'} m={'50px 0 20px 0'} bg={'#353f4b'} colorScheme='red' size='md' value={0} />
                    <Box color={'gray.300'}>
                        <Flex gap={'25px'} alignItems={'center'}>
                            <Text fontSize={'14px'} fontWeight={'500'} color={'gray.200'}>Affected Entities(9)</Text>
                            <Text fontSize={'14px'} fontWeight={'500'} color={'gray.400'}>Critical Assets at Risk(1)</Text>
                        </Flex>
                        <Flex color={'gray.300'} mt={'15px'} justifyContent={'space-between'}>
                            <Heading fontSize={'13px'}>Attack targets</Heading>
                            <Flex gap={'40px'}>
                                <Heading fontSize={'13px'} mr={'13px'}>Type</Heading>
                                <Heading fontSize={'13px'}>Critical Assets at Risk</Heading>
                            </Flex>
                        </Flex>
                        <hr style={{ marginTop: '5px' }} />
                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Maor Itach</Text>
                            <Flex w={'38%'} gap={'90px'}>
                                <Text>Azure User</Text>
                                <Flex justifyContent={'space-between'} gap={'5px'}>
                                    <Text display={'flex'} alignItems={'center'} fontSize={'12px'} gap={'2px'}>
                                        2
                                    </Text>
                                </Flex>

                            </Flex>
                        </Flex>
                        <hr style={{ marginTop: '5px' }} />
                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Haim Cohen</Text>
                            <Flex w={'38%'} gap={'90px'}>
                                <Text>Azure User</Text>
                                <Flex justifyContent={'space-between'} gap={'5px'}>
                                    <Text display={'flex'} alignItems={'center'} fontSize={'12px'} gap={'2px'}>
                                        2
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <hr style={{ marginTop: '5px' }} />
                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />zur</Text>
                            <Flex w={'38%'} gap={'90px'}>
                                <Text>Azure User</Text>
                                <Flex justifyContent={'space-between'} gap={'5px'}>
                                    <Text display={'flex'} alignItems={'center'} fontSize={'12px'} gap={'2px'}>
                                        2
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <hr style={{ marginTop: '5px' }} />
                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Roman Sehgal</Text>
                            <Flex w={'38%'} gap={'90px'}>
                                <Text>Azure User</Text>
                                <Flex justifyContent={'space-between'} gap={'5px'}>
                                    <Text display={'flex'} alignItems={'center'} fontSize={'12px'} gap={'2px'}>
                                        2
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <hr style={{ marginTop: '5px' }} />
                        <Flex color={'gray.400'} mt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text display={'flex'} alignItems={'center'} gap={'5px'} fontSize={'13px'}><MdWindow />Matan Marzurski</Text>
                            <Flex w={'38%'} gap={'90px'}>
                                <Text>Azure User</Text>
                                <Flex justifyContent={'space-between'} gap={'5px'}>
                                    <Text display={'flex'} alignItems={'center'} fontSize={'12px'} gap={'2px'}>
                                        2
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Box w={'47%'} color={'gray.200'}>
                    <Heading mb={'15px'} fontSize={'16px'}>Remeditions(3)</Heading>
                    <Box>
                        <Flex mb={'10px'} p={'10px'} bg={'#15191c'} gap={'10px'} alignItems={'center'}>
                            <Box style={{ backgroundColor: 'rgb(104, 211, 145)', padding: '12px', borderRadius: '50%' }}>
                                <BsShieldShaded />
                            </Box>
                            <Text>User Azure AD Priviledged Identity Management (PIM)</Text>
                        </Flex>
                        <Flex mb={'10px'} p={'10px'} bg={'#15191c'} gap={'10px'} alignItems={'center'}>
                            <Box style={{ backgroundColor: 'rgb(159, 122, 234, 0.5)', padding: '12px', borderRadius: '50%' }}>
                                <TbBandageOff />
                            </Box>
                            <Text>Limit principle permissions to the minimum needed</Text>
                        </Flex>
                        <Flex mb={'10px'} p={'10px'} bg={'#15191c'} gap={'10px'} alignItems={'center'}>
                            <Box style={{ backgroundColor: 'rgb(236, 201, 75, 0.5)', padding: '12px', borderRadius: '50%' }}>
                                <GiLampreyMouth />
                            </Box>
                            <Text>Limit Principle scope to the minimum needed</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default AttackTechniques;