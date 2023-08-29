import BuyerTableItem from "./buyerTableItem";
import { formatAddress } from "../utils/stringify";

function BuyerTable(props: any) {
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
          {props.buyList.map((item:any, index:any) => {
            return (
              <BuyerTableItem
                key={index}
                powerType={item.powerType}
                provider={formatAddress(item.provider)}
                kWh={item.kWh}
                date={item.date}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BuyerTable;
