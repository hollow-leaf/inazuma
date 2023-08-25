import BuyerTable from "../components/buyerTable"

export default function Page(){
    return(
        <div className="w-1/2 mx-auto mt-14 mb-14">
            <button className="btn btn-outline btn-success mb-8">buy</button>
            <p className="text-3xl text-black">Your NFT</p>
            <div className="divider"></div> 
            <BuyerTable/>
        </div>
    )
}