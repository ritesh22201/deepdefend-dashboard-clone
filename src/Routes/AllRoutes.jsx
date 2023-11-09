import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Exposures from '../Components/Exposures';
import AttackTechniques from '../Components/AttackTechniques';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/exposures' element={<Exposures/>} />
        <Route path='/attackTechniques' element={<AttackTechniques/>} />
    </Routes>
  )
}

export default AllRoutes;