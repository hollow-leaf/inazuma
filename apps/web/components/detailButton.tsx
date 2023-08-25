function DetailButton() {
  return (
    <>
      <button
        className="btn btn-xs btn-info"
        // @ts-ignore
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal_2") as HTMLFormElement
            ).showModal();
          }
        }}
      >
        Detail
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box bg-white">
          <h3 className="font-bold text-lg">DETAIL</h3>
          <p className="py-4"></p>
          <button className="btn btn-success">CONFIRm</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default DetailButton;
