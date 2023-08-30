import { buyerTableItemType } from "../type";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { formatAddress } from "../utils/stringify";

function BuyerTableItem(props: buyerTableItemType) {
  const iconPathBook = {
    sun: "solar-cell.png",
    water: "hydro-power.png",
    wind: "wind-power.png",
  };

  const powerNameBook = {
    sun: "Solar",
    water: "Hydro",
    wind: "Wind",
  };

  const inputString: string = props.id;
  const lastTwoDigits: string = inputString.slice(-2);
  const numberValue: number = Number(lastTwoDigits); 
  const resultNumber: number = numberValue - 1; 
  const resultString: string = resultNumber.toString();
  const combinedString: string = inputString.slice(0, -2) + resultString;

  return (
    <>
      <tr className="text-center">
        <th><a href={`https://testnet.hypercerts.org/app/view#claimId=${combinedString}`} target="_blank"><LiaExternalLinkAltSolid className="text-xl cursor-pointer" title="view on Hypercerts"/></a></th>
          <td>{props.tokenID}</td>
        <td>{props.units}</td>
      </tr>
    </>
  );
}

export default BuyerTableItem;
