import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="p-6 lg:p-12 space-y-12 bg-gradient-to-r from-indigo-900 md:from-lime-500 via-purple-500 to-pink-200 ">
      <Header />
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}

function Header() {
  return (
    <section id="home" className="flex flex-col md:flex-row gap-6 items-center md:items-start">
      <Image
        src="/21.jpg"
        alt="Profile"
        width={192}
        height={192}
        className="rounded-full border-4 border-brown-500 overflow-hidden flex-shrink-0"
      />
      <Card className="flex-1 bg-indigo-900/50 backdrop-blur-sm border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold text-indigo-300 mb-2">Williams Folorunso</h1>
          <h2 className="text-xl font-bold text-indigo-200 mb-2">Web Developer</h2>
          <p className="text-gray-300">Turning complex challenges into elegant, user-friendly digital solutions.</p>
          <ul className='float-right'>
            <li className='hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20'>
              <a href='https://github.com/willzs01'>{<Github size={24} />}Github</a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", 
    "Responsive UI", "Tailwind", "Bootstrap", "Git"
  ]

  return (
    <section id="about">
      <Card className="bg-indigo-900/50 backdrop-blur-sm border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20">
        <CardHeader>
          <CardTitle className="text-indigo-300">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-indigo-700 text-indigo-100">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: "Ooh Interiors",
      link: "https://oohdecorations.vercel.app/collections",
    },
    {
      title: "Project 2",
      description: "Description of your project goes here",
    },
  ]

  return (
    <section id="projects">
      <Card className="bg-indigo-900/50 backdrop-blur-sm border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20">
        <CardHeader>
          <CardTitle className="text-indigo-300">Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Card key={project.title} className="bg-indigo-800/70 backdrop-blur-sm border-indigo-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-indigo-400/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-indigo-200 mb-2">{project.title}</h3>
                  {project.link ? (
                    <a href={project.link} className="text-sm text-indigo-300 hover:text-indigo-100 hover:underline">
                      {project.link}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{project.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function Experience() {
  return (
    <section id="contact">
      <Card className="bg-indigo-900/50 backdrop-blur-sm border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20">
        <CardHeader>
          <CardTitle className="text-indigo-300">Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-indigo-200"><a href='https://digitalageint.com/'>Digitalage Consultant</a></h3>
              <p className="text-sm text-gray-300">Front End Development</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
                <li>Developed responsive web applications</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Implemented modern web technologies</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
