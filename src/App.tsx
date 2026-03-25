// Deployment: 2026-03-25T19:20:00Z - STUNNING ANIMATIONS + ALL MENU ITEMS + STABLE IMAGES V4
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Menu, 
  X, 
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Activity,
  Microscope,
  PawPrint,
  MessageCircle,
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Heart
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
  phone: "(11) 99999-9999",
  openingHours: "Hospital Aberto 24h",
  description: "Hospital Veterinário de Alta Performance.",
};

const SERVICES = [
  {
    id: "01",
    title: "Medicina do Futuro",
    description: "Diagnóstico completo com inteligência artificial e suporte clínico 24h.",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800&auto=format&fit=crop",
    badge: "Laboratório"
  },
  {
    id: "02",
    title: "Centro Cirúrgico",
    description: "Equipe sênior e infraestrutura hospitalar para cirurgias complexas.",
    image: "https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=800&auto=format&fit=crop",
    badge: "Alta Complexidade"
  },
  {
    id: "03",
    title: "Internação Elite",
    description: "UTI com monitoramento individual por câmeras acessíveis via smartphone.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    badge: "UTI Pet"
  },
  {
    id: "04",
    title: "Dermatologia & Alergia",
    description: "Tratamentos especializados para pele e recuperação imunológica de ponta.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
    badge: "Especialidade"
  },
  {
    id: "05",
    title: "Check-up Preventivo",
    description: "Bateria completa de exames preventivos em um único dia para longevidade.",
    image: "https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=800&auto=format&fit=crop",
    badge: "Check-up"
  },
  {
    id: "06",
    title: "Spa & Estética",
    description: "Higiene técnica avançada com produtos premium e calmantes naturais.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop",
    badge: "Spa VIP"
  }
];

const FAQS = [
  { id: 1, q: "Como agendar um atendimento na DUNO?", a: "O agendamento é feito instantaneamente via WhatsApp. Nossa equipe 24h está pronta para triagem imediata." },
  { id: 2, q: "O hospital realmente funciona em feriados?", a: "Sim. Operamos 24 horas por dia, 365 dias por ano, com equipe médica completa in-loco." },
  { id: 3, q: "Vocês atendem quais especialidades?", a: "Oferecemos Cardiologia, Dermatologia, Ortopedia, Oncologia e Neurologia com especialistas renomados." }
];

