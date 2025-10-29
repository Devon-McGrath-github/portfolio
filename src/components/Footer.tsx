export default function Footer() {
  return (
    <footer className="w-full md:pb-[1vw]">
      <div className="px-[clamp(16px,4vw,80px)] py-8 flex">
        <p className=" text-sm text-muted-foreground">&copy;{new Date().getFullYear()} Devon Alexander McGrath.</p>
      </div>
    </footer>
  )
}
