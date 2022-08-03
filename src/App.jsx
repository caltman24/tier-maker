import "./assets/App.css";
import TierList from "./components/TierList/TierList";
import ChoicePool from "./components/ChoicePool";
import ToggleSwitch from "./components/ToggleSwitch";
import { ChoicePoolImagesProvider } from "./ChoicePoolContext";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const theme = isLightMode ? "light" : "dark";
    if (theme === "dark") {
      document.body.classList.add("dark");
      if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
      }
    }
    if (theme === "light") {
      document.body.classList.add("light");
      if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
      }
    }
  }, [isLightMode]);

  const images = [
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=1",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=2",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=3",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=4",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=5",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=6",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=7",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=8",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=9",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=10",
      location: "pool",
    },
    {
      id: uuidv4(),
      url: "https://picsum.photos/200/300?random=11",
      location: "pool",
    },
  ];

  const [tierList, setTierList] = useState([
    { id: uuidv4(), color: "var(--rank-S)", rank: "S", images: [] },
    { id: uuidv4(), color: "var(--rank-A)", rank: "A", images: [] },
    { id: uuidv4(), color: "var(--rank-B)", rank: "B", images: [] },
    { id: uuidv4(), color: "var(--rank-C)", rank: "C", images: [] },
    { id: uuidv4(), color: "var(--rank-D)", rank: "D", images: [] },
  ]);

  const [choicePoolImages, setChoicePoolImages] = useState(images);

  const moveTierUp = (id) => {
    const index = tierList.findIndex((tier) => tier.id === id);
    if (index === 0) return;
    const newTiers = [...tierList];
    const temp = newTiers[index - 1];
    newTiers[index - 1] = newTiers[index];
    newTiers[index] = temp;
    setTierList(newTiers);
  };

  const moveTierDown = (id) => {
    const index = tierList.findIndex((tier) => tier.id === id);
    if (index === tierList.length - 1) return;
    const newTiers = [...tierList];
    const temp = newTiers[index + 1];
    newTiers[index + 1] = newTiers[index];
    newTiers[index] = temp;
    setTierList(newTiers);
  };

  const dropItem = (image, rank) => {
    if (image.location === rank) return;
    if (image.location === "pool") {
      setTierList((prevTierList) => {
        const newTierList = [...prevTierList];
        const tierIndex = newTierList.findIndex((tier) => tier.rank === rank);
        newTierList[tierIndex].images.push({ ...image, location: rank });
        return newTierList;
      });
      setChoicePoolImages((prevChoicePoolImages) => {
        return prevChoicePoolImages.filter((i) => i.id !== image.id);
      });
    } else if (image.location !== "pool" && rank === "pool") {
      setTierList((prevTierList) => {
        const newTierList = [...prevTierList];

        const oldRank = image.location;
        const oldTier = newTierList.find((tier) => tier.rank === oldRank);

        oldTier.images = oldTier.images.filter((i) => i.id !== image.id);
        return newTierList;
      });
      setChoicePoolImages((prevChoicePoolImages) => {
        return [{ ...image, location: rank }, ...prevChoicePoolImages];
      });
    } else {
      const newTierList = [...tierList];

      const oldRank = image.location;
      const newRank = rank;

      const oldTier = newTierList.find((tier) => tier.rank === oldRank);
      const newTier = newTierList.find((tier) => tier.rank === newRank);

      oldTier.images = oldTier.images.filter((i) => i.id !== image.id);
      newTier.images = [...newTier.images, { ...image, location: newRank }];
      setTierList(newTierList);
    }
  };

  const providerValue = {
    tierList,
    choicePoolImages,
    dropItem,
    moveTierUp,
    moveTierDown,
  };

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  const dndBackend = isTouchDevice() ? TouchBackend : HTML5Backend;

  return (
    <DndProvider backend={dndBackend}>
      <div className="App">
        <header className="header">
          <h1 id="title">Tier Maker</h1>
          <ToggleSwitch isChecked={isLightMode} toggleTheme={toggleTheme} />
        </header>
        <div className="container">
          <ChoicePoolImagesProvider value={providerValue}>
            <TierList />
            <ChoicePool />
          </ChoicePoolImagesProvider>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
