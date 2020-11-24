import React, {useState} from 'react';
import LinkSection from '../components/pages/Home/LinkSection/LinkSection';
import FeaturedSection from '../components/pages/Home/FeaturedSection/Index';
import GamesSection from "../components/pages/Home/GamesSection/Index";
import InfoSection from "../components/pages/Home/InfoSection";
import ScreenShotSection from "../components/pages/Home/ScreenshotSection";
import {RadialGradient} from "../components/common/RadialGradient";

export const Home = () => {

    const data = [
        {
            id: 1001,
            title: "Demons Souls",
            category: "Action Role Playing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "demons.jpg",
            gameLogo: "demonslogo.png",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1002,
            title: "Horizon Forbidden West",
            category: "Action Role Playing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "forbidden-west.jpg",
            gameLogo: "",
            likes: 2,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1003,
            title: "Ratchet & Clank a Crack In Time",
            category: "Adventure platformer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "ratchet.jpg",
            gameLogo: "",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1004,
            title: "Spiderman Miles Morales",
            category: "Action Adventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "miles-morales.jpg",
            gameLogo: "",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
    ]





    /*
    const [data, setData] = useState([]);
    const axios = require('axios');

    const fetchApiData = () => {
        axios(
            'https://localhost:5001/user',
        ).then(res => {
            setData(res.data);
        });
    };

    const list = () => {
        return data.map((obj, key) => (
            <li key={key}>{obj.name}</li>
        ));

    };
        */
    return (
        <React.Fragment>
            <FeaturedSection data={data}/>
            <GamesSection title={"All Games"} data={data}/>
            <InfoSection/>
            <ScreenShotSection title={"Screenshots"} data={data}/>
            <RadialGradient/>
        </React.Fragment>
    );
};
