import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ProjectRow, ProjectRowProps } from "./ProjectRow"
import { BookOpenText, MessageCircle } from "lucide-react"

const projects : ProjectRowProps[] = [
    {
        url: "",
        logo: BookOpenText,
        title: "StorySparkle",
        description:"Create a story based on an picture you upload"
    },    {
        url: "",
        logo: MessageCircle,
        title: "Game",
        description:"Social network connecting gamers"
    },
    {
        url: "",
        logo: MessageCircle,
        title: "test",
        description:"lorem ipsum lorem ipsum"
    }

]

export const Status = () => {
    return(
        <Section classname="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className=" w-full p-4 flex flex-col gap-2">
                    <p className="text-muted-foreground text-lg">My projects</p>
                    <div className="flex gap-4">
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
            <div className="flex-[2] w-full flex flex-col h-full gap-4">
                <Card className="p-4 flex-1">
                    work
                </Card>
                <Card className="p-4 flex-1">
                    education
                </Card>
            </div>

        </Section>
    )
}