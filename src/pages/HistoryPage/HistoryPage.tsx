import { useEffect, useState } from "react";

import "../../styles/historyPage.css"

const HistoryPage = () => {
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        let openRequest = indexedDB.open("quizAppDb", 1);

        openRequest.onsuccess = () => {
            let db = openRequest?.result;
            let transaction = db.transaction("attempts", "readwrite");
            let storeObject = transaction.objectStore("attempts");
            let allAttmepts = storeObject.getAll();

            allAttmepts.onsuccess = (e) => {
                setAttempts(e?.target?.result);
            }
        }
    }, [])

    return (
        <div className="history-page">
            <h1 style={{
                marginBottom: "12px"
            }}>Attempt History</h1>
            {attempts.length === 0 ? (
                <p>No quiz attempts found.</p>
            ) : (
                <div className="history-list">
                    {attempts?.map((attempt: { id: number, correctAnswers: number }, index) => {
                        return (
                            <div key={index} className="attempt-card">
                                <h3>Attempt {index + 1}</h3>
                                <p><strong>Date:</strong> {new Date(attempt?.id).toLocaleDateString()}</p>

                                <p><strong>Score:</strong> {attempt?.correctAnswers} / 10</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default HistoryPage;