import React , {useState} from "react";

export function AppTsx(){
    const [showMore, setShowmore] = useState(true);
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    return ( 
        <div>
            {showMore && <h1>Show:{count} name: {name}</h1>}
            <button onClick={()=>setShowmore(show=>!show)}>Show title</button>
            <button onClick={()=>setCount(count=>count+1)}>+</button>
            <input type="text" name="setname" onChange={(event)=>setName(event.target.value)} />
        </div>
    )
}

export default AppTsx;