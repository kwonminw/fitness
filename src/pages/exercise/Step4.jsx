import { useNavigate } from "react-router-dom";
import './Step4.css';

const Step4 = () => {
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate('/')
    };

    return (
        <div className="Step4">
            <h2>운동을 완료했습니다 !</h2>
            <div className="textbutton"><button onClick={handleClickNavigate}>홈으로 돌아가기</button></div>
        </div>
    )
};

export default Step4;