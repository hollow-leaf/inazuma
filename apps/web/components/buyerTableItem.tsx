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
  const combinedString: string = "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-" + inputString;

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
