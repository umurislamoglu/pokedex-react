import React, {useState , useEffect} from 'react'

const Type = ({typeName }) => {

const [color, setColor] = useState("")


useEffect(() => {
    
    
    if(typeName === "bug" || typeName === "grass"){
        setColor("success")
    } else if (typeName === "fire" || typeName === "ground" ) {
        setColor("danger")
    } else if (typeName === "electric" || typeName === "poison" ) {
        setColor("warning")
    } else if (typeName === "fighting" || typeName === "normal" || typeName === "ground" || typeName === "unknown") {
        setColor("secondary")
    } else if (typeName === "dragon" || typeName === "flying" ) {
        setColor("primary")
    } else if (typeName === "rock" || typeName === "steel" || typeName === "shadow" ) {
        setColor("dark")
    } else if (typeName === "ghost" || typeName === "psychic" || typeName === "ice" ) {
        setColor("light")
    }  else if (typeName === "water" || typeName === "fairy") {
        setColor("info")
    }
    
    
    
}, [typeName])








    return (
        <>
            <span className={`badge rounded-pill bg-${color} text-capitalize p-2 me-3 fs-6`} style={{width:"100px"}}>
            {typeName}
        </span>
        </>
        
    )
}
export default Type
