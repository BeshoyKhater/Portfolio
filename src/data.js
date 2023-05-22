//socials
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineDribbble} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";
//about
import {FaAward} from "react-icons/fa";
import {TbBooks} from "react-icons/tb";
import {BiHappyHeartEyes} from "react-icons/bi";
//services
import {SiAdobexd} from "react-icons/si";
import {RiReactjsLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiFillAppstore} from "react-icons/ai";


export const data = [
    {id:1 , link:'#' , title:'Home'},
    {id:2 , link:'#About' , title:'About'},
    {id:3 , link:'#Services' , title:'Services'},
    {id:4 , link:'#Portfolio' , title:'Portfolio'},
    {id:5 , link:'#Contact' , title:'Contact'},
];

export const socials=[
    {id:1 , link:"https://instagram.com", icon:<AiOutlineInstagram/>},
    {id:2 , link:"https://twitter.com", icon:<AiOutlineTwitter/>},
    {id:3 , link:"https://dribbble.com", icon:<AiOutlineDribbble/>},
    {id:4 , link:"https://github.com", icon:<AiOutlineGithub/>},
]

export const about = [
    {id:1 , icon:<FaAward/> , title:'Experience' , desc:'3+ Years Working'},
    {id:2 , icon:<TbBooks/> , title:'Projects' , desc:'180+ Completed'},
    {id:3 , icon:<BiHappyHeartEyes/> , title:'Clients' , desc:'70+ happy clients'},
]

export const services = [
    {id:1 , icon:<SiAdobexd/> , title:"UI/UX Design", desc:"My design are modern and intuitive . I use industry-standard rules to make sure your users have fun using your product"},
    {id:2 , icon:<RiReactjsLine/> , title:"Frontend Development", desc:"Your product will look good and will be accessible on all devices , including mobile phones, tablets, and desktop"},
    {id:3 , icon:<FaServer/> , title:"Backend Development", desc:"The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks."},
    {id:4 , icon:<AiFillAppstore/> , title:"App Development", desc:"Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you."},
]


const project1=require("./images/course1.jpg");
const project2=require("./images/course2.jpg");
const project3=require("./images/course3.jpg");
const project4=require("./images/course4.jpg");
const project5=require("./images/course5.jpg");
const project6=require("./images/course6.jpg");
const project7=require("./images/course7.jpg");
const project8=require("./images/course8.jpg");
const project9=require("./images/course9.jpg");

export const projects =[
    {id:1 , image:project1 , type:"UIUX", title:"Project Title One (UIUX)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:2 , image:project2 , type:"Frontend", title:"Project Title Twe (Frontend)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:3 , image:project3 , type:"Frontend", title:"Project Title Three (Frontend)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:4 , image:project4 , type:"UIUX", title:"Project Title One (UIUX)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:5 , image:project5 , type:"UIUX", title:"Project Title One (UIUX)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:6 , image:project6 , type:"Frontend", title:"Project Title One (Frontend)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:7 , image:project7 , type:"Frontend", title:"Project Title One (Frontend)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:8 , image:project8 , type:"Backend", title:"Project Title One (Backend)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
    {id:9 , image:project9 , type:"Frontend", title:"Project Title One (Frontend)" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat."},
]

export const buttons = [
    {id:1, text:"All", type:"all"},
    {id:2, text:"Backend", type:"Backend"},
    {id:3, text:"Frontend", type:"Frontend"},
    {id:4, text:"Uiux", type:"UIUX"},
]

export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam .",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam .",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    }
    ,
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
    ,
    {
        id: 6,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita.",
        job: "Pharmacist",
        avatar: require("./images/avatar6.jpg")
    }
]

export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]