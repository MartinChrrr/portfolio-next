import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import Link from "next/link"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Contact = () => {
      const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/MartinChrrr" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/m-charrier/" },
    
  ];

    return(
         <Section classname="flex w-full flex-col items-start gap-4 " id="contact">
            <h2 className="font-caption text-3xl text-glow mb-6 text-white">Contactez-moi !</h2>
            <div className="flex w-full gap-4 max-lg:flex-col">
                <Card className="flex-1 glass p-8">
                    <h3 className="text-lg text-primary mb-6">Informations</h3>
                    <div className="space-y-6">
                        <Link href={`mailto:martin_charrier@yahoo.fr`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 hover:text-primary transition-colors group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                <Mail/>
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-muted-foreground">Email</p>
                                <p>martin_charrier@yahoo.fr</p>
                            </div>
                        </Link>
                        <Link href={`tel:+33781189485`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 hover:text-primary transition-colors group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                <Phone/>
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-muted-foreground">Téléphone</p>
                                <p>+33 7 81 18 94 85</p>
                            </div>
                        </Link>
                        <Link href={`#`} className="flex items-start gap-4 hover:text-primary transition-colors group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                <MapPin/>
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-muted-foreground">Localisation</p>
                                <p>Aix-les-Bains, France</p>
                            </div>
                        </Link>
                     </div>
                </Card>
                <Card className="flex-1 glass p-8">
                    <h3 className="text-lg text-primary mb-6">Réseaux Sociaux</h3>
                    <p className="text-muted-foreground mb-6">Retrouvez-moi également sur les réseaux sociaux pour suivre mes projets et partager mes découvertes.</p>
                    <div className="flex gap-3 mb-8">
                        {socialLinks.map((social, index) => {
                const Icon = social.icon;
                    return (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group"
                    >
                        <Button 
                        variant="outline" 
                        className="w-full bg-primary/20 hover:bg-primary/30 transition-all "
                        >
                        <Icon className="h-5 w-5 mr-2 group-hover:text-primary" />
                            <span className="group-hover:text-primary transition-colors">
                                {social.label}
                            </span>
                        </Button>
                    </a>
                    );
                })}
                    </div>                    
                </Card>
                </div>
           
         </Section>
    )
}