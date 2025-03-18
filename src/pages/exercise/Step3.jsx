import react from "react";
import { useNavigate } from "react-router-dom";
import { Step3Item } from "../../components/exercise";
import './Step3.css';

const Step3 = ({ data, finsh }) => {
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate('/exercise/step4')
    };

    let items = [];
    for (let i = 0; i < data.set; i++) {
        items.push({
            set: i + 1,
            number: data.number,
            weight: data.weight,
            time: data.time
        });
    }

    return (
        <div className="Step3">
            <h2 className="pageTitle">
                운동 진행 중
            </h2>
            <div className="step3-inner">
                <div className="title">{data.name}</div>
                {items.map(item => <Step3Item key={item.set} data={item} finsh={finsh[item.set]} />)}
                <div className="textbutton">
                    <button onClick={handleClickNavigate}>세트 완료</button>
                </div>
            </div>
        </div>
    )
};

export default Step3;