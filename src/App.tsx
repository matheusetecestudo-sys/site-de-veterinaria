import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  MessageCircle, 
  ChevronRight, 
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
  Syringe,
  Scissors,
  Coffee,
  Shield,
  Zap,
  Microscope,
  Baby
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// === CONFIGURAÇÕES DO CLIENTE ===
const CLIENT_CONFIG = {
  name: "VidaPet",
  professional: "Dra. Juliana Martins",
  specialty: "Médica Veterinária & Especialista em Medicina de Pequenos Animais",
  experience: "15+ anos de dedicação animal",
  whatsapp: "5511999999999",
  city: "São Paulo, SP",
  address: "Av. Brigadeiro Faria Lima, 2000 - Pinheiros, São Paulo",
  email: "contato@vidapetvet.com.br",
  about: "Na VidaPet, acreditamos que cada animal merece um cuidado individualizado e amoroso. Combinamos nossa paixão pelos pets com as tecnologias médicas mais avançadas para oferecer diagnósticos precisos e tratamentos eficazes. Nossa clínica é um espaço de calma e segurança para você e seu companheiro.",
};

const SERVICES = [
  {
    id: 1,
    title: "Check-up Preventivo",
    description: "Exames completos para garantir que a saúde do seu pet esteja sempre em dia.",
    badge: "Essencial",
    image: "/images/vet-hero.png",
    icon: <Stethoscope size={24} />
  },
  {
    id: 2,
    title: "Cirurgia Avançada",
    description: "Centro cirúrgico equipado para procedimentos complexos com máxima segurança.",
    badge: "Alta Tecnologia",
    image: "/images/vet-surgery.png",
    icon: <Activity size={24} />
  },
  {
    id: 3,
    title: "Exames Laboratoriais",
    description: "Diagnósticos rápidos e precisos com laboratório próprio de última geração.",
    badge: "Precisão",
    image: "https://images.unsplash.com/photo-1579154235602-3c22424597b6?q=80&w=800&auto=format&fit=crop",
    icon: <Microscope size={24} />
  },
  {
    id: 4,
    title: "Odontologia Veterinária",
    description: "Cuidado bucal especializado para prevenir doenças e garantir o bem-estar.",
    badge: "Saúde Bucal",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    icon: <Zap size={24} />
  },
  {
    id: 5,
    title: "Pediatria & Vacinação",
    description: "Acompanhamento completo desde os primeiros meses com protocolos seguros.",
    badge: "Cuidado",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
    icon: <Baby size={24} />
  },
  {
    id: 6,
    title: "Internação Humanizada",
    description: "Monitoramento 24h em ambiente acolhedor para uma recuperação tranquila.",
    badge: "24 Horas",
    image: "/images/vet-clinic-interior.png",
    icon: <Heart size={24} />
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana Beatriz",
    text: "A Dra. Juliana cuidou do meu Max como se fosse dela. O atendimento é impecável e as instalações são as melhores que já vi.",
    role: "Tutora do Max (Golden Retriever)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    text: "Levei minha gata em uma emergência e fui atendido na hora. Transparência e competência em cada etapa.",
    role: "Tutor da Luna (Persa)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    text: "O laboratório próprio agiliza muito os resultados. VidaPet é sinônimo de tranquilidade para quem ama seus pets.",
    role: "Tutora do Thor (Buldog)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 border rounded-3xl overflow-hidden transition-all duration-500 ${isOpen ? 'bg-primary/5 border-primary/20 shadow-lg translate-y-[-4px]' : 'bg-white border-primary/5 shadow-sm hover:border-primary/20'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
      >
        <span className={`font-serif text-xl transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-clinic-text'}`}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
          className={isOpen ? 'text-primary' : 'text-primary/40'}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/10' : 'bg-transparent'}`}>
            <ArrowUp size={20} className={isOpen ? 'rotate-0' : 'rotate-180'} />
          </div>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-clinic-text/60 text-base leading-relaxed border-t border-primary/5 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100] glass-card p-6 rounded-2xl shadow-2xl border border-primary/20 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-primary">
              <ShieldCheck size={24} />
              <span className="font-serif text-lg font-bold">Privacidade & Cookies</span>
            </div>
            <p className="text-xs text-clinic-text/70 leading-relaxed font-sans">
              Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa Política de Privacidade para o cuidado do seu pet.
            </p>
            <div className="flex gap-4">
              <button onClick={accept} className="flex-1 bg-primary text-white text-[10px] uppercase tracking-widest font-bold py-3 rounded-xl hover:bg-secondary transition-all">
                Aceitar e Continuar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta para meu pet.")}`;

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Cinematic Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%',
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mb-12"
              >
                <div className="relative group">
                  <div className="w-32 h-32 border border-primary/10 rounded-full flex items-center justify-center bg-clinic-bg/50 backdrop-blur-sm shadow-inner overflow-hidden">
                    <motion.div 
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-primary/20 rounded-full"
                    />
                    <span className="text-6xl text-primary font-light">🐾</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-center"
              >
                <h2 className="font-serif text-5xl text-clinic-text tracking-[0.3em] font-light mb-4 uppercase">{CLIENT_CONFIG.name}</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-8 bg-primary/30" />
                  <p className="text-primary text-[10px] uppercase tracking-[0.6em] font-sans font-bold">Cuidado Animal Premium</p>
                  <div className="h-[1px] w-8 bg-primary/30" />
                </div>
              </motion.div>

              <div className="mt-16 w-64 h-[2px] bg-primary/5 relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  onAnimationComplete={() => setTimeout(() => setIsLoading(false), 500)}
                  className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_rgba(45,106,79,0.5)]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] animate-pulse-whatsapp flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] group"
      >
        <WhatsAppIcon size={32} className="transition-transform group-hover:rotate-12" />
      </a>

      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-28 right-8 z-[90] bg-white text-primary p-4 rounded-full shadow-lg border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-lg border-b border-primary/10' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
          <a href="#início" className="flex items-center gap-3 group relative py-2">
            <div className="relative">
              <div className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                <span className="text-xl group-hover:filter group-hover:brightness-0 group-hover:invert">🐾</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-light tracking-[0.1em] text-clinic-text group-hover:text-primary transition-colors leading-none uppercase">
                {CLIENT_CONFIG.name}
              </span>
              <span className="text-[6px] uppercase tracking-[0.2em] text-primary font-bold mt-1 ml-0.5">
                Clínica Veterinária
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="flex items-center gap-6 xl:gap-10">
              {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Localização', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-clinic-text/80 hover:text-primary transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <a href={whatsappUrl} className="btn-primary h-12 px-8 text-xs rounded-full flex items-center gap-3 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-0.5">
              <WhatsAppIcon size={16} /> Agendar Consulta
            </a>
          </div>

          <button className="lg:hidden text-clinic-text p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[70] bg-white pt-32 px-8 lg:hidden flex flex-col items-center justify-center gap-12"
          >
            <div className="flex flex-col gap-10 text-center w-full max-w-xs">
              {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Localização', 'FAQ'].map((item, i) => (
                <motion.a 
                  key={item} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-clinic-text tracking-tight hover:text-primary transition-all"
                >
                  {item}
                </motion.a>
              ))}
              <a href={whatsappUrl} className="btn-primary py-6 rounded-full flex items-center justify-center gap-3">
                <WhatsAppIcon size={20} /> Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/vet-hero.png"
            alt="VidaPet — Cuidado Veterinário Premium" 
            className="w-full h-full object-cover brightness-[0.7] transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl px-6 py-12 rounded-3xl backdrop-blur-sm bg-white/20 border border-white/30"
          >
            <span className="section-subtitle">Especialistas em quem você ama</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-clinic-text leading-tight">
              Excelência e <br />
              <span className="text-primary italic">Amor Animal</span>
              <br /> em cada detalhe.
            </h1>
            <p className="text-lg text-clinic-text/80 mb-10 font-sans leading-relaxed max-w-lg">
              Oferecemos medicina veterinária de elite com atendimento humanizado. Venha conhecer a {CLIENT_CONFIG.name}, onde a saúde do seu pet é nossa prioridade absoluta.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={whatsappUrl} className="btn-primary min-w-[280px] rounded-full gap-3 shadow-2xl h-16 text-sm">
                <WhatsAppIcon size={20} /> Agendar Consulta <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Tutor" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-clinic-text/60 uppercase tracking-widest">
                +2.000 Pets atendidos com sucesso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white relative z-10 -mt-20 mx-6 md:mx-12 rounded-[3rem] shadow-2xl border border-primary/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">15k+</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Vidas Salvas</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">24h</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Plantão Veterinário</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">100%</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Equipamentos Tech</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">Padrão</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-clinic-text/40">Acreditação Ouro</span>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-padding bg-clinic-bg overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="/images/vet-doctor.png" 
                alt={CLIENT_CONFIG.professional} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-card p-10 rounded-[2rem] hidden md:block max-w-xs shadow-2xl border-white/50 backdrop-blur-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Award size={28} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary leading-tight">Melhor Clínica</p>
                  <p className="font-serif text-2xl text-clinic-text">Pinheiros</p>
                </div>
              </div>
              <p className="text-sm text-clinic-text/70 italic leading-relaxed">"Tratamos cada pet com o rigor da ciência e o calor do coração."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Conheça nossa Líder</span>
            <h2 className="section-title">{CLIENT_CONFIG.professional}</h2>
            <p className="text-primary font-sans font-bold mb-8 tracking-widest uppercase text-sm border-l-2 border-primary/30 pl-4">{CLIENT_CONFIG.specialty}</p>
            <div className="space-y-6 text-clinic-text/80 leading-relaxed mb-10 font-sans">
              <p>{CLIENT_CONFIG.about}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <CheckCircle2 className="text-primary" />, text: "Medicina Diagnóstica" },
                  { icon: <CheckCircle2 className="text-primary" />, text: "Cirurgia de Tecidos Moles" },
                  { icon: <CheckCircle2 className="text-primary" />, text: "Unidade de Terapia Intensiva" },
                  { icon: <CheckCircle2 className="text-primary" />, text: "Cardiologia Veterinária" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/50 p-3 rounded-2xl border border-primary/5">
                    {item.icon}
                    <span className="text-sm font-bold opacity-80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href={whatsappUrl} className="btn-warm px-12 py-6 rounded-full inline-flex items-center gap-3 shadow-xl hover:-translate-y-1 transition-all">
              Falar com a Dra. Juliana <WhatsAppIcon size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="serviços" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Sparkles size={16} />
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold">Cuidados Completos</span>
              <Sparkles size={16} />
            </div>
            <h2 className="section-title max-w-3xl">Por que escolher a <span className="text-primary italic">VidaPet</span> para o seu melhor amigo?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] overflow-hidden bg-clinic-bg border border-primary/5 h-[480px] flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-2/3 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-bg via-transparent to-transparent" />
                </div>
                
                <div className="p-8 relative flex-1 flex flex-col">
                  <div className="absolute -top-8 right-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-clinic-text mb-3">{service.title}</h3>
                  <p className="text-sm text-clinic-text/60 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                  <a href={whatsappUrl} className="mt-auto inline-flex items-center gap-2 text-[10px] text-primary hover:gap-4 transition-all uppercase font-bold tracking-[0.2em]">
                    Saber Mais <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] rotate-12 pointer-events-none">
          <span className="text-[40rem] leading-none">🐾</span>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="section-subtitle">Vozes de Confiança</span>
            <h2 className="section-title">O que dizem os tutores</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-primary/5 relative flex flex-col h-full"
              >
                <div className="absolute -top-4 left-10 text-primary opacity-20">
                  <Quote size={48} fill="currentColor" />
                </div>
                <div className="flex gap-1 mb-6 text-warm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-clinic-text/80 italic mb-10 leading-relaxed flex-1">"{testimonial.text}"</p>
                <div className="flex items-center gap-5 pt-8 border-t border-primary/5">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/10 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full text-[8px]">🐾</div>
                  </div>
                  <div>
                    <p className="font-serif text-clinic-text font-bold text-xl">{testimonial.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="localização" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            <div className="lg:w-1/3 flex flex-col justify-center">
              <span className="section-subtitle">Onde Estamos</span>
              <h2 className="section-title">VidaPet Pinheiros</h2>
              <p className="text-clinic-text/60 mb-12 leading-relaxed">Estamos localizados em uma região de fácil acesso, com estacionamento próprio e espaço pet-friendly.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Endereço</h4>
                    <p className="text-sm text-clinic-text/60 leading-relaxed">{CLIENT_CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Telefone</h4>
                    <p className="text-sm text-clinic-text/60 font-bold">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Horário de Atendimento</h4>
                    <p className="text-sm text-clinic-text/60">Seg - Sáb: 08h às 22h</p>
                    <div className="flex items-center gap-2 mt-2 bg-red-50 text-red-600 px-3 py-1 rounded-full w-fit">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Emergência 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-primary/5 h-[600px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.06583023063!2d-46.69083282412918!3d-23.566060161476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f90be6133%3A0xc682914f6b28bd84!2sAv.%20Brig.%20Faria%20Lima%2C%202000%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001451-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                title="Mapa VidaPet"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding bg-clinic-bg">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle">Dúvidas Frequentes</span>
            <h2 className="section-title">Cuidado Transparente</h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Preciso agendar horário para consultas de rotina?" 
              answer="Recomendamos o agendamento prévio para garantir um tempo adequado para a avaliação completa do seu pet, mas atendemos casos urgentes sem agendamento prioritário."
            />
            <FAQItem 
              question="Quais vacinas são obrigatórias para o meu filhote?" 
              answer="Para cães, as vacinas V10, Raiva e Gripe/Leishmaniose são essenciais. Para gatos, indicamos a V4 ou V5 e Raiva. Criamos um cronograma personalizado no primeiro atendimento."
            />
            <FAQItem 
              question="Vocês atendem animais exóticos ou apenas cães e gatos?" 
              answer="Atualmente somos especialistas focados em medicina felina e canina de pequenos animais, garantindo excelência máxima nestas espécies."
            />
            <FAQItem 
              question="Como funciona o sistema de internação 24h?" 
              answer="Nossa internação conta com equipe veterinária e auxiliares presentes fisicamente 24 horas por dia, monitoramento por câmeras e relatórios periódicos para os tutores via WhatsApp."
            />
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20">
                  <span className="text-3xl">🐾</span>
                </div>
                <span className="font-serif text-4xl tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-white/60 max-w-md mb-10 text-lg leading-relaxed">
                Elevando o padrão da medicina veterinária com ética, tecnologia e muito amor. Sua confiança é nosso maior compromisso em Pinheiros.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"><Instagram size={22} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"><Facebook size={22} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-8">Nossas Áreas</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#serviços" className="hover:text-primary transition-colors">Medicina Preventiva</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Cirurgia Geral</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Odontologia</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Internação</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Exames Laboratoriais</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-2xl mb-8">Informações</h4>
              <ul className="space-y-6 text-white/50 text-sm">
                <li className="flex gap-4">
                  <MapPin size={22} className="text-primary shrink-0" />
                  <span>{CLIENT_CONFIG.address}<br />São Paulo - SP</span>
                </li>
                <li className="flex gap-4">
                  <Phone size={22} className="text-primary shrink-0" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex gap-4">
                  <Clock size={22} className="text-primary shrink-0" />
                  <span>Seg - Sab: 08:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-[0.3em] text-white/30">
            <p>© 2026 {CLIENT_CONFIG.name} Clínica Veterinária. Todos os direitos reservados.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Políticas</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
