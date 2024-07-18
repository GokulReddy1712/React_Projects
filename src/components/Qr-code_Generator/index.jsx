import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [input, setInput] = useState("")
    const [qrcode,setQrcode] = useState("")

    function handleGenerateQrCode(){
        setQrcode(input)
        setInput("")
        console.log(qrcode);
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input onChange={(e) => setInput(e.target.value)} type="text"
                value={input}
                placeholder="Enter the value here" />
                <button onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div>
                <QRCode size ={400} value = {qrcode} bgColor = "white"/>
            </div>
        </div>
    );
}
