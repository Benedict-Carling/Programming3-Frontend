import React, { useState, useEffect } from "react";

export default function GetTable() {
    const [table,settable] = useState([])
    //{U_PASSCODE:"",Id:"",Date:"",Flag:"","User interpretation":"","Exert interpretation":"","Expert comment":"","Image path":""}
    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(`http://localhost:5000/data/table`)
            const body = await result.json();
            console.log(body)
            settable(body);
        }
        fetchData();
        
    }, []);
    var ent = table[2];
    console.log('table',ent.U_PASSCODE)

    return (
        
        <div>
      
        </div>
    )

}