import Image from "next/image";

export default function Home() {
    return (
        <section className="flex flex-col sm:flex-row items-center gap-8">
            <Image
                src="/golden-profile.jpg"
                alt="Photo of Joel Benson"
                width={200}
                height={200}
                className="object-cover aspect-square grayscale"
                priority
            />
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Nice to meet you.</h1>
                <p>And this is my short bio: What I work on, what I'm interested in.</p>
            </div>
        </section>
    )
}
