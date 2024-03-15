import { useState } from "react";
import "../Style/Banner.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="backgroun_color w-full">
      <div className="bg-white grid w-full place-items-center  banner_wrapper">
        <div className="grid row-start-1 w-full">
          {" "}
          <span className="text_hero">Store &gt; Games &gt; Stardew Valley</span>
        </div>
        <div className="flex gap-5  ">
          <div>
            <img src="/images/hero.avif" alt="hero_pic" className="hero_pic" onClick={() => setOpen(true)}/>
            <div>

            <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "/images/pic1.avif",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/pic1.avif", width: 320, height: 213 },
              { src: "/images/pic2.jpg", width: 640, height: 427 },
              // { src: "/images/pic3.jpg", width: 1200, height: 800 },
            ]
          },
        ]}
      />
            </div>
          </div>
          <div className="grid  gap-0 ">
            <div className="flex items-center w-full">
              <span className="line"></span>
              <p className="nin_banner">Nintendo Switch</p>
            </div>
            <h1 className="title">Stardew Valley</h1>
            <div className="title_price flex items-center justify-between ">
              <p>$14.99</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                </svg>
              </span>
            </div>
            <div className="ab flex items-center gap-1">
              <img src="images/my-nintendo-gold-coin.avif" alt="my-nintendo-gold-coin" className="nindo_image"/>
              <p>Eligible for up to 75 Gold Points</p>
            </div>
            <div className="btn_download flex justify-center w-full">
              <button className="d-download">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                  </svg>
                </span>{" "}
                Direct download
              </button>
            </div>
            <div>
              <p className="ab">
                This item will be sent to your system automatically after
                purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
