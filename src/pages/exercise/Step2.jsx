import React from "react";
import { useNavigate } from "react-router-dom";
import './Step2.css';

const Step2 = ({ data }) => {
    const navigate = useNavigate();

    const handleChangeStart = () => {
        navigate('/exercise/step3')
    }

    return (
        <div className="Step2">
            <h2 className="pageTitle">
                운동을 시작해 볼까요?
            </h2>
            <div className="all">
                <div className="push-name">
                    <p className="label">운동이름</p>
                    <p className="content">{data.name}</p>
                </div>
                <div className="push-set">
                    <p className="label">세트 수</p>
                    <p className="content">{data.set}세트</p>
                </div>
                <div className="push-number">
                    <p className="label">운동 횟수</p>
                    <p className="content">{data.number}회</p>
                </div>
                <div className="push-weight">
                    <p className="label">중량</p>
                    <p className="content">{data.weight}kg</p>
                </div>
                <div className="Rest">
                    <p className="label">인터벌</p>
                    <p className="content">{data.time}초</p>
                </div>
            </div>
            <div className="textbutton"><button onClick={handleChangeStart}>운동시작</button></div>
        </div>
    )
}

export default Step2;