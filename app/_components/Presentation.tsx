import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={`bg-accent/30 hover:bg-accent/50 border border-accent rounded-sm text-primary p-1  ,${className}`} {...props}/>

}

export const Presentation = () => {
return (
    <Section classname="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption text-4xl text-glow font-bold text-white">Martin Charrier</h2>
            <h3 className="font-caption text-3xl text-glow text-white">Concepteur Développeur d'Applications</h3>
            <p className="text-justify">Titulaire d’un diplôme Bac+2 en Développement Web et Web Mobile et d’une première expérience professionnelle d’un an, 
                je souhaite poursuivre ma formation en alternance afin d’acquérir le titre de Concepteur Développeur d’Applications (Bac +3). 
                <br/>Attiré par les défis et la résolution de problèmes, j’ai acquis des compétences 
                à la fois en front-end et en back-end que je souhaiterais  mettre au service de projets innovants. </p>
        </div>
        <div className="flex-[2]">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQFzz4PMJGZfIw/profile-displayphoto-scale_100_100/B4EZk3_.WBKYAc-/0/1757581142080?e=1764201600&v=beta&t=XraN_N6zvHHOGfH2IwrX8IyUYFcQnhQLGOiaQ3Uxmp4" 
            className="w-1/2 m-auto h-auto max-w-sm rounded-full " 
             alt="photo de Martin Charrier"  />
        </div>

    </Section>
)
}