import { useSelector } from "react-redux"
import Card from "./Card";

const Board = ()=>{
    const achievements = useSelector(state => state.achievements);
    return (
        <div style = {{height:"100vh"}}>
            {achievements.map((achievement)=>{
                return (
                    <Card {...achievement} key={achievement.id}/>
                )
            })}
        </div>  
    )
}

export default Board;