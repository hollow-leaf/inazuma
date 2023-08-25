import { SellerTableItemType } from "../type";
import DetailButton from "./detailButton";

function SellerTableItem(props: SellerTableItemType) {
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

  return (
    <>
      <tr className="text-center">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  // @ts-ignore
                  src={iconPathBook[props.powerType]}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">
                {
                  // @ts-ignore
                  powerNameBook[props.powerType]
                }
              </div>
            </div>
          </div>
        </td>
        <td>{props.kWh}</td>
        <td>{props.date}</td>
        <td>{props.status ? "Confirmed" : "Unconfirmed"}</td>
        <th>
            <DetailButton />
        </th>
      </tr>
    </>
  );
}

export default SellerTableItem;
