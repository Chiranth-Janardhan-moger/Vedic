import { useNavigate } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden warm-gradient flex flex-col">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Desktop: full-width centered layout */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8 text-center max-w-2xl mx-auto">
        <div className="animate-fade-in-up mb-2">
          <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 shadow-glow border border-primary/15">
            <Leaf className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Pranav
          </h1>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight italic mb-6">
            Samadhaan
          </h1>
        </div>

        <p
          className="text-sm lg:text-base font-body text-muted-foreground leading-relaxed max-w-sm lg:max-w-md animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          Experience the Fusion of Artificial Intelligence &amp; Knowledge of Rishis. We provide personalized guidance for{" "}
          <span className="text-foreground font-medium">Healing</span> your body,{" "}
          <span className="text-foreground font-medium">Rejuvenating</span> your mind, and{" "}
          <span className="text-foreground font-medium">Awakening</span> your spirit through the timeless wisdom of Ayurveda and Meditation.
        </p>

        <p
          className="mt-10 text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Begin Your Samadhaan Journey...
        </p>

        <button
          onClick={() => navigate("/home")}
          className="mt-6 px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-body font-semibold text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 animate-fade-in-up flex items-center gap-2"
          style={{ animationDelay: "450ms" }}
        >
          Begin Your Samadhaan Journey
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
