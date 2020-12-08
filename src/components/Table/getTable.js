import React, { useState, useEffect } from "react";

export default function GetTable() {
    const [table,setTable] = useState()
    //{U_PASSCODE:"",Id:"",Date:"",Flag:"","User interpretation":"","Exert interpretation":"","Expert comment":"","Image path":""}
    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(`http://localhost:5000/data/table`)
            const body = await result.json();
            console.log(body)
            setTable(body);
        }
        fetchData();
        console.log('table',table)
    }, []);


    return (
        
        <div>
         
        </div>
    )

}