export default function Header() {
  return (
    <header className="w-full flex justify-start">
      <h1
        className="
      font-display font-black uppercase leading-[0.9] tracking-tight
      text-[clamp(2.25rem,13vw,7rem)]
      sm:text-[clamp(3rem,13vw,6.5rem)]
      lg:text-[clamp(4rem,17vw,10rem)]
      "
      >
        <span className="block">Devon</span>
        <span className="block">Alexander</span>
        <span className="block">
          McGrath
          <span className="animate-blink motion-reduce:animate-none text-destructive" aria-hidden="true">
            .
          </span>
        </span>
      </h1>
    </header>
  )
}
