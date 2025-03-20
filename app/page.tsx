import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download, Code, Briefcase, User } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 backdrop-blur-xs bg-background/80 border-b border-gray-200">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="font-bold text-xl">
            Jonil Mark
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Button className="hidden md:flex">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div>
                <Badge className="mb-2">Available for hire</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I&apos;m Jonil Mark</h1>
                <h2 className="text-3xl font-bold tracking-tighter text-muted-foreground">Full Stack Developer</h2>
              </div>
              <p className="text-muted-foreground md:text-xl">
                I build accessible, responsive, and performant web applications with modern technologies. Passionate
                about creating intuitive user experiences and clean, maintainable code.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Jonil Mark"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I&apos;m a passionate Full Stack Developer with over 5 years of experience building web applications. I
                  specialize in JavaScript, React, Node.js, and modern web technologies.
                </p>
                <p className="text-muted-foreground">
                  My journey in software development began at the University of Technology, where I earned my Bachelor&apos;s
                  degree in Computer Science. Since then, I&apos;ve worked with startups and established companies to create
                  innovative digital solutions.
                </p>
                <p className="text-muted-foreground">
                  When I&apos;m not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects. I&apos;m always eager to learn new technologies and improve my skills.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Work Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <div className="font-bold">Senior Frontend Developer</div>
                    <div className="text-muted-foreground">TechCorp Inc. • 2021 - Present</div>
                    <div className="text-sm mt-2">
                      Led the frontend development team in building a SaaS platform using React, Next.js, and
                      TypeScript.
                    </div>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <div className="font-bold">Full Stack Developer</div>
                    <div className="text-muted-foreground">WebSolutions • 2018 - 2021</div>
                    <div className="text-sm mt-2">
                      Developed and maintained multiple client projects using React, Node.js, and MongoDB.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 mb-1">JavaScript</Badge>
                  <Badge className="mr-1 mb-1">TypeScript</Badge>
                  <Badge className="mr-1 mb-1">React</Badge>
                  <Badge className="mr-1 mb-1">Next.js</Badge>
                  <Badge className="mr-1 mb-1">HTML5</Badge>
                  <Badge className="mr-1 mb-1">CSS3</Badge>
                  <Badge className="mr-1 mb-1">Tailwind CSS</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 mb-1">Node.js</Badge>
                  <Badge className="mr-1 mb-1">Express</Badge>
                  <Badge className="mr-1 mb-1">Python</Badge>
                  <Badge className="mr-1 mb-1">Django</Badge>
                  <Badge className="mr-1 mb-1">GraphQL</Badge>
                  <Badge className="mr-1 mb-1">REST APIs</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Database</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 mb-1">MongoDB</Badge>
                  <Badge className="mr-1 mb-1">PostgreSQL</Badge>
                  <Badge className="mr-1 mb-1">MySQL</Badge>
                  <Badge className="mr-1 mb-1">Firebase</Badge>
                  <Badge className="mr-1 mb-1">Redis</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>DevOps & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 mb-1">Git</Badge>
                  <Badge className="mr-1 mb-1">Docker</Badge>
                  <Badge className="mr-1 mb-1">AWS</Badge>
                  <Badge className="mr-1 mb-1">Vercel</Badge>
                  <Badge className="mr-1 mb-1">CI/CD</Badge>
                  <Badge className="mr-1 mb-1">Jest</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>A full-featured online shopping platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built with Next.js, TypeScript, and Stripe for payments. Features include user authentication,
                    product search, cart functionality, and order management.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      TypeScript
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Stripe
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Task Management App</CardTitle>
                  <CardDescription>A collaborative task tracking system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A Trello-inspired task management application with drag-and-drop functionality, real-time updates,
                    and team collaboration features.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Socket.io
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      PostgreSQL
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Weather Dashboard</CardTitle>
                  <CardDescription>Real-time weather information app</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A weather application that provides real-time forecasts, historical data, and interactive maps for
                    locations worldwide.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Weather API
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Chart.js
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my
                best to get back to you!
              </p>
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" /> Send Me an Email
                </Button>
                <div className="flex justify-center gap-4">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Jonil Mark. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

