export function HireMe() {
  return (
    <div className="fixed bottom-4 left-4 hidden h-auto w-24 items-center justify-center overflow-hidden md:left-8 md:flex lg:w-32">
      <div className="relative flex w-full items-center justify-center">
        <svg viewBox="0 0 100 100" className="spin-slow h-auto w-full">
          <path
            id="circlePath"
            fill="none"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
          <text className="fill-foreground text-[7.5px]">
            <textPath href="#circlePath" startOffset="0%">
              Software Developer • Product Designer •
            </textPath>
          </text>
        </svg>
        <a
          href="mailto:pelagiasvare2002@gmail.com"
          className="absolute inline-flex h-16 w-16 items-center justify-center rounded-full border border-solid border-secondary bg-secondary text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-background hover:text-foreground lg:h-20 lg:w-20"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}