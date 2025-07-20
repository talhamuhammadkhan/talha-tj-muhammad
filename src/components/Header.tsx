"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-6">
            <Link href="#" className="font-bold text-lg whitespace-nowrap">
              Talha &quot;TJ&quot; Muhammad
            </Link>

            {/* Desktop Nav - hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#education" className="hover:text-foreground/80">
                Education
              </Link>
              <Link href="#projects" className="hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#awards" className="hover:text-foreground/80">
                Awards
              </Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:talhamuhammad2003@gmail.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/talha-tj-muhammad">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/talhamuhammadkhan">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sticky top-14 origin-top md:hidden flex flex-col items-center bg-background border-b py-4 space-y-4"
          >
            <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
            <Link href="#education" onClick={() => setIsOpen(false)}>
              Education
            </Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="#awards" onClick={() => setIsOpen(false)}>
              Awards
            </Link>

            <div className="flex space-x-4 pt-2">
              <Link href="mailto:talhamuhammad2003@gmail.com">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/talha-tj-muhammad">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/talhamuhammadkhan">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
