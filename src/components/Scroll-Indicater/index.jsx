import { useEffect, useState } from "react"
import "./scroll.css";


export default function ScrollIndicater({url}){

    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl){
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if(data && data.products && data.products.length){
                setLoading(false)
                setData(data.products)
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    
    useEffect(()=>{
        fetchData(url)
    },[url])

    function handleScrollPercentage(){

        const howMuchScrolled =document.body.scrollTop || document.documentElement.scrollTop;

        const height =document.documentElement.scrollHeight -  document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);
        console.log(scrollPercentage);
    }

    

    useEffect(()=>{
        window.addEventListener("scroll",handleScrollPercentage)

        return(()=>{
            window.removeEventListener("scroll",()=>{})
        })
    })
    return(
        <div>
        <div className="top-container">
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="data-container">
          {data && data.length > 0
            ? data.map((dataItem) => <p>{dataItem.title}</p>)
            : null}
        </div>
      </div>
    )
}