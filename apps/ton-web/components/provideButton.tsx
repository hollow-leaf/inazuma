import { addAsset } from "../service/api";
import { useState } from "react";
import { useAccount } from "wagmi";
import Loading from "./loading";
import TonConnect, { toUserFriendlyAddress } from '@tonconnect/sdk';


function ProvideButton() {
  
  const openModal = async () => {
    if(await iswallet()){
      if (document) {
            (document.getElementById(`my_modal`) as HTMLFormElement).showModal();
          }
    }
    
  };

  function handleProvide() {
    // @ts-ignore
    setLoading(true)
    addAsset(provider, capacity, 2302, powerType, location).then(res=>{
      setLoading(false);
      (document.getElementById(`my_modal`) as HTMLFormElement).close();
      window.alert("Successful!")
    }).catch(err=>{
      console.log(err);
      (document.getElementById(`my_modal`) as HTMLFormElement).close();
      window.alert("failed!")
    });
  }

  const [provider, setProvider] = useState("");
  const [powerType, setPowerType] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  async function iswallet(){
    let connector = new TonConnect()
    try{
      await connector.restoreConnection()
          console.log(connector.connected)
          if(connector.connected){
            if(connector.wallet?.account.address!=undefined){
              setProvider(toUserFriendlyAddress(connector.wallet?.account.address, true))
              return true
            }
          }else{
            alert("You have to connect wallet!")
            return false
          }
    }catch(err){
      console.log(err)
    }
    return false
  }

  return (
    <>
      <button className="btn btn-success mb-10" onClick={openModal}>
        Sell Power
      </button>
      <dialog id="my_modal" className="modal">
        <form method="dialog" className="modal-box text-black sell_modal">
          <h3 className="font-bold text-lg text-center">Sell Power</h3>
          <div className="px-16 pb-4 flex flex-col space-y-5 mt-8">
            <select
              className="select select-bordered w-full bg-white"
              onChange={(e) => setPowerType(e.target.value)}
              defaultValue={'DEFAULT'}
            >
              <option disabled selected>
                Select power type
              </option>
              <option>Solar</option>
              <option>Hydro</option>
              <option>Wind</option>
            </select>
            {provider==""&&(<input
              type="text"
              placeholder="provider"
              className="input input-bordered w-full  bg-white"
              // @ts-ignore
              onChange={(e) => setProvider(e.target.value)}
            />)}
            <input
              type="text"
              placeholder="capacity"
              className="input input-bordered w-full  bg-white"
              // @ts-ignore
              onChange={(e) => setCapacity(e.target.value)}
            />
            <input
              type="text"
              placeholder="location"
              className="input input-bordered w-full bg-white"
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="button" className="btn btn-success mb-10" onClick={handleProvide}>
              Provide
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ProvideButton;
