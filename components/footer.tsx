import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Link href="/" className="text-6xl font-medium flex items-center">
              <span className="font-outfit text-purple-500 text-3xl md:text-4xl">
                Suraj Giri
              </span>
              <span className="h-2 w-2 rounded-full bg-primary ml-1"></span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex space-x-6">
              {/* <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link> */}
              <Link
                href="https://github.com/SurajGiri55446"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/suraj-giri-a00346347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>

            <div className="h-4 border-l hidden md:block"></div>

            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg md:text-xl text-muted-foreground font-outfit">
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="hover:text-primary transition-colors"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-lg text-muted-foreground font-outfit">
          <p>
            &copy; {new Date().getFullYear()} Suraj Giri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
