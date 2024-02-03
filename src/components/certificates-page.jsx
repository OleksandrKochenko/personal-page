import { Gallery, Item } from 'react-photoswipe-gallery';
import { certificates } from 'data/certificates-data';
import 'photoswipe/dist/photoswipe.css';
import './pages.scss';

const CertificatesPage = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return (
    <Gallery options={{ zoom: false }}>
      <div className="certificates_gallery">
        {certificates.map(item => (
          <Item
            key={item.id}
            thumbnail={item.preview}
            original={item.img}
            alt={item.title}
            width={
              item.height < item.width
                ? vw * 0.8
                : vh * 0.9 * (item.width / item.height)
            }
            height={
              item.height < item.width
                ? vw * 0.8 * (item.height / item.width)
                : vh * 0.9
            }
          >
            {({ ref, open }) => (
              <div className="certificates_gallery_item">
                <img
                  className="certificates_gallery_img"
                  src={item.preview}
                  alt={item.title}
                  ref={ref}
                  onClick={open}
                />
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default CertificatesPage;
