import {useState} from 'react';
import './hariHariOMB.scss';
import hariPenetasan from './hariPenetasan.js';
import hariPembentukan1 from './hariPembentukan1';
import hariPembentukan2 from './hariPembentukan2';
const HariHariOMB= (props)=> {
    const [day,setDay] = useState(props.id == null ? 0 : props.id);
    const array = [
        {
            title : "Hari Penetasan",
            bg1 : "./Assets/assetPenetasan/BG1.png",
            bg2 : "./Assets/assetPenetasan/BG2.png",
            subTitle : "Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu",
            asset : hariPenetasan
        },
        {
            title : "Hari Pembentukan 1",
            subTitle : "Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu",
            asset : hariPembentukan1
        },
        {
            title : "Hari Pembentukan 2",
            subTitle : "Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu",
            asset : hariPembentukan2
        },
    ] ;

    return (
        <div className="hariHariOMB__section">
            <div className="bg1" alt="" />
            <div  className="bg2" alt="" />
            <div className="hariHari__titleBox">
                <h1 className="hariHariOMB__title">{array[day].title}</h1>
                <p className="hariHariOMB__subTitle">{array[day].subTitle}</p>
            </div>
            <div className="hariHariOMB__aksesBox">
                <div>
                    <p>Mau lihat semua dokumentasi?</p>
                    <div className="aksesDriveDiv">
                        <img src="./Assets/assetPenetasan/downloadDrive.svg" alt="" />
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
            </div>
        </div> 
    );
}

export { HariHariOMB };