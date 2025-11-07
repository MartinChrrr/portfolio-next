import Link from "next/link"

export type EducationRowProps = {
    url: string,
    image: string,
    title: string,
    school: string,
    date: string
};

export const EducationRow = (props: EducationRowProps) => {
    return(
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2">          
                <img src={props.image} alt={props.title} className=" w-8 h-8 object-contain" />
            <div>
                <div className="text-lg font-semibold">{props.title}</div>
                <p className="text-muted-foreground text-sm">{props.school}</p>
            </div>
            <div className="ml-auto">
                <p className="text-muted-foreground text-sm">{props.date}</p>
            </div>
        </Link>
    )
}