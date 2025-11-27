import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ProjectRow, ProjectRowProps } from "./ProjectRow"
import { BookOpenText, Github, GithubIcon, MessageCircle } from "lucide-react"
import { WorkRow, WorkRowProps } from "./WorkRow"
import { EducationRow, EducationRowProps } from "./EducationRow"

const projects : ProjectRowProps[] = [
    {
        url: "",
        logo: Github,
        title: "StorySparkle",
        description:"Crée une histoire unique à partir de ton image"
    },    {
        url: "",
        logo: Github,
        title: "GameSync",
        description:"Réseau social pour les gamers "
    },
    {
        url: "",
        logo: Github,
        title: "Survive",
        description:"Jeu de survie"
    }, 


]

const works: WorkRowProps[] = [
    {
        url:"https://www.hyperfiction.fr/",
        title: "Hyperfiction",
        image: "/images/hyperfiction.png",
        description: "Développeur C#",
        date: "2023-2024"
    },
    {
        url:"https://residences-stella.com/",
        title: "Stella Management",
        image: "/images/stella.svg",
        description: "Réceptionniste",
        date: "2017-2023"
    }
]

const educations: EducationRowProps[] =[
    {
        url:"https://handigital-formation.com/",
        title: "Concepteur Développeur d'Applications",
        image: "/images/handigital.png",
        school: "Handigital",
        date: "2025-Present"
    },
    {
        url:"https://handigital-formation.com/",
        title: "Développeur Web",
        image: "/images/handigital.png",
        school: "Handigital",
        date: "2024-2025"
    },
    {
        url:"https://handigital-formation.com/",
        title: "Développeur Unity/Unreal",
        image: "/images/handigital.png",
        school: "Handigital",
        date: "2023-2024"
    },

]

export const Status = () => {
    return(
        <Section classname="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[2] w-full flex flex-col h-full gap-4">
                <Card className="p-4 flex-1">
                    <p className=" text-lg text-primary">Work</p>
                    <div className="flex flex-col gap-4">
                        {
                            works.map((work, index) =>(
                            <WorkRow
                            key = {index}
                            url={work.url}
                            title={work.title}
                            image={work.image}
                            description={work.description}
                            date={work.date} />    
                        )
                        )}
                    </div>
                </Card>
                <Card className="p-4 flex-1">
                    <p className="text-primary text-lg">Education</p>
                    <div className="flex flex-col gap-4">
                        {educations.map((education, index)=>(
                            <EducationRow 
                            key={index}
                            url={education.url}
                            title={education.title}
                            image={education.image}
                            school={education.school}
                            date={education.date}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[3] w-full">
                <Card className=" w-full p-4 flex flex-col gap-2">
                    <p className="text-primary text-lg">My projects</p>
                    <div className="flex flex-col gap-4">
                        {
                        projects.map((project, index) => (<ProjectRow
                            key={index}
                            url={project.url}
                            logo={project.logo}
                            title={project.title}
                            description={project.description}

                            />

                        )
                    )}

                    </div>
                </Card>
            </div>

        </Section>
    )
}
