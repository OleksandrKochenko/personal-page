import { Link } from 'react-router-dom';
import {
  GitHub,
  GradingOutlined,
  LinkedIn,
  MailOutlined,
  PhoneAndroid,
  Telegram,
  WhatsApp,
} from '@mui/icons-material';
import { Modal, Tooltip } from '@mui/material';
import { useState } from 'react';
import whatsapp from '../../img/whatsap-qr.jpg';
import './contacts.scss';
import '../../index.css';
import '../../main.scss';

export const Contacts = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <h2 className="contacts_name">Oleksandr Kochenko</h2>
      <p>Full Stack Developer</p>
      <ul>
        <li className="contacts_item">
          <Tooltip
            title={<p className="contacts_tooltip">Email</p>}
            placement="bottom-start"
          >
            <a href="mailto:kochenko.fop@gmail.com" className="contact_link">
              <MailOutlined sx={{ fontSize: 10 }} />
              <span> kochenko.fop@gmail.com</span>
            </a>
          </Tooltip>
        </li>
        <li className="contacts_item">
          <Tooltip
            title={<p className="contacts_tooltip">Phone</p>}
            placement="bottom-start"
          >
            <a href="tel:+380956298122" className="contact_link">
              <PhoneAndroid sx={{ fontSize: 10 }} />
              <span> +380 0956298122</span>
            </a>
          </Tooltip>
        </li>
        <li className="contacts_item">
          <Tooltip
            title={<p className="contacts_tooltip">Telegram</p>}
            placement="bottom-start"
          >
            <a
              href="https://t.me/alex_kochenko"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
            >
              <Telegram sx={{ fontSize: 10 }} />
              <span> @alex_kochenko</span>
            </a>
          </Tooltip>
        </li>
        <li className="contacts_item">
          <Tooltip
            title={<p className="contacts_tooltip">WhatsApp</p>}
            placement="bottom-start"
          >
            <span onClick={handleOpen} className="contact_link">
              <WhatsApp sx={{ fontSize: 10 }} />
              <span> +380 0956298122</span>
            </span>
          </Tooltip>
        </li>
        <li className="contacts_item">
          <Tooltip
            title={<p className="contacts_tooltip">GitHub</p>}
            placement="bottom-start"
          >
            <a
              href="https://github.com/OleksandrKochenko"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
            >
              <GitHub sx={{ fontSize: 10 }} />
              <span>https://github.com/OleksandrKochenko</span>
            </a>
          </Tooltip>
        </li>
        <li className="contacts_item">
          <Tooltip
            title={<p className="contacts_tooltip">LinkedIn</p>}
            placement="bottom-start"
          >
            <a
              href="https://www.linkedin.com/in/oleksandr-kochenko/"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
            >
              <LinkedIn sx={{ fontSize: 10 }} />
              <span>https://www.linkedin.com/in/oleksandr-kochenko</span>
            </a>
          </Tooltip>
        </li>
        <li className="contacts_item_CV">
          <a
            href="https://oleksandrkochenko.github.io/CV-Kochenko/CV"
            target="_blank"
            rel="noreferrer"
            className="contact_link contacts_item"
          >
            <GradingOutlined sx={{ fontSize: 10 }} />
            <span>Curriculum Vitae</span>
          </a>
          <Link
            to="/files/CV_Kochenko_Fullstack_Dev.pdf"
            target="_blank"
            download
            className="CV_download"
          >
            Download CV
          </Link>
        </li>
      </ul>
      <Modal open={openModal} onClose={handleClose}>
        <div className="modal_whatsapp">
          <img src={whatsapp} alt="+380956298122" width={400} height={450} />
        </div>
      </Modal>
    </>
  );
};
