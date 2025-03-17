import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Step1, Step2, Step3, Step4, Intervel} from './index'

const Eexercise = () => {
    const [data, setData] = useState({});
    const [finsh, setFinsh] = useState({});

    return (
        <Routes>
            <Route path='step1' element={<Step1 setData={setData}/>} />
            <Route path='step2' element={<Step2 data={data}/>} />
            <Route path='step3' element={<Step3 data={data} finsh={finsh}/>} />
            <Route path='step4' element={<Step4 />} />
            <Route path='intervel' element={<Intervel data={data} setFinsh={setFinsh}/>} />
      </Routes>
    ) 
}

export default Eexercise;