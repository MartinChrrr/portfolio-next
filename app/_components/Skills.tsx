import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { CodeIcons } from "./icons/CodeIcons"
import { SpeechIcon } from "./icons/SpeechIcon"
import { SoftSkillsIcon } from "./icons/SoftSkillsIcon"
import { Card } from "@/components/ui/card"
import { BadgeSkills } from "./BadgeSkills"

export const Skills = () => {
    const languages: string[] = [
        "PHP", 
        "Java", 
        "Typescript", 
        "Python", 
        "C++", 
        "C#"
    ];
    const frameworks: string[] = [
        "Spring", 
        "Vue", 
        "Unity", 
        "Tailwind", 
        "Django", 
        "Node", 
        "Express"
    ]
    const softSkills: string[] = [
        "Rigueur", 
        "Autonomie",
        "Gout du challenge",
        "Travail en équipe"
    ]
    const tools: string[] = [
        "Git", 
        "Github",
        "Figma",
        "Linux"
    ]

    return (
        <Section classname="flex w-full flex-col items-start gap-4 scroll-mt-20" id="skills" >
            <h2 className="pb-2 font-caption text-3xl text-glow tracking-tight first:mt-0 text-white">Compétences </h2>
            <div className="flex max-lg:flex-col w-full gap-4">
                <Card className="p-6 flex-1 flex flex-col"> 
                    <h3 className="text-lg text-primary">Langages</h3>
                    <div className="flex flex-wrap gap-2">
                       {languages.map((language, index) => (<BadgeSkills key = {index}>{language}</BadgeSkills>))}
                    </div>

                </Card>
                <Card className="p-6 flex-1 "> 
                    <h3 className="text-lg text-primary">Librairie et Framework</h3>
                    <div className="flex flex-wrap gap-2">
                       {frameworks.map((framework, index) => (<BadgeSkills key = {index}>{framework}</BadgeSkills>))}
                    </div>
                </Card>
            </div>
            <div className="flex max-lg:flex-col w-full gap-4">
                <Card className="p-6 flex-1 flex flex-col"> 
                    <h3 className="text-lg text-primary">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                       {softSkills.map((skill, index) => (<BadgeSkills key = {index}>{skill}</BadgeSkills>))}
                    </div>

                </Card>
                <Card className="p-6 flex-1 "> 
                    <h3 className="text-lg text-primary">Outils</h3>
                    <div className="flex flex-wrap gap-2">
                       {frameworks.map((framework, index) => (<BadgeSkills key = {index}>{framework}</BadgeSkills>))}
                    </div>
                </Card>
            </div>
            


        </Section>
    )
}