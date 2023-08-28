import { useEffect, useState } from "react";

interface BuyerCardProps {
    sharedState: boolean;
    setSharedState: React.Dispatch<React.SetStateAction<boolean>>;
  }

function BuyerCard({sharedState,setSharedState}:BuyerCardProps) {
    const handleClick = () => {
            setSharedState(false)
            console.log("onClick!")
    }
    
  useEffect(() => {
    setSharedState(true)
  }, [])
 
  return ( 
    <div>
    {sharedState && ((
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
        <div className="card-actions justify-end">
        <button className="btn btn-square btn-sm" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </div>
        <p>We are using cookies for no reason.</p>
    </div>
</div>
   ))} 
    </div>
    
  );
}

export default BuyerCard;
