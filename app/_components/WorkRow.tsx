import Link from "next/link"

export type WorkRowProps = {
    url: string,
    image: string,
    title: string,
    description: string,
    date: string
};

export const WorkRow = (props: WorkRowProps) => {
    return(
        <Link href={props.url} 
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2">          
                <img src={props.image} alt={props.title} className="w-8 h-8 object-contain grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all" />
            <div>
                <div className="text-lg font-semibold group-hover:text-primary">{props.title}</div>
                <p className="text-muted-foreground text-sm">{props.description}</p>
            </div>
            <div className="ml-auto">
                <p className="text-muted-foreground text-sm">{props.date}</p>
            </div>
        </Link>
    )
}