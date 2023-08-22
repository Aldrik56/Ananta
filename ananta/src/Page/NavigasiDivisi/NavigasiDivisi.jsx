import React, { useRef, useState, useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./NavigasiDivisi.scss";

// IMPORT COMPONENT
import TopInfo from '../../Components/TopInfo/TopInfo';
import Heading from '../../Components/Heading/Heading';

const NavigasiDivisi = () => {
    return (
        <>
            <div className="NavigasiDivisi">
                <div className="konten">
                    <TopInfo />
                    <Heading nama="Foto Divisi" job="yuhu" />
                    <div className="box-swiper">
                        <Swiper
                        slidesPerView={2}
                        centeredSlides={false}
                        slidesPerGroupSkip={0}
                        loop={true}
                        grabCursor={true}
                        keyboard={{
                        enabled: true,
                        }}
                        breakpoints={{
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        }}
                        navigation={true}
                        pagination={{
                            el:'.swiper-pagination',
                            clickable: true,
                        }}
                        spaceBetween={16}
                        modules={[Keyboard, Navigation, Pagination]}
                        className="mySwiper"
                        >
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-bimantara">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Bimantara.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(16,82,184,0), rgba(16,82,184,1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">BIMANTARA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/bimantara/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job">Badan Pengurus Harian (BPH)</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-kampana">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Kampana.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(184,17,13,0), rgba(184,17,13,1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">KAMPANA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/kampana/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job">Acara</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-arsa">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Arsa.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(253,127,155,0), rgba(253,127,155,1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">ARSA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/arsa/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job" style={{ fontStyle: "italic" }}>Person In Charge (PIC)</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-adhyasta">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Adhyasta.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">ADHYASTA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/adhyasta/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job">Keamanan</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-syandana">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Syandana.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(77,77,77,0), rgba(77,77,77,1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">SYANDANA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/syandana/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job" style={{ fontStyle: "italic" }}>Public Relation & Design</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-sambara">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Sambara.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(147,0,210,0), rgba(147,0,210,1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">SAMBARA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/sambara/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job">Perlengkapan</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-dayaka">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Dayaka.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(203,167,139,0), rgba(203,167,139, 1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">DAYAKA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/dayaka/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job">Konsumsi</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className="box-link" href="/divisi-bimantara">
                                    <img className="foto" src="./Assets/NavigasiDivisi/Sarwaga.jpg" alt="" />
                                    <div className="shadow-top"></div>
                                    <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(65,167,106,0), rgba(65,167,106, 1)" }}></div>
                                    <div className="info-divisi">
                                        <div className="box">
                                            <div className="box-text">
                                                <p className="divisi">Divisi</p>
                                                <p className="nama">SARWAGA</p>
                                            </div>
                                            <div className="box-logo">
                                                <img className="logo" src="./Assets/FotoDivisi/sarwaga/Logo.webp" alt="" />
                                            </div>
                                        </div>
                                        <p className="job">Medis</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-pagination" slot="pagination"></div>
                    </div>
                    <div className="box-grid">
                        <a className="box-link" href="/divisi-bimantara">
                            <img className="foto" src="./Assets/NavigasiDivisi/Bimantara.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(16,82,184,0), rgba(16,82,184,1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">BIMANTARA</p>
                                    </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/bimantara/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job">Badan Pengurus Harian (BPH)</p>
                            </div>
                        </a>
                        <a className="box-link" href="/divisi-kampana">
                            <img className="foto" src="./Assets/NavigasiDivisi/Kampana.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(184,17,13,0), rgba(184,17,13,1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">KAMPANA</p>
                                            </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/kampana/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job">Acara</p>
                            </div>
                        </a>
                        <a className="box-link" href="/divisi-arsa">
                            <img className="foto" src="./Assets/NavigasiDivisi/Arsa.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(253,127,155,0), rgba(253,127,155,1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">ARSA</p>
                                    </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/arsa/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job" style={{ fontStyle: "italic" }}>Person In Charge (PIC)</p>
                            </div>
                        </a>
                        <a className="box-link" href="/divisi-adhyasta">
                            <img className="foto" src="./Assets/NavigasiDivisi/Adhyasta.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">ADHYASTA</p>
                                    </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/adhyasta/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job">Keamanan</p>
                            </div>
                        </a>
                        <a className="box-link" href="/divisi-syandana">
                            <img className="foto" src="./Assets/NavigasiDivisi/Syandana.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(77,77,77,0), rgba(77,77,77,1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">SYANDANA</p>
                                    </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/syandana/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job" style={{ fontStyle: "italic" }}>Public Relation & Design</p>
                            </div>
                        </a>
                        <a className="box-link" href="/divisi-sambara">
                            <img className="foto" src="./Assets/NavigasiDivisi/Sambara.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(147,0,210,0), rgba(147,0,210,1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">SAMBARA</p>
                                    </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/sambara/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job">Perlengkapan</p>
                            </div>
                        </a>
                        <a className="box-link" href="/divisi-dayaka">
                            <img className="foto" src="./Assets/NavigasiDivisi/Dayaka.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(203,167,139,0), rgba(203,167,139, 1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">DAYAKA</p>
                                    </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/dayaka/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job">Konsumsi</p>
                            </div>
                        </a>
                        <a className="box-link" href="/divisi-bimantara">
                            <img className="foto" src="./Assets/NavigasiDivisi/Sarwaga.jpg" alt="" />
                            <div className="shadow-top"></div>
                            <div className="shadow-divisi" style={{ background: "linear-gradient(rgba(65,167,106,0), rgba(65,167,106, 1)" }}></div>
                            <div className="info-divisi">
                                <div className="box">
                                    <div className="box-text">
                                        <p className="divisi">Divisi</p>
                                        <p className="nama">SARWAGA</p>
                                    </div>
                                    <div className="box-logo">
                                        <img className="logo" src="./Assets/FotoDivisi/sarwaga/Logo.webp" alt="" />
                                    </div>
                                </div>
                                <p className="job">Medis</p>
                            </div>
                        </a>
                    </div>
                </div>
                <img className="pohon" src="./Assets/NavigasiDivisi/Pohon.svg" alt="" />
            </div>
        </>
    )
}

export { NavigasiDivisi };