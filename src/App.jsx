import { useState } from "react";

// Write your Color component here
const Color = ({color, cl, setSelectedColor}) => {
  //condition - compare selectedColor and color prop. if truthy, show fill color and border
  return (<div className={ cl === color ? `${color} && selected` : `${color}` }  onClick={() => setSelectedColor(color)} ></div> )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor} >{selectedColor}</div>
      </div>
      <div id="colors-list">{/* colors go here */}
        <Color cl={selectedColor}  color="green" setSelectedColor={setSelectedColor}/>
        <Color cl={selectedColor} color="yellow" setSelectedColor={setSelectedColor}/>
        <Color cl={selectedColor} color="orange" setSelectedColor={setSelectedColor}/>
      </div>
    </div> 
  );
};

export default App;
