import { useDrag } from "react-dnd";

const TierImage = ({ image }) => {
  const { url } = image;
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { ...image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className="img"
      style={{ backgroundImage: `url(${url})`, opacity: isDragging ? 0.2 : 1 }}
      ref={drag}
    ></div>
  );
};

export default TierImage;
