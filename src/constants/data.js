import images from "./images";
import {FaRocket, FaLaptopCode, FaShieldAlt} from "react-icons/fa";

const gradient = "url(#color-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaLaptopCode style = {{ fill: gradient }} />,
        title: "Software Development",
        text: "Design and develop software solutions tailored to your particular needs"
    },
    {
        id: 2,
        icon: <FaShieldAlt style={{ fill: gradient }} />,
        title: "Information Security",
        text: "Secure your systems and data assets with cutting-edge information security solutions"
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "High Performance Computing",
        text: "Optimize computational efficiency for your time and memory sensitive applications"
    },
];

const consultants = [
    {
        id: 20,
        name: "Bernardo Lino de Oliveira",
        image: images.bernardo_img,
        email: "bernardo@atlasconsulting.no",
        phone: "+47 944 79 592",
        linkedin: "bernardo-lino-de-oliveira",
        text: "Bernardo has a strong background in software development and mathematical modelling. He holds a PhD in Scientific Computing and a track record in multiple fields. This includes extensive experience in the energy sector, bridging the gap between technical teams, business and end users.",        
    },
]

const sections = {services, consultants};

export default sections;