export default function HomeHeader() {
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
          <span
            role="presentation"
            aria-hidden="true"
            className="
              relative
              animate-blink
              after:content-['']
              after:inline-block
              after:w-[0.28em] after:h-[0.28em]
              after:rounded-full
              after:bg-destructive
              after:ml-[0.04em]
              after:align-baseline
              after:translate-y-[0.0em]            
              after:animate-blink
              motion-reduce:after:animate-none
            "
          />
        </span>
      </h1>
    </header>
  )
}
