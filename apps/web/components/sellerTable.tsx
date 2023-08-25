import SellerTableItem from "./sellerTableItem";
function SellerTable(props: any) {
  return (
    <div className="overflow-x-auto w-1/2 mx-auto mt-20 text-black">
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
          <SellerTableItem
            powerType={"sun"}
            kWh={200}
            date={"2020/6/1"}
            status={false}
          />
          <SellerTableItem
            powerType={"water"}
            kWh={200}
            date={"2020/10/1"}
            status={true}
          />
          <SellerTableItem
            powerType={"wind"}
            kWh={200}
            date={"2020/2/10"}
            status={true}
          />
        </tbody>
      </table>
    </div>
  );
}

export default SellerTable;
