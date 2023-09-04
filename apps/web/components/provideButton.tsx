import { addAsset } from "../service/api";
import { useState } from "react";
import { useAccount } from "wagmi";
import Loading from "./loading";

function ProvideButton() {
  const { address } = useAccount();
  const openModal = () => {
    if (document) {
      (document.getElementById(`my_modal`) as HTMLFormElement).showModal();
    }
  };

  function handleProvide() {
    // @ts-ignore
    setLoading(true)
    addAsset(address as string, capacity, 2302, powerType, location).then(res=>{
      setLoading(false);
      (document.getElementById(`my_modal`) as HTMLFormElement).close();
      window.alert("Successful!")
    }).catch(err=>{
      console.log(err);
      (document.getElementById(`my_modal`) as HTMLFormElement).close();
      window.alert("failed!")
    });
  }

  const [powerType, setPowerType] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  

  return (
    <>
      <button className="btn btn-success mb-10" onClick={openModal}>
        Provide
      </button>
      <dialog id="my_modal" className="modal">
        <form method="dialog" className="modal-box bg-white text-black">
          <h3 className="font-bold text-lg text-center">Hello!</h3>
          <div className="px-16 pb-4 flex flex-col space-y-5 mt-8">
            <select
              className="select select-bordered w-full bg-white"
              onChange={(e) => setPowerType(e.target.value)}
            >
              <option disabled selected>
                power type
              </option>
              <option>Solar</option>
              <option>Hydro</option>
              <option>Wind</option>
            </select>
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
        {loading&&<Loading />}
      </dialog>
    </>
  );
}

export default ProvideButton;
