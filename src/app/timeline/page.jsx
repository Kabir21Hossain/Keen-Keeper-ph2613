"use client"
import { UseDataContext } from "@/context/DataContext";

const TimeLinePage=()=>{
const{data}=UseDataContext();
console.log(data);
    return(
        <>
       I love timeline page
        </>
    )
}

export default TimeLinePage;
