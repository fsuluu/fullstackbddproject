import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  // Cypress testleri veya başka JS kodlarından çağırmak için global fonksiyon
  window.addItem = (type, value) => {
    setItems(prev => [...prev, { type, value }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Rails Models Visualizer</h1>
      <div id="dashboard">
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{item.type}:</strong> {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
