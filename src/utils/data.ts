
interface SkillDetail {
    skill: string;
    percentage: string;
}
interface skills {
    title: string
    icon: string
    skills: SkillDetail[]

}
import frontendimg from '../assets/front-end.png'
import backendimg from '../assets/backend.png'
import toolsimg from '../assets/tools.png'
import softskillimg from '../assets/soft-skills.png'

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