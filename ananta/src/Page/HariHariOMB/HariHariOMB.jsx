import { useState, useEffect } from 'react';
import './hariHariOMB.scss';
import hariPenetasan from './hariPenetasan.js';
import hariPembentukan1 from './hariPembentukan1';
import hariPembentukan2 from './hariPembentukan2';
import TopInfo from "../../Components/TopInfo/TopInfo";
import Heading from '../../Components/Heading/Heading';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
const HariHariOMB = (props) => {
    const [day, setDay] = useState(props.id == null ? 0 : props.id);
    const navigate = useNavigate();

    const { hariID } = useParams();

    useEffect(() => {
        if (hariID == "hari-penetasan") {
            setDay(0);
        } else if (hariID == "hari-pembentukan-1") {
            setDay(1);
        } else if (hariID == "hari-pembentukan-2") {
            setDay(2);
        } else {
            navigate("/");
        }

        console.log(day)
    })

    const array = [
        {
            title: "Hari Penetasan",
            bg1: "./Assets/HariHariOMB/BG1.png",
            bg2: "./Assets/HariHariOMB/BG2.png",
            subTitle: "Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu",
            asset: hariPenetasan
        },
        {
            title: "Hari Pembentukan 1",
            subTitle: "Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu",
            asset: hariPembentukan1
        },
        {
            title: "Hari Pembentukan 2",
            subTitle: "Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu",
            asset: hariPembentukan2
        },
    ];

    return (
        <>
            <Navbar />
            <div className='bg_container1'>
                <div className="bg_container2">
                    <div className="hariHariOMB__section">
                        <TopInfo />
                        <Heading nama={array[day].title} job={array[day].subTitle} />
                        {/* <div className="hariHari__titleBox">
                        <h1 className="hariHariOMB__title">{array[day].title}</h1>
                        <p className="hariHariOMB__subTitle">{array[day].subTitle}</p>
                    </div> */}
                        <div className="hariHariOMB__aksesBox">
                            <div>
                                <p>Mau lihat semua dokumentasi?</p>
                                <div className="aksesDriveDiv">
                                    <img src="/Assets/HariHariOMB/downloadDrive.svg" alt="" />
                                    <a href="">Akses Drive</a>
                                </div>
                            </div>
                        </div>
                        <div className="hariHariOMB__photoGrid">
                            <img src={array[day].asset[0].img} class="photo1" alt="" />
                            <img src={array[day].asset[1].img} class="photo2" alt="" />
                            <img src={array[day].asset[2].img} class="photo3" alt="" />
                            <img src={array[day].asset[3].img} class="photo4" alt="" />
                            <img src={array[day].asset[4].img} class="photo5" alt="" />
                            <img src={array[day].asset[5].img} class="photo6" alt="" />
                            <img src={array[day].asset[6].img} class="photo7" alt="" />
                            <img src={array[day].asset[7].img} class="photo8" alt="" />
                            <img src={array[day].asset[8].img} class="photo9" alt="" />
                            <img src={array[day].asset[9].img} class="photo10" alt="" />
                            <img src={array[day].asset[10].img} class="photo11" alt="" />
                            <img src={array[day].asset[10].img} class="photo12" alt="" />
                            <img src={array[day].asset[10].img} class="photo13" alt="" />
                            <img src={array[day].asset[10].img} class="photo14" alt="" />
                            <img src={array[day].asset[10].img} class="photo15" alt="" />
                            <img src={array[day].asset[10].img} class="photo16" alt="" />
                            <img src={array[day].asset[10].img} class="photo17" alt="" />
                            <img src={array[day].asset[10].img} class="photo18" alt="" />
                            <img src={array[day].asset[10].img} class="photo19" alt="" />
                            <img src={array[day].asset[10].img} class="photo20" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export { HariHariOMB };