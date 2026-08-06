export function Footer() {
  return (
    <footer className="mt-24 w-full border-t-2 border-border text-base font-medium">
      <div className="flex flex-col items-center justify-between gap-2 px-8 py-6 md:flex-row md:px-16 lg:px-32">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <span className="flex items-center gap-1">
          Built With <span className="text-2xl text-primary">&#9825;</span> by Pelagia Svare
        </span>
        <a href="mailto:pelagiasvare2002@gmail.com" className="underline underline-offset-2">
          Say Hello
        </a>
      </div>
    </footer>
  );
}