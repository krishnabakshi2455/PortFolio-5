import frontendimg from '../assets/front-end.png'
import backendimg from '../assets/backend.png'
import toolsimg from '../assets/tools.png'
import softskillimg from '../assets/soft-skills.png'

interface SkillDetail {
    skill: string;
    percentage: string;
}
interface skills {
    title: string
    icon: string
    skills: SkillDetail[]

}


export const SKILLSDATA: skills[] = [
    {
        title: "FrontEnd",
        icon: frontendimg,
        skills: [
            { skill: "HTML5", percentage: "77%" },
            { skill: "CSS", percentage: "80%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "TypeScript", percentage: "80%" },
            { skill: "React.JS", percentage: "77%" },
            { skill: "FireBase", percentage: "65%" },
            { skill: "TailwindCss", percentage: "60%" },
            { skill: "Material UI", percentage: "55%" },
        ]
    },
    {
        title: "BackEnd",
        icon: backendimg ,
        skills: [
            { skill: "Node.JS", percentage: "90%" },
            { skill: "Express.js", percentage: "85%" },
            { skill: "Mongo DB", percentage: "85%" },
            { skill: "Kafka", percentage: "72%" },
            { skill: "redis", percentage: "72%" },
            { skill: "K8s", percentage: "60%" },
            { skill: "Docker", percentage: "60%" },
            { skill: "AWS", percentage: "68%" },

        ]
    },
    {
        title: "Tools",
        icon: toolsimg,
        skills: [
            { skill: "Git & GitHub", percentage: "90%" },
            { skill: "Visual Studio Code", percentage: "85%" },
            { skill: "Vercil", percentage: "60%" },
            { skill: "Netlify", percentage: "60%" },
            { skill: "Responsive Design", percentage: "72%" },

        ]
    },
    {
        title: "Soft Skills",
        icon: softskillimg,
        skills: [
            { skill: "Comunication Skills", percentage: "80%" },
            { skill: "Colaboration", percentage: "90%" },
            { skill: "Attention to Deatails", percentage: "80%%" },

        ]
    }

]


interface projects {
    image:string
    title: string
    description:string
    LiveLink:string
}

export const ProjectsData:projects[] = [
    {
        image: softskillimg,
        title:"FullStack Social Media website",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam officia necessitatibus excepturi? Temporibus aperiam nobis cupiditate autem, voluptatum accusantium alias beatae consequatur rerum commodi!",
        LiveLink:"no-link"
    },
    {
        image: softskillimg,
        title: "Money Tracking WebApp",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam officia necessitatibus excepturi? Temporibus aperiam nobis cupiditate autem, voluptatum accusantium alias beatae consequatur rerum commodi!",
        LiveLink: "no-link"
    },
    {
        image: softskillimg,
        title: "Code Editor",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam officia necessitatibus excepturi? Temporibus aperiam nobis cupiditate autem, voluptatum accusantium alias beatae consequatur rerum commodi!",
        LiveLink: "no-link"
    },
    {
        image: softskillimg,
        title: "Front-End Instagram Clone",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam officia necessitatibus excepturi? Temporibus aperiam nobis cupiditate autem, voluptatum accusantium alias beatae consequatur rerum commodi!",
        LiveLink: "no-link"
    },
    {
        image: softskillimg,
        title: "Music Website",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam officia necessitatibus excepturi? Temporibus aperiam nobis cupiditate autem, voluptatum accusantium alias beatae consequatur rerum commodi!",
        LiveLink: "no-link"
    },
    {
        image: softskillimg,
        title: "Tic Tac Toe Game",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam officia necessitatibus excepturi? Temporibus aperiam nobis cupiditate autem, voluptatum accusantium alias beatae consequatur rerum commodi!",
        LiveLink: "no-link"
    },

]