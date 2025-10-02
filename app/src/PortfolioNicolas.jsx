import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Github, Linkedin, Mail, ArrowRight, TerminalSquare,
  ShieldCheck, RadioTower, Sparkles, Cpu, Code2, Database, Box
} from "lucide-react";
import { motion } from "framer-motion";

/*=== FUNDO GLOBAL: REDE LUMINOSA (grid + feixes subindo) ===*/
function FundoRedeLuz() {
  const size = 28;

  const containerStyle = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    overflow: "hidden",
    borderRadius: 0,
    pointerEvents: "none",
  };

  const gradientBase = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(15,23,42,0.35), rgba(15,23,42,0.1), rgba(15,23,42,0.35))",
  };

  const gridStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      repeating-linear-gradient(
        to right,
        rgba(148,163,184,0.22) 0px,
        rgba(148,163,184,0.22) 1px,
        transparent 1px,
        transparent ${size}px
      ),
      repeating-linear-gradient(
        to top,
        rgba(148,163,184,0.22) 0px,
        rgba(148,163,184,0.22) 1px,
        transparent 1px,
        transparent ${size}px
      )
    `,
    backgroundSize: `${size}px ${size}px, ${size}px ${size}px`,
  };

  const beamBase = {
    position: "absolute",
    left: 0, right: 0,
    background:
      "linear-gradient(to top, rgba(34,211,238,0), rgba(34,211,238,0.28) 25%, rgba(168,85,247,0.65) 55%, rgba(34,211,238,0.28) 75%, rgba(34,211,238,0))",
    mixBlendMode: "screen",
  };

  return (
    <div style={containerStyle} aria-hidden>
      <div style={gradientBase} />
      <div style={gridStyle} />

      {/* pontos de brilho espalhados */}
      <div style={{ position: "absolute", inset: 0 }}>
        {[...Array(60)].map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const s = 2 + Math.random() * 4;
          const op = 0.3 + Math.random() * 0.5;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${left}%`,
                top: `${top}%`,
                width: s,
                height: s,
                borderRadius: "999px",
                background: `radial-gradient(circle, rgba(186,230,253,${op}) 0%, rgba(186,230,253,0) 70%)`,
                filter: "blur(0.4px)",
              }}
            />
          );
        })}
      </div>

      {/* feixes animados */}
      <motion.div
        style={{ ...beamBase, height: "78%", bottom: "-78%" }}
        animate={{ y: ["0%", "300%"] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        style={{ ...beamBase, height: "88%", bottom: "-88%", filter: "blur(14px)", opacity: 0.7 }}
        animate={{ y: ["0%", "-300%"] }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity, delay: 4 }}
      />
      <motion.div
        style={{ ...beamBase, height: "60%", bottom: "-60%", filter: "blur(6px)", opacity: 0.55 }}
        animate={{ y: ["0%", "-300%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}

/* === PORTFÓLIO — rede global atrás, cards opacos === */
export default function PortfolioNicolas() {
  
  const competencias = useMemo(() => ([
    {
      icone: <ShieldCheck className="w-5 h-5" />,
      titulo: "Linguagens de Programação",
      itens: ["Python", "Java", "SQL", "HTML5/CSS3", "Bash Script"]
    },
    {
      icone: <Code2 className="w-5 h-5" />,
      titulo: "Bibliotecas e Frameworks (Python)",
      itens: ["Pandas, NumPy, Scikit-learn", "TensorFlow, Keras", "OpenCV, Pillow", "Matplotlib, Seaborn", "FastAPI"]
    },
    {
      icone: <Database className="w-5 h-5" />,
      titulo: "Áreas técnicas e aplicações",
      itens: [
        "Visão computacional (classificação, detecção, segmentação, tracking)",
        "Criação/curadoria de datasets",
        "Transfer learning e fine-tuning",
        "Automação de tarefas/scripts",
        "Análise e visualização de dados"
      ]
    },
    {
      icone: <Cpu className="w-5 h-5" />,
      titulo: "Ferramentas e Plataformas",
      itens: [
        "ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Wazuh, OpenVPN, Keycloak",
        "AWS, Azure",
        "Docker, Git/GitHub",
        "VS Code, IntelliJ IDEA"
      ]
    },
  ]), []);

  const conhecimentos = useMemo(() => ([
    "Segurança no desenvolvimento (secure coding)",
    "Criptografia, MFA e protocolos seguros",
    "Administração de servidores Linux",
    "Análise de tráfego (Wireshark, tcpdump)",
    "Boas práticas de proteção de dados e LGPD",
  ]), []);

  const projetos = useMemo(() => ([
    {
      titulo: "Agente STRIDE • IA para Análise de Arquitetura de TI",
      descricao:
        "Interpreta diagramas de arquitetura (VLM, ex.: LLaVA via Ollama) e aplica STRIDE Threat Modeling. Retorna ameaças, mitigações, CVEs (10+), e sugere arquitetura alternativa com renderização.",
      tags: ["Python", "FastAPI", "IA", "Ollama", "HTML5/CSS3"],
      link: "https://github.com/NicolasYPS/Agente_IA_Detector_Vuln_Arq",
    },
    {
      titulo: "Assistente Virtual com PLN (CLI)",
      descricao:
        "Assistente de linha de comando com reconhecimento de voz PT-BR, respostas via TTS, busca Wikipedia, YouTube, localização no Maps, hora atual e encerramento por comando.",
      tags: ["Python", "PLN", "speech_recognition", "gTTS", "pygame"],
      link: "https://github.com/NicolasYPS/assistente_IA_PNL",
    },
    {
      titulo: "PySpark SQL Data Pipeline",
      descricao:
        "Pipeline de dados (clientes, vendas, pagamentos débito/crédito/PIX) com PySpark + SQL. Simula transações financeiras para análises.",
      tags: ["Python", "PySpark", "Docker"],
      link: "https://github.com/NicolasYPS/pyspark-sql-data-pipeline",
    },
  ]), []);

  // parallax do card
  const contRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = contRef.current;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setOffset({ x, y });
    };
    el?.addEventListener("mousemove", onMove);
    return () => el?.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 relative overflow-hidden">
      {/* Fundo global */}
      <FundoRedeLuz />

      {/* Conteúdo acima do fundo */}
      <div className="relative z-10">
        {/* Cabeçalho */}
        <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 z-50 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Box className="w-6 h-6" />
              <span className="font-semibold tracking-wide">Nicolas Y P Souza</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#sobre" className="opacity-80 hover:opacity-100">Sobre</a>
              <a href="#competencias" className="opacity-80 hover:opacity-100">Competências</a>
              <a href="#projetos" className="opacity-80 hover:opacity-100">Projetos</a>
              <a href="#contato" className="opacity-80 hover:opacity-100">Contato</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="mailto:nicholashyago@gmail.com" className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-1 text-xs hover:bg-white/5 transition">
                <Mail className="w-4 h-4" /> contato
              </a>
              <a href="https://github.com/NicolasYPS" target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-white/5">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/nicolas-y-p-souza/" target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-white/5">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero — card opaco e sem blur, com espaço para imagem */}
        <section className="relative mx-auto max-w-7xl px-4 pt-14 md:pt-24 pb-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            {/* glows decorativos no card */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="grid md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-12 items-center">
              {/* lado esquerdo: texto de apresentação */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm">
                  <Sparkles className="w-4 h-4" />
                  Portfólio — Segurança · Dev · Dados · IA
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  Desenvolvedor com base sólida em <span className="text-cyan-400">Cibersegurança</span>.
                </h1>
                <p className="text-slate-300 leading-relaxed">
                  Sou formado em Defesa Cibernética e tenho me dedicado integralmente ao desenvolvimento de software e à engenharia de dados,
                  com foco em inteligência artificial, automação e análise de dados.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a href="#projetos" className="rounded-2xl bg-slate-50 text-slate-950 px-5 py-2 font-semibold hover:bg-slate-200 transition inline-flex items-center gap-2">
                    Ver projetos <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#competencias" className="rounded-2xl border border-white/10 px-5 py-2 font-semibold hover:bg-white/5 transition">
                    Hard Skills
                  </a>
                </div>
              </motion.div>

              {/* lado direito: espaço para imagem */}
              <div ref={contRef} className="relative aspect-[4/3] md:aspect-square">
                <motion.div
                  className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl grid place-items-center"
                  style={{
                    transform: `rotateX(${(-offset.y * 4).toFixed(2)}deg) rotateY(${(offset.x * 4).toFixed(2)}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="relative rounded-full overflow-hidden"
                    style={{
                      width: "68%",
                      aspectRatio: "1 / 1",
                      transform: "translateZ(36px)",
                      boxShadow: "0 20px 60px rgba(34,211,238,0.12)",
                      border: "2px solid rgba(148,163,184,0.25)",
                    }}
                  >
                    <img
                      src="/minha_imagem.png"
                      alt="Nicolas Y P Souza"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* (Hard Skills) */}
        <section id="competencias" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Hard Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {competencias.map((c, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-slate-900 p-5 hover:bg-slate-800 transition">
                <div className="flex items-center gap-2 mb-2 text-cyan-300">
                  {c.icone}<span className="font-semibold">{c.titulo}</span>
                </div>
                <ul className="text-sm text-slate-300 space-y-1 list-disc pl-4">
                  {c.itens.map((t, idx) => <li key={idx}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Conhecimentos complementares */}
        <section id="sobre" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Conhecimentos complementares</h2>
              <ul className="text-slate-300 leading-relaxed list-disc pl-5 space-y-2">
                {conhecimentos.map((k, i) => <li key={i}>{k}</li>)}
              </ul>
              <p className="text-slate-300 mt-6">
                Minha formação em cibersegurança me permite enxergar além do código: construir sistemas funcionais, seguros e resilientes.
                Sou curioso, autodidata e estou sempre aberto a feedbacks e aprendizados contínuos.
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <div className="font-semibold text-slate-200">Objetivo</div>
                <div className="text-slate-400 text-sm">Desenvolvedor ou Engenheiro de Dados</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <div className="font-semibold text-slate-200">Formação</div>
                <div className="text-slate-400 text-sm">Tecnólogo em Defesa Cibernética — FIAP</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <div className="font-semibold text-slate-200">Local</div>
                <div className="text-slate-400 text-sm">São Paulo — Brasil</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Projetos em destaque</h2>
            <a href="https://github.com/NicolasYPS" target="_blank" rel="noreferrer" className="text-sm opacity-80 hover:opacity-100">
              Ver GitHub
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {projetos.map((p, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-slate-900 p-5 hover:bg-slate-800 transition">
                <div className="flex items-center gap-2 mb-2 text-violet-300 font-semibold">
                  <RadioTower className="w-5 h-5" /> {p.titulo}
                </div>
                <p className="text-slate-300 text-sm mb-4 min-h-[72px]">{p.descricao}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs opacity-90">{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100">
                  GitHub <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Experiência */}
<section id="experiencia" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
  <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-10">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Experiência Profissional</h2>

    {/* Card único de experiência */}
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        {/* Logo da empresa (adicione em public/satelity_logo.png) */}
        <img
          src="/meta.png"
          alt="Satelity Security Global"
          className="w-14 h-14 rounded-lg object-contain border border-white/10 bg-white/5 p-2"
        />
        <div>
          <h3 className="text-lg font-semibold text-slate-200">
            Desenvolvedor de Soluções de Segurança Cibernética (Júnior)
          </h3>
          <p className="text-sm text-slate-400">
            Satelity Security Global · Autônomo
          </p>
          <p className="text-xs text-slate-500">
            Mai 2024 – Nov 2024 · 7 meses · São Paulo, Brasil · Híbrida
          </p>
        </div>
      </div>

      {/* Responsabilidades */}
      <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm pl-2">
        <li>Desenvolvimento e implantação de um <strong>gestor de vulnerabilidades</strong> em Python.</li>
        <li>Implementação e configuração do <strong>stack ELK (Elasticsearch, Logstash, Kibana)</strong> para análise de logs.</li>
        <li>Reforço da segurança da infraestrutura: VPNs, criptografia em trânsito/repouso, hardening do SSH com <strong>MFA</strong>.</li>
        <li>Gerenciamento de regras e políticas de <strong>firewall</strong>.</li>
        <li>Automatização de tarefas administrativas via <strong>scripts Python</strong>.</li>
        <li>Projeto concluído antes do prazo (contrato de 12 meses finalizado em 7).</li>
      </ul>
    </div>
  </div>
</section>


        
        {/* Contato */}
        <section id="contato" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Vamos conversar?</h2>
            <p className="text-slate-300 mb-6 max-w-prose">
              Se você busca um profissional com base sólida em segurança e habilidades práticas em dados e desenvolvimento, vamos conversar!
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="mailto:nicholashyago@gmail.com" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/5 transition">
                <Mail className="w-4 h-4" /> nicholashyago@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nicolas-y-p-souza/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/5 transition">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://github.com/NicolasYPS" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/5 transition">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="mx-auto max-w-7xl px-4 pb-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Nicolas Y P Souza — Feito com React, Tailwind e Framer Motion.
        </footer>
      </div>
    </div>
  );
}
