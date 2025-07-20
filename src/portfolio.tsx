import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Calendar,
    GraduationCap,
    Briefcase,
    Code,
    Award,
    Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TypewriterText from "@/components/TypewriterText";
import Header from "./components/Header"
import TechBanner from "./components/TechBanner"

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background flex justify-center">
            <div className="w-full">
                <Header />
                {/* Hero Section */}
                <section
                    className="scroll-mt-10 h-screen flex flex-col justify-between bg-background py-10 md:py-8 lg:py-12"
                >
                    <div className="mx-auto max-w-7xl px-4 md:px-4 grid gap-18 lg:grid-cols-[60%_40%] items-center flex-1 justify-center text-center lg:text-left">
                        {/* Text Section */}
                        <div className="space-y-8 text-center lg:text-left">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl">
                                Hi! I&apos;m Talha &quot;TJ&quot; Muhammad
                            </h1>
                            <TypewriterText />
                            <div className="flex flex-col gap-2 sm:flex-row justify-center lg:justify-start mt-4">
                                <Button asChild>
                                    <Link href="#projects">View My Work</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="mailto:talhamuhammad2003@gmail.com">Get In Touch</Link>
                                </Button>
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground mt-4">
                                <div className="flex items-center space-x-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>Grand Rapids, MI</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Phone className="h-4 w-4" />
                                    <span>+1 (231) 598-1440</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src="/tj.png"
                                alt="Talha 'TJ' Muhammad"
                                width={400}
                                height={400}
                                className="rounded-full object-cover shadow-lg w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                            />
                        </div>
                    </div>

                    {/* TechBanner */}
                    <div className="mt-8">
                        <TechBanner />
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="scroll-mt-10 py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-5xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    <Briefcase className="inline h-4 w-4 mr-2" />
                                    Experience
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    My professional journey and key accomplishments
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle>Software Engineer Intern</CardTitle>
                                            <CardDescription className="text-base">AD Solutions • Orlando, FL (Remote)</CardDescription>
                                        </div>
                                        <Badge variant="secondary" className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            2023 - 2024
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        <li>Implemented a web portal with financial API integrations, enabling customers of AD Solutions to comprehensively view their dues and usage and pay off invoices efficiently</li>
                                        <li>Built back-end code in Java to connect a 200-table MSSQL database with customer and billing info to the front-end</li>
                                        <li>Added security and authorization using JSON web tokens to satisfy security policies</li>
                                        <li>Built a front-end in TypeScript (React) with a user-friendly, responsive design where users can log in, view their invoices, and pay their bills; worked closely with the User Interfaces/User Experience (UI/UX) team</li>
                                        <li>Implemented automated report generation and payment functionality through Stripe API calls</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle>Artificial Intelligence Research Assistant</CardTitle>
                                            <CardDescription className="text-base">School of Digital Media, Ferris State University</CardDescription>
                                        </div>
                                        <Badge variant="secondary" className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            2023
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        <li>Research assistant at the School of Digital Media&apos;s Software Engineering Program.</li>
                                        <li>Tested and researched AI novel automation assistant, Sudo Write, generating a story of 12 chapters using the tool</li>
                                        <li>Built a Python app to test machine learning prompting principles and compiled an evaluation report with 34 detailed examples</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Education Section */}
                <section id="education" className="scroll-mt-10 py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="mx-auto max-w-5xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    <GraduationCap className="inline h-4 w-4 mr-2" />
                                    Education
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    My academic background and continuous learning journey
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle>Bachelor of Science in Software Engineering</CardTitle>
                                            <CardDescription className="text-base">Ferris State University, Big Rapids, MI</CardDescription>
                                        </div>
                                        <Badge variant="secondary" className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            2021 - 2025
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-3">
                                        <strong>GPA:</strong> 3.97/4.0 • <strong>Summa Cum Laude</strong>
                                    </p>
                                    <p className="text-muted-foreground mb-3">
                                        <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Engineering, Database
                                        Systems, Web Development, Machine Learning, Data Analysis, Cloud Computing
                                    </p>
                                    <p className="text-muted-foreground mb-3">
                                        <strong>Honors:</strong> 10-Time Dean&apos;s List Recipient, Founders Scholarship Recipient
                                    </p>
                                    <p className="text-muted-foreground">
                                        <strong>Activities:</strong> International Student Organization President, Community Advisor
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-10 py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-5xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    <Code className="inline h-4 w-4 mr-2" />
                                    Projects
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    A showcase of my recent work and personal projects
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
                            <Card className="flex flex-col">
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src="/disastermanagementportal.png"
                                        alt="Disaster Management Platform"
                                        width={300}
                                        height={200}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <CardHeader className="flex-1">
                                    <CardTitle>Disaster Relief Management Portal</CardTitle>
                                    <CardDescription>Full-stack Disaster Relief Management Portal with React, Java Spring Boot, and MySQL integrating Google Maps API</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Badge variant="outline">React</Badge>
                                        <Badge variant="outline">JavaScript</Badge>
                                        <Badge variant="outline">Spring Boot</Badge>
                                        <Badge variant="outline">MySQL</Badge>
                                        <Badge variant="outline">Google Maps API</Badge>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" asChild>
                                            <Link href="https://github.com/talhamuhammadkhan/DisasterManagementPortalFrontend">
                                                <Github className="h-4 w-4 mr-2" />
                                                Code
                                            </Link>
                                        </Button>
                                        <Button size="sm" asChild>
                                            <Link href="https://drive.google.com/file/d/16gegz9c-RFq71S7D010daaTqqfjwW4XQ/view?usp=sharing">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Demo
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="flex flex-col">
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src="/memegenerator.png"
                                        alt="Ultimate Meme Generator"
                                        width={300}
                                        height={200}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <CardHeader className="flex-1">
                                    <CardTitle>Ultimate Meme Generator</CardTitle>
                                    <CardDescription>Meme Generator created with React, integrating imgflip API. Inspired by imgflip&apos;s Meme Generator: https://imgflip.com/memegenerator.</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Badge variant="outline">React</Badge>
                                        <Badge variant="outline">JavaScript</Badge>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="sm" asChild>
                                            <Link href="https://greatest-meme-generator-ultimate.netlify.app/">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Live Demo
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Awards & Volunteer Section */}
                <section id="awards" className="scroll-mt-10 py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="mx-auto max-w-5xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    <Award className="inline h-4 w-4 mr-2" />
                                    Recognition
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Awards & Volunteer Work</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Recognition and community involvement that drives my passion
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Award className="h-5 w-5" />
                                        Awards & Recognition
                                    </h3>
                                    <div className="space-y-4">
                                        
                                        <Card>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg">Excellence Award</CardTitle>
                                                <CardDescription>College of Business, Ferris State University 2025</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    Received the College of Business Excellence Award for outstanding academic performance and leadership
                                                </p>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg">Torchbearer Award</CardTitle>
                                                <CardDescription>Torchbearer Award, Ferris State University 2025</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    Received the Torchbearer Award for exceptional leadership and impactful contributions to the university community
                                                </p>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg">Honors Leadership Award</CardTitle>
                                                <CardDescription>Honors Program, Ferris State University 2025</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    Received the 2025 Leadership Award from the FSU Honors Program for proven leadership and academic excellence
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Heart className="h-5 w-5" />
                                        Volunteer Experience
                                    </h3>
                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg">Grand Chair</CardTitle>
                                                <CardDescription>International Festival of Cultures • 2023 - 2025</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    Grand Chair of the FSU International Festival committee, organizing international food stalls, performances, and activities
                                                </p>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg">Coordinator of Volunteers</CardTitle>
                                                <CardDescription>Camp Newaygo • 2021 - 2023</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    Lead volunteer at Camp Newaygo events including Halloweekend, Santa and S&apos;mores, and Enchanted Forest throughout the year
                                                </p>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg">Tutor</CardTitle>
                                                <CardDescription>SOS Children&apos;s Village • 2018</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    Tutored children over the course of a month in the summer of 2018 in English, Math, and Science
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t py-6 md:py-0">
                    <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row" style={{ marginLeft: "3rem", marginRight: "3rem" }}>
                        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                                © 2025 Talha &quot;TJ&quot; Muhammad. All rights reserved.
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="mailto:talhamuhammad2003@gmail.com">
                                    <Mail className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://linkedin.com/in/talha-tj-muhammad">
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://github.com/talhamuhammadkhan">
                                    <Github className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </footer>
            </div >
        </div >
    )
}
