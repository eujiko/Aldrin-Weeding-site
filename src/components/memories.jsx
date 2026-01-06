import { useState } from "react";
import Modal from "react-modal";

// Example images (replace with your own assets)
import photo1 from "../assets/couple-photo/p1.jpg";
import photo2 from "../assets/couple-photo/p2.jpg";
import photo3 from "../assets/couple-photo/p3.jpg";
import photo4 from "../assets/couple-photo/p4.jpg";
import photo5 from "../assets/couple-photo/p5.jpg";
import photo6 from "../assets/couple-photo/p7.jpeg";
import photo7 from "../assets/couple-photo/p9.jpeg";
import photo8 from "../assets/couple-photo/p12.jpeg";
import photo9 from "../assets/couple-photo/p13.jpg";
import photo10 from "../assets/couple-photo/p14.jpg";
import photo11 from "../assets/couple-photo/p15.jpg";
import photo12 from "../assets/couple-photo/p16.jpg";
import photo13 from "../assets/couple-photo/p17.jpg";
import photo14 from "../assets/couple-photo/p18.jpg";
import photo15 from "../assets/couple-photo/p19.jpg";
import photo16 from "../assets/couple-photo/p20.jpeg";
import photo17 from "../assets/couple-photo/p21.jpg";
import photo18 from "../assets/couple-photo/p21.jpg";
import photo20 from "../assets/couple-photo/p22.jpg";
import photo21 from "../assets/couple-photo/p23.jpg";
import photo22 from "../assets/couple-photo/p24.jpg";

Modal.setAppElement("#root");

const allPhotos = [
  photo1, photo2, photo3, photo4, photo5, photo6,
  photo7, photo8, photo9, photo10, photo11, photo12,
  photo13, photo14, photo15, photo16, photo17, photo18,  photo20, 
  photo21, photo22
];

export default function Memories() {
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(8);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = allPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(allPhotos.length / photosPerPage);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <section id="memories" className="min-h-screen px-4 md:px-12 py-16 bg-[#d7edff]">
      <h2 className="text-4xl font-semibold text-center mb-12">Memories</h2>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {currentPhotos.map((photo, idx) => (
          <img
            key={idx}
            src={photo}
            alt={`Memory ${idx + 1}`}
            className="w-full mb-4 cursor-pointer rounded-lg hover:scale-105 transition-transform duration-200"
            onClick={() => openModal(photo)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 rounded bg-[#653720] text-white disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 rounded bg-[#653720] text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Photo Modal"
        className="relative max-w-[90vw] max-h-[90vh] mx-auto my-0 bg-white rounded-lg border border-gray-300 p-2 shadow-lg outline-none overflow-hidden"
        overlayClassName="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
      >
        {selectedPhoto && (
          <img
            src={selectedPhoto}
            alt="Selected"
            className="w-full h-auto max-h-[85vh] rounded-lg object-contain"
          />
        )}
      </Modal>
    </section>
  );
}