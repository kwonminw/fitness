import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Intervel.css';

const Intervel = ({ data, setFinsh }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [timer, setTimer] = useState(data.time);
    const { setIndex } = location.state

    // 타이머 감소를 위한 useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // 타이머가 0이 되었을 때 완료 상태 업데이트 및 페이지 이동
    useEffect(() => {
        if (timer === 0) {
            setFinsh(prev => ({
                ...prev,
                [setIndex]: true,
            }));
            navigate("/exercise/step3");
        }
    }, [timer, setFinsh, navigate, setIndex]);


    const minute = Math.floor(timer / 60)
    const second = timer % 60;

    return (
        <div className="Intervel">
            {minute <= 0 ? '00' : minute}분 {second}초
        </div>
    )
}

export default Intervel;