import App from "./App";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Highscores from "./routes/highscores";
import RunQuiz from './routes/run_quiz';
import StartQuiz from "./routes/start_quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><h2>Page not found!</h2><Link to="/" className="home-btn">Go to Home</Link></div>} />
            <Route path="/" element={<><App /><StartQuiz /></>} >
                <Route path="highscores" element={<Highscores />} />
            </Route>
            <Route path="quiz" element={<RunQuiz />}>
                <Route path=":questionId" element={<div></div>} />
            </Route>
        </Routes>
    </BrowserRouter>
)