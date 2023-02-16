import { Close, Modal, ModalWrapper } from "./styles";

function ModalComponent({ toggleModal, children }) {
  return (
    <>
      <Modal>
        {children}
        <Close onClick={toggleModal} />
      </Modal>
      <ModalWrapper onClick={toggleModal} />
    </>
  );
}

export default ModalComponent;
