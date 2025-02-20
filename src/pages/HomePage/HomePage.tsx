import { useNavigate } from "react-router-dom"
import "../../styles/homePage.css"

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className='home-page'>
            <h1 style={{
                marginBottom: "12px",
                textAlign: "center"
            }}>Welcome to the Quiz Platform</h1>
            <div className="home-page-buttons">
                <button onClick={() => navigate("/quiz")}>Start Quiz</button>
                <button onClick={() => navigate("/history")}>Attempt History</button>
            </div>
        </div>
    )
}

export default HomePage
