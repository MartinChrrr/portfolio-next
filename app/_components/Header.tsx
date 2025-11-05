import { Button } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GiithubIcon"

export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section classname="flex items-baseline">
                <h1 className="text-4xl font-bold text-primary-foreground">Martin Charrier</h1>
                <div className="flex-1">
                    <ul>
                          <Button className="size-6">
                            <GithubIcon size={16} className="text-foreground"></GithubIcon>
                          </Button>
                    </ul>
                </div>
                
            </Section>
        </header>
    )
}