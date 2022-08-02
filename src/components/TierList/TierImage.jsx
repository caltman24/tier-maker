import { useDrag } from "react-dnd";
import { useRef } from "react";

const TierImage = ({ image }) => {
  const ref = useRef(null);
  const { url } = image;
  const [{ Opacity }, drag] = useDrag({
    type: "image",
    item: { ...image },
    collect: (monitor) => ({
      Opacity: monitor.isDragging() ? 0.2 : 1,
    }),
  });

  return (
    <div
      className="img"
      style={{
        backgroundImage: `url(${url})`,
        opacity: Opacity,
      }}
      ref={drag}
    ></div>
  );
};

export default TierImage;
