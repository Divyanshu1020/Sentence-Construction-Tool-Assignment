
# Sentence Construction Tool

This project is a **"Sentence Construction"** tool built as part of the CA Monk Frontend Internship assignment. It is a React-based web application where users complete sentences by dragging and dropping the correct words into blanks.

## Features

1. **Interactive Sentence Completion**:
   - Users are presented with sentences containing blank spaces.
   - Four word options are provided for each sentence.
   - Users can drag and drop the correct words into the blanks using the `dnd-kit` library.

2. **Click to Unselect Words**:
   - Users can remove a word from a filled blank by clicking on it.

3. **Timer Functionality**:
   - A 30-second timer is implemented for each question.
   - The application auto-navigates to the next question when the timer ends.

4. **Next Button Logic**:
   - The "Next" button is enabled only when all blanks in the current sentence are correctly filled.

5. **Data Handling**:
   - Question data is fetched from a provided JSON API.

6. **State Management**:
   - Proper state management is implemented for smooth application flow.

7. **Feedback Screen**:
   - At the end of the session, a feedback screen shows:
     - All correct and incorrect answers.
     - Correct answers for questions answered incorrectly.
     - The user's score out of 10.

## Project Requirements

This project was built to meet the following requirements:
- Display sentences with blank spaces for users to complete.
- Provide word options for users to select and place in the blanks.
- Include a timer and navigation logic for each question.
- Display feedback with detailed results at the end.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For adding type safety to the application.
- **dnd-kit**: For implementing drag-and-drop functionality.
- **JSON API**: For fetching sentence and word data.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Divyanshu1020/Sentence-Construction-Tool-Assignment.git
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Project Overview

This tool provides an engaging way for users to practice sentence construction with a gamified experience. The drag-and-drop feature enhances interactivity, while the timer and feedback system make the experience dynamic and educational.
