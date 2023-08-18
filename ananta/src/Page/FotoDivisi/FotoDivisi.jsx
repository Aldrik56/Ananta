import React, { useRef, useState, useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./FotoDivisi.scss";

const FotoDivisi = () => {
    const path = window.location.pathname;
    const [domain, setDomain] = useState();
    const [slide, setSlide] = useState(0);

    // const Slide1 = useRef(null);
    // const Slide2 = useRef(null);
    // const Slide3 = useRef(null);
    // const Slide4 = useRef(null);
    // const Slide5 = useRef(null);
    // const Slide6 = useRef(null);
    // const Slide7 = useRef(null);

    const prevButton = useRef(null);
    const nextButton = useRef(null);

    let lagu = new Audio("./Assets/FotoDivisi/bimantara/YelYel.mp3");
    lagu.volume = 0.2;

    const nextSlide = () => {
        setSlide(slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide - 1);
    };

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
            "koor": "Charina Elliani, Delicia Karen Gunawan, Clarissa Liani Ng",
            "anggota": "Caroline Lorenza, Silvia Andriyani, Muhammad Afiq Walid, Gabrielle Claudia Harto Wibowo, Ferdinand Julius, Rara Anggreni, Jessica Chandra, Jehezkiel Immanuel, Ramadava Ardiyanto, Diwanti Divi Afrilia",
            "color": "#4D4D4D",
            "lightColor": "rgba(77, 77, 77, 0.10)",
        },
        {
            "divisi": "sambara",
            "koor": "Hellen Herlina, Mahdi Husein Punca, Dhaniel Priambodo W",
            "anggota": "Christoper John Aranda, Cianando Pautrisio Cendranadi, Eunique Jovie, Reyhan Phillies Wijaya, Rafi Rabbani, Reynard, Vincent Marlino, Indah Desri Wahyuni, Kristoforus Kharis Putra Sadsuitubun, Michael Lucius Wijaya, Nurjihaan S A, Khesar Kurniawan, Benedetto Kennard Wijaya, Raqqat Amarasangga Iswahyudi, Airin Livia, Iman Rhesa Reyhan Amantiya, Maria Cahaya Amornanta Wirastu, Aurellia Ramli",
            "color": "#9300D2",
            "lightColor": "rgba(147, 0, 210, 0.10)",
        },
        {
            "divisi": "dayaka",
            "koor": "Steven Natanael Hermanto, Jessica Chandra",
            "anggota": "Alexander Daniel Cahyadi Mogo, Nasya Karina Wahyudin, Yoshella Yuliana, Cherry Wijaya, Gisela Florentina, Kleofas, Malvin Wijaya,Michelle Liu,Maria Jessica Eunike Dahayu,Murni Eunike Hutapea,Shyerly Shaferya,Nathania Putri Qhen,Jeannie Rukmana,Delvin Hendro,Assyifa Salsabila Hasibuan,Debora Priscilla Natalia,Angeline Ageina Susanto",
            "color": "#CBA78B",
            "lightColor": "rgba(203, 167, 139, 0.10)",
        },
        {
            "divisi": "sarwaga",
            "koor": "Jones Samuel Justine, Novia Ramadina Setiawati",
            "anggota": "Roger Noel Austin Lee, Michel Fransiska, Vivian Kristin Chiputri, Zeta Milano, Narita Changi, Vania Lay, Novan Gustaf Firyan, Maureen Audilia, Daniel Himawan, Parwinderjeet Singh, Naila Arshiya Hendriana, Lina, Velery Yosafat Chia, Yurcell Young, Angellica Kristie Lin, Keira Norelia Chandra, Cynthia Clara Santy, Nicholas Candra, Nabilah Syafira Ramadhani, Arnela Setianegara, Ryu Ivan Wijaya, Feodora Audrey Clementine, Richard Bona Tua Tindaon, Vianca Vanesia Barhan, Fiorenza Irene Christabelle S., Leonardus Efendi, Jessica Sharon Maria Tampi, Fransisko Krisdian Tara, Najwa Khairunisa, Rio Leonardi, Albert Amadio Trenedy, Patresia Lisnayanti Zalukhu, Andrew Jaya Susilo, Jessica Eunice Sihasale, Rifqah Aulia Salsabilla, Angelima Khosina, Mishel Milen, Laticia Kimberly Tanto, Wiewyn, Keiko Rosario Chrisabel, Gisselle Angelina Tanuwidjaja, Geraldi, Mohamad Syafriza Ramadhan, Chandra Wihaya Fatah, Audy Hendry, Kathryn Cahyadi, Samuel Fernandtio, Syahlarichanda Salsabila",
            "color": "#41A76A",
            "lightColor": "rgba(65, 167, 106, 0.10)",
        },
        
    ]

    const listAnggotaRow = [
        {
            "divisi": "arsa",
            "koor": "Jocelin Nathania Ichwan, Valecia Monroe Thendy, Christopher Richard Gunawan, Clifford Aaron Darmawan",
            "anggota": [
                { "nama": "Gabriella Stevie Euodia Priyono, Sion Alexander Hartono, Christian Johan, Kelly Christian Hariyono, Cindy, Stefani Margaretha Christie, Shafiragiovani Marvella, Adestia Febrianti, Jennifer Abigail, Nicholas Suwandi Wijaya, Gwendeline Gail Sutrisno, Jennefer Chandra, Vinson, Jessica Marella, Angel Lawrensia, Yahaziel Yehuda Prastyoadi, Fenny Dwi Adiwena, Marcel Jonathan, Angeline Precillia, Petris Glaudya Liuwanda, Arsio Viriya Muliyawan, Catherine Olivia" },
                { "nama": "Alice Marybeth, Cornelia Alyssa Candra, Regina Marcheliza, Hendricus Wibisono, Vidy Tandiono, Jovita Angelina Mettasari, Natalia Christy, Audrey Gracia Chandra, Daniel Cahya Putra, Mawidah Muthia Fitriani, Hotmauli Kristiani Siboro, Marvell Christofer, Sheren Olivia, Edwin Fedora Lolo, Aulia Syifa Arthamevi, Stefanie Jaya Susilo, Sunarto Wijaksono, Siti Muthia Khadijah, Brightly Virya, Sharone Angelica Jovans, Maria Rumbhaney Tarigan, Jessica"},
                { "nama": "Aureen Trevisia Sutarna, Vanessa Olivia, Arifandi Wirawan, Brigitta Julia Sinaulan, Nadhira Keisya Callista, Vania Ardelia, Devin Tarangga, Prisilia Laybertha, Tanzania Febriana, Felicia Aurell Thiopillia, Nicholas Prawira Tanoto, Jocelyn Janice, Laurentinus Heriyanto Setiadi, Michelle Gracya atmaja, Priscillia Lindsey Setiadie, Rizky Ali Zamzami, Rachel Azalia Hariwijaya, Martin, Mitawati, Glen Owen, Melody Dennise Allegra" },
                { "nama": "Christy Angela Limardi, Clarissa Elvira Darmawan, Angelina Yang, Azalea Keisha Putri, Ryan Ferdinand Andyson, Calista Nathalia, Nicholas Carlos Ricardo, Felicia Jennifer, Agym Dimas Tian, Grisella Vevilia Lauren, Marcia Septiani, Ray Anthony Pranoto, Jennifer Landau, Kellysia Mona Andika, Rachel Dayana Telaumbanua, Matthew Chang, Tamara Catalina Suwandi, Melinda Ariyana Dharmanto, Erva Yanti Daneuis, Michelle Williams, Melissa Gracia, Ferbie viona" },
                { "nama": "Marchanda Guritna Halim, Melvin Tristan, Andi Bintang Rihhadatul Aisy, Caesar Eka Nathanael, Andrew Natanael Tjandra, Cindy Aurellia Liwang, Hafizah Balqis, Jacques Farrell Dharma, Priscilla Agatha, Michelle Laurensia, Felix Rafael, Neisya Arsy Argya, Andaru Hymawan Primayudha, Chaterine Laurenthia, Euderen Freyderik, Jessie Valencia Tannuwijaya, Callista Ariella Ginata, Christophorus Augusta Wangsa, Auresia Yunita, Larissa Ika Kamila, Sinung Agung Cahyono, Anastasya Audrey Tengko" },
                { "nama": "Septhia Rosa Tambunan, Vallencia Natalie Bong, Crispus Adlai Anthony, Vanessa, Jason Timothy Sihite, Patricia Febrina Maharani, Dylan Liong Kusnowo, Livinia Cathleen Gunawan, Margareta Averina Lianti, Richard Sujono, Priscilla Karimang, Christina Elizabeth Kusumaluana, Valencia Aurelia, Diva Anggira Svasty, Francisco Anderson Gultom, Airyara Dorthea Warella, Brilliana Thalia Wijaya, Daffa Albiyananda, Vadreyna, Cindy Theresa, Richard Tandean, Clarensia Anjeli" },
                { "nama": "Verin Maria, Ivander Kristian Satya Putra, Ruth Yushiana, Alecia Cindy, Florencia Eliana Imansjah, Vallenzia Caroline, Indira Sukma Dewi, Edmund, Jessie Yenca Vegustin, Cindy Florencia, Dylan Ervian, Benaya Arlyanto, Ian Pangeswara Hermawan, Ralph Theodoric Adam Zagoto, Angriany Lutfiyah Darmawan, Sean Marcello Talaar, Rahmah Inayah, Muhammad Alifio Rachman, Charlotte Yeung, Reniati Noor Qomariany" },
            ],
            // "row1": "Gabriella Stevie Euodia Priyono, Sion Alexander Hartono, Christian Johan, Kelly Christian Hariyono, Cindy, Stefani Margaretha Christie, Shafiragiovani Marvella, Adestia Febrianti, Jennifer Abigail, Nicholas Suwandi Wijaya, Gwendeline Gail Sutrisno, Jennefer Chandra, Vinson, Jessica Marella, Angel Lawrensia, Yahaziel Yehuda Prastyoadi, Fenny Dwi Adiwena, Marcel Jonathan, Angeline Precillia, Petris Glaudya Liuwanda, Arsio Viriya Muliyawan, Catherine Olivia",
            // "row2": "Alice Marybeth, Cornelia Alyssa Candra, Regina Marcheliza, Hendricus Wibisono, Vidy Tandiono, Jovita Angelina Mettasari, Natalia Christy, Audrey Gracia Chandra, Daniel Cahya Putra, Mawidah Muthia Fitriani, Hotmauli Kristiani Siboro, Marvell Christofer, Sheren Olivia, Edwin Fedora Lolo, Aulia Syifa Arthamevi, Stefanie Jaya Susilo, Sunarto Wijaksono, Siti Muthia Khadijah, Brightly Virya, Sharone Angelica Jovans, Maria Rumbhaney Tarigan, Jessica",
            // "row3": "Aureen Trevisia Sutarna, Vanessa Olivia, Arifandi Wirawan, Brigitta Julia Sinaulan, Nadhira Keisya Callista, Vania Ardelia, Devin Tarangga, Prisilia Laybertha, Tanzania Febriana, Felicia Aurell Thiopillia, Nicholas Prawira Tanoto, Jocelyn Janice, Laurentinus Heriyanto Setiadi, Michelle Gracya atmaja, Priscillia Lindsey Setiadie, Rizky Ali Zamzami, Rachel Azalia Hariwijaya, Martin, Mitawati, Glen Owen, Melody Dennise Allegra",
            // "row4": "Christy Angela Limardi, Clarissa Elvira Darmawan, Angelina Yang, Azalea Keisha Putri, Ryan Ferdinand Andyson, Calista Nathalia, Nicholas Carlos Ricardo, Felicia Jennifer, Agym Dimas Tian, Grisella Vevilia Lauren, Marcia Septiani, Ray Anthony Pranoto, Jennifer Landau, Kellysia Mona Andika, Rachel Dayana Telaumbanua, Matthew Chang, Tamara Catalina Suwandi, Melinda Ariyana Dharmanto, Erva Yanti Daneuis, Michelle Williams, Melissa Gracia, Ferbie viona",
            // "row5": "Marchanda Guritna Halim, Melvin Tristan, Andi Bintang Rihhadatul Aisy, Caesar Eka Nathanael, Andrew Natanael Tjandra, Cindy Aurellia Liwang, Hafizah Balqis, Jacques Farrell Dharma, Priscilla Agatha, Michelle Laurensia, Felix Rafael, Neisya Arsy Argya, Andaru Hymawan Primayudha, Chaterine Laurenthia, Euderen Freyderik, Jessie Valencia Tannuwijaya, Callista Ariella Ginata, Christophorus Augusta Wangsa, Auresia Yunita, Larissa Ika Kamila, Sinung Agung Cahyono, Anastasya Audrey Tengko",
            // "row6": "Septhia Rosa Tambunan, Vallencia Natalie Bong, Crispus Adlai Anthony, Vanessa, Jason Timothy Sihite, Patricia Febrina Maharani, Dylan Liong Kusnowo, Livinia Cathleen Gunawan, Margareta Averina Lianti, Richard Sujono, Priscilla Karimang, Christina Elizabeth Kusumaluana, Valencia Aurelia, Diva Anggira Svasty, Francisco Anderson Gultom, Airyara Dorthea Warella, Brilliana Thalia Wijaya, Daffa Albiyananda, Vadreyna, Cindy Theresa, Richard Tandean, Clarensia Anjeli",
            // "row7": "Verin Maria, Ivander Kristian Satya Putra, Ruth Yushiana, Alecia Cindy, Florencia Eliana Imansjah, Vallenzia Caroline, Indira Sukma Dewi, Edmund, Jessie Yenca Vegustin, Cindy Florencia, Dylan Ervian, Benaya Arlyanto, Ian Pangeswara Hermawan, Ralph Theodoric Adam Zagoto, Angriany Lutfiyah Darmawan, Sean Marcello Talaar, Rahmah Inayah, Muhammad Alifio Rachman, Charlotte Yeung, Reniati Noor Qomariany",
            "color": "#FD7F9B",
            "lightColor": "rgba(253, 127, 155, 0.10)",
        },
        {
            "divisi": "adhyasta",
            "koor": "Ananda Ayu Putri, Jeremy Immanuel, Leideovico Yudhisti",
            "anggota": [
                { "nama": "Gabriella Stevie Euodia Priyono, Sion Alexander Hartono, Christian Johan, Kelly Christian Hariyono, Cindy, Stefani Margaretha Christie, Shafiragiovani Marvella, Adestia Febrianti, Jennifer Abigail, Nicholas Suwandi Wijaya, Gwendeline Gail Sutrisno, Jennefer Chandra, Vinson, Jessica Marella, Angel Lawrensia, Yahaziel Yehuda Prastyoadi, Fenny Dwi Adiwena, Marcel Jonathan, Angeline Precillia, Petris Glaudya Liuwanda, Arsio Viriya Muliyawan, Catherine Olivia" },
                { "nama": "Alice Marybeth, Cornelia Alyssa Candra, Regina Marcheliza, Hendricus Wibisono, Vidy Tandiono, Jovita Angelina Mettasari, Natalia Christy, Audrey Gracia Chandra, Daniel Cahya Putra, Mawidah Muthia Fitriani, Hotmauli Kristiani Siboro, Marvell Christofer, Sheren Olivia, Edwin Fedora Lolo, Aulia Syifa Arthamevi, Stefanie Jaya Susilo, Sunarto Wijaksono, Siti Muthia Khadijah, Brightly Virya, Sharone Angelica Jovans, Maria Rumbhaney Tarigan, Jessica"},
                { "nama": "Aureen Trevisia Sutarna, Vanessa Olivia, Arifandi Wirawan, Brigitta Julia Sinaulan, Nadhira Keisya Callista, Vania Ardelia, Devin Tarangga, Prisilia Laybertha, Tanzania Febriana, Felicia Aurell Thiopillia, Nicholas Prawira Tanoto, Jocelyn Janice, Laurentinus Heriyanto Setiadi, Michelle Gracya atmaja, Priscillia Lindsey Setiadie, Rizky Ali Zamzami, Rachel Azalia Hariwijaya, Martin, Mitawati, Glen Owen, Melody Dennise Allegra" },
                { "nama": "Christy Angela Limardi, Clarissa Elvira Darmawan, Angelina Yang, Azalea Keisha Putri, Ryan Ferdinand Andyson, Calista Nathalia, Nicholas Carlos Ricardo, Felicia Jennifer, Agym Dimas Tian, Grisella Vevilia Lauren, Marcia Septiani, Ray Anthony Pranoto, Jennifer Landau, Kellysia Mona Andika, Rachel Dayana Telaumbanua, Matthew Chang, Tamara Catalina Suwandi, Melinda Ariyana Dharmanto, Erva Yanti Daneuis, Michelle Williams, Melissa Gracia, Ferbie viona" },
                { "nama": "Marchanda Guritna Halim, Melvin Tristan, Andi Bintang Rihhadatul Aisy, Caesar Eka Nathanael, Andrew Natanael Tjandra, Cindy Aurellia Liwang, Hafizah Balqis, Jacques Farrell Dharma, Priscilla Agatha, Michelle Laurensia, Felix Rafael, Neisya Arsy Argya, Andaru Hymawan Primayudha, Chaterine Laurenthia, Euderen Freyderik, Jessie Valencia Tannuwijaya, Callista Ariella Ginata, Christophorus Augusta Wangsa, Auresia Yunita, Larissa Ika Kamila, Sinung Agung Cahyono, Anastasya Audrey Tengko" },
                { "nama": "Septhia Rosa Tambunan, Vallencia Natalie Bong, Crispus Adlai Anthony, Vanessa, Jason Timothy Sihite, Patricia Febrina Maharani, Dylan Liong Kusnowo, Livinia Cathleen Gunawan, Margareta Averina Lianti, Richard Sujono, Priscilla Karimang, Christina Elizabeth Kusumaluana, Valencia Aurelia, Diva Anggira Svasty, Francisco Anderson Gultom, Airyara Dorthea Warella, Brilliana Thalia Wijaya, Daffa Albiyananda, Vadreyna, Cindy Theresa, Richard Tandean, Clarensia Anjeli" },
                { "nama": "Verin Maria, Ivander Kristian Satya Putra, Ruth Yushiana, Alecia Cindy, Florencia Eliana Imansjah, Vallenzia Caroline, Indira Sukma Dewi, Edmund, Jessie Yenca Vegustin, Cindy Florencia, Dylan Ervian, Benaya Arlyanto, Ian Pangeswara Hermawan, Ralph Theodoric Adam Zagoto, Angriany Lutfiyah Darmawan, Sean Marcello Talaar, Rahmah Inayah, Muhammad Alifio Rachman, Charlotte Yeung, Reniati Noor Qomariany" },
            ],
            "color": "#000",
            "lightColor": "rgba(0, 0, 0, 0.10)",
        },
    ]

    return (
        <>
            <div className="FotoDivisi">
                <div className="top-info">
                    <div className="box-info">
                        <img className="logo" src="./Assets/FotoDivisi/LogoAnanta.svg" alt="" />
                        <p className="nama">Ananta</p>
                    </div>
                    <p className="copyright">© Prabangkara & Wiskira OMB UMN 2023</p>
                </div>
                <div className="heading">
                    <img className="logo" onClick={() => lagu.play() } src={`./Assets/FotoDivisi/${domain}/Logo.webp`} alt="" />
                    { domain == "bimantara" ? (
                        <div className="judul">
                            <p className="nama">BIMANTARA</p>
                            <p className="job">Badan Pengurus Harian (BPH)</p>
                        </div>
                    ) : domain == "kampana" ? (
                        <div className="judul">
                            <p className="nama">KAMPANA</p>
                            <p className="job">Acara</p>
                        </div>
                    ) : domain == "arsa" ? (
                        <div className="judul">
                            <p className="nama">ARSA</p>
                            <p className="job" style={{fontStyle: "italic"}}>Person In Charge (PIC)</p>
                        </div>
                    ) : domain == "adhyasta" ? (
                        <div className="judul">
                            <p className="nama">ADHYASTA</p>
                            <p className="job">KEAMANAN</p>
                        </div>
                    ) : domain == "syandana" ? (
                        <div className="judul">
                            <p className="nama">SYANDANA</p>
                            <p className="job" style={{fontStyle: "italic"}}>Public Relation & Design</p>
                        </div>
                    ) : domain == "sambara" ? (
                        <div className="judul">
                            <p className="nama">SAMBARA</p>
                            <p className="job">Perlengkapan</p>
                        </div>
                    ) : domain == "dayaka" ? (
                        <div className="judul">
                            <p className="nama">DAYAKA</p>
                            <p className="job">Konsumsi</p>
                        </div>
                    ) : domain == "sarwaga" ? (
                        <div className="judul">
                            <p className="nama">SARWAGA</p>
                            <p className="job">Medis</p>
                        </div>
                    ) : null }
                </div>
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
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                        <img className="foto" src={`./Assets/FotoDivisi/${domain}/Dokumentasi1.svg`} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { FotoDivisi }