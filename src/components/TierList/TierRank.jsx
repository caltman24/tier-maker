const TierRank = ({ color, rank }) => {
  return (
    <div className="tier-rank" style={{ backgroundColor: color }}>
      {rank}
    </div>
  );
};

export default TierRank;
