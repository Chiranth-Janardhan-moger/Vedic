import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Compass, MessageCircle, User, Leaf } from "lucide-react";

const sidebarLinks = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: MessageCircle, label: "Ask Rishi", path: "/chat" },
  { icon: User, label: "Profile", path: "/profile" },
];

const DesktopShell = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen warm-gradient">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Desktop layout: sidebar + content + ambient panel */}
      <div className="hidden lg:flex relative z-10 min-h-screen">
        {/* Sidebar */}
        <aside className="w-72 flex-shrink-0 border-r border-border/15 flex flex-col justify-between py-10 px-6 backdrop-blur-sm">
          <div>
            {/* Brand */}
            <div className="flex items-center gap-3 mb-12 px-2">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="font-display text-lg font-bold text-foreground leading-none">Pranav</h1>
                <p className="text-[10px] font-body text-primary tracking-widest-custom uppercase">Samadhaan</p>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                      isActive
                        ? "bg-primary/10 shadow-sm"
                        : "hover:bg-secondary/60"
                    }`}
                  >
                    <link.icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                    <span
                      className={`text-sm font-body font-medium transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom profile */}
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-secondary/60 transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center border border-primary/20">
              <span className="text-primary font-display text-sm">ॐ</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-body font-medium text-foreground">Traveler</p>
              <p className="text-[10px] font-body text-muted-foreground">View profile</p>
            </div>
          </button>
        </aside>

        {/* Main content — phone frame */}
        <main className="flex-1 flex items-start justify-center py-8 px-8 overflow-y-auto">
          <div className="w-full max-w-md">
            {children}
          </div>
        </main>

        {/* Right ambient panel */}
        <aside className="w-80 flex-shrink-0 border-l border-border/15 py-10 px-6 hidden xl:flex flex-col">
          <div className="mb-10">
            <p className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase mb-3">
              Today's Wisdom
            </p>
            <div className="card-gradient rounded-3xl p-6 shadow-card border border-border/20">
              <p className="font-display text-base text-foreground leading-relaxed italic">
                "The mind is everything. What you think you become."
              </p>
              <p className="text-[10px] font-body text-muted-foreground mt-4 tracking-widest-custom uppercase">
                — Buddha
              </p>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase mb-3">
              Daily Progress
            </p>
            <div className="card-gradient rounded-3xl p-6 shadow-card border border-border/20">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-sm font-semibold text-foreground">Morning Flow</span>
                <span className="text-xs font-body text-primary font-medium">50%</span>
              </div>
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-1/2 transition-all duration-700" />
              </div>
              <div className="flex gap-1.5 mt-4 flex-wrap">
                {["Breathwork", "Meditation", "Journaling", "Gratitude"].map((s, i) => (
                  <span
                    key={i}
                    className={`text-[9px] font-body font-medium px-2.5 py-1 rounded-full ${
                      i < 2 ? "bg-primary/12 text-primary" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-body text-muted-foreground tracking-widest-custom uppercase mb-3">
              Your Stats
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Streak", value: "7 days" },
                { label: "Sessions", value: "42" },
                { label: "Hours", value: "18.5" },
                { label: "Badges", value: "4" },
              ].map((stat, i) => (
                <div key={i} className="card-gradient rounded-2xl p-4 shadow-card border border-border/20 text-center">
                  <p className="text-lg font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-[9px] font-body text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile layout — unchanged */}
      <div className="lg:hidden relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DesktopShell;
