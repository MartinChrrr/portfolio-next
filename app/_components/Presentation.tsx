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
            <h3 className="font-caption text-3xl text-glow text-white">Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit reiciendis omnis praesentium nulla maiores cupiditate, atque,
                 dolorum quaerat nam nemo fugit saepe sequi vel necessitatibus ad voluptatibus, ducimus libero doloribus.</p>
        </div>
        <div className="flex-[2]">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQFzz4PMJGZfIw/profile-displayphoto-scale_100_100/B4EZk3_.WBKYAc-/0/1757581142080?e=1764201600&v=beta&t=XraN_N6zvHHOGfH2IwrX8IyUYFcQnhQLGOiaQ3Uxmp4" 
            className="w-1/2 m-auto h-auto max-w-sm rounded-full " 
             alt="photo de Martin Charrier"  />
        </div>

    </Section>
)
}