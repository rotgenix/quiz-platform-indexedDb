# Interactive Quiz Platform

Welcome to the **Interactive Quiz Platform**! This is a React-based web application that allows users to take quizzes, get instant feedback, and review their attempt history. It’s designed to be user-friendly, responsive, and easy to use.

---

## **Features**

1. **Quiz Creation & Management**:
   - Display a list of questions in a quiz format.
   - Supports both **multiple-choice** and **integer-type** questions.
   - Questions are fetched from a predefined dataset.

2. **User Interaction**:
   - Users can select answers and get **instant feedback**.
   - A **timer** is implemented for each question (30 seconds per question).
   - Users can navigate between questions using the **Next** button.

3. **Progress Tracking**:
   - At the end of the quiz, users can see their **score** and review their answers.
   - Correct and incorrect answers are highlighted for better understanding.

4. **Attempt History**:
   - All quiz attempts are saved in **localStorage**.
   - Users can view their past attempts on the **History Page**, including:
     - Date and time of the attempt.
     - Score (e.g., `7/10`).
     - Detailed review of answers (correct/incorrect).

5. **Responsive Design**:
   - The app is fully responsive and works seamlessly on both desktop and mobile devices.

6. **Deployment**:
   - The app can be easily deployed on platforms like **Vercel** or **Netlify**.

---

## **Technologies Used**

- **Frontend**: React.js
- **Routing**: `react-router-dom`
- **Styling**: Plain CSS (with modern and clean design)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Data Storage**: `localStorage` (for saving quiz attempts)

---

## **How to Run the App Locally**

Follow these steps to run the app on your local machine:

### **Prerequisites**
1. **Node.js** and **npm** installed on your machine.
   - Download Node.js from [here](https://nodejs.org/).

### **Steps**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/quiz-platform.git
   cd quiz-platform
