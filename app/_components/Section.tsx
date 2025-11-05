import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{classname?: string}>) => {
    return (
        <section className={` ${props.classname} max-w-3xl px-4 m-auto`}>
            {props.children}
        </section>
    )
}