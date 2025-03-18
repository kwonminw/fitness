import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Step1.css';

const Step1 = ({ setData }) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [set, setSet] = useState('');
    const [number, setNumber] = useState('');
    const [weight, setWeight] = useState('');
    const [time, setTime] = useState('');


    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeSet = (e) => {
        setSet(e.target.value);
    };

    const handleChangeNumber = (e) => {
        setNumber(e.target.value);
    };

    const handleChangeWeight = (e) => {
        setWeight(e.target.value);
    };

    const handleChangeTime = (e) => {
        setTime(e.target.value);
    };

    const handleClickNavigate = () => {
        setData({
            name,
            set,
            number,
            weight,
            time
        })
        navigate('/exercise/step2');
    };

    return (
        <div className="Step1">
            <h2 className="pageTitle">운동 설정하기</h2>
            <div className="text-inner">
                <div className="name">
                    <input
                        type="text"
                        placeholder="운동이름을 작성해주세요"
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="set">
                    <input
                        type="text"
                        placeholder="세트수를 입력해주세요"
                        value={set}
                        onChange={handleChangeSet}
                    />
                </div>
                <div className="Number">
                    <input
                        type="text"
                        placeholder="세트마다 운동 횟수를 입력해주세요"
                        value={number}
                        onChange={handleChangeNumber}
                    />
                </div>
                <div className="Weight">
                    <input
                        type="text"
                        placeholder="중량 입력을 해주세요"
                        value={weight}
                        onChange={handleChangeWeight}
                    />
                </div>
                <div className="time">
                    <input
                        type="text"
                        placeholder="인터벌시간을 해주세요"
                        value={time}
                        onChange={handleChangeTime}
                    />
                </div>
            </div>
            <div className="textbutton"><button onClick={handleClickNavigate}>운동 설정</button></div>
        </div>
    )
}

export default Step1;