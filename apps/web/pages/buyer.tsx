import BuyerSubmit from "../components/buyerSubmitBox"
import BuyerTable from "../components/buyerTable"

export default function Page(){
    return(
        <div className="grid grid-cols-2">
            <div className="mx-auto mt-14 mb-14">
                <p className="text-3xl text-black">Your NFT</p>
                <div className="divider"></div> 
                <BuyerTable/>
            </div>
            <div className="mx-auto mt-14 mb-14">
                <BuyerSubmit/>
            </div>
        </div>
    )
}