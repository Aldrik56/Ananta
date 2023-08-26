import Navbar from "../../Components/Navbar/Navbar";
import TopInfo from "../../Components/TopInfo/TopInfo";
import Heading from "../../Components/Heading/Heading";

import "./DibalikKepanitiaan.scss";

const DibalikKepanitiaan = () => {
    return (
        <>
            <Navbar />
            <div className="DibalikKepanitiaan">
                <TopInfo />
                <Heading
                    nama="Dibalik Kepanitiaan"
                    job="Akan segera ada. Ditunggu, yah!"
                />
            </div>
        </>
    );
}
 
export { DibalikKepanitiaan };