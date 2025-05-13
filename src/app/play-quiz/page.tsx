import { Suspense } from "react";
import PlayQuiz from "./PlayQuiz";

const PlayQuizPage = () => {
    return (
        <Suspense fallback={<div>Loading quiz...</div>}>
            <PlayQuiz />
        </Suspense>
    )
};

export default PlayQuizPage;
