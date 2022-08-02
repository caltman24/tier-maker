import ChoicePoolContext from "../../ChoicePoolContext";
import { useContext } from "react";

const Arrow = ({ direction, id }) => {
  const { moveTierUp, moveTierDown } = useContext(ChoicePoolContext);

  const handleClick = () => {
    direction === "up" ? moveTierUp(id) : moveTierDown(id);
  };

  return (
    <span
      className={`material-symbols-outlined arrow ${direction}`}
      onClick={handleClick}
    >
      {`keyboard_arrow_${direction}`}
    </span>
  );
};

export default Arrow;
