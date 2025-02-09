import React from "react";
import {
  ExternalLink,
  Code2,
  Search,
  Paintbrush,
  Users,
  Hexagon,
  Database,
  Shield,
} from "lucide-react";

export default function PayzollCareers() {
  const roles = [
    {
      title: "Engineers",
      subtitle: "Web3 & Full Stack Development",
      skills: ["Solidity", "EVM blockchains", "MERN stack", "UI/UX"],
      icon: <Code2 size={24} />,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Research Specialists",
      subtitle: "Blockchain & DeFi",
      skills: ["Blockchain trends", "DeFi innovations", "Market analysis"],
      icon: <Search size={24} />,
      gradient: "from-pink-400 to-purple-500",
    },
    {
      title: "UI/UX Designers",
      subtitle: "Web3 Interface Design",
      skills: ["Figma", "Decentralization", "Futuristic aesthetics"],
      icon: <Paintbrush size={24} />,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Marketing & BD",
      subtitle: "Growth & Partnerships",
      skills: ["Web3 campaigns", "Partnerships", "Community growth"],
      icon: <Users size={24} />,
      gradient: "from-orange-400 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white font-inter">
      {/* Decorative Web3 Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute transform transition-all duration-1000 ease-in-out"
              style={{
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
                opacity: 0.2,
              }}
            >
              <Hexagon
                size={96}
                className={`${
                  i % 2 === 0 ? "text-blue-500/20" : "text-purple-500/20"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.2),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl" />
              <Shield size={64} className="text-blue-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Join Payzoll – Innovate the Future of Payroll!
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-center text-blue-100">
            We're hiring talented individuals to reshape payroll with blockchain
            technology.
          </p>
        </div>
      </div>

      {/* Open Roles Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Open Roles
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="group relative p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-black rounded-xl" />
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${role.gradient}/10 rounded-xl`}
              />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-2 bg-gradient-to-br ${role.gradient} rounded-lg text-white`}
                  >
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {role.title}
                    </h3>
                    <p className="text-blue-200">{role.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm bg-gradient-to-r ${role.gradient}/10 rounded-full text-white border border-slate-700`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto p-8 rounded-2xl relative overflow-hidden border border-blue-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.2),transparent_50%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to Shape the Future?
            </h2>
            <p className="text-blue-100 mb-8">
              Join our team and help revolutionize the future of payroll with
              blockchain technology.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSePTdVefeO4RwQQnpzIkus4pnbbvHZlWjeQ9jzQB52603xOrA/viewform?usp=dialog",
                  "_blank"
                )
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Apply Now <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Blockchain Elements */}
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none overflow-hidden">
        <div className="flex gap-8 opacity-20 animate-marquee">
          {[...Array(8)].map((_, i) => (
            <Database
              key={i}
              size={32}
              className={`${i % 2 === 0 ? "text-blue-400" : "text-purple-400"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