const NAV_LINKS = [
  { name: 'Início', href: '#início' },
  { name: 'Serviços', href: '#serviços' },
  { name: 'Diferenciais', href: '#sobre' },
  { name: 'Localização', href: '#localização' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' }
];

const SectionHeader = ({ subtitle, title, centered = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-20 ${centered ? 'text-center' : ''}`}
  >
    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-6 block">{subtitle}</span>
    <h2 className="text-4xl md:text-6xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic">{title}</h2>
  </motion.div>
);

const ServiceCard = ({ s, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
    whileHover={{ y: -10 }}
    className="group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl bg-clinic-text cursor-pointer hover:shadow-service transition-all duration-700"
  >
    <img 
      src={s.image} 
      alt={s.title} 
      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000 bg-primary/20" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-clinic-text via-transparent to-transparent opacity-90" />
    <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
      <div className="mb-4">
         <span className="bg-primary/90 px-3 py-1 rounded-full text-white text-[8px] font-black uppercase tracking-widest inline-block">{s.badge}</span>
      </div>
      <h3 className="text-3xl text-white font-serif font-black mb-4 tracking-tighter uppercase leading-none">{s.title}</h3>
      <p className="text-white/60 text-base mb-6 leading-relaxed italic line-clamp-2">{s.description}</p>
      <a href={`https://wa.me/5511999999999?text=Gostaria de saber mais sobre ${s.title}`} className="flex items-center gap-2 text-white font-black text-[9px] uppercase tracking-[0.2em] hover:gap-4 transition-all group/link">
        Agendar Consulta <ChevronRight size={14} className="text-primary group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    console.log("DUNO App Loaded - Animations Active");
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta na DUNO Veterinária.")}`;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* LOADING */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-8">
              <PawPrint size={70} />
            </motion.div>
            <h2 className="font-serif text-4xl font-bold tracking-[0.5em] text-white uppercase">{CLIENT_CONFIG.name}</h2>
            <div className="mt-10 w-48 h-1 bg-white/10 overflow-hidden rounded-full">
              <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-1/2 h-full bg-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[1000]" style={{ scaleX }} />

      {/* WHATSAPP CTA - PULSING */}
      <motion.a 
        href={whatsappUrl} 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-10 right-10 z-[200] bg-[#25D366] text-white p-6 rounded-[2rem] shadow-[0_30px_60px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all hidden lg:flex items-center gap-4 group"
      >
        <WhatsAppIcon size={24} /> 
        <span className="font-black text-xs uppercase tracking-widest hidden group-hover:inline-block transition-all">Atendimento 24h</span>
      </motion.a>

      {/* NAV */}
      <nav className={`fixed w-full z-[150] transition-all duration-700 ${isScrolled ? 'top-4 px-6' : 'top-0 px-0'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all ${isScrolled ? 'rounded-[2rem] bg-white/90 backdrop-blur-2xl py-4 px-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50' : 'bg-white/10 backdrop-blur-md py-10 px-12 border-b border-white/10'}`}>
          <a href="#início" className="flex items-center gap-4 group">
            <motion.div whileHover={{ rotate: 15 }} className="w-11 h-11 bg-primary text-white rounded-[1.1rem] flex items-center justify-center shadow-2xl">
              <PawPrint size={22} strokeWidth={3} />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl md:text-4xl font-black tracking-tighter text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-primary mt-1">Hospital de Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all relative group">
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary text-white h-12 px-8 rounded-2xl flex items-center gap-3 font-black text-[10px] uppercase tracking-widest hover:bg-clinic-text transition-all shadow-xl active:scale-95 transform hover:scale-105">
              <MessageCircle size={16} /> Agendar
            </a>
          </div>

          <button className="lg:hidden text-primary p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/5" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[1000] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-10">
               <span className="font-serif text-5xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-5 rounded-2xl"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-10 overflow-y-auto">
               {NAV_LINKS.map((link) => (
                 <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-white uppercase italic hover:text-primary transition-colors">{link.name}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-10 rounded-3xl text-center font-black tracking-[0.2em] uppercase text-2xl mt-10 shadow-2xl">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO - FIXING BLANK IMAGES */}
      <section id="início" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=1600&auto=format&fit=crop" 
            alt="Elite Clinical Hero" 
            className="w-full h-full object-cover brightness-[0.6] bg-primary/10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-full mb-10 shadow-2xl">
               <CheckCircle2 size={16} className="text-primary" strokeWidth={3} />
               <span className="text-[10px] font-black tracking-[0.5em] text-clinic-text uppercase">O Padrão Ouro da Medicina Veterinária</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black text-clinic-text leading-[0.8] tracking-tighter mb-12 uppercase italic">
              O Seu Pet <br /> <span className="text-primary not-italic">Encontra a Arte.</span>
            </h1>
            <p className="text-xl md:text-3xl font-bold text-clinic-text/60 mb-20 max-w-2xl leading-none uppercase tracking-tighter italic opacity-70">
              Hospital 24h especializado em medicina de alta tecnologia e cuidado humanitário.
            </p>
            <div className="flex flex-wrap gap-10">
               <motion.a 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 href={whatsappUrl} 
                 className="bg-primary text-white h-24 px-16 rounded-[2rem] flex items-center gap-6 font-black text-sm uppercase tracking-[0.3em] shadow-[0_40px_80px_rgba(27,67,50,0.3)] transition-all"
               >
                 Agendar Avaliação <ArrowRight size={28} />
               </motion.a>
               <div className="flex items-center gap-6 px-10 py-6 bg-white/40 backdrop-blur-2xl rounded-[2rem] border border-white/60">
                  <div className="flex text-amber-500 gap-1">
                     {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <span className="text-[11px] font-black text-clinic-text tracking-[0.2em] uppercase">Avaliação 4.9+ Google</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - INTERACTIVE GRID */}
      <section id="serviços" className="py-40 bg-white px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Procedimentos Técnicos" title="Cuidados Extraordinários." centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE - ANIMATED */}
      <section id="sobre" className="py-40 bg-clinic-bg px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-40 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[6rem] overflow-hidden shadow-premium border-[25px] border-white relative z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=1200&auto=format&fit=crop" 
                alt="Clinic Experience" 
                className="w-full aspect-square object-cover bg-primary/20 transition-transform duration-[3s] group-hover:scale-125" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl">
                    <Heart size={40} fill="currentColor" />
                 </div>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeader subtitle="Qualidade DUNO" title="O Melhor Para Quem Você Ama." />
            
            <div className="space-y-16">
              {[
                { t: "Hospital 24 Horas", i: <Clock className="text-primary" />, desc: "Suporte intensivo e equipe cirúrgica de prontidão permanente." },
                { t: "Monitoramento por Câmeras", i: <Activity className="text-primary" />, desc: "Acompanhe a recuperação do seu pet ao vivo via aplicativo." },
                { t: "Alta Tecnologia", i: <Microscope className="text-primary" />, desc: "Os algoritmos de medicina diagnóstica mais avançados do mundo." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-10 items-start group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl shrink-0 transition-all group-hover:bg-primary group-hover:text-white"
                  >
                    {item.i}
                  </motion.div>
                  <div>
                    <h4 className="text-[2.2rem] font-serif font-black text-clinic-text mb-2 uppercase tracking-tighter leading-none">{item.t}</h4>
                    <p className="text-xl font-bold text-clinic-text/40 leading-relaxed italic">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="localização" className="py-40 bg-white px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <SectionHeader subtitle="Itaim Bibi — SP" title="Onde Estamos." />
            <div className="space-y-12">
               <motion.div whileHover={{ x: 10 }} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all"><MapPin size={32} /></div>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-1">Endereço Hospitalar</h4>
                    <p className="text-xl font-bold text-clinic-text/40 uppercase leading-none">{CLIENT_CONFIG.address}</p>
                  </div>
               </motion.div>
               <motion.div whileHover={{ x: 10 }} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all"><Phone size={32} /></div>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-1">Central de Atendimento</h4>
                    <p className="text-xl font-bold text-clinic-text/40 uppercase leading-none">{CLIENT_CONFIG.phone}</p>
                  </div>
               </motion.div>
               <div id="contato" className="pt-10">
                  <a href={whatsappUrl} className="flex items-center gap-8 group/wa">
                     <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center group-hover/wa:bg-[#25D366] group-hover/wa:text-white transition-all"><WhatsAppIcon size={40} /></div>
                     <div className="flex flex-col">
                        <span className="text-xs font-black tracking-widest text-primary uppercase">Falar com Recepção 24h</span>
                        <span className="text-3xl font-serif font-black text-clinic-text">Clique para Iniciar</span>
                     </div>
                  </a>
               </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[600px] rounded-[5rem] overflow-hidden shadow-service border-[15px] border-clinic-bg group"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" title="DUNO Map" className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-40 bg-clinic-bg px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader subtitle="Dúvidas Frequentes" title="FAQ Clínica" centered />
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div 
                  className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm hover:shadow-xl transition-all border border-primary/5 cursor-pointer"
                  onClick={(e) => {
                    const el = e.currentTarget.querySelector('.answer');
                    el.classList.toggle('hidden');
                  }}
                >
                  <div className="flex justify-between items-center gap-10">
                    <h4 className="font-serif text-3xl md:text-4xl font-black text-clinic-text leading-tight tracking-tighter uppercase">{faq.q}</h4>
                    <Plus className="text-primary shrink-0" size={36} />
                  </div>
                  <div className="answer hidden mt-10 pt-10 border-t border-primary/5">
                    <p className="text-2xl font-bold text-clinic-text/40 leading-relaxed italic">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-clinic-text text-white py-40 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 items-start mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-12">
                <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center text-primary shadow-2xl transition-all"><PawPrint size={40} /></motion.div>
                <span className="font-serif text-7xl font-black tracking-tighter uppercase text-white">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-3xl font-serif font-black italic text-white/40 max-w-lg mb-16 uppercase leading-tight tracking-tight">O Padrão Ouro da Medicina Veterinária Brasileira. Hospital Itaim Bibi 24h.</p>
              <div className="flex gap-8">
                <motion.a whileHover={{ y: -5 }} href="#" className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={24} /></motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={24} /></motion.a>
              </div>
            </div>

            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-primary mb-12">Navegação</h4>
              <ul className="space-y-8 text-[11px] font-black tracking-[0.4em] text-white/30 uppercase">
                 {NAV_LINKS.map(l => (
                    <li key={l.name}><a href={l.href} className="hover:text-primary transition-all hover:translate-x-2 inline-block">{l.name}</a></li>
                 ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Hospital Central</h4>
              <div className="text-[11px] font-black tracking-[0.3em] text-white/20 uppercase leading-loose space-y-6">
                <p>{CLIENT_CONFIG.address}</p>
                <p>{CLIENT_CONFIG.phone}</p>
                <p className="text-primary font-black animate-pulse bg-white/5 p-4 rounded-xl border border-white/5">DIAGNÓSTICO 24H ATUALIZADO</p>
              </div>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 text-[10px] font-black tracking-[0.6em] text-white/5 text-center uppercase">
             © 2026 {CLIENT_CONFIG.name} ELITE PET CARE. DESIGN BY EXPERTS.
          </div>
        </div>
      </footer>
    </div>
  );
}
