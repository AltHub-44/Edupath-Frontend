import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Quiz from './components/Quiz';

const QuizPage = () => {
  const { quizId } = useParams();

  // This would normally come from an API call based on quizId
  const quizData = {
    id: quizId || '1',
    title: 'Introduction to Web Development Quiz',
    description: 'Test your knowledge of HTML, CSS, and JavaScript fundamentals',
    questions: [
      {
        id: 1,
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyperlink and Text Markup Language',
          'Home Tool Markup Language'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Which CSS property is used to change the text color of an element?',
        options: [
          'font-color',
          'text-color',
          'color',
          'text-style'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which of the following is NOT a JavaScript data type?',
        options: [
          'Boolean',
          'String',
          'Character',
          'Number'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Which HTML tag is used to create a hyperlink?',
        options: [
          '<link>',
          '<a>',
          '<href>',
          '<url>'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Which CSS property is used to add space between elements?',
        options: [
          'margin',
          'padding',
          'spacing',
          'gap'
        ],
        correctAnswer: 0
      }
    ]
  };

  const handleQuizComplete = (score) => {
    const percentage = Math.round((score / quizData.questions.length) * 100);

    if (percentage >= 80) {
      toast.success(`🎉 Great job! You scored ${percentage}%!`);
    } else if (percentage >= 60) {
      toast.info(`💡 Good effort! You scored ${percentage}%. Keep practicing!`);
    } else {
      toast.error(`❌ Keep studying! You scored ${percentage}%. Review the material and try again.`);
    }
  };

  return (
    <div className="flex min-h-screen bg-white  rounded-md">
      <div className="flex-1 p-3 md:p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Quiz</h1>
          <p className="text-muted-foreground mt-2">Test your knowledge and track your progress</p>
        </div>

        <Quiz
          title={quizData.title}
          description={quizData.description}
          questions={quizData.questions}
          onComplete={handleQuizComplete}
        />
      </div>
    </div>
  );
};

export default QuizPage;