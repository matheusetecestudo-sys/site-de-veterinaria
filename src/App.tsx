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
  PawPrint
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CLIENT_CONFIG = {
  name: "DUNO",
  whatsapp: "5511999999999",
  address: "Av. Faria Lima, 2000 - Pinheiros, SP",
  openingHours: "Seg-Sex: 08:00 - 22:00 | Sábado: 08:00 - 18:00",
  emergency: "Em Emergências: Plantão 24h",
};

const SERVICES = [
  {
    id: 1,
    title: "Medicina Diagnóstica",
    description: "Laboratório próprio e imagens de alta resolução para diagnósticos rápidos e precisos.",
    badge: "Alta Tech",
    image: "https://images.unsplash.com/photo-1579154238328-341ef9798583?q=80&w=800&auto=format&fit=crop",
    icon: <Microscope size={28} />
  },
  {
    id: 2,
    title: "Bloco Cirúrgico 24h",
    description: "Equipamentos de monitoramento vital e anestesia inalatória com máxima segurança.",
    badge: "Hospitalar",
    image: "/images/vet-surgery.png",
    icon: <Activity size={28} />
  },
  {
    id: 3,
    title: "Internação Elite",
    description: "Acomodações climatizadas e supervisão médica constante para a recuperação do seu pet.",
    badge: "Conforto",
    image: "/images/vet-clinic-interior.png",
    icon: <Home size={28} />
  },
  {
    id: 4,
    title: "Pediatria & Vacinação",
    description: "Cuidado integral para filhotes, desde o protocolo vacinal até a nutrição adequada.",
    badge: "Filhotes",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
    icon: <Baby size={28} />
  },
  {
    id: 5,
    title: "Higiene Sônica (Dental)",
    description: "Tecnologia de limpeza ultrassônica para garantir a saúde bucal e bem-estar do pet.",
    badge: "Prevenção",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    icon: <Sparkles size={28} />
  },
  {
    id: 6,
    title: "Consultas Expert",
    description: "Cardiologia, Fisioterapia e Ortopedia com especialistas experientes e dedicados.",
    badge: "Elite",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800&auto=format&fit=crop",
    icon: <Stethoscope size={28} />
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta na DUNO Veterinária.")}`;

  return (
    <div className="min-h-screen bg-clinic-bg font-sans selection:bg-primary selection:text-white">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-6xl mb-4">🐾</motion.div>
            <h2 className="font-serif text-3xl font-bold tracking-[0.3em] text-clinic-text uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Floating Buttons */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-pulse-whatsapp hover:scale-110 transition-transform">
        <WhatsAppIcon size={32} />
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-premium' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#início" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
               <PawPrint size={24} />
            </div>
            <span className="font-serif text-3xl font-bold tracking-tight text-clinic-text uppercase">{CLIENT_CONFIG.name}</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest font-bold text-clinic-text/80 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">{item}</a>
            ))}
            <a href={whatsappUrl} className="btn-primary h-12 px-8 text-[11px] font-bold shadow-lg">AGENDAR CONSULTA</a>
          </div>

          <button className="lg:hidden text-clinic-text bg-white/50 p-3 rounded-xl backdrop-blur-md" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className="fixed inset-0 z-[75] bg-white flex flex-col items-center justify-center gap-10 p-12 lg:hidden">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-clinic-text uppercase font-bold tracking-tight">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Balanced & Elegant */}
      <section id="início" className="relative h-[90vh] min-h-[700px] flex items-center pt-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vet-hero.png" alt="DUNO" className="w-full h-full object-cover brightness-[0.6] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-4 block">Excelência Médica Itaim Bibi</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-clinic-text leading-[1.1] font-bold tracking-tight">
              A Saúde do <br /> <span className="text-primary italic font-normal">Seu Pet é Arte.</span>
            </h1>
            <p className="text-lg md:text-xl text-clinic-text/80 mb-10 max-w-xl leading-relaxed">
               Referência em medicina avançada, tecnologia de ponta e atendimento humanizado na Clínica DUNO.
            </p>
            <a href={whatsappUrl} className="btn-primary inline-flex gap-4 shadow-xl h-16 px-10 text-[11px] font-bold tracking-[0.2em] transform hover:-translate-y-1">
              AGENDAR AVALIAÇÃO <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean & Readable */}
      <section className="py-20 max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-premium p-10 md:p-14 grid grid-cols-2 lg:grid-cols-4 gap-10 border border-primary/5">
          {[
            { l: 'Vidas Salvas', v: '22k+', i: <Heart size={28} className="text-primary/20" /> },
            { l: 'Equipe UNIPET', v: '15+', i: <Activity size={28} className="text-primary/20" /> },
            { l: 'Plantão', v: '24h', i: <Clock size={28} className="text-primary/20" /> },
            { l: 'Satisfação', v: '100%', i: <ShieldCheck size={28} className="text-primary/20" /> }
          ].map((s, idx) => (
            <div key={idx} className="flex gap-6 items-center">
              <div className="hidden md:flex w-14 h-14 rounded-2xl bg-clinic-bg items-center justify-center shrink-0">{s.i}</div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold font-serif text-clinic-text leading-none">{s.v}</span>
                <span className="text-[9px] uppercase font-bold text-clinic-text/40 tracking-widest mt-2">{s.l}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - ALIGNED & SPACIOUS */}
      <section id="serviços" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="section-subtitle">Nossas Áreas de Atuação</span>
            <h2 className="section-title text-balance max-w-4xl mx-auto">Medicina de <span className="text-primary italic font-normal">Alta Performance.</span></h2>
            <div className="w-20 h-1 bg-primary/20 mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-[520px] bg-white rounded-3xl overflow-hidden border border-primary/5 shadow-lg hover:shadow-premium transition-all duration-500"
              >
                <div className="h-1/2 relative overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/20">{s.badge}</div>
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center relative pt-14">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white transform transition-transform group-hover:rotate-6">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-clinic-text group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-clinic-text/60 leading-relaxed max-w-[280px] mb-8">{s.description}</p>
                  <a href={whatsappUrl} className="mt-auto text-[10px] uppercase font-bold tracking-widest text-primary flex items-center gap-2 group/btn">
                    Saiba Mais <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - FIXED LAYOUT */}
      <section className="section-padding bg-clinic-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-premium border-[12px] border-white">
                <img src="/images/vet-clinic-interior.png" alt="DUNO" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden xl:block max-w-[300px] border border-primary/5">
                 <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 animate-heartbeat"><Heart size={32} /></div>
                 <h4 className="font-serif text-2xl font-bold mb-3 text-clinic-text uppercase tracking-tight">Oásis Pet</h4>
                 <p className="text-sm text-clinic-text/60 leading-relaxed italic">"Infraestrutura planejada para que o estresse do seu pet seja zero durante a visita."</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <span className="section-subtitle">Diferenciais DUNO</span>
              <h2 className="section-title mb-12">Nossos <span className="text-primary italic font-normal">Padrões de Ouro.</span></h2>
              <div className="space-y-12">
                {[
                  { t: "Plantão Emergencial 24h", d: "Equipe médica e bloco cirúrgico prontos 24/7.", i: <HeartPulseIcon className="text-primary" /> },
                  { t: "Internação Humanizada", d: "Monitoramento com relatórios constantes via WhatsApp.", i: <Home className="text-primary" /> },
                  { t: "Excelência Diagnóstica", d: "Laboratório próprio e imagens de padrão internacional.", i: <Microscope className="text-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">{item.i}</div>
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-clinic-text mb-2 uppercase tracking-tight">{item.t}</h4>
                      <p className="text-base text-clinic-text/60 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href={whatsappUrl} className="btn-primary mt-12 py-5 px-12 text-xs shadow-2xl">
                SOLICITAR CONSULTA <WhatsAppIcon size={20} className="ml-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Balanced */}
      <section id="localização" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-stretch">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <span className="section-subtitle">Localização</span>
              <h2 className="section-title mb-10">DUNO <br /> <span className="text-primary italic font-normal">Itaim Bibi</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-serif text-xl font-bold uppercase mb-2">Endereço</h4>
                    <p className="text-base text-clinic-text/60">{CLIENT_CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-serif text-xl font-bold uppercase mb-2">Horários</h4>
                    <p className="text-base text-clinic-text/60">{CLIENT_CONFIG.openingHours}</p>
                    <div className="inline-flex items-center gap-2 mt-3 bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">{CLIENT_CONFIG.emergency}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-premium border-8 border-clinic-bg min-h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="DUNO Mapa" className="grayscale-[0.2]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Elegant & Minimalist */}
      <footer className="bg-accent text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">🐾</span>
              <span className="font-serif text-5xl font-bold tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
            </div>
            <p className="text-white/40 max-w-sm mb-12 text-lg">Onde a medicina de elite e o amor incondicional pelos animais transformam vidas.</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={24} /></a>
              <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={24} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-2xl font-bold mb-8 uppercase tracking-tighter">Especialidades</h4>
            <ul className="space-y-4 text-white/40 text-[10px] uppercase font-bold tracking-widest">
              <li><a href="#serviços" className="hover:text-primary transition-colors">Cirurgia 24h</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Exames Diagnósticos</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Internação VIP</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Consultas Expert</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-2xl font-bold mb-8 uppercase tracking-tighter">Contato</h4>
            <ul className="space-y-6 text-white/40 text-[10px] uppercase font-bold tracking-widest">
              <li className="flex gap-4"><MapPin size={18} className="text-primary" /> <span>{CLIENT_CONFIG.address}</span></li>
              <li className="flex gap-4"><Phone size={18} className="text-primary" /> <span>(11) 99999-9999</span></li>
              <li className="flex gap-4"><Clock size={18} className="text-primary" /> <span>PLANTÃO 24H ATIVO</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.4em] text-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 {CLIENT_CONFIG.name} VETERINÁRIA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">PRIVACIDADE</a>
            <a href="#" className="hover:text-white transition-colors">TERMOS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
    </svg>
  );
}
