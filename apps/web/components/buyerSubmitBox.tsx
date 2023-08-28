import { useState } from 'react'
import { buy } from '../service/contract';
import { getbuyList } from '../service/api';

interface BuyerSubmitProps {
  sharedState: boolean;
  setSharedState: React.Dispatch<React.SetStateAction<boolean>>;
}


//deploy this function into ur onClick function (message by Solo
async function buy_handler(amount: number){
  try{
    let buylist: any = []
    const list = await getbuyList(amount)
    list.forEach((item:any) => {
      buylist.push(item.tokenID)
    });
    buy(buylist, amount)
  }catch(err){
    console.log(err)
  }
}

function BuyerSubmit({sharedState,setSharedState}:BuyerSubmitProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">Input amount：</label>
      <input type="number" className="w-full border p-2 rounded mb-4" placeholder="amount" onChange={handleInputChange} />
      <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={()=>{}}>Submit</button>
    </div>
  );
}

export default BuyerSubmit;
