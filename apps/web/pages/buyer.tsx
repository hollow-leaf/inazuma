import BuyerCard from "../components/buyerCard";
import BuyerSubmit from "../components/buyerSubmitBox"
import BuyerTable from "../components/buyerTable"
import {useState} from "react"

export default function Page(){
    const [sharedState, setSharedState] = useState(false);
    
    return(
        <div className="grid grid-cols-2">
            <div className="mx-auto mt-14 mb-14">
                <p className="text-3xl text-black">Your NFT</p>
                <div className="divider"></div> 
                <BuyerTable/>
            </div>
            <div className="mx-auto mt-14 mb-20 flex flex-col justify-between ml-10">
                <div className="mb-2">
                    <BuyerSubmit sharedState={sharedState} setSharedState={setSharedState}  />
                    <BuyerCard sharedState={sharedState} setSharedState={setSharedState} />
                </div>
            </div>
        </div>
    )
}