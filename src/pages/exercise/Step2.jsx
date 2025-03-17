import React from "react";
import { useNavigate } from "react-router-dom";

const Step2 = ({data}) => {
    const navigate = useNavigate();

    const handleChangeStart = () => {
        navigate('/exercise/step3')
    }
    
    return(
        <div className="push">
            <div className="start">
                운동을 시작해 볼까요?
            </div>
            <div className="all">
                <div className="push-name">
                    {data.name}
                </div>
                <div className="push-set">
                    {data.set}세트
                </div>
                <div className="push-number">
                    {data.number}회
                </div>
                <div className="push-weight">
                    {data.weight}kg
                </div>
                <div className="Rest">
                    {data.time}초
                </div>
            </div>
            <button onClick={handleChangeStart}>운동시작</button>
        </div>
    )
}

export default Step2;