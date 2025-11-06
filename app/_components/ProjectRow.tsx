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
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.logo/>
            </span>
            <div>
                <div className="text-lg font-semibold">{props.title}</div>
                <p className="text-muted-foreground text-lg">{props.description}</p>
            </div>
        </Link>
    )
}