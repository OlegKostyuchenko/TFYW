import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import HomePage from '../HomePage';
import TodayTasks from '../TodayTasks/TodayTasks';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <TodayTasks />
      <Footer />
    </div>
  );
}

export default App;


