import { useState } from 'react';
import { Modal } from '@mui/material';
import { certificates } from 'data/certificates-data';
import './pages.scss';
import '../index.css';
import '../main.scss';

const CertificatesPage = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const handleOpen = current => {
    setCurrentImg(current);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="certificates_gallery">
      {certificates.map(item => (
        <div
          className="certificates_gallery_item"
          key={item.id}
          id={item.id}
          onClick={
            vw > 600
              ? e =>
                  handleOpen(
                    certificates.find(el => el.id === e.currentTarget.id)
                  )
              : () => {}
          }
        >
          <img
            className="certificates_gallery_img"
            src={item.preview}
            alt={item.title}
          />
        </div>
      ))}
      <Modal open={open} onClose={handleClose}>
        <div className="modal" onClick={handleClose}>
          {currentImg ? (
            <img
              src={currentImg.img}
              alt={currentImg.title}
              width={
                currentImg.height < currentImg.width
                  ? vw * 0.7
                  : vh * 0.9 * (currentImg.width / currentImg.height)
              }
              height={
                currentImg.height < currentImg.width
                  ? vw * 0.7 * (currentImg.height / currentImg.width)
                  : vh * 0.9
              }
            />
          ) : (
            'Something wrong, try again'
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CertificatesPage;
