/* eslint-disable react/prop-types */

// type ModalProps = {
//     isOpen: boolean;
//     onClose: () => void;
//     children: ReactNode;
//     className?: string; // Added prop to accept custom className for the modal container
//     bg?: string;
// };

const CustomModal = ({ isOpen, onClose, children, className, bg = 'bg-white' }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            console.log("closed");
            onClose();
        }
    };

    return (
        <div
            className="fixed min-h-full overflow-auto pt-10 pb-10 inset-0 z-50 flex items-center justify-center bg-overlayy"
            onClick={handleOverlayClick}
        >
            <div className={`${className} relative ${bg} flex flex-col bg-white rounded-[8px] shadow-lg w-[90%] p-[24px]`}>
                <button
                    onClick={onClose}
                    className={`absolute top-6 right-6 border-[#475156] text-center flex justify-center items-center rounded-full border-[2px] w-[20px] text-white bg-black h-[20px]`}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;
