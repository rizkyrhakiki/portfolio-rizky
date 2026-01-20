import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <footer className="mt-14 sm:mt-20 pb-10">
      <Container>
        <div className="rounded-3xl glass p-6 sm:p-10 text-center">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="mt-2 text-white/60">
            Let’s collaborate. Email: <span className="text-white/80">your@email.com</span>
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <a className="text-sm text-white/70 hover:text-white" href="#">LinkedIn</a>
            <span className="text-white/20">•</span>
            <a className="text-sm text-white/70 hover:text-white" href="#">Behance</a>
            <span className="text-white/20">•</span>
            <a className="text-sm text-white/70 hover:text-white" href="#">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}