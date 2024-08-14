import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, imageUrl, modalTitle, modalContent, modalButton, link }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleButtonClick = () => {
        onClose();
        window.open(link, '_blank');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 text-xl font-bold text-gray-600 hover:text-gray-900"
                >
                    &times;
                </button>
                <img src={imageUrl} alt={modalTitle} className="w-full h-auto object-cover rounded" />
                <h2 className="text-xl font-bold mt-2">{modalTitle}</h2>
                <p className="mt-2">{modalContent}</p>
                <button
                    type="button"
                    onClick={handleButtonClick}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    {modalButton}
                </button>
            </div>
        </div>
    );
};

export default Modal;
