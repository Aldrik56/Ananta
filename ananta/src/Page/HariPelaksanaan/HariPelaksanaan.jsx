import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HariPelaksanaan.scss";
import Navbar from "../../Components/Navbar/Navbar";
import TopInfo from "../../Components/TopInfo/TopInfo";
import Heading from "../../Components/Heading/Heading";

const HariPelaksanaan = () => {
  const path = window.location.pathname;

  const hari = [
    {
      hari: "Hari",
      tema: "PENETASAN",
      img: "./Assets/FotoDivisi/bimantara/Swiper1.jpg",
    },
    {
      hari: "Pembentukan",
      tema: "HARI SATU",
      img: "./Assets/FotoDivisi/bimantara/Swiper1.jpg",
    },
    {
      hari: "Pembentukan",
      tema: "HARI DUA",
      img: "./Assets/FotoDivisi/bimantara/Swiper1.jpg",
    },
    {
      hari: "Kuliah",
      tema: "PERDANA",
      img: "./Assets/FotoDivisi/bimantara/Swiper1.jpg",
    },
  ];

  return (
    <>
      <div className="HariPelaksanaan">
        <div className="pohon"></div>
        <TopInfo />
        <Heading nama="Hari Pelaksanaan" job="Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu" />
        {/* <div className="heading">
          <div className="judul">
            <p className="nama">Hari Pelaksanaan</p>
            <p className="job">Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu</p>
          </div>
        </div> */}
        <div className="timeline">
          {hari.map((item) => (
            <div className="timeline-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,0,36,0) 65%, rgba(0,0,0,1) 100%), url(${item.img})` }}>
              <div className="timeline-card-day">{item.hari}</div>
              <div className="timeline-card-title">{item.tema}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { HariPelaksanaan };
