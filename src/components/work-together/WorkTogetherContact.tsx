"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function WorkTogetherContact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  if (formState === "success") {
    return (
      <section id="contact" className="scroll-mt-24 bg-stone-900 py-24 text-center text-white transition-colors duration-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto py-20"
          >
            <h2 className="font-serif text-3xl mb-4">Thanks.</h2>
            <p className="text-stone-400 font-light">
              I have your note and will come back to you personally within a few days.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="border-t border-rule bg-background py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <header className="mb-16 text-center">
            <h2 className="font-serif text-4xl mb-6">Start a conversation</h2>
            <p className="text-foreground/60 font-light">
              If you are trying to make sense of what is not adding up, send a short note. Start where you are. We can work out the rest from there.
            </p>
          </header>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[0.65rem] font-bold uppercase tracking-widest text-primary/60">
                  Your name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full bg-transparent border-b border-rule py-3 focus:outline-none focus:border-primary transition-colors font-light text-foreground"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-[0.65rem] font-bold uppercase tracking-widest text-primary/60">
                  Your email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full bg-transparent border-b border-rule py-3 focus:outline-none focus:border-primary transition-colors font-light text-foreground"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <label htmlFor="context" className="text-[0.65rem] font-bold uppercase tracking-widest text-primary/60">
                  Where is this showing up?
                </label>
                <select 
                  id="context" 
                  required 
                  className="w-full bg-transparent border-b border-rule py-3 focus:outline-none focus:border-primary transition-colors font-light text-foreground"
                >
                  <option value="" disabled selected>Select Context</option>
                  <option value="work">Work</option>
                  <option value="life">Life</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div className="space-y-3">
                <label htmlFor="fit" className="text-[0.65rem] font-bold uppercase tracking-widest text-primary/60">
                  What feels most familiar?
                </label>
                <select 
                  id="fit" 
                  className="w-full bg-transparent border-b border-rule py-3 focus:outline-none focus:border-primary transition-colors font-light text-foreground"
                >
                  <option value="" disabled selected>Optional Selection</option>
                  <option value="clarity">Clarity</option>
                  <option value="growth">Growth</option>
                  <option value="revenue">Revenue / systems</option>
                  <option value="patterns">Patterns / behaviour</option>
                  <option value="direction">Direction</option>
                  <option value="other">Something else</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="text-[0.65rem] font-bold uppercase tracking-widest text-primary/60">
                What is not adding up?
              </label>
              <textarea 
                id="message" 
                required 
                rows={4}
                className="w-full bg-transparent border border-rule/50 p-4 focus:outline-none focus:border-primary transition-colors font-light text-foreground resize-none"
                placeholder="A few honest lines is enough..."
              />
            </div>
            
            <div className="pt-8">
              <button 
                type="submit"
                disabled={formState === "submitting"}
                className={`w-full md:w-auto px-12 py-5 bg-primary text-white font-serif italic text-xl transition-all duration-500 hover:bg-primary/90 hover:scale-[1.02] flex items-center justify-center gap-3 ${formState === "submitting" ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {formState === "submitting" ? 'Sending...' : 'Start a Conversation'}
                <Send className={`w-4 h-4 transition-transform duration-500 ${formState === "submitting" ? 'translate-x-4 opacity-0' : ''}`} />
              </button>
              <p className="mt-6 text-[0.7rem] text-foreground/40 italic font-light">
                I read every note personally and respond within a few days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
