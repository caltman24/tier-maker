import TierImage from "./TierList/TierImage";
import { useContext } from "react";
import ChoicePoolContext from "../ChoicePoolContext";

const ChoicePool = () => {
  const { choicePoolImages } = useContext(ChoicePoolContext);

  const allImages = choicePoolImages.map((image) => {
    return <TierImage key={image.id} image={image} />;
  });

  return (
    <div className="choice-pool">
      <div className="choice-pool-wrapper">{allImages}</div>
    </div>
  );
};

export default ChoicePool;
