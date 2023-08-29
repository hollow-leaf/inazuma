import SellerTableItem from "./sellerTableItem";

function MapTable(props: any) {
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
          
        </tbody>
      </table>
    </div>
  );
}

export default MapTable;
