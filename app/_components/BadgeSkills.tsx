import { PropsWithChildren } from "react"

const BadgeSkills = (props: PropsWithChildren<{classname?: string}>) =>{
    return (
        <div className={`inline-flex items-center rounded-full border 
        px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
        bg-primary/20 hover:bg-primary/30 text-foreground border-primary/30 transition-colors ${props.classname}`}>
            {props.children}
        </div>  
    )
}