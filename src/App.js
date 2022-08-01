import Scores from './components/scores';
import './App.css';

function App() {
  const scoresData = [
    { team_one: "Arsenal", team_two: "Man Utd", team_one_score: "4", team_two_score: "2" },
    { team_one: "Sheffield Utd" , team_two: "Crystal Palace", team_one_score: "3", team_two_score: "1" },
    { team_one: "Newcastle Utd", team_two: "Watford", team_one_score: "2", team_two_score: "5" }
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>Football scores app</h1>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, distinctio nulla. Minima ut sit enim placeat nesciunt nihil necessitatibus dignissimos saepe ea modi unde repellat, fuga aperiam, quos libero culpa.
        </p>
        
        {
          scoresData.map((score,i) => {
            return (
              <Scores 
                teamOne={score.team_one} 
                teamOneScore={score.team_one_score}
                teamTwo={score.team_two}  
                teamTwoScore={score.team_two_score}
              />
            )
          })
        }
        
      </div>
        
    </div>
  );
}

export default App;
