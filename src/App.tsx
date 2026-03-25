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
  name: "DUNO",
  brandSubtitle: "Clínica Veterinária de Elite",
  professional: "Dra. Juliana Martins",
  specialty: "Médica Veterinária | CRMV-SP 12345",
  whatsapp: "5511999999999",
  address: "Av. Brigadeiro Faria Lima, 2000 - Itaim Bibi, SP",
  openingHours: "Seg-Sex: 08:00 - 22:00 | Sáb: 08:00 - 18:00",
  emergency: "Plantão Emergencial 24h",
};

const SERVICES = [
  {
    id: 1,
    title: "Medicina Diagnóstica",
    description: "Laboratório próprio e imagens de alta resolução para diagnósticos imediatos e precisos com máxima segurança para o seu pet.",
    badge: "Alta Tecnologia",
    image: "https://images.unsplash.com/photo-1579154238328-341ef9798583?q=80&w=800&auto=format&fit=crop",
    icon: <Microscope size={32} />
  },
  {
    id: 2,
    title: "Bloco Cirúrgico 24h",
    description: "Equipamentos de suporte à vida e anestesia inalatória monitorada para todos os tipos de procedimentos cirúrgicos complexos.",
    badge: "Centro Médico",
    image: "/images/vet-surgery.png",
    icon: <Activity size={32} />
  },
  {
    id: 3,
    title: "Internação Elite",
    description: "Acomodações climatizadas e supervisão médica constante, garantindo que seu pet se sinta seguro e confortável durante a recuperação.",
    badge: "Cuidado VIP",
    image: "/images/vet-clinic-interior.png",
    icon: <Home size={32} />
  },
  {
    id: 4,
    title: "Pediatria Veterinária",
    description: "Acompanhamento integral do desenvolvimento, com calendários de vacinação personalizados e nutrição de ponta para filhotes.",
    badge: "Filhotes",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
    icon: <Baby size={32} />
  },
  {
    id: 5,
    title: "Dental & Higiene Sônica",
    description: "Tratamentos para cálculo dentário e profilaxia bucal avançada para garantir um sorriso saudável e hálito fresco em todas as idades.",
    badge: "Saúde Oral",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    icon: <Sparkles size={32} />
  },
  {
    id: 6,
    title: "Consultas Expert",
    description: "Cardiologia, Fisioterapia e Ortopedia com especialistas em constante atualização nas melhores universidades do mundo.",
    badge: "Especialidades",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800&auto=format&fit=crop",
    icon: <Stethoscope size={32} />
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Carolina Ribeiro",
    text: "A precisão diagnóstica da DUNO salvou meu gato Oliver. O atendimento é empático e as instalações são impecáveis.",
    role: "Tutora do Oliver (Gato SRD)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcos Paulo",
    text: "O melhor pós-operatório que já vi. A equipe enviou notícias constantes via WhatsApp, me deixando 100% tranquilo.",
    role: "Tutor do Thor (Buldog)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Patrícia Lima",
    text: "A infraestrutura em Pinheiros é inigualável. Não troco a DUNO por nada!",
    role: "Tutora da Mel (Shitzu)",
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

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta na DUNO Veterinária.")}`;

  return (
    <div className="min-h-screen bg-clinic-bg font-sans selection:bg-primary selection:text-white">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-10"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-8xl mb-6">🐾</motion.div>
            <h2 className="font-serif text-5xl md:text-7xl font-black text-clinic-text tracking-tighter uppercase">{CLIENT_CONFIG.name}</h2>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mt-4">Medicina de Elite</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Mobile CTA (Fixed) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[95]">
        <a href={whatsappUrl} className="flex items-center justify-center gap-4 bg-primary text-white py-6 px-10 rounded-[2rem] shadow-3xl font-black tracking-widest text-xs uppercase animate-pulse-whatsapp border-2 border-white/20">
          <WhatsAppIcon size={24} /> AGENDAR AGORA
        </a>
      </div>

      {/* Floating WhatsApp Desktop */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden md:flex fixed bottom-10 right-10 z-[90] bg-[#25D366] text-white p-6 rounded-full shadow-3xl hover:scale-110 transition-transform group items-center justify-center">
        <WhatsAppIcon size={40} className="group-hover:rotate-12 transition-transform" />
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-[80] transition-all duration-700 ${isScrolled ? 'bg-white/98 backdrop-blur-xl py-4 shadow-2xl border-b-2 border-primary/10' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-10 md:px-14 flex justify-between items-center">
          <a href="#início" className="flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
               <PawPrint size={32} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-black tracking-tighter text-clinic-text leading-none uppercase">{CLIENT_CONFIG.name}</span>
              <span className="text-[7px] uppercase tracking-[0.4em] font-black text-primary mt-1.5 opacity-80">Veterinária de Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[12px] uppercase tracking-[0.3em] font-black text-clinic-text hover:text-primary transition-colors border-b-4 border-transparent hover:border-primary pb-1">{item}</a>
            ))}
            <a href={whatsappUrl} className="bg-primary text-white h-16 px-12 text-[11px] font-black rounded-2xl flex items-center gap-3 shadow-2xl hover:bg-black transition-all hover:-translate-y-1">
              <WhatsAppIcon size={18} /> AGENDAR CONSULTA
            </a>
          </div>

          <button className="lg:hidden text-clinic-text bg-white/50 p-3 rounded-2xl backdrop-blur-md" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[75] bg-white flex flex-col items-center justify-center gap-14 p-12 lg:hidden">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'Localização'].map((item, i) => (
              <motion.a key={item} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif text-clinic-text uppercase font-black tracking-tighter hover:text-primary">{item}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center justify-center pt-24 overflow-hidden px-10">
        <div className="absolute inset-0 z-0">
          <img src="/images/vet-hero.png" alt="DUNO" className="w-full h-full object-cover brightness-[0.55] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/45 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
            <div className="inline-block px-8 py-3 bg-primary/10 border-2 border-primary/40 text-primary font-black text-xs tracking-[0.5em] uppercase rounded-full mb-10">Excelência Hospitalar Itaim Bibi</div>
            <h1 className="text-7xl md:text-[10rem] font-serif mb-12 text-clinic-text leading-[0.9] font-black tracking-tighter">
              A Saúde do <br /> <span className="text-primary italic">Seu Pet é Arte.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-clinic-text font-black mb-16 max-w-2xl leading-tight">
               Referência em medicina avançada e atendimento humanizado na {CLIENT_CONFIG.name}.
            </p>
            <a href={whatsappUrl} className="bg-primary text-white rounded-[2rem] gap-5 shadow-3xl h-24 px-14 text-sm font-black tracking-[0.4em] uppercase flex items-center justify-center hover:bg-black hover:w-[480px] lg:w-[450px] transition-all">
              <WhatsAppIcon size={28} /> AGENDAR CONSULTA <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-24 max-w-7xl mx-auto px-10 -mt-24 relative z-20">
        <div className="bg-white rounded-[4rem] shadow-3xl p-16 md:p-24 grid grid-cols-2 lg:grid-cols-4 gap-16 border-2 border-primary/5">
          {[
            { l: 'Vidas Salvas na DUNO', v: '22k+', i: <Heart size={40} className="text-primary" /> },
            { l: 'Membros da Equipe', v: '15+', i: <Activity size={40} className="text-primary" /> },
            { l: 'Operação Médica', v: '24h', i: <Clock size={40} className="text-primary" /> },
            { l: 'Protocolos Elite', v: '100%', i: <ShieldCheck size={40} className="text-primary" /> }
          ].map((s, idx) => (
            <div key={idx} className="flex gap-8 items-center group">
              <div className="w-20 h-20 rounded-[2rem] bg-clinic-bg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-xl">{s.i}</div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-black text-clinic-text leading-none">{s.v}</span>
                <span className="text-[10px] uppercase font-black text-clinic-text mt-4 opacity-70 tracking-widest">{s.l}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid (Fixed & Perfectly Aligned) */}
      <section id="serviços" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.6em] font-black text-primary mb-8 border-b-2 border-primary/20 pb-2">Nossas Áreas de Atuação</span>
            <h2 className="text-6xl md:text-[7rem] font-serif text-clinic-text font-black leading-tight max-w-5xl uppercase tracking-tighter">
               Medicina de <span className="text-primary italic">Alta Performance.</span>
            </h2>
            <div className="w-32 h-2 bg-primary/20 mt-12 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative rounded-[4rem] overflow-hidden bg-white border-2 border-primary/5 min-h-[600px] flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-700"
              >
                <div className="h-[300px] w-full relative overflow-hidden shrink-0">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-10 left-10 bg-white/75 backdrop-blur-xl px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-clinic-text border-2 border-primary/20">{s.badge}</div>
                </div>

                <div className="p-12 flex-1 flex flex-col relative justify-between bg-white">
                  <div className="absolute -top-14 right-14 w-28 h-28 bg-primary text-white rounded-[2.5rem] shadow-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-8 border-white">
                    {s.icon}
                  </div>

                  <div className="pt-8">
                    <h3 className="text-4xl font-black text-clinic-text mb-8 group-hover:text-primary transition-colors leading-none font-serif uppercase tracking-tighter">{s.title}</h3>
                    <p className="text-xl text-clinic-text font-bold leading-relaxed opacity-90">{s.description}</p>
                  </div>

                  <div className="mt-12 pt-12 border-t-2 border-primary/5">
                    <a href={whatsappUrl} className="inline-flex items-center gap-5 text-sm font-black text-primary uppercase tracking-[0.4em] group-hover:gap-8 transition-all">
                      Saber Mais <ArrowRight size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-clinic-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <div className="relative z-10 rounded-[6rem] overflow-hidden shadow-3xl border-[20px] border-white ring-2 ring-primary/10">
                <img src="/images/vet-clinic-interior.png" alt="DUNO" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-16 -right-16 bg-white p-14 rounded-[4rem] shadow-3xl hidden xl:flex flex-col gap-8 max-w-[360px] border-4 border-primary/5">
                 <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary"><Coffee size={48} /></div>
                 <h4 className="font-serif text-4xl font-black text-clinic-text leading-none uppercase tracking-tighter">Oásis de <br/> Tranquilidade</h4>
                 <p className="text-xl text-clinic-text font-bold opacity-75">Infraestrutura planejada para que o estresse do seu pet seja zero.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <span className="text-xs uppercase tracking-[0.6em] font-black text-primary mb-10 block">Por que escolher a DUNO?</span>
              <h2 className="text-7xl md:text-9xl font-serif text-clinic-text font-black leading-[0.9] mb-16 uppercase tracking-tighter">Nossos <br /> <span className="text-primary italic">Padrões de Ouro.</span></h2>
              <div className="space-y-16">
                {[
                  { t: "Plantão Emergencial 24h", d: "Time médico de alta prontidão e centro cirúrgico ativo 24/7.", i: <Activity size={48} className="text-primary" /> },
                  { t: "Internação Humanizada", d: "Monitoramento intensivo com relatórios em vídeo no seu WhatsApp.", i: <Home size={48} className="text-primary" /> },
                  { t: "Excelência Diagnóstica", d: "Equipamentos de imagem e laboratoriais de padrão internacional.", i: <Microscope size={48} className="text-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-12 group">
                    <div className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">{item.i}</div>
                    <div>
                      <h4 className="font-serif text-4xl font-black text-clinic-text mb-4 uppercase tracking-tighter">{item.t}</h4>
                      <p className="text-2xl text-clinic-text font-bold opacity-80 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="localização" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-24 items-stretch">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.6em] font-black text-primary mb-10">Onde Estamos</span>
              <h2 className="text-7xl md:text-8xl font-serif text-clinic-text font-black mb-16 uppercase tracking-tighter">DUNO <br /> <span className="text-primary italic">Itaim Bibi</span></h2>
              
              <div className="space-y-12">
                <div className="flex gap-10 group">
                  <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center shadow-2xl shrink-0 transition-transform group-hover:scale-110"><MapPin size={36} /></div>
                  <div>
                    <h4 className="font-serif text-3xl font-black uppercase mb-3 tracking-tighter text-clinic-text">Endereço</h4>
                    <p className="text-2xl font-black text-clinic-text opacity-70 leading-relaxed">{CLIENT_CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex gap-10 group">
                  <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center shadow-2xl shrink-0 transition-transform group-hover:scale-110"><Clock size={36} /></div>
                  <div>
                    <h4 className="font-serif text-3xl font-black uppercase mb-3 tracking-tighter text-clinic-text">Horários</h4>
                    <p className="text-2xl font-black text-clinic-text opacity-70 leading-relaxed">{CLIENT_CONFIG.openingHours}</p>
                    <div className="inline-flex items-center gap-4 mt-6 bg-primary/15 text-primary px-6 py-3 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-sm">
                       <span className="w-3 h-3 bg-primary rounded-full animate-ping" /> {CLIENT_CONFIG.emergency}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-[5rem] overflow-hidden shadow-3xl border-[20px] border-clinic-bg min-h-[600px] relative ring-2 ring-primary/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                title="DUNO Mapa"
                className="grayscale-[0.2]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (10/10 Contrast) */}
      <footer className="bg-accent text-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-8 mb-16">
                <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center text-white border-2 border-white/20 text-6xl shadow-inner">🐾</div>
                <span className="font-serif text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-white text-3xl font-black opacity-70 max-w-xl mb-16 leading-tight uppercase tracking-tighter">Onde a medicina de elite e o amor incondicional transformam vidas em Pinheiros.</p>
              <div className="flex gap-10">
                <a href="#" className="w-20 h-20 rounded-[2rem] border-4 border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-4 transition-all duration-700 shadow-3xl"><Instagram size={40} /></a>
                <a href="#" className="w-20 h-20 rounded-[2rem] border-4 border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-4 transition-all duration-700 shadow-3xl"><Facebook size={40} /></a>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <h4 className="font-serif text-4xl font-black uppercase tracking-tighter border-b-2 border-white/10 pb-6">Especialidades</h4>
              <ul className="space-y-8 text-2xl font-black text-white/40 uppercase tracking-tighter">
                <li><a href="#serviços" className="hover:text-primary transition-colors">Cirurgia 24h</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Exames Diagnósticos</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Internação VIP</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Consultas Expert</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-12">
              <h4 className="font-serif text-4xl font-black uppercase tracking-tighter border-b-2 border-white/10 pb-6">Contato</h4>
              <ul className="space-y-10 text-2xl font-black text-white/40 uppercase tracking-tighter">
                <li className="flex gap-8"><MapPin className="text-primary" size={36} /> <span>{CLIENT_CONFIG.address}</span></li>
                <li className="flex gap-8"><Phone className="text-primary" size={36} /> <span>(11) 99999-9999</span></li>
                <li className="flex gap-8"><Clock className="text-primary" size={36} /> <span>Plantão 24h Ativo</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-24 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-16 text-sm uppercase tracking-[0.5em] font-black text-white/20">
            <p>© 2026 {CLIENT_CONFIG.name}. Todos os direitos reservados.</p>
            <div className="flex gap-20">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
