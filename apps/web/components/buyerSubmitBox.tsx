import { useState } from 'react'

interface BuyerSubmitProps {
  sharedState: boolean;
  setSharedState: React.Dispatch<React.SetStateAction<boolean>>;
}

function BuyerSubmit({sharedState,setSharedState}:BuyerSubmitProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">Input amount：</label>
      <input type="text" className="w-full border p-2 rounded mb-4" placeholder="amount" onChange={handleInputChange} />
      <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={()=>setSharedState(true)}>Submit</button>
    </div>
  );
}

export default BuyerSubmit;
