import React, { useState } from 'react';
import Modal from '../Components/Modal';
import { photoGridOne, photoGridTwo, photoGridThree, photoGridFour} from '../data/projectData';

const ProjectGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        imageUrl: '',
        modalTitle: '',
        modalContent: '',
        modalButton: '',
        link: ''
    });

    const [clickedImageIds, setClickedImageIds] = useState([]);

    const openModal = (imageUrl, modalTitle, modalContent, modalButton, link, id) => {
        setModalContent({ imageUrl, modalTitle, modalContent, modalButton, link });
        setIsModalOpen(true);
        setClickedImageIds(prevState => [...new Set([...prevState, id])]);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderPhotoGrid = (photoGrid) => (
        <div className="grid gap-4 pt-20">
            {photoGrid.map((photo) => (
                <div
                    key={photo.id}
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => openModal(photo.imageUrl, photo.modalTitle, photo.modalContent, photo.modalButton, photo.link, photo.id)}
                >
                    <img
                        src={photo.imageUrl}
                        alt={`Project ${photo.id}`}
                        className="w-full h-auto object-cover"
                    />
                    {clickedImageIds.includes(photo.id) && (
                        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">Viewed</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <main>
            <div className="h-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
                {renderPhotoGrid(photoGridOne)}
                {renderPhotoGrid(photoGridTwo)}
                {renderPhotoGrid(photoGridThree)}
                {renderPhotoGrid(photoGridFour)}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageUrl={modalContent.imageUrl}
                modalTitle={modalContent.modalTitle}
                modalContent={modalContent.modalContent}
                modalButton={modalContent.modalButton}
                link={modalContent.link}
            />
        </main>
    );
};

export default ProjectGrid;




