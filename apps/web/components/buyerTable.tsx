import BuyerTableItem from "./buyerTableItem";
import { formatAddress } from "../utils/stringify";

function BuyerTable(props: any) {
  return (
    <div className="overflow-x-auto mx-auto text-black">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-black text-center text-base">
            <th></th>
            <th>Power Type</th>
            <th>Provider</th>
            <th>kWh</th>
            <th>DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* body */}
          
        </tbody>
      </table>
    </div>
  );
}

export default BuyerTable;
