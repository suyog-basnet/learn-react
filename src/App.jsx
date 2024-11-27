import React, { useState } from "react";
import DigitalClock from "./DigitalClock";
import ColorPicker from "./ColorPicker";

export default function App() {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const resetColor = () => {
    setSelectedColor("#FFFFFF"); 
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen w-screen bg-gray-100 overflow-hidden">
      <ColorPicker color={selectedColor} onColorChange={setSelectedColor} resetColor={resetColor} />
      <DigitalClock backgroundColor={selectedColor} />
    </div>
  );
}
