import { useMemo, useState } from "react";
import HomePage from "./components/HomePage.jsx";
import LabPage from "./components/LabPage.jsx";
import ResultPage from "./components/ResultPage.jsx";
import {
  categories,
  companionReplies,
  getDefaultCategoryForGender,
  getDefaultStyleForGender,
  getProductsByGender,
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
  const [selectedGender, setSelectedGender] = useState(null);
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
      `${style.name}收到。接下来我会优先帮你挑更贴这个气质的素材，让今天看起来更完整。`,
    );
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const selectGender = (gender) => {
    const defaultStyle = getDefaultStyleForGender(gender);
    const defaultCategory = getDefaultCategoryForGender(gender);

    setSelectedGender(gender);
    setSelectedStyle(defaultStyle);
    setSelectedCategory(defaultCategory);
    setSelectedItems({});
    addAiMessage(
      gender === "female"
        ? "女生角色就位。现在会切换到女生专属风格和衣物；评委可视化请优先查看“套装”品类。"
        : "男生角色就位。现在会切换到男生专属风格和衣物；评委可视化请优先查看“套装”品类。",
    );
  };

  const selectProduct = (product) => {
    setSelectedItems((items) => ({
      ...items,
      [product.category]: product,
    }));
    addAiMessage(
      product.isVisualReference
        ? `${product.name}已放到展示区。这是套装品类的真实可视化参考位，后续可以直接替换成你提供的套装图。`
        : `${product.name}已加入素材清单。这个品类目前用于单品素材展示，不作为最终真实套装可视化。`,
    );
  };

  const generateFullLook = () => {
    if (!selectedGender) {
      addAiMessage("先选择女生或男生角色，我再按对应性别帮你生成完整搭配。");
      return;
    }

    const genderProducts = getProductsByGender(selectedGender);
    const pickByCategory = (categoryId, preferredStyle = selectedStyle.id) =>
      genderProducts.find(
        (product) =>
          product.category === categoryId &&
          product.sceneTags.includes(selectedScene.id) &&
          product.styleTags.includes(preferredStyle),
      ) ||
      genderProducts.find(
        (product) =>
          product.category === categoryId &&
          product.styleTags.includes(preferredStyle),
      ) ||
      genderProducts.find((product) => product.category === categoryId);

    const fullLook = [
      pickByCategory("outfits"),
      pickByCategory("tops"),
      pickByCategory("bottoms"),
      pickByCategory("shoes"),
      pickByCategory("bags"),
      pickByCategory("hats"),
      pickByCategory("earrings"),
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
      selectedGender,
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
      selectedGender,
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
      onSelectGender={selectGender}
      onSelectProduct={selectProduct}
      onQuickAction={handleQuickAction}
      onGenerate={goToResult}
    />
  );
}
