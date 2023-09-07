import SellerTableItem from "./sellerTableItem";

function SellerTable(props: any) {
  return (
    <div className="overflow-x-auto mx-auto text-black">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-black text-center text-base">
            <th></th>
            <th>Power Type</th>
            <th>kWh</th>
            <th>DATE</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* body */}
          {props.assets.map((item: any, index: number) => {
            return (
              <SellerTableItem
                key={index}
                powerType={item.asset[3]["Power Type"]}
                provider={item.asset[1]["Provider"]}
                status={item["status"]}
                kWh={item.asset[0]["Generation capacity(KW)"]}
                date={item.asset[2]["Date"].substr(0, 7)}
                location={item.asset[4]["Location"]}
                Co2CID={item["cid"]}
                hyperCID={item.asset[5]["file"][0]["cid"]}
                tokenId={item["tokenID"]}
                sequence={index + 1}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SellerTable;
