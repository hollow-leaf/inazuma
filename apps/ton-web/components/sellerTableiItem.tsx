import { buyerTableItemType, saleType } from "../type";
import DetailButton from "./detailButton";
import NFTDetailButton from "./nftDetailButton";


function SellerTableItem(props: saleType) {
  const iconPathBook = {
    sun: "solar-cell.png",
    water: "hydro-power.png",
    wind: "wind-power.png",
    Solar: "solar-cell.png",
    Hydro: "hydro-power.png",
    Wind: "wind-power.png",
  };

  const powerNameBook = {
    sun: "Solar",
    water: "Hydro",
    wind: "Wind",
  };

  let data:saleType = {
    cid: props.cid,
    Generation_capacity: props.Generation_capacity,
    Provider: props.Provider,
    Date: props.Date,
    price: props.price,
    powerType: props.powerType,
    index: props.index,
    Location: props.Location,
    address: props.address,
    sale_address: props.sale_address
  }
  

  return (
    <>
       <a key={props.index}className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              // @ts-ignore
              src={iconPathBook[props.powerType]}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="saletext">
            <p className="mt-1 text-lg font-medium text-gray-900">NFT ID: {props.index}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">Generation_capacity: {props.Generation_capacity}</p>
          </div>
          <NFTDetailButton Price={props.price} powerType={props.powerType} kWh={props.Generation_capacity} date={props.Date} status={true} provider={props.Provider} location={props.Location} Co2CID={props.cid} hyperCID={""} sequence={0} tokenId={props.address} sale={data.sale_address}/>
        </a>
    </>
  );
}

export default SellerTableItem;
