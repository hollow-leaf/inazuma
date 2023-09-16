import BuyerTableItem from "./buyerTableItem";
import { formatAddress } from "../utils/stringify";
import { get_ton_Asset } from "../service/api";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";


function BuyerTable(props: any) {
  let sale_address: any[] = []
  props.sales.forEach((sale: any)=> {
    sale_address.push(sale["address"])
  });
  const { isLoading, error, data } = useQuery({
    queryKey: ["get_ton_Asset"],
    queryFn: () =>
      get_ton_Asset(sale_address).then((res:any) => {
        return res
      }),
      retry: 10,
      cacheTime: 1000*60*5
});
  
  return (
    <>
      {isLoading?(
        <Loading />
      ):(
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {props.sales.map((sale:any, index:number) => {
                return (
                  <BuyerTableItem key={sale["index"]} Provider={sale["owner"]["address"]} index={sale["index"]} price={sale["sale"]["price"]["value"]/(10**9)} powerType={data[index]["asset"][3]["Power Type"]} cid={data[index]["cid"]} Generation_capacity={data[index]["asset"][0]["Generation capacity(KW)"]} address={sale_address[index]} Date={data[index]["asset"][2]["Date"]} Location={data[index]["asset"][4]["Location"]} sale_address={props.sales[index]["sale"]["address"]}/>
                )
                })
              }
            </div>
          </div>
        </div>
      )}
    </>
        
      )
    
}

export default BuyerTable;
