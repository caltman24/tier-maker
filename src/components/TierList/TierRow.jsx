import TierContent from "./TierContent";
import TierRank from "./TierRank";
import TierImage from "./TierImage";
import ArrowGroup from "../Arrows/ArrowGroup";
import Arrow from "../Arrows/Arrow";

const TierRow = ({ tier, index }) => {
  const { id, color, rank, images } = tier;

  const tierImages = images.map((image) => {
    return <TierImage key={image.id} image={image} />;
  });

  return (
    <div className="tier-row">
      <TierRank color={color} rank={rank} index={index}/>
      <TierContent rank={rank}>{tierImages}</TierContent>
      <ArrowGroup>
        <Arrow direction="up" id={id} />
        <Arrow direction="down" id={id} />
      </ArrowGroup>
    </div>
  );
};

export default TierRow;
