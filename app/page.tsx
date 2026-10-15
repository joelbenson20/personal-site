import Image from "next/image";
import { BsLinkedin, BsGithub, BsInstagram, BsEnvelopeFill } from "react-icons/bs";


const socials = [
    { href: "https://www.linkedin.com/in/joel-benson-894b4a139", label: "LinkedIn", Icon: BsLinkedin },
    { href: "https://github.com/joelbenson20", label: "GitHub", Icon: BsGithub },
    { href: "https://www.instagram.com/jwithanoel", label: "Instagram", Icon: BsInstagram },
    { href: "mailto:joelbenson20@gmail.com", label: "Email", Icon: BsEnvelopeFill }
];

export default function Bio() {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-8">
      <Image
          src="/golden-profile.jpg"
          alt="Photo of Joel Benson"
          width={200}
          height={200}
          className="object-cover aspect-square [mask-image:radial-gradient(circle,black_55%,transparent_72%)]"
          priority
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Very nice to meet you.</h1>
        <p>
          I'm a software developer and writer firmly planted at the
          intersection of the arts and sciences, natural language and
          code, humans and machines. My winding course 
          betrays my struggle to balance zealous 
          curiosity about pure technology against a conscientious restraint and need 
          to safeguard the human element in our advancing world. I believe in 
          elegant technological solutions to social problems but 
          am wary of those who with their AI 
          hammers treat everything as a nail. I believe in telling powerful
          stories to shed light on the dark corners of our systems 
          but am wary of a digital landscape that disincentivizes slow and 
          honest reflection. Though our cultural winds are often fierce,
          I still believe that slow and steady will win the race.
        </p>
        <em>
          I want to work with you to wed humanity and technology in greater harmony.
        </em>
        <div className="mt-6 flex gap-4 text-2xl">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
