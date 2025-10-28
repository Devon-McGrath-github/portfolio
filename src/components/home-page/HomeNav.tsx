import { SITE } from 'config/site'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function HomeNav() {
  return (
    <nav className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-6">
        <li>
          <a
            href={`https://www.linkedin.com/in/${SITE.socials.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-destructive"
          >
            <Linkedin aria-hidden="true" focusable="false" className="inline-block mr-2 mb-1" size={16} />
            <span>LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            href={`https://github.com/${SITE.socials.github}`}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-destructive"
          >
            <Github aria-hidden="true" focusable="false" className="inline-block mr-2 mb-1" size={16} />
            <span>GitHub</span>
          </a>
        </li>

        <li>
          <a href={`mailto:${SITE.email}`} className="underline hover:text-destructive">
            <Mail aria-hidden="true" focusable="false" className="inline-block mr-2 mb-1" size={16} />
            <span>Email</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
