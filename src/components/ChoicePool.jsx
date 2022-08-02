import TierImage from "./TierList/TierImage";
import { useContext } from "react";
import ChoicePoolContext from "../ChoicePoolContext";
import { useDrop } from "react-dnd";

const ChoicePool = () => {
  const { choicePoolImages, dropItem } = useContext(ChoicePoolContext);

  const [{ isOver }, drop] = useDrop({
    accept: "image",
    drop: (item) => {
      dropItem(item, "pool");
    },
  });

  const allImages = choicePoolImages.map((image) => {
    return <TierImage key={image.id} image={image}/>;
  });

  return (
    <div className="choice-pool">
      <div className="choice-pool-wrapper" ref={drop}>{allImages}</div>
    </div>
  );
};

export default ChoicePool;
