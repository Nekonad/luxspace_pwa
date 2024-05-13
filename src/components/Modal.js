function Modal({ handleShowModal }) {
  return (
    <div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center w-100"
      onClick={handleShowModal}
    >
      <div className="fixed inset-0 bg-black opacity-35"></div>
      <div className=" bg-white p-60 py-48 rounded-xl z-10 absolute"></div>
      <div className="w-2/6 h-3/6 relative  z-50">
        <div className=" absolute w-full h-full">
          <iframe
            title="video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3h0_v1cdUIA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Modal;
