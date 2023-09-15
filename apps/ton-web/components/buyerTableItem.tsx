import { buyerTableItemType, saleType } from "../type";


function BuyerTableItem(props: saleType) {
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
            <p className="mt-1 text-lg font-medium text-gray-900">Prize: {props.price}</p>
          </div>
        </a>
    </>
  );
}

export default BuyerTableItem;
