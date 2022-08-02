import { useContext } from "react";
import TierRow from "./TierRow";
import ChoicePoolContext from "../../ChoicePoolContext";

const TierList = () => {
  const { tierList } = useContext(ChoicePoolContext);


  const TierListRows = tierList.map((tier) => {
    return <TierRow key={tier.id} tier={tier} />;
  });

  return <div className="tier-list">{TierListRows}</div>;
};

export default TierList;
