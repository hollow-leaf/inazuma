import BuyerTableItem from "./buyerTableItem";
import { formatAddress } from "../utils/stringify";

function BuyerTable(props: any) {
  console.log(props.claimToken);
  return (
    <div className="overflow-x-auto mx-auto text-black">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-black text-center text-base">
            <th></th>
            <th>TokenId</th>
            <th>units</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* body */}
          {props.claimToken === undefined ? (
            <>
              {null}
            </>
          ): (
            <>
              {props.claimToken.map((item: any, index: number) => {
            return (
              <BuyerTableItem
                key={index}
                id={item["id"]}
                tokenID={item["tokenID"]}
                units={item["units"]}
              />
            );
          })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BuyerTable;
