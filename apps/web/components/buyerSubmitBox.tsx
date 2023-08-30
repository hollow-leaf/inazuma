import { useState } from "react";
import { buy } from "../service/contract";
import { getbuyList } from "../service/api";

function BuyerSubmit() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const openModal = () => {
    if (document) {
      (document.getElementById(`buyModal`) as HTMLFormElement).showModal();
    }
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  async function buy_handler(amount: number) {
    try {
      let buylist: any = [];
      setLoading(true);
      setError("");
      const list = await getbuyList(amount);
      list.forEach((item: any) => {
        buylist.push(item.tokenID);
        console.log(buylist);
      });
      console.log(list);
      console.log(buy(buylist, amount));
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
      console.log(err);
    }
  }

  const handleSubmit = () => {
    try {
      buy_handler(inputValue);
      console.log(inputValue);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className="btn btn-success mb-10" onClick={openModal}>
        buy
      </button>
      <dialog id="buyModal" className="modal">
        <form method="dialog" className="modal-box bg-white text-black">
          <h3 className="font-bold text-lg text-center">Enter the amount you want to buy</h3>
          <div className="px-16 pb-4 flex flex-col space-y-5 mt-8">
            <input
              type="text"
              placeholder="capacity"
              className="input input-bordered w-full  bg-white"
              // @ts-ignore
              onChange={handleInputChange}
            />
            <button className="btn btn-success mb-10" onClick={handleSubmit}>
              Submit
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

export default BuyerSubmit;
