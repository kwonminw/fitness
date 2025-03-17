import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Intervel = ({ data,setFinsh }) => {
    const [timer, setTimer] = useState(data.time);
    const navigate = useNavigate();
    const location = useLocation();

    const { setIndex } = location.state

    const minute = Math.floor(timer / 60)
    const second = timer % 60;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(intervalId);  
                    setFinsh(prev => ({
                        ...prev,
                        [setIndex] : true
                    }))                  
                    navigate('/exercise/step3')
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // 컴포넌트 언마운트시 interval 정리
        return () => clearInterval(intervalId);
    }, [navigate, setIndex, setFinsh]);

    return (
        <div>
            {minute <= 0 ? '00' : minute}분{second}초
        </div>
    )
}

export default Intervel;