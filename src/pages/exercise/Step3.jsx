import react from "react";
import { useNavigate } from "react-router-dom";
import { Step3Item } from "../../components/exercise";

const Step3 = ({ data, finsh }) => {
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate('/exercise/step4')
    };

    let items = [];
    for (let i=0; i<data.set; i++){
        items.push({
            set : i+1,
            number : data.number,
            weight: data.weight,
            time: data.time
        });
    }

    return(
        <div className="name">
            {data.name}
            {items.map(item => <Step3Item key={item.set} data={item} finsh={finsh}/>)}
            <div className="button-clear">
                <button onClick={handleClickNavigate}>세트 완료</button>
            </div>
        </div>
    )
};

export default Step3;