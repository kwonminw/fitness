import { Link } from "react-router-dom";
import { Header } from "../../components/commens";


const Main = () => {
    return (
        <div className="Main">
            환영합니다 운동을 시작하겠습니까?
            <div>
                <Link to='/exercise/step1'>시작</Link>
            </div>
        </div>
    )
};

export default Main;