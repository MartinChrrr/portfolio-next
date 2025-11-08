import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { CodeIcons } from "./icons/CodeIcons"
import { SpeechIcon } from "./icons/SpeechIcon"

export const Skills = () => {
    return (
        <Section classname="flex w-full flex-col items-start gap-4 ">
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">What I'm good at </h2>
            <div className="flex max-lg:flex-col w-full">
                <div className="flex flex-col flex-[1] gap-4 items-center">
                    <CodeIcons size={48}/>
                    <h3 className="text-2xl font-semibold tracking-tight">Languages</h3>
                    <p className="text-muted-foreground text-sm">Java,C#</p>
                </div>
                <div className="flex flex-col flex-[1] gap-4">
                    <SpeechIcon size={48}/>
                    <h3 className="text-2xl font-semibold tracking-tight">Languages</h3>
                    <div className="flex flex-col gap-2">
                        <p className="text-muted-foreground text-sm">English</p>
                        <p className="text-muted-foreground text-sm">French</p>

                    </div>
                    
                </div>
                <div className="flex flex-col flex-[1]">
                    <CodeIcons size={48}/>
                    <h3 className="text-2xl font-semibold tracking-tight">Languages</h3>
                    <p className="text-muted-foreground text-sm">Java,C#</p>
                </div>
                <div className="flex flex-col flex-[1]">
                    <CodeIcons size={48}/>
                    <h3 className="text-2xl font-semibold tracking-tight">Languages</h3>
                    <p className="text-muted-foreground text-sm">Java,C#</p>
                </div>

            </div>
            


        </Section>
    )
}