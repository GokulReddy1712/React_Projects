import { useState ,useEffect} from "react"

export default function RandomColor(){
    const[typeOfColor,setTypeOfColor] = useState("hex")
    const[color,setColor] = useState("#000000")

    useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
      }

      function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
    
        for (let i = 0; i < 6; i++) {
          hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
      }
    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
    
        setColor(`rgb(${r},${g}, ${b})`);
      }
    return(
    <div style={{
        height : "100vh",
        width : "100vw",
        background : color}}>
        <button onClick={()=>setTypeOfColor("hex")}>HEX Color</button>
        <button onClick={()=>setTypeOfColor("rgb")}>RGB Color</button>
        <button onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }>Random Color Generator</button>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}> 
            <h1>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h1>
            <h3>{color}</h3>
        </div>
    </div>
    
    )
}