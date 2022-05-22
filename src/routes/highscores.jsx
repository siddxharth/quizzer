import { Link } from "react-router-dom"

export default function Highscores() {
    return (
        <div>
            <div className="highscore-container">
                <main className="highscores">
                    <h2>Highscores</h2>
                        <table className="highscores-table">
                            <tbody>
                                <tr>
                                    <th>Player Name</th>
                                    <th>Score</th>
                                </tr>
                                <tr>
                                    <td>{"Player Name"}</td>
                                    <td>{"192"}</td>
                                </tr>
                                <tr>
                                    <td>{"Siddharth Khatri"}</td>
                                    <td>{"9912"}</td>
                                </tr>
                            </tbody>
                        </table>
                    <Link className="home-btn" to="/">Go Home</Link>
                </main>
            </div>
        </div>
    )
}