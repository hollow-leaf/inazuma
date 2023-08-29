import { useState } from 'react'
import { buy } from '../service/contract';
import { getbuyList } from '../service/api';

function BuyerSubmit() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };
  
  async function buy_handler(amount: number){
    try{
      let buylist: any = []
      setLoading(true)
      setError('')
      const list = await getbuyList(amount)
      list.forEach((item:any) => {
        buylist.push(item.tokenID)
        console.log(buylist)
      });
      console.log(list)
      console.log(buy(buylist, amount))
      
    }catch(err){
      setError('Error fetching data')
      setLoading(false)
      console.log(err)
    }
  }
  const handleSubmit = () =>{
    try{
      buy_handler(inputValue)
      console.log(inputValue)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      {loading?(<>isLoading<span className="loading loading-spinner loading-md"></span></>):(<>
        <label className="block mb-2 font-semibold">Input amount：</label>
        <input type="number" className="w-full border p-2 rounded mb-4" placeholder="amount" onChange={handleInputChange} />
        <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={handleSubmit}>Submit</button></>
      )}
      
    </div>
  );
}

export default BuyerSubmit;
