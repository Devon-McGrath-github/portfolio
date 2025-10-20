import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        href="https://www.linkedin.com/in/devon-mcgrath-17462558/"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-destructive"
      >
        <Linkedin className="inline-block mr-2 mb-1" size={16} />
        LinkedIn
      </a>
      <a
        href="https://github.com/Devon-McGrath-github"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-destructive"
      >
        <Github className="inline-block mr-2 mb-1" size={16} />
        GitHub
      </a>
      <a href="mailto:devon.mcgrath@gmail.com" className="underline hover:text-destructive">
        <Mail className="inline-block mr-2 mb-1" size={16} />
        Email
      </a>
    </footer>
  )
}
