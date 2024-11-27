import React from "react";

export default function ColorPicker({ color, onColorChange, resetColor }) {
  function handleColorChange(event) {
    onColorChange(event.target.value); 
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-72">
      <h1 className="text-2xl font-bold mb-4">Color Picker</h1>

      {/* Color Display Box */}
      <div
        className="w-60 h-40 flex flex-col justify-center items-center rounded-md mb-4 border border-gray-300 shadow-lg"
        style={{ backgroundColor: color }}
      >
        <p className="text-md text-gray-700 font-semibold text-center">
          Selected Color:
        </p>
        <p className="text-lg font-mono font-bold text-gray-800">{color}</p>
      </div>

      <label className="text-lg font-semibold mb-2">Select a Color:</label>
      <input
        type="color"
        className="w-16 h-10 rounded-lg border border-gray-300 mb-4"
        value={color}
        onChange={handleColorChange}
      />

      <button
        onClick={resetColor} // Reset color to default (white)
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Reset
      </button>
    </div>
  );
}
