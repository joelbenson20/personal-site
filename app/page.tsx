import Image from "next/image";

export default function Home() {
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
                <h1 className="text-3xl font-bold">It's nice to meet you.</h1>
                <p>
                  I'm a software developer and writer firmly planted at the
                  intersection of the arts and sciences, natural language and
                  code, humans and machines. My winding course 
                  betrays my struggle to balance zealous 
                  curiosity about pure technology against a conscientious restraint and need 
                  to safeguard the human element in our advancing world. I believe in 
                  elegant technological solutions to social problems but 
                  am wary of the opportunists and thoughtless who with their AI 
                  hammers treat everything as a nail. I believe in telling powerful
                  stories to shed light on the dark corners of our systems 
                  but am wary of a digital landscape that disincentivizes this necessarily slow, 
                  meandering process.
                </p>
                <em>
                  I want to work with you to wed humanity and technology in greater harmony.
                </em>
            </div>
        </section>
    )
}
