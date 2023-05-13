import React from "react";
import Modal from "react-modal";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number | null;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, userId }) => {
  console.log(userId);
  const customStyles = {
    content: {
      width: "50%", // Adjust the width as desired
      height: "50%", // Adjust the height as desired
      margin: "auto", // Center the modal horizontally
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Edit User</h2>
        <button
          className="text-white bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {/* Add any necessary form or input fields */}
    </Modal>
  );
};

export default EditModal;
