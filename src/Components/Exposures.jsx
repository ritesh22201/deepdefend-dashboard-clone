import React from 'react';
import { Box, Flex, Text, Divider, Grid, Heading, Progress, Button, VStack } from '@chakra-ui/react';
import { BiFilter, BiSearch } from 'react-icons/bi';
import { AiOutlineDown, AiOutlineExport } from 'react-icons/ai';
import { TbBandageOff } from 'react-icons/tb';

const Exposures = () => {

    const dataArr = [
        {
            title: 'Local Credentials',
            department: 'IT',
            buttons: ['Lateral Movement', 'Defence Evasion', 'Execution', 'Persistance'],
            complexity: 'Low',
            severity: 'Medium',
            description: 'Using credentials for priviledged local accounts, an attacker is able to move laterally within the network. An authenticated...'
        },
        {
            title: 'Phishing Campaign',
            department: 'Security',
            buttons: ['Social Engineering', 'Email Spoofing', 'Payload Delivery', 'Command and Control', 'Exfiltration'],
            complexity: 'Medium',
            severity: 'High',
            description: 'A targeted phishing campaign aims to deceive users into divulging sensitive information. The attacker employs various tactics to exploit human vulnerabilities.'
        },

        {
            title: 'Web Application Vulnerability',
            department: 'Development',
            buttons: ['Injection', 'Cross-Site Scripting', 'Security Misconfiguration', 'Session Fixation'],
            complexity: 'High',
            severity: 'Medium',
            description: 'Unpatched vulnerabilities in a web application expose it to various attacks. Attackers can exploit these weaknesses to gain unauthorized access or disrupt services.'
        },

        {
            title: 'Insider Threat',
            department: 'HR',
            buttons: ['Data Theft', 'Sabotage', 'Unauthorized Access'],
            complexity: 'Low',
            severity: 'Medium',
            description: 'A malicious insider with authorized access exploits their privileges to compromise sensitive data, disrupt operations, or engage in other harmful activities.'
        },

        {
            title: 'Denial of Service (DoS) Attack',
            department: 'Network Operations',
            buttons: ['Volume-based', 'Protocol-based', 'Application-based'],
            complexity: 'Medium',
            severity: 'High',
            description: 'Attackers overwhelm a system, network, or application with traffic, rendering it unavailable to users. This disrupts normal operations and can lead to service downtime.'
        },

        {
            title: 'Mobile Device Compromise',
            department: 'Mobile Development',
            buttons: ['App Vulnerability', 'Rooting/Jailbreaking', 'Data Interception', 'Malicious Apps'],
            complexity: 'Medium',
            severity: 'High',
            description: 'Exploiting vulnerabilities in mobile devices, attackers can compromise user data, install malicious apps, and gain unauthorized access to sensitive information.'
        },

        {
            title: 'Ransomware Attack',
            department: 'IT Security',
            buttons: ['Delivery', 'Encryption', 'Extortion', 'Payment'],
            complexity: 'High',
            severity: 'Low',
            description: 'A ransomware attack encrypts critical data, demanding payment for decryption keys. This type of attack can lead to significant data loss and financial consequences.'
        },

        {
            title: 'Social Engineering',
            department: 'Training & Awareness',
            buttons: ['Phishing', 'Pretexting', 'Quizzes', 'Baiting'],
            complexity: 'Low',
            severity: 'Medium',
            description: 'Attackers manipulate individuals into divulging confidential information through deceptive tactics. Social engineering exploits human psychology to gain unauthorized access.'
        }
    ]

    return (
        <Box fontSize={'13px'} color={'gray.300'} minH={'100vh'} position={'absolute'} right={'0'} bg={'#15191c'} p={'5px 15px'} w={'94%'}>
            <Flex justifyContent={'space-between'} p={'10px'}>
                <Flex gap={'25px'}>
                    <Flex gap={'5px'} alignItems={'center'}>
                        <BiSearch style={{ marginTop: '5px', fontSize: '19px' }} />
                        <Text>Search</Text>
                    </Flex>
                    <Flex gap={'5px'} alignItems={'center'}>
                        <BiFilter style={{ marginTop: '5px', fontSize: '19px' }} />
                        <Text>Filter and Sort</Text>
                    </Flex>
                </Flex>
                <Flex gap={'30px'}>
                    <Text>Executive report</Text>
                    <Text>Global report</Text>
                    <Box w={'1px'}>
                        <Divider orientation='vertical' />
                    </Box>
                    <Flex gap={'5px'} alignItems={'center'}>
                        <AiOutlineExport />
                        <Text>Export CSV</Text>
                    </Flex>
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
            <Grid w={'100%'} gap={'10px'} p={'20px 10px'} gridTemplateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)', '2xl': 'repeat(2, 1fr)' }}>
                {dataArr.map(el => {
                    return <Flex p={'20px 10px'} gap={'10px'} borderRadius={'3px'} bg={'#23262b'}>
                        <Box w={'55%'} fontSize={'11px'}>
                            <Heading fontSize={'16px'}>{el.title}</Heading>
                            <button className='btn btn-color'>{el.department}</button>
                            <Flex gap={'2px'} alignItems={'center'} fontSize={'10px'}>
                                {el.buttons.map(btn => {
                                    return <button className='btn btn-color2'>{btn.substring(0, 9)}</button>
                                })}
                                {el.buttons.length > 4 && <Text mt={'4px'}>+ 1</Text>}
                            </Flex>
                            <Flex m={'10px 0 9px 0'} alignItems={'center'} gap={'10px'}>
                                <Text fontSize={'12px'}>Complexity:</Text>
                                <Flex justifyContent={'space-between'} gap={'5px'}>
                                    <Text display={'flex'} alignItems={'center'} fontSize={'12px'} gap={'2px'}>
                                        {
                                            el.complexity === 'Low' ?
                                                <Flex gap={'2px'} alignItems={'center'}>
                                                    <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={80} />
                                                    <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={0} />
                                                    <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={0} />
                                                </Flex>
                                                :
                                                el.complexity === 'Medium' ?
                                                    <Flex gap={'2px'} alignItems={'center'}>
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='yellow' size='md' value={100} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='yellow' size='md' value={40} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='yellow' size='md' value={0} />
                                                    </Flex>
                                                    :
                                                    <Flex gap={'2px'} alignItems={'center'}>
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={100} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={100} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={80} />
                                                    </Flex>
                                        }
                                        <Text ml={'6px'} color={el.complexity === 'Low' || el.complexity === 'High' ? '#cd1541' : '#f0c839'}>{el.complexity}</Text>
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex alignItems={'center'} gap={'10px'}>
                                <Text fontSize={'12px'}>Severity:</Text>
                                <Flex ml={'18px'} justifyContent={'space-between'} gap={'5px'}>
                                    <Text display={'flex'} alignItems={'center'} fontSize={'12px'} gap={'2px'}>
                                        {
                                            el.severity === 'Low' ?
                                                <Flex gap={'2px'} alignItems={'center'}>
                                                    <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={80} />
                                                    <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={0} />
                                                    <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={0} />
                                                </Flex>
                                                :
                                                el.severity === 'Medium' ?
                                                    <Flex gap={'2px'} alignItems={'center'}>
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='yellow' size='md' value={100} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='yellow' size='md' value={40} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='yellow' size='md' value={0} />
                                                    </Flex>
                                                    :
                                                    <Flex gap={'2px'} alignItems={'center'}>
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={100} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={100} />
                                                        <Progress bg={'#353f4b'} w={'10px'} colorScheme='red' size='md' value={80} />
                                                    </Flex>
                                        }
                                        <Text ml={'6px'} color={el.severity === 'Low' || el.severity === 'High' ? '#cd1541' : '#f0c839'}>{el.severity}</Text>
                                    </Text>
                                </Flex>
                            </Flex>
                            <Text mt={'10px'}>{el.description.substring(0, 112)}...</Text>
                        </Box>
                        <Box w={'1px'}>
                            <Divider style={{ width: '3px' }} orientation='vertical' />
                        </Box>
                        <VStack color={'white'} w={'40%'} fontSize={'11px'}>
                            <Button borderRadius={'12px'} fontSize={'12px'} colorScheme='purple' _hover={'none'} _active={'none'} height={'25px'}>Recommended for remediation</Button>
                            <Flex m='30px 0' fontSize={'11px'} color={'gray.200'} gap={'10px'} textAlign={'center'}>
                                <Box>
                                    <Heading fontSize={'19px'}>10</Heading>
                                    <Text>Affected entities</Text>
                                </Box>
                                <Box color={'#cd1541'}>
                                    <Heading fontSize={'19px'}>45%</Heading>
                                    <Text>Critical assets at risk</Text>
                                </Box>
                            </Flex>
                            <Flex pt={'10px'} justifyContent={'center'} alignItems={'center'} gap={'10px'} fontSize={'13px'}>
                                <TbBandageOff />
                                <Text>View Remeditions</Text>
                            </Flex>
                        </VStack>
                    </Flex>
                })}
            </Grid>
        </Box>
    )
}

export default Exposures;