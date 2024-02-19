// eslint-disable-next-line react/prop-types
export default function Modal({ showModal, setShowModal, children }) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center mt-32 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
            <div
              onClick={closeModal}
              className="opacity-25 fixed inset-0  bg-black"
            ></div>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
