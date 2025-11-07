import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GiithubIcon"
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";


export const Header = () => {
    return (
        <header className="bg-background sticky top-0 py-4">
            <Section classname="flex items-baseline justify-between">
                <h1 className="text-2xl font-bold text-primary">Martin Charrier</h1>
                <div className="flex-1">
                    <ul className="flex justify-end">
                        <li>
                            <Link className={`${buttonVariants({ variant: "outline" ,size:"icon"})} p-0 mx-1`} 
                        
                                href="https://github.com/MartinChrrr">
                                <GithubIcon size={12} className="text-foreground" />
                            </Link>
                        </li>
                        <li>
                            <Link className={`${buttonVariants({ variant: "outline", size:"icon" })}  p-0 mx-1`}    
                                href="https://www.linkedin.com/in/m-charrier/">
                                <LinkedinIcon size={12} className="text-foreground"/>
                                
                            </Link>
                        </li>
         
                    </ul>
                </div>
                
            </Section>
        </header>
    )
}