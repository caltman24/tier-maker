import { useContext } from "react";
import ChoicePoolContext from "../../ChoicePoolContext";

const TierRank = ({ color, rank, index }) => {
  const { tierList } = useContext(ChoicePoolContext);
  const borderClass = `${index === 0 ? "btl" : ""} ${
    index === tierList.length - 1 ? "bbl" : ""
  }`;
  return (
    <div
      className={`tier-rank ${borderClass}`}
      style={{ backgroundColor: color }}
    >
      {rank}
    </div>
  );
};

export default TierRank;
