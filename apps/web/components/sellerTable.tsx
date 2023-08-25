import SellerTableItem from "./sellerTableItem";
function SellerTable(props: any) {
  const fakeData = [
    {
      powerType: "sun",
      kWh: 200,
      date: "2020/6/1",
      status: false,
      provider: "0x12341234123412",
      location: "Taipei",
      CID: "asdfasdfasdf",
    },
    {
      powerType: "water",
      kWh: 200,
      date: "2020/10/1",
      status: true,
      provider: "0x12341234123412",
      location: "Taipei",
      CID: "asdfasdfasdf",
    },
    {
      powerType: "wind",
      kWh: 200,
      date: "2020/2/10",
      status: true,
      provider: "0x12341234123412",
      location: "Taipei",
      CID: "asdfasdfasdf",
    },
    {
      powerType: "wind",
      kWh: 200,
      date: "2020/2/10",
      status: false,
      provider: "0x12341234123412",
      location: "Taipei",
      CID: "asdfasdfasdf",
    },
    {
      powerType: "water",
      kWh: 200,
      date: "2020/2/10",
      status: true,
      provider: "0x12341234123412",
      location: "Taipei",
      CID: "asdfasdfasdf",
    },
  ];
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
          {fakeData.map((item, index) => {
            return (
              <SellerTableItem
                key={index}
                powerType={item.powerType}
                provider={item.provider}
                status={item.status}
                kWh={item.kWh}
                date={item.date}
                location={item.location}
                CID={item.CID}
                sequence={index+1}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SellerTable;
