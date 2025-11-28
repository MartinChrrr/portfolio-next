import { LucideIcon } from "lucide-react"
import Link from "next/link"


export type ProjectRowProps = {
    url: string,
    logo: LucideIcon,
    title: string,
    description: string
}

export const ProjectRow = (props: ProjectRowProps) => {
    return(
        <Link href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2">
            <span className="bg-primary/20 text-accent-foreground p-3 rounded-sm group-hover:text-primary">
                <props.logo/>
            </span>
            <div>
                <div className="text-lg font-semibold group-hover:text-primary">{props.title}</div>
                <p className="text-muted-foreground text-lg">{props.description}</p>
            </div>
        </Link>
    )
}