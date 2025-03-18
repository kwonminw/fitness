import { Link } from "react-router-dom";
import './Main.css';


const Main = () => {
    return (
        <div className="Main">
            <div className="main-inner">
                <h2>환영합니다.<br /> 운동을 시작하겠습니까?</h2>
                <div className="btn">
                    <Link to='/exercise/step1'>시작</Link>
                </div>
            </div>
        </div>
    )
};

export default Main;