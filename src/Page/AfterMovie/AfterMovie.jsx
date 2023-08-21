import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AfterMovie.scss";
import Navbar from "../../Components/Navbar/Navbar";
import TopInfo from "../../Components/TopInfo/TopInfo";

const AfterMovie = () => {
  const path = window.location.pathname;

  return (
    <>
      <div className="AfterMovie">
        <div className="pohondanawan"></div>
        <TopInfo />
        <div className="heading">
          <div className="judul">
            <p className="nama">After Movie OMB UMN 2023</p>
            <p className="job">Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu</p>
          </div>
        </div>
        <div class="video-container">
          <iframe className="video" src="https://www.youtube.com/embed/5x4np0U4zhY" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
};

export { AfterMovie };
