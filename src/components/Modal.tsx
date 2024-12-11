interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="fixed grid w-full h-screen backdrop-blur-sm z-10">
      <div className="grid place-self-center border-none rounded-lg p-0 overflow-hidden z-10">
        {children}
      </div>
    </div>
  );
};

export default Modal;