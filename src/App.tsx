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
  openingHours: "Seg-Sex: 08:00 - 22:00 | Sáb: 08:00 - 18:00",
  emergency: "Plantão 24h por Emergência",
};

const SERVICES = [
  {
    id: 1,
    title: "Medicina Diagnóstica",
    description: "Laboratório próprio e imagens de alta resolução para diagnósticos imediatos e precisos.",
    badge: "Tecnologia",
    image: "https://images.unsplash.com/photo-1579154238328-341ef9798583?q=80&w=800&auto=format&fit=crop",
    icon: <Microscope size={28} />
  },
  {
    id: 2,
    title: "Cirurgia Geral & Especializada",
    description: "Bloco cirúrgico equipado com anestesia inalatória para máxima segurança operatória.",
    badge: "Centro Médico",
    image: "/images/vet-surgery.png",
    icon: <Activity size={28} />
  },
  {
    id: 3,
    title: "Internação Elite",
    description: "Espaços climatizados com supervisão médica 24h e acompanhamento via WhatsApp.",
    badge: "Acolhimento",
    image: "/images/vet-clinic-interior.png",
    icon: <Home size={28} />
  },
  {
    id: 4,
    title: "Pediatria Veterinária",
    description: "Cuidado integral para filhotes, desde o protocolo vacinal até a nutrição adequada.",
    badge: "Filhotes",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
    icon: <Baby size={28} />
  },
  {
    id: 5,
    title: "Odonto & Estética Sônica",
    description: "Limpeza técnica e ultra-som para garantir a saúde bucal e bem-estar do seu pet.",
    badge: "Higiene",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    icon: <Sparkles size={28} />
  },
  {
    id: 6,
    title: "Consultas Especializadas",
    description: "Cardiologia, Dermatologia e Ortopedia com especialistas experientes e dedicados.",
    badge: "Especialidades",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800&auto=format&fit=crop",
    icon: <Stethoscope size={28} />
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
    <div className="min-h-screen selection:bg-primary selection:text-white bg-clinic-bg font-sans">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-7xl mb-6">🐾</motion.div>
            <h2 className="font-serif text-3xl tracking-[0.5em] text-clinic-text uppercase font-bold">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Floating Call to Action (Fixed Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[95]">
        <a href={whatsappUrl} className="flex items-center justify-center gap-4 bg-primary text-white py-5 px-8 rounded-2xl shadow-2xl font-bold tracking-widest text-xs uppercase animate-pulse-whatsapp">
          <WhatsAppIcon size={20} /> Agendar Consulta Agora
        </a>
      </div>

      {/* WhatsApp Fixed Desktop */}
      <div className="hidden md:block">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 z-[90] bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group">
          <WhatsAppIcon size={36} className="group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-white/98 backdrop-blur-xl py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-b border-primary/10' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-10 md:px-14 flex justify-between items-center h-full">
          <a href="#início" className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isScrolled ? 'bg-primary text-white' : 'bg-white/20 text-clinic-text backdrop-blur-sm shadow-xl'}`}>
               <PawPrint size={28} />
            </div>
            <span className="font-serif text-3xl md:text-4xl font-bold tracking-tighter text-clinic-text uppercase">{CLIENT_CONFIG.name}</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[12px] uppercase tracking-[0.3em] font-extrabold text-clinic-text hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">{item}</a>
            ))}
            <a href={whatsappUrl} className="bg-primary text-white h-14 px-10 text-[11px] font-bold rounded-2xl flex items-center gap-3 shadow-[0_15px_30px_rgba(45,106,79,0.2)] hover:shadow-primary/30 transition-all hover:-translate-y-1 tracking-widest uppercase">
              <WhatsAppIcon size={18} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden text-clinic-text p-2 hover:bg-primary/10 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed inset-0 z-[75] bg-white flex flex-col items-center justify-center gap-12 p-10 lg:hidden">
            {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Localização'].map((item, i) => (
              <motion.a key={item} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif text-clinic-text uppercase font-bold hover:text-primary transition-all tracking-widest">{item}</motion.a>
            ))}
            <a href={whatsappUrl} className="w-full bg-primary text-white py-6 rounded-3xl text-center font-bold tracking-[0.2em] text-sm shadow-2xl">SOLICITAR CONSULTA</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vet-hero.png" alt="Hero" className="w-full h-full object-cover brightness-[0.6] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full mt-10">
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
            <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/30 text-primary font-bold text-xs tracking-[0.4em] uppercase rounded-full mb-8">Especialistas em quem você ama</div>
            <h1 className="text-6xl md:text-9xl font-serif mb-10 text-clinic-text leading-[1.0] font-black tracking-tighter">
              Saúde de Elite <br /> <span className="text-primary italic">para seu Pet.</span>
            </h1>
            <p className="text-xl md:text-2xl text-clinic-text font-bold mb-12 max-w-lg leading-relaxed shadow-sm">
               Referência em medicina veterinária de alta performance e infraestrutura hospitalar completa 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a href={whatsappUrl} className="bg-primary text-white rounded-[2rem] gap-4 shadow-[0_25px_60px_rgba(45,106,79,0.3)] h-20 px-12 text-sm font-black tracking-[0.3em] uppercase flex items-center justify-center hover:-translate-y-2 lg:hover:w-[450px] transition-all">
                <WhatsAppIcon size={24} /> Agendar Avaliação <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-24 max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] p-12 md:p-20 grid grid-cols-2 lg:grid-cols-4 gap-12 border border-primary/5">
          {[
            { l: 'Vidas Salvas', v: '22k+', i: <Heart size={32} className="text-primary" /> },
            { l: 'Equipe Médica', v: '12+', i: <Activity size={32} className="text-primary" /> },
            { l: 'Atendimento', v: '24h', i: <Clock size={32} className="text-primary" /> },
            { l: 'Satisfação', v: '100%', i: <ShieldCheck size={32} className="text-primary" /> }
          ].map((s, idx) => (
            <div key={idx} className="flex gap-6 items-center group">
              <div className="w-16 h-16 rounded-[1.5rem] bg-clinic-bg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-inner">{s.i}</div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-clinic-text leading-none">{s.v}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-clinic-text mt-3 opacity-60 group-hover:opacity-100 transition-opacity">{s.l}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section - RE-ALIGNED & FIXED */}
      <section id="serviços" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.5em] font-black text-primary mb-6">Expertise Reconhecida</span>
            <h2 className="text-5xl md:text-7xl font-serif text-clinic-text font-black leading-tight max-w-4xl">Nossas <span className="text-primary italic">Soluções Médicas</span></h2>
            <div className="w-24 h-[6px] bg-primary/20 mt-10 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative rounded-[3rem] overflow-hidden bg-clinic-bg border-4 border-transparent hover:border-primary/10 min-h-[550px] flex flex-col shadow-2xl hover:shadow-[0_60px_100px_rgba(45,106,79,0.15)] transition-all duration-700"
              >
                {/* Fixed Height Image Container */}
                <div className="h-[280px] w-full relative overflow-hidden shrink-0">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-8 left-8 bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-clinic-text border border-white/50">{s.badge}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-bg via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Area with Auto Alignment */}
                <div className="p-10 flex-1 flex flex-col relative justify-between">
                  {/* Floating Icon Overlapping Image/Text Junction */}
                  <div className="absolute -top-12 right-12 w-24 h-24 bg-primary text-white rounded-[2rem] shadow-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-4 border-white">
                    {s.icon}
                  </div>

                  <div className="pt-6">
                    <h3 className="text-3xl font-black text-clinic-text mb-6 group-hover:text-primary transition-colors leading-tight font-serif uppercase tracking-tighter">{s.title}</h3>
                    <p className="text-lg text-clinic-text font-bold leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity flex-1">{s.description}</p>
                  </div>

                  <div className="mt-10 pt-10 border-t border-primary/10">
                    <a href={whatsappUrl} className="inline-flex items-center gap-4 text-xs font-black text-primary uppercase tracking-[0.3em] group-hover:gap-6 transition-all">
                      Consultar Especialista <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Differentiation Section */}
      <section className="section-padding bg-clinic-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_100px_150px_rgba(45,106,79,0.2)] border-[20px] border-white">
                <img src="/images/vet-clinic-interior.png" alt="Interior Clínica" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
              </div>
              <div className="absolute -top-10 -right-10 bg-white p-12 rounded-[4rem] shadow-3xl hidden xl:flex flex-col gap-6 max-w-[320px] border border-primary/5">
                 <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary"><Coffee size={40} /></div>
                 <h4 className="font-serif text-3xl font-black text-clinic-text">Cuidado Sem Stress</h4>
                 <p className="text-lg text-clinic-text font-bold opacity-60 leading-relaxed">Infraestrutura planejada para que seu pet sinta-se em casa.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.5em] font-black text-primary mb-8 block">Diferenciais que encantam</span>
              <h2 className="text-5xl md:text-7xl font-serif text-clinic-text font-black leading-[1.05] mb-12">Protocolos de <br /> <span className="text-primary italic">Alta Performance.</span></h2>
              <div className="space-y-12">
                {[
                  { t: "Plantão Emergencial 24h", d: "Equipe médica experiente pronta para agir em qualquer segundo.", i: <HeartPulse className="text-primary" size={36} /> },
                  { t: "Internação Humanizada", d: "Acompanhamento VIP com boletins em tempo real para os tutores.", i: <Home className="text-primary" size={36} /> },
                  { t: "Equipe Multidisciplinar", d: "Especialistas em Cardiologia, Ortopedia e Dermatologia no mesmo local.", i: <Award className="text-primary" size={36} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 group hover:translate-x-4 transition-transform duration-500">
                    <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all">{item.i}</div>
                    <div>
                      <h4 className="font-serif text-3xl font-black text-clinic-text mb-3 uppercase tracking-tighter">{item.t}</h4>
                      <p className="text-xl text-clinic-text font-bold leading-relaxed opacity-70">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section with Map (RESTORED & IMPROVED) */}
      <section id="localização" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24 items-stretch">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.5em] font-black text-primary mb-8">Nossa Localização</span>
              <h2 className="text-5xl md:text-7xl font-serif text-clinic-text font-black mb-12">VidaPet <br /> <span className="text-primary italic">Pinheiros</span></h2>
              
              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shrink-0"><MapPin size={28} /></div>
                  <div>
                    <h4 className="font-serif text-2xl font-black uppercase mb-2">Endereço</h4>
                    <p className="text-xl font-bold text-clinic-text opacity-70 leading-relaxed">{CLIENT_CONFIG.address}</p>
                    <a href="https://maps.app.goo.gl/YourActualLink" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[11px] mt-3 hover:gap-4 transition-all">Abrir no GPS <ArrowRight size={14} /></a>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shrink-0"><Clock size={28} /></div>
                  <div>
                    <h4 className="font-serif text-2xl font-black uppercase mb-2">Horários</h4>
                    <p className="text-xl font-bold text-clinic-text opacity-70 leading-relaxed">{CLIENT_CONFIG.openingHours}</p>
                    <div className="flex items-center gap-3 mt-4 px-4 py-2 bg-primary/10 text-primary font-black text-[10px] uppercase tracking-widest rounded-full w-fit max-w-full">
                       <span className="w-2 h-2 bg-primary rounded-full animate-ping" /> {CLIENT_CONFIG.emergency}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RESTORED FULL WIDTH MAP */}
            <div className="lg:col-span-2 rounded-[4rem] overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.15)] border-[15px] border-clinic-bg min-h-[600px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.06583023063!2d-46.69083282412918!3d-23.566060161476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f90be6133%3A0xc682914f6b28bd84!2sAv.%20Brig.%20Faria%20Lima%2C%202000%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001451-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                title="Mapa VidaPet"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (10/10 Visibility) */}
      <footer className="bg-accent text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white border border-white/20 text-5xl">🐾</div>
                <span className="font-serif text-5xl md:text-6xl font-black tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-white text-2xl font-bold opacity-60 max-w-lg mb-12 leading-relaxed">Onde a medicina de elite e o amor incondicional pelos animais se encontram. Referência absoluta em São Paulo.</p>
              <div className="flex gap-10">
                <a href="#" className="w-16 h-16 rounded-[1.5rem] border-2 border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-2 transition-all duration-500 shadow-2xl"><Instagram size={32} /></a>
                <a href="#" className="w-16 h-16 rounded-[1.5rem] border-2 border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-2 transition-all duration-500 shadow-2xl"><Facebook size={32} /></a>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <h4 className="font-serif text-3xl font-black uppercase tracking-tighter">Áreas de Atuação</h4>
              <ul className="space-y-6 text-xl font-bold text-white/50">
                <li><a href="#serviços" className="hover:text-primary transition-colors">Bloco Cirúrgico 24h</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Exames Diagnósticos</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Internação VIP</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Vacinação & Kids</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-10">
              <h4 className="font-serif text-3xl font-black uppercase tracking-tighter">Fale Conosco</h4>
              <ul className="space-y-8 text-xl font-bold text-white/50">
                <li className="flex gap-6"><MapPin className="text-primary" size={24} /> <span>{CLIENT_CONFIG.address}</span></li>
                <li className="flex gap-6"><Phone className="text-primary" size={24} /> <span>(11) 99999-9999</span></li>
                <li className="flex gap-6"><Clock className="text-primary" size={24} /> <span>{CLIENT_CONFIG.emergency}</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12 text-[12px] uppercase tracking-[0.4em] font-black text-white/20">
            <p>© 2026 {CLIENT_CONFIG.name.toUpperCase()} MÉDICA VETERINÁRIA. TODOS OS DIREITOS RESERVADOS.</p>
            <div className="flex gap-14">
              <a href="#" className="hover:text-white transition-colors">PRIVACIDADE</a>
              <a href="#" className="hover:text-white transition-colors">CONVÊNIOS</a>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
