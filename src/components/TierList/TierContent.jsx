import { useDrop } from "react-dnd";
import ChoicePoolContext from "../../ChoicePoolContext";
import { useContext } from "react";

const TierContent = ({ children, rank }) => {
  const { dropItem } = useContext(ChoicePoolContext);

  const [{ isOver }, drop] = useDrop({
    accept: "image",
    drop: (item) => {
      dropItem(item, rank)
    },
  });

  return (
    <div className="tier-content" ref={drop}>
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default TierContent;
