import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Star, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ArrowUp,
  Quote,
  Heart,
  Stethoscope,
  Activity,
  Microscope,
  Baby,
  Home,
  Coffee,
  HeartPulse,
  Syringe,
  Scissors,
  PawPrint
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CLIENT_CONFIG = {
  name: "VidaPet",
  professional: "Dra. Juliana Martins",
  specialty: "Médica Veterinária | CRMV-SP 12345",
  whatsapp: "5511999999999",
  address: "Av. Faria Lima, 2000 - Pinheiros, SP",
};

const SERVICES = [
  {
    id: 1,
    title: "Medicina de Ponta",
    description: "Laboratório próprio com diagnósticos por imagem de última geração para resultados precisos.",
    badge: "Alta Tech",
    image: "https://images.unsplash.com/photo-1579154238328-341ef9798583?q=80&w=800&auto=format&fit=crop",
    icon: <Microscope size={28} />,
    featured: true
  },
  {
    id: 2,
    title: "Bloco Cirúrgico 24h",
    description: "Monitoramento intensivo e anestesia inalatória para máxima segurança operatória.",
    badge: "Hospitalar",
    image: "/images/vet-surgery.png",
    icon: <Activity size={28} />,
    featured: false
  },
  {
    id: 3,
    title: "Internação Elite",
    description: "Espaços climatizados com supervisão médica constante e boletins via WhatsApp.",
    badge: "Conforto",
    image: "/images/vet-clinic-interior.png",
    icon: <Home size={28} />,
    featured: false
  },
  {
    id: 4,
    title: "Vacinação & Pediatria",
    description: "Protocolos vacinais seguros e consultoria para o crescimento saudável dos filhotes.",
    badge: "Filhotes",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
    icon: <Baby size={28} />,
    featured: false
  },
  {
    id: 5,
    title: "Odonto & Estética",
    description: "Cuidado bucal avançado e limpeza técnica para garantir o sorriso e a saúde do seu pet.",
    badge: "Saúde Total",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    icon: <Sparkles size={28} />,
    featured: true
  },
  {
    id: 6,
    title: "Consultas Especializadas",
    description: "Cardiologia, Dermatologia e Ortopedia com especialistas em constante atualização.",
    badge: "Elite",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800&auto=format&fit=crop",
    icon: <Stethoscope size={28} />,
    featured: false
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Carolina Meirelles",
    text: "O atendimento da VidaPet é diferenciado. A paz que a clínica transmite ajuda muito na recuperação dos pets.",
    role: "Tutora da Nina (Shihtzu)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcos Paulo",
    text: "Tecnologia de ponta. Fizemos a cirurgia do Thor e o pós-operatório foi perfeito. Gratidão à equipe!",
    role: "Tutor do Thor (Buldog)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Renata Oliveira",
    text: "A melhor clínica de Pinheiros. Transparência total e muito carinho com os animais. Recomendo 100%.",
    role: "Tutora da Luna (Persa)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta para meu pet na VidaPet.")}`;

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white bg-clinic-bg">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-7xl mb-6">🐾</motion.div>
            <h2 className="font-serif text-3xl tracking-[0.5em] text-clinic-text uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* WhatsApp Fixed */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-5 rounded-full shadow-2xl animate-pulse-whatsapp hover:scale-110 transition-transform group">
        <WhatsAppIcon size={32} className="group-hover:rotate-12 transition-transform" />
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-xl border-b border-primary/10' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#início" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><PawPrint size={24} /></div>
            <span className="font-serif text-3xl font-light tracking-[0.1em] text-clinic-text uppercase">{CLIENT_CONFIG.name}</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Sobre', 'Serviços', 'Início', 'Depoimentos', 'Localização'].sort((a,b) => a === 'Início' ? -1 : 1).map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] font-bold text-clinic-text/70 hover:text-primary transition-colors">{item}</a>
            ))}
            <a href={whatsappUrl} className="btn-primary h-12 px-8 text-[10px] rounded-xl flex items-center gap-3 shadow-lg">
              <WhatsAppIcon size={16} /> AGENDAR AGORA
            </a>
          </div>

          <button className="lg:hidden text-clinic-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-[75] bg-white pt-32 px-8 lg:hidden flex flex-col items-center gap-10">
            {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-clinic-text uppercase">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vet-hero.png" alt="Hero" className="w-full h-full object-cover brightness-[0.6] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Cuidado Animal de Elite</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 text-clinic-text leading-[1.1]">
              Medicina com <br /> <span className="text-primary italic">Amor Infinito.</span>
            </h1>
            <p className="text-lg text-clinic-text/70 mb-10 max-w-md">Excelência veterinária e infraestrutura hospitalar 24h para quem você mais ama.</p>
            <a href={whatsappUrl} className="btn-primary inline-flex rounded-xl gap-3 shadow-2xl h-16 px-10 text-[10px] font-bold tracking-[0.2em] hover:-translate-y-1 transition-all">
              <WhatsAppIcon size={20} /> AGENDAR CONSULTA <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-14 grid grid-cols-2 lg:grid-cols-4 gap-10 border border-primary/5">
          {[
            { l: 'Vidas Salvas', v: '22k+', i: <Heart className="text-primary" /> },
            { l: 'Plantão 24h', v: 'Total', i: <Clock className="text-primary" /> },
            { l: 'Tecnologia', v: 'Ponta', i: <Activity className="text-primary" /> },
            { l: 'Confiança', v: '100%', i: <ShieldCheck className="text-primary" /> }
          ].map((s, idx) => (
            <div key={idx} className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">{s.i}</div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-primary">{s.v}</span>
                <span className="text-[8px] uppercase tracking-widest font-bold text-clinic-text/40">{s.l}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section - FIXED & 10/10 QUALITY */}
      <section id="serviços" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="section-subtitle">Nossas Especialidades</span>
            <h2 className="section-title">Medicina Veterinária <span className="text-primary italic">Avançada</span></h2>
            <div className="w-20 h-1 bg-primary/10 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-[2rem] overflow-hidden bg-white border border-primary/5 h-[480px] flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 ${s.featured ? "lg:col-span-2 shadow-primary/5" : ""}`}
              >
                <div className="h-1/2 relative overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest text-clinic-text border border-white/20">{s.badge}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-40" />
                </div>
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="absolute -top-10 right-10 w-20 h-20 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-clinic-text/60 leading-relaxed mb-8 flex-1">{s.description}</p>
                  <a href={whatsappUrl} className="inline-flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest border-b border-primary/20 pb-1 w-fit group/btn">
                    Saiba Mais <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-clinic-bg overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="relative rounded-[3rem] overflow-hidden shadow-3xl border-[15px] border-white">
              <img src="/images/vet-clinic-interior.png" alt="Clinical" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="section-subtitle">Excelência Técnica</span>
            <h2 className="section-title">Infraestrutura que seu amiguinho <span className="text-primary italic">merece.</span></h2>
            <div className="space-y-8 mt-12">
              {[
                { t: "Ambiente Controlado", d: "Clínica planejada com feromônios para minimizar o estresse animal.", i: <Coffee /> },
                { t: "Internação Elite", d: "Boletins via WhatsApp e câmeras para acompanhamento em tempo real.", i: <ShieldCheck /> },
                { t: "Equipe Specialist", d: "Veterinários em constante atualização internacional para casos complexos.", i: <Award /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all text-primary">{item.i}</div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">{item.t}</h4>
                    <p className="text-sm text-clinic-text/60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={whatsappUrl} className="btn-primary mt-12 py-5 px-10 rounded-xl text-[10px] font-bold shadow-xl">FALAR COM ESPECIALISTA</a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="section-subtitle">Dúvidas</span>
            <h2 className="section-title">Esclareça suas Perguntas</h2>
          </div>
          <div className="space-y-4">
            {[
              "Preciso agendar as consultas com antecedência?",
              "Como funciona o plantão de emergência 24h?",
              "Quais são os principais exames realizados na clínica?",
              "A clínica aceita planos de saúde animal?"
            ].map((q, i) => (
              <div key={i} className="border-b border-primary/5 py-8 group cursor-pointer">
                <div className="flex justify-between items-center group-hover:text-primary transition-colors">
                  <span className="font-serif text-xl">{q}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl text-white">🐾</span>
              <span className="font-serif text-4xl tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
            </div>
            <p className="text-white/40 max-w-sm mb-12 text-lg">Elevando o padrão da medicina veterinária com ética, tecnologia e muito amor em São Paulo.</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={24} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={24} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-8">Contatos</h4>
            <ul className="space-y-6 text-white/40 text-xs tracking-widest">
              <li className="flex gap-4"><MapPin className="text-primary" /> {CLIENT_CONFIG.address}</li>
              <li className="flex gap-4"><Phone className="text-primary" /> (11) 99999-9999</li>
              <li className="flex gap-4"><Clock className="text-primary" /> Plantão Emergencial 24h</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 text-[9px] uppercase tracking-[0.3em] text-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 {CLIENT_CONFIG.name} Clínica Veterinária. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência para cuidados animais.</p>
        </div>
      </footer>
    </div>
  );
}
