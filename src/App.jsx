import { useMemo, useState } from "react";
import HomePage from "./components/HomePage.jsx";
import LabPage from "./components/LabPage.jsx";
import ResultPage from "./components/ResultPage.jsx";
import {
  categories,
  companionReplies,
  products,
  scenes,
  styles,
} from "./data/demoData.js";

const messageId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export default function App() {
  const [view, setView] = useState("home");
  const [selectedScene, setSelectedScene] = useState(scenes[0]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedItems, setSelectedItems] = useState({});
  const [aiMessages, setAiMessages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState("");
  const [generationStep, setGenerationStep] = useState("upload");

  const selectedCount = Object.keys(selectedItems).length;

  const addAiMessage = (text, role = "ai") => {
    setAiMessages((messages) => [
      ...messages,
      {
        id: messageId(),
        role,
        text,
      },
    ]);
  };

  const selectScene = (scene) => {
    setSelectedScene(scene);
    addAiMessage(scene.aiIntro);
  };

  const selectStyle = (style) => {
    setSelectedStyle(style);
    addAiMessage(
      `${style.name}收到。接下来我会优先帮你挑更贴这个气质的单品，让今天看起来更完整。`,
    );
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const selectProduct = (product) => {
    setSelectedItems((items) => ({
      ...items,
      [product.category]: product,
    }));
    addAiMessage(`${product.name}可以加。${product.comment}`);
  };

  const generateFullLook = () => {
    const pickByCategory = (categoryId, preferredStyle = selectedStyle.id) =>
      products.find(
        (product) =>
          product.category === categoryId &&
          product.sceneTags.includes(selectedScene.id) &&
          product.styleTags.includes(preferredStyle),
      ) ||
      products.find(
        (product) =>
          product.category === categoryId &&
          product.styleTags.includes(preferredStyle),
      ) ||
      products.find((product) => product.category === categoryId);

    const fullLook = [
      pickByCategory("tops"),
      pickByCategory("bottoms"),
      pickByCategory("lip", "campus"),
      pickByCategory("eye"),
      pickByCategory("earrings"),
      pickByCategory("charm"),
      pickByCategory("bags"),
    ].filter(Boolean);

    setSelectedItems((items) =>
      fullLook.reduce(
        (nextItems, product) => ({
          ...nextItems,
          [product.category]: product,
        }),
        { ...items },
      ),
    );
    addAiMessage(companionReplies["一键搭完整套"]);
  };

  const handleQuickAction = (action) => {
    if (action === "一键搭完整套") {
      generateFullLook();
      return;
    }
    addAiMessage(companionReplies[action] || "懂了，我帮你把这套往更会搭的方向推一点。");
  };

  const goToResult = () => {
    setGenerationStep("upload");
    setView("result");
  };

  const backToLab = () => {
    setView("lab");
  };

  const appState = useMemo(
    () => ({
      selectedScene,
      selectedStyle,
      selectedCategory,
      selectedItems,
      selectedCount,
      aiMessages,
      uploadedImage,
      generationStep,
    }),
    [
      selectedScene,
      selectedStyle,
      selectedCategory,
      selectedItems,
      selectedCount,
      aiMessages,
      uploadedImage,
      generationStep,
    ],
  );

  if (view === "home") {
    return <HomePage onStart={() => setView("lab")} />;
  }

  if (view === "result") {
    return (
      <ResultPage
        state={appState}
        setUploadedImage={setUploadedImage}
        setGenerationStep={setGenerationStep}
        onBack={backToLab}
      />
    );
  }

  return (
    <LabPage
      state={appState}
      onSelectScene={selectScene}
      onSelectStyle={selectStyle}
      onSelectCategory={selectCategory}
      onSelectProduct={selectProduct}
      onQuickAction={handleQuickAction}
      onGenerate={goToResult}
    />
  );
}
