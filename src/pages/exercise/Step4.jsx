import { useNavigate } from "react-router-dom";

const Step4 = () => {
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate('/')
    };

    return(
        <div>
            운동을 완료했습니다 !<br />
        <button onClick={handleClickNavigate}>홈으로 돌아가기</button>
        </div>
    )
};

export default Step4;