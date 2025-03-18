import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step3Item = ({ data, finsh }) => {
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate('/exercise/intervel', { state: { setIndex: data.set } })
    }

    return (
        <div className="Step3Item">
            <p>{data.set}세트</p>
            <p>{data.weight}kg</p>
            <p>{data.number}회</p>
            <p><input type="checkbox" onClick={handleClickNavigate} readOnly checked={finsh} /></p>
        </div>
    )
};

export default Step3Item;