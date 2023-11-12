import images from "./images";
import {FaRocket, FaLaptopCode} from "react-icons/fa";
import {VscChecklist} from "react-icons/vsc";

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
        icon: <VscChecklist style = {{ fill: gradient }} />,
        title: "Project Management",
        text: "Realize value, avoid cost and time overruns with Agile best practices"
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
        id: 19,
        name: "Sander Knutsen",
        image: images.sander_img,
        email: "sander@atlasconsulting.no",
        phone: "+47 951 60 939",
        linkedin: "sander-knutsen-8b6b941a4",
        text: "Sander holds a masters degree in Digital Economy and Management. He is always update on how the latest tech- and ESG trends will impact business. Sander is also a skilled Scrum Master and IT-project manager and has experience in corporate entrepreneurship."   
        
    },
    {
        id: 20,
        name: "Bernardo Lino de Oliveira",
        image: images.bernardo_img,
        email: "bernardo@atlasconsulting.no",
        phone: "+47 944 79 592",
        linkedin: "bernardo-lino-de-oliveira-a844943a",
        text: "Bernardo has a strong background in software development and mathematical modelling. He holds a PhD in Scientific Computing and a track record in multiple fields. This includes extensive experience in the energy sector, bridging the gap between technical teams, business and end users.",        
    },
]

const sections = {services, consultants};

export default sections;