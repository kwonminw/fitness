import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step3Item = ({ data, finsh }) => {
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate('/exercise/intervel', { state: { setIndex: data.set } })
    }

    return (
        <div className="all">
            {data.set}세트
            {data.weight}kg
            {data.number}회
            <input type="checkbox" onClick={handleClickNavigate} readOnly checked={finsh} />
        </div>

    )
};

export default Step3Item;