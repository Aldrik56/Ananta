import React, { useRef, useState, useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./FotoDivisi.scss";

// IMPORT COMPONENTS
import TopInfo from "../../Components/TopInfo/TopInfo";
import HeadingLogo from "../../Components/HeadingLogo/HeadingLogo";
import Navbar from '../../Components/Navbar/Navbar';

const FotoDivisi = () => {
    const path = window.location.pathname;
    const [domain, setDomain] = useState();
    const [slide, setSlide] = useState(0);
    const [foto, setFoto] = useState(null);

    const prevButton = useRef(null);
    const nextButton = useRef(null);

    const nextSlide = () => {
        setSlide(slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide - 1);
    };

    function openModal(props){
        setModal(!modal);
        setFoto(props);
    }

    useEffect(() => {
        setDomain(path.substring(8));
    }, []);

    useEffect(() => {
        if(slide == 7) {
            setSlide(0);
        }
        else if(slide == -1) {
            setSlide(6);
        }
    }, [slide]);

    // MODAL
    const [modal, setModal] = useState(false);
  
    const Modal = useRef(null);
  
    // HANLDE CLOSE MODAL
    useEffect(() => {
      const handleClickRemoveModal = (event) => {
        if (!modal == false) {
          if (Modal.current) {
            setModal(false);
          }
        }
      };
      document.addEventListener("click", handleClickRemoveModal, true);
      return () => {
        document.removeEventListener("click", handleClickRemoveModal, true);
      };
    }, [modal]);

    const listAnggota = [
        {
            "divisi": "kampana",
            "koor": "Marcelino Ryan Surya, Wilcoustine Qhristmas Pniel, Yemima Willona Aristo",
            "anggota": "Aveline Jantika, Chatarina Ivanka, Gloria Wijaya, Kenny Adam, Lavla Jovelin, Rachel Natalie, Rahmat Kurniawan, Samuel Gerald David, Stefanny Chandra, Vania Putri Keisa",
            "color": "#B8110D",
            "lightColor": "rgba(184, 17, 13, 0.10)",
        },
        {
            "divisi": "syandana",
            "koor": "Charina Elliani, Clarissa Liani Ng, Delicia Karen Gunawan",
            "anggota": "Caroline Lorenza, Diwanti Divi Afrilia, Ferdinand Julius, Gabrielle Claudia Harto Wibowo, Jehezkiel Immanuel, Jessica Chandra, Muhammad Afiq Walid, Rara Anggreni, Ramadava Ardiyanto, Silvia Andriyani",
            "color": "#4D4D4D",
            "lightColor": "rgba(77, 77, 77, 0.10)",
        },
        {
            "divisi": "sambara",
            "koor": "Dhaniel Priambodo, Hellen Herlina, Mahdi Husein Punca",
            "anggota": "Airin Livia, Aurellia Ramli, Benedetto Kennard Wijaya, Christoper John Aranda, Cianando Pautrisio Cendranadi, Eunique Jovie, Iman Rhesa Reyhan Amantiya, Indah Desri Wahyuni, Khesar Kurniawan, Kristoforus Kharis Putra Sadsuitubun, Maria Cahaya Amornanta Wirastu, Michael Lucius Wijaya, Nurjihaan, Rafi Rabbani, Raqqat Amarasangga Iswahyudi, Reyhan Phillies Wijaya, Reynard, Vincent Marlino",
            "color": "#9300D2",
            "lightColor": "rgba(147, 0, 210, 0.10)",
        },
        {
            "divisi": "dayaka",
            "koor": "Jessica Chandra, Steven Natanael Hermanto",
            "anggota": "Alexander Daniel Cahyadi Mogo, Angeline Ageina Susanto, Assyifa Salsabila Hasibuan, Cherry Wijaya, Debora Priscilla Natalia, Delvin Hendro, Gisela Florentina, Jeannie Rukmana, Kleofas, Malvin Wijaya, Maria Jessica Eunike Dahayu, Michelle Liu, Murni Eunike Hutapea, Nasya Karina Wahyudin, Nathania Putri Qhen, Shyerly Shaferya, Yoshella Yuliana",
            "color": "#CBA78B",
            "lightColor": "rgba(203, 167, 139, 0.10)",
        },
        {
            "divisi": "sarwaga",
            "koor": "Jones Samuel Justine, Novia Ramadina Setiawati",
            "anggota": "Albert Amadio Trenedy, Andrew Jaya Susilo, Angelima Khosina, Angellica Kristie Lin, Arnela Setianegara, Audy Hendry, Chandra Wihaya Fatah, Cynthia Clara Santy, Daniel Himawan, Feodora Audrey Clementine, Fiorenza Irene Christabelle, Fransisko Krisdian Tara, Geraldi, Gisselle Angelina Tanuwidjaja, Jessica Eunice Sihasale, Jessica Sharon Maria Tampi, Kathryn Cahyadi, Keiko Rosario Chrisabel, Keira Norelia Chandra, Laticia Kimberly Tanto, Leonardus Efendi, Lina, Maureen Audilia, Michel Fransiska, Mishel Milen, Mohamad Syafriza Ramadhan, Naila Arshiya Hendriana, Najwa Khairunisa, Nabilah Syafira Ramadhani, Narita Changi, Nicholas Candra, Novan Gustaf Firyan, Parwinderjeet Singh, Patresia Lisnayanti Zalukhu, Richard Bona Tua Tindaon, Rio Leonardi, Roger Noel Austin Lee, Ryu Ivan Wijaya, Samuel Fernandtio, Syahlarichanda Salsabila, Vania Lay, Velery Yosafat Chia, Vianca Vanesia Barhan, Vivian Kristin Chiputri, Wiewyn",
            "color": "#41A76A",
            "lightColor": "rgba(65, 167, 106, 0.10)",
        },
        
    ]

    const listAnggotaRow = [
        {
            "divisi": "arsa",
            "koor": "Christopher Richard Gunawan, Clifford Aaron Darmawan, Jocelyn Nathania Ichwan, Valecia Monroe Thendy",
            "anggota": [
                { "nama": "Gabriella Stevie Euodia Priyono, Sion Alexander Hartono, Christian Johan, Kelly Christian Hariyono, Cindy, Stefani Margaretha Christie, Shafiragiovani Marvella, Adestia Febrianti, Jennifer Abigail, Nicholas Suwandi Wijaya, Gwendeline Gail Sutrisno, Jennefer Chandra, Vinson, Jessica Marella, Angel Lawrensia, Yahaziel Yehuda Prastyoadi, Fenny Dwi Adiwena, Marcel Jonathan, Angeline Precillia, Petris Glaudya Liuwanda, Arsio Viriya Muliyawan, Catherine Olivia" },
                { "nama": "Alice Marybeth, Cornelia Alyssa Candra, Regina Marcheliza, Hendricus Wibisono, Vidy Tandiono, Jovita Angelina Mettasari, Natalia Christy, Audrey Gracia Chandra, Daniel Cahya Putra, Mawidah Muthia Fitriani, Hotmauli Kristiani Siboro, Marvell Christofer, Sheren Olivia, Edwin Fedora Lolo, Aulia Syifa Arthamevi, Stefanie Jaya Susilo, Sunarto Wijaksono, Siti Muthia Khadijah, Brightly Virya, Sharone Angelica Jovans, Maria Rumbhaney Tarigan, Jessica"},
                { "nama": "Aureen Trevisia Sutarna, Vanessa Olivia, Arifandi Wirawan, Brigitta Julia Sinaulan, Nadhira Keisya Callista, Vania Ardelia, Devin Tarangga, Prisilia Laybertha, Tanzania Febriana, Felicia Aurell Thiopillia, Nicholas Prawira Tanoto, Jocelyn Janice, Laurentinus Heriyanto Setiadi, Michelle Gracya atmaja, Priscillia Lindsey Setiadie, Rizky Ali Zamzami, Rachel Azalia Hariwijaya, Martin, Mitawati, Glen Owen, Melody Dennise Allegra" },
                { "nama": "Christy Angela Limardi, Clarissa Elvira Darmawan, Angelina Yang, Azalea Keisha Putri, Ryan Ferdinand Andyson, Calista Nathalia, Nicholas Carlos Ricardo, Felicia Jennifer, Agym Dimas Tian, Grisella Vevilia Lauren, Marcia Septiani, Ray Anthony Pranoto, Jennifer Landau, Kellysia Mona Andika, Rachel Dayana Telaumbanua, Matthew Chang, Tamara Catalina Suwandi, Melinda Ariyana Dharmanto, Erva Yanti Daneuis, Michelle Williams, Melissa Gracia, Ferbie viona" },
                { "nama": "Marchanda Guritna Halim, Melvin Tristan, Andi Bintang Rihhadatul Aisy, Caesar Eka Nathanael, Andrew Natanael Tjandra, Cindy Aurellia Liwang, Hafizah Balqis, Jacques Farrell Dharma, Priscilla Agatha, Michelle Laurensia, Felix Rafael, Neisya Arsy Argya, Andaru Hymawan Primayudha, Chaterine Laurenthia, Euderen Freyderik, Jessie Valencia Tannuwijaya, Callista Ariella Ginata, Christophorus Augusta Wangsa, Auresia Yunita, Larissa Ika Kamila, Sinung Agung Cahyono, Anastasya Audrey Tengko" },
                { "nama": "Septhia Rosa Tambunan, Vallencia Natalie Bong, Crispus Adlai Anthony, Vanessa, Jason Timothy Sihite, Patricia Febrina Maharani, Dylan Liong Kusnowo, Livinia Cathleen Gunawan, Margareta Averina Lianti, Richard Sujono, Priscilla Karimang, Christina Elizabeth Kusumaluana, Valencia Aurelia, Diva Anggira Svasty, Francisco Anderson Gultom, Airyara Dorthea Warella, Brilliana Thalia Wijaya, Daffa Albiyananda, Vadreyna, Cindy Theresa, Richard Tandean, Clarensia Anjeli" },
                { "nama": "Verin Maria, Ivander Kristian Satya Putra, Ruth Yushiana, Alecia Cindy, Florencia Eliana Imansjah, Vallenzia Caroline, Indira Sukma Dewi, Edmund, Jessie Yenca Vegustin, Cindy Florencia, Dylan Ervian, Benaya Arlyanto, Ian Pangeswara Hermawan, Ralph Theodoric Adam Zagoto, Angriany Lutfiyah Darmawan, Sean Marcello Talaar, Rahmah Inayah, Muhammad Alifio Rachman, Charlotte Yeung, Reniati Noor Qomariany" },
            ],
            "color": "#FD7F9B",
            "lightColor": "rgba(253, 127, 155, 0.10)",
        },
        {
            "divisi": "adhyasta",
            "koor": "Ananda Ayu Putri, Jeremy Immanuel, Leideovico Yudhisti",
            "anggota": [
                { "nama": "Gabriella Stevie Euodia Priyono, Sion Alexander Hartono, Christian Johan, Kelly Christian Hariyono, Cindy, Stefani Margaretha Christie, Shafiragiovani Marvella, Adestia Febrianti, Jennifer Abigail, Nicholas Suwandi Wijaya, Gwendeline Gail Sutrisno, Jennefer Chandra, Vinson, Jessica Marella, Angel Lawrensia, Yahaziel Yehuda Prastyoadi, Fenny Dwi Adiwena, Marcel Jonathan, Angeline Precillia, Petris Glaudya Liuwanda, Arsio Viriya Muliyawan, Catherine Olivia" },
                { "nama": "Gabriella Stevie Euodia Priyono, Sion Alexander Hartono, Christian Johan, Kelly Christian Hariyono, Cindy, Stefani Margaretha Christie, Shafiragiovani Marvella, Adestia Febrianti, Jennifer Abigail, Nicholas Suwandi Wijaya, Gwendeline Gail Sutrisno, Jennefer Chandra, Vinson, Jessica Marella, Angel Lawrensia, Yahaziel Yehuda Prastyoadi, Fenny Dwi Adiwena, Marcel Jonathan, Angeline Precillia, Petris Glaudya Liuwanda, Arsio Viriya Muliyawan, Catherine Olivia" },
                { "nama": "Alice Marybeth, Cornelia Alyssa Candra, Regina Marcheliza, Hendricus Wibisono, Vidy Tandiono, Jovita Angelina Mettasari, Natalia Christy, Audrey Gracia Chandra, Daniel Cahya Putra, Mawidah Muthia Fitriani, Hotmauli Kristiani Siboro, Marvell Christofer, Sheren Olivia, Edwin Fedora Lolo, Aulia Syifa Arthamevi, Stefanie Jaya Susilo, Sunarto Wijaksono, Siti Muthia Khadijah, Brightly Virya, Sharone Angelica Jovans, Maria Rumbhaney Tarigan, Jessica"},
                { "nama": "Alice Marybeth, Cornelia Alyssa Candra, Regina Marcheliza, Hendricus Wibisono, Vidy Tandiono, Jovita Angelina Mettasari, Natalia Christy, Audrey Gracia Chandra, Daniel Cahya Putra, Mawidah Muthia Fitriani, Hotmauli Kristiani Siboro, Marvell Christofer, Sheren Olivia, Edwin Fedora Lolo, Aulia Syifa Arthamevi, Stefanie Jaya Susilo, Sunarto Wijaksono, Siti Muthia Khadijah, Brightly Virya, Sharone Angelica Jovans, Maria Rumbhaney Tarigan, Jessica"},
                { "nama": "Aureen Trevisia Sutarna, Vanessa Olivia, Arifandi Wirawan, Brigitta Julia Sinaulan, Nadhira Keisya Callista, Vania Ardelia, Devin Tarangga, Prisilia Laybertha, Tanzania Febriana, Felicia Aurell Thiopillia, Nicholas Prawira Tanoto, Jocelyn Janice, Laurentinus Heriyanto Setiadi, Michelle Gracya atmaja, Priscillia Lindsey Setiadie, Rizky Ali Zamzami, Rachel Azalia Hariwijaya, Martin, Mitawati, Glen Owen, Melody Dennise Allegra" },
                { "nama": "Aureen Trevisia Sutarna, Vanessa Olivia, Arifandi Wirawan, Brigitta Julia Sinaulan, Nadhira Keisya Callista, Vania Ardelia, Devin Tarangga, Prisilia Laybertha, Tanzania Febriana, Felicia Aurell Thiopillia, Nicholas Prawira Tanoto, Jocelyn Janice, Laurentinus Heriyanto Setiadi, Michelle Gracya atmaja, Priscillia Lindsey Setiadie, Rizky Ali Zamzami, Rachel Azalia Hariwijaya, Martin, Mitawati, Glen Owen, Melody Dennise Allegra" },
            ],
            "color": "#000",
            "lightColor": "rgba(0, 0, 0, 0.10)",
        },
    ]

    return (
        <>
        <Navbar />
            <div className="FotoDivisi">
                <TopInfo />
                { domain == "bimantara" ? (
                    <HeadingLogo
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="BIMANTARA"
                        job="Badan Pengurus Harian (BPH)"
                    />
                ) : domain == "kampana" ? (
                    <HeadingLogo 
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="KAMPANA"
                        job="Acara"
                    />
                ) : domain == "arsa" ? (
                    <HeadingLogo 
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="ARSA"
                        job="Person In Charge (PIC)"
                    />
                ) : domain == "adhyasta" ? (
                    <HeadingLogo 
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="ADHYASTA"
                        job="Keamanan"
                    />
                ) : domain == "syandana" ? (
                    <HeadingLogo 
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="SYANDANA"
                        job="Public Relation & Design"
                    />
                ) : domain == "sambara" ? (
                    <HeadingLogo 
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="SAMBARA"
                        job="Perlengkapan"
                    />
                ) : domain == "dayaka" ? (
                    <HeadingLogo 
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="DAYAKA"
                        job="Konsumsi"
                    />
                ) : domain == "sarwaga" ? (
                    <HeadingLogo 
                        lagu={`./Assets/FotoDivisi/${domain}/Yelyel.m4a`}
                        img={`./Assets/FotoDivisi/${domain}/Logo.webp`}
                        nama="SARWAGA"
                        job="Medis"
                    />
                ) : null }
                <div className="box-swiper">
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: prevButton.current,
                        nextEl: nextButton.current,
                    }}
                    modules={[Pagination, Navigation]}
                    allowTouchMove={false}
                    className="mySwiper"
                    >
                        <SwiperSlide><img className="foto" src={`./Assets/FotoDivisi/${domain}/Swiper1.jpg`} alt="" /><div className="shadow-top"></div><div className="shadow-bottom"></div></SwiperSlide>
                        <SwiperSlide><img className="foto" src={`./Assets/FotoDivisi/${domain}/Swiper1.jpg`} alt="" /><div className="shadow-top"></div><div className="shadow-bottom"></div></SwiperSlide>
                        <SwiperSlide><img className="foto" src={`./Assets/FotoDivisi/${domain}/Swiper1.jpg`} alt="" /><div className="shadow-top"></div><div className="shadow-bottom"></div></SwiperSlide>
                        <SwiperSlide><img className="foto" src={`./Assets/FotoDivisi/${domain}/Swiper1.jpg`} alt="" /><div className="shadow-top"></div><div className="shadow-bottom"></div></SwiperSlide>
                        <SwiperSlide><img className="foto" src={`./Assets/FotoDivisi/${domain}/Swiper1.jpg`} alt="" /><div className="shadow-top"></div><div className="shadow-bottom"></div></SwiperSlide>
                        <SwiperSlide><img className="foto" src={`./Assets/FotoDivisi/${domain}/Swiper1.jpg`} alt="" /><div className="shadow-top"></div><div className="shadow-bottom"></div></SwiperSlide>
                        <SwiperSlide><img className="foto" src={`./Assets/FotoDivisi/${domain}/Swiper1.jpg`} alt="" /><div className="shadow-top"></div><div className="shadow-bottom"></div></SwiperSlide>
                        <div ref={prevButton} onClick={prevSlide} className="swiper-button-prev"></div>
                        <div ref={nextButton} onClick={nextSlide} className="swiper-button-next"></div>
                    </Swiper>
                </div>
                { domain == "bimantara" ? (
                    <div className="box-anggota">
                        <div className="box">
                            <p className="jabatan">SUPERVISI</p>
                            <p className="nama">Sherly</p>
                        </div>
                        <div className="box">
                            <p className="jabatan">KETUA</p>
                            <p className="nama">Reynaldi Michael Yakob</p>
                        </div>
                        <div className="box">
                            <p className="jabatan">WAKIL KETUA</p>
                            <p className="nama">Irene Zanetha Halim</p>
                        </div>
                        <div className="box">
                            <p className="jabatan">SEKERTARIS 1</p>
                            <p className="nama">Kenza Tanika</p>
                        </div>
                        <div className="box">
                            <p className="jabatan">SEKERTARIS 2</p>
                            <p className="nama">Steven Feliciano Wiggins</p>
                        </div>
                        <div className="box">
                            <p className="jabatan">BENDAHARA</p>
                            <p className="nama">Faustine Ilone Hadinata</p>
                        </div>
                    </div>
                ) : domain == "arsa" || domain == "adhyasta" ? (
                    <div className="box-anggota-lain">
                        {listAnggotaRow.map((item,index) => {
                            if(item.divisi == domain) {
                                let boxKoor = { background: item.color }
                                return (
                                    <div className="box-koor" style={boxKoor}>
                                        <p className="jabatan">KOORDINATOR</p>
                                        <p className="nama">{item.koor} </p>
                                    </div>
                                );
                            }
                        })}
                        {listAnggotaRow.map((item,index) =>{   
                            if(item.divisi == domain) {
                                let borderAnggota = { borderColor: item.color, background: item.lightColor }
                                let textAnggota = { color: item.color }
                                return (
                                    <div className="box-anggota" style={borderAnggota}>
                                        <p className="jabatan" style={textAnggota}>ANGGOTA</p>
                                        {item.anggota.map((isiItems,index) => {
                                            if(index == slide) {
                                                return (<p className="nama">{isiItems.nama}</p>);
                                            }
                                        })}
                                    </div>
                                );
                            }
                        })}
                    </div>
                ) : (
                    <div className="box-anggota-lain">
                        {listAnggota.map((item,index) => {
                            if(item.divisi == domain) {
                                let boxKoor = { background: item.color }
                                return (
                                    <div className="box-koor" style={boxKoor}>
                                        <p className="jabatan">KOORDINATOR</p>
                                        <p className="nama">{item.koor} </p>
                                    </div>
                                );
                            }
                        })}
                        {listAnggota.map((item,index) =>{   
                            if(item.divisi == domain) {
                                let borderAnggota = { borderColor: item.color, background: item.lightColor }
                                let textAnggota = { color: item.color }
                                return (
                                    <div className="box-anggota" style={borderAnggota}>
                                        <p className="jabatan" style={textAnggota}>ANGGOTA</p>
                                        <p className="nama">{item.anggota} </p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                )}
                <div className="dokumentasi">
                    <p className="judul">Dokumentasi Divisi</p>
                    <div class="konten-foto">
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                        <img className="foto" onClick={() => openModal("./Assets/FotoDivisi/" + `${domain}` + "/Example.jpg")} src={`./Assets/FotoDivisi/${domain}/Example.jpg`} alt="" />
                    </div>
                </div>
            </div>
            {modal ? 
                <div ref={Modal} id="comingsoon" className="comingsoon">
                    <div className="modal-content">
                        <img className="foto" src={foto} alt="" />
                    </div>
                </div>
            : null }
        </>
    )
}

export { FotoDivisi }