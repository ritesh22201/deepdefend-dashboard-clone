import React from 'react';
import {VStack, Avatar} from '@chakra-ui/react';
import { TbBandageOff } from 'react-icons/tb';
import { GiSpeedometer } from 'react-icons/gi';
import { PiArrowFatRightFill, PiDotsSixBold } from 'react-icons/pi';
import { CgNotes } from 'react-icons/cg';
import { FaMizuni, FaXmark } from 'react-icons/fa6';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { TfiBoltAlt } from 'react-icons/tfi';
import { AiOutlineFileSearch, AiOutlineQuestionCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <section>
            <VStack className='sidebar' display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }} position={'fixed'} zIndex={'overlay'} left={'0'} p={'10px 0'} justifyContent={'space-between'} h={'100vh'} fontSize={'20px'} bg={'#171717'} w={'6%'} alignItems={'center'} color={'gray.200'}>
                <GiSpeedometer onClick={() => navigate('/')} className={window.location.pathname === '/' && 'navigate'} />
                <PiDotsSixBold onClick={() => navigate('/exposures')} className={window.location.pathname === '/exposures' && 'navigate'} />
                <CgNotes onClick={() => navigate('/attackTechniques')} className={window.location.pathname === '/attackTechniques' && 'navigate'} />
                <FaXmark />
                <FaMizuni />
                <RxDragHandleDots2 />
                <FiSettings />
                <AiOutlineFileSearch />
                <AiOutlineQuestionCircle style={{ marginTop: '120px', fontSize : '18px' }} />
                <Avatar size={'sm'} name='Ritesh Goswami' />
            </VStack>
        </section>
    )
}

export default Sidebar;