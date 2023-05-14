import React, { useState } from "react";
import Modal from "react-modal";
import { UserInfo } from "../Types/UserInfo";

Modal.setAppElement("#root");

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleUserAdded: (user: UserInfo) => void;
};

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  handleUserAdded,
}) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [website, setWebsite] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        website: website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Updated user data:", json);
        onClose(); // Close the modal after updating the user data
        handleUserAdded(json);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

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
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="phone">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="website">
            Website:
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
