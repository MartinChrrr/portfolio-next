import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { CodeIcons } from "./icons/CodeIcons"

export const Skills = () => {
    return (
        <Section classname="flex w-full flex-col items-start gap-4 ">
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">The People of the </h2>
            <div className="flex max-lg:flex-col w-full">
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