import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import { get_nft } from "../service/market";
import { get_ton_Asset } from "../service/api";
import SellerTableItem from "./sellerTableiItem";

function SellerTable(props: any) {
  let addresses: any[] = []
  
  const { isLoading, error, data } = useQuery({
    queryKey: ["getaddress"],
    queryFn: async () =>{
      let nfts:any = await get_nft(props.address)
      addresses = nfts
      let address_list: any[] = []
      nfts.data["nft_items"].forEach((nft: any)=> {
        address_list.push(nft["address"])
      });
      let res:any = await get_ton_Asset(address_list)
      console.log(res)
      return res
      
    },
      retry: 1,
      cacheTime: 1000*60*5
  });
  //--

  if (isLoading) return <Loading />;
  return (
    <>
      {isLoading?(
        <Loading />
      ):(
        <div className="bg-white">
          <h2 style={{color:"black", textAlign:"center", fontSize:"42px", paddingTop: "5%"}}>Green Power Deals</h2>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {data.map((nft:any, index:number) => {
                if(nft!=null){
                  return (
                    <SellerTableItem key={nft["index"]} Provider={data[index]["asset"][2]["Provider"]} index={nft["index"]} price={0} powerType={data[index]["asset"][3]["Power Type"]} cid={data[index]["cid"]} Generation_capacity={data[index]["asset"][0]["Generation capacity(KW)"]} address={addresses[index]} Date={data[index]["asset"][2]["Date"]} Location={data[index]["asset"][4]["Location"]} sale_address={""}/>
                  )
                }
              })
              }
            </div>
          </div>
        </div>

      )}
    </>
  );
}

export default SellerTable;
