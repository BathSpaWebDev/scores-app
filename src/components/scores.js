

function Scores(props) {

  const { teamOne, teamTwo, teamOneScore, teamTwoScore } = props;

  return (
    <div className="scores">
        <p>{teamOne} {teamOneScore} - {teamTwoScore} {teamTwo}</p>
    </div>
  );
}

export default Scores;
