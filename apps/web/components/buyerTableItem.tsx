import { buyerTableItemType } from "../type";

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

  const inputString = props.id; // 將您的字串放在這裡

  const lastChar = inputString.charAt(inputString.length - 1); // 取得倒數第一個字
  const lastNumber = parseInt(lastChar, 10); // 將字串轉換為數字
  const result = lastNumber - 1; // 減1操作
  
  const modifiedString = inputString.slice(0, -1) + result.toString(); // 拼接修改後的字串
  
  console.log(modifiedString); // 輸出修改後的結果

  return (
    <>
      <tr className="text-center">
        <th>
          
        </th>
        <a href={`https://testnet.hypercerts.org/app/view#claimId=${modifiedString}`} target="_blank"><td>{props.tokenID}</td></a>
        <td>{props.units}</td>
      </tr>
    </>
  );
}

export default BuyerTableItem;
