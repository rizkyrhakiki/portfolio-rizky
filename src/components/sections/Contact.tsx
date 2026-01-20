import Container from '@/components/ui/Container';

export default function Contact() {
  return (
    <footer className="mt-20 pb-40 text-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h3 className="text-3xl font-medium sm:text-4xl">Get In Touch</h3>

          <div className="mt-8 flex flex-col items-center gap-4 sm:gap-6">
            {/* Row 1: Phone & Email */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-lg sm:text-xl text-white/90">
              {/* Phone */}
              <a
                href="tel:+6282216650210"
                className="flex items-center gap-3 transition hover:text-white/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>+62 822 1665 0210</span>
              </a>

              {/* Separator Dot */}
              <span className="hidden text-white/40 sm:block">•</span>

              {/* Email */}
              <a
                href="mailto:rizkyrhakiki21@gmail.com"
                className="flex items-center gap-3 transition hover:text-white/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span>rizkyrhakiki21@gmail.com</span>
              </a>
            </div>

            {/* Row 2: Links (Dribbble & LinkedIn) */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-lg sm:text-xl text-white decoration-white/30 underline-offset-4">
              {/* Dribbble */}
              <a
                href="https://dribbble.com/rizkyrhakiki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white/70 hover:decoration-white/70 underline"
              >
                <img
                  src="/icons/dribbble.svg"
                  alt="LinkedIn"
                  className="h-4 w-4 brightness-0 invert"
                />
                <span>dribbble.com/rizkyrhakiki</span>
              </a>

              {/* Separator Dot */}
              <span className="hidden text-white/40 sm:block">•</span>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rizkyrahmathakiki/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white/70 hover:decoration-white/70 underline"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="h-4 w-4 brightness-0 invert"
                />
                <span>linkedin.com/in/rizkyrahmathakiki/</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
