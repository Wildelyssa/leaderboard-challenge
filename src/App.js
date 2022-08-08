import './App.css';
import './GlobalStyles.css';
import Header from './Components/Header';
import Leaderboard from './Components/Leaderboard';

const App = () => {
  return (
    <div className="page-background">
      <Header></Header>
      <Leaderboard />
    </div>
  );
}

export default App;
