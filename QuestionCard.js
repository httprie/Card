import React, { useState } from 'react';
import { ChevronLeft, RotateCcw } from 'lucide-react';

const questions = [
    "If you could gather a small group of people for a fun day, who would be there?",
    "If you could build a perfect menu, what three dishes would be on it?",
    "If someone threw you a surprise party, what theme or vibe would you secretly love?",
    "What type of present do you love more: something practical or something sentimental?",
    "What's something exciting you want to accomplish or try this year?"
];

const QuestionCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextQuestion = () => {
        setCurrentIndex((prev) => (prev + 1) % questions.length);
    };

    const resetQuestions = () => {
        setCurrentIndex(0);
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="p-4 flex justify-between items-center">
                <ChevronLeft className="w-6 h-6" />
                <span className="text-xl font-bold">21 QUESTIONS™</span>
                <RotateCcw className="w-6 h-6" onClick={resetQuestions} />
            </div>

            {/* Card Container */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div
                    className="w-full max-w-md aspect-[3/4] bg-gray-900 rounded-3xl p-8 flex items-center justify-center border-4 border-purple-500 cursor-pointer"
                    onClick={nextQuestion}
                >
                    <div className="text-2xl font-medium text-center">
                        {questions[currentIndex]}
                    </div>
                </div>
            </div>

            {/* Bottom Spacer for iPhone Home Indicator */}
            <div className="h-8" />
        </div>
    );
};

export default QuestionCard;