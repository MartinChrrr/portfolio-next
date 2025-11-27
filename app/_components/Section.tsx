import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{classname?: string, id?: string }>) => {
    
    return (
        <section className={` max-w-5xl px-4 m-auto  ${props.classname}`} id={props.id} >
            {props.children}
        </section>
    )
}