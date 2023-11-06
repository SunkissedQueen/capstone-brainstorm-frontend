import React, {useState} from 'react';
import './App.css';
import mockUsers from './mockUsers';
import mockBlockers from './mockBlockers';
import mockSolutions from './mockSolutions';
import Header from './components/Header';
import Footer from './components/Footer';
import BlockerIndex from './pages/BlockerIndex';
import BlockerShow from './pages/BlockerShow';
import BlockerNew from './pages/BlockerNew';
import BlockerEdit from './pages/BlockerEdit';
import UserDashBoard from './pages/UserDashBoard';

export default function App() {

  const [currentUser, setCurrentUser] = useState(mockUsers[2]) 
  const [blockers, setBlockers] = useState(mockBlockers) 
  const [solutions, setSolutions] = useState(mockSolutions) 

  return(
    <>
      <Header />
      <h1>Ask Aunty!</h1>
      <UserDashBoard 
        currentUser={currentUser}
        blockers={blockers}
        solutions={solutions}
      />
      <Footer />
    </>
  )
}