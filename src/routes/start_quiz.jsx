import { Link } from 'react-router-dom'

export default function StartQuiz() {
    return (
        <div className="start-quiz-container">
            <main className="start-quiz">
                <h2>Coding Quiz Challenge</h2>
                Try to answer the following code-based questions withing the time limit.<br/>
                Keep in mind that incorrect answers will penaltize your score/time by 10 seconds!<br/>
                <Link className="start-quiz-btn" to="/quiz">Start Quiz</Link>
            </main>
        </div>
    );
}