// Deployment: 2026-03-25T20:20:00Z - STABLE IMAGE RECOVERY + CONTRAST FIX (V7 - 10/10)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Star, 
  Menu, 
  X, 
  Clock,
  MapPin,
  Phone,
  Activity,
  Microscope,
  PawPrint,
  Heart,
  ShieldCheck,
  Award,
  Instagram,
  Facebook,
  Linkedin,
  Plus
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CLIENT_CONFIG = {
  name: "DUNO",
  whatsapp: "5511999999999",
  address: "Rua Joaquim Floriano, 72 - Itaim Bibi, SP",
  phone: "(11) 99999-9999",
  email: "contato@duno.vet.br",
  cnpj: "12.345.678/0001-90",
  crmv: "CRMV-SP 54.321",
};

// RELIABLE IMAGE IDS FOR VETERINARY HUB
const EXPERTS = [
  { name: "Dr. Roberto Silva", role: "Cirurgião Sênior", crmv: "CRMV-SP 123456", image: "https://images.unsplash.com/photo-1559839734-2b71f1e3b778?q=80&w=400&auto=format&fit=crop" },
  { name: "Dra. Ana Costa", role: "Oncologista", crmv: "CRMV-SP 678901", image: "https://images.unsplash.com/photo-1594824476967-df4666cf308b?q=80&w=400&auto=format&fit=crop" },
  { name: "Dr. Carlos Lima", role: "Ortopedista", crmv: "CRMV-SP 112233", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" },
];

const FEATURES = [
  { t: "Plantão Hospitalar 24h", i: <Clock className="text-primary" />, desc: "Equipe de pronto atendimento sênior.", img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600" },
  { t: "Laudos Via Smartphone", i: <Activity className="text-primary" />, desc: "Acompanhe tudo pelo seu celular.", img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=600" },
  { t: "Centro de IA Médica", i: <Microscope className="text-primary" />, desc: "Precisão acelerada por tecnologia.", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600" },
  { t: "UTIs Humanizadas", i: <Heart className="text-primary" />, desc: "Ambiente silencioso e aquecido.", img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600" }
];

const FAQS = [
  { id: 1, q: "Como agendar um atendimento na DUNO?", a: "O agendamento é feito instantaneamente via WhatsApp. Nossa equipe 24h está pronta para triagem imediata." },
  { id: 2, q: "O hospital realmente funciona em feriados?", a: "Sim. Operamos 24 horas por dia, 365 dias por ano, com equipe médica completa in-loco." },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(timer); };
  }, []);

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta na DUNO Veterinária.")}`;

  const FadeIn = ({ children, delay = 0 }) => (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-primary selection:text-white overflow-x-hidden antialiased">
      {/* 24H EMERGENCY TOP BAR */}
      <div className="bg-[#B91C1C] text-white py-2 px-6 text-center text-[9px] font-black tracking-[0.4em] uppercase z-[250] relative">
        Hospital 24h Pinheiros/Itaim Bibi — Urgência: (11) 99999-9999
      </div>

      {/* PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[300] origin-left shadow-lg" style={{ scaleX }} />

      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-6">
               <PawPrint size={56} />
            </motion.div>
            <h2 className="font-serif text-2xl font-black tracking-[0.5em] text-white uppercase italic">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP - ICON ONLY */}
      <motion.a 
        href={whatsappUrl} target="_blank" rel="noreferrer" 
        whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-[200] bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center"
      >
        <WhatsAppIcon size={32} />
      </motion.a>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-[150] transition-all duration-700 ${isScrolled ? 'top-0 py-3 bg-white/95 backdrop-blur-md shadow-md border-b border-black/5' : 'top-8 py-0 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-10">
          <a href="#início" className="flex items-center gap-4 group transition-transform hover:scale-105">
            <div className="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shrink-0">
              <PawPrint size={22} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-black tracking-tight text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-primary mt-1">Hospital de Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Sobre', 'Especialistas', 'Diferenciais', 'Contatos'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all relative group h-10 flex items-center">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-11 px-7 rounded-lg flex items-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all transform hover:scale-105">
              <WhatsAppIcon size={16} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden p-3 rounded-lg bg-white/90 shadow-xl text-primary" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[200] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-10">
               <span className="font-serif text-4xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-4 rounded-xl"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-10">
               {['Sobre', 'Especialistas', 'Diferenciais', 'Contatos'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-white uppercase hover:text-primary transition-colors">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-10 rounded-3xl text-center font-black tracking-widest uppercase text-xl mt-12 flex items-center justify-center gap-4"><WhatsAppIcon size={24} /> Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="início" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden px-10 lg:px-24 bg-[#E5E7EB]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1600&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <FadeIn>
            <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase mb-8 block bg-white/40 backdrop-blur-md w-fit px-4 py-1.5 rounded-full border border-white/50 shadow-sm leading-none">Excelência Hospitalar no Itaim Bibi</span>
            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif font-black text-clinic-text leading-tight tracking-[calc(-0.025em)] mb-10 uppercase italic">
              O Seu Pet <br /> <span className="text-primary not-italic inline-block mt-2">Encontra o Cuidado de Elite.</span>
            </h1>
            <p className="text-base md:text-lg font-bold text-clinic-text/60 mb-14 max-w-xl leading-relaxed uppercase tracking-tight opacity-80">
              Corpo clínico especializado e tecnologia diagnóstica 24h para quem é família.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
               <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-16 px-12 rounded-xl flex items-center gap-5 font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(27,67,50,0.2)] transition-all transform hover:scale-105">
                 <WhatsAppIcon size={24} /> Enviar Mensagem No WhatsApp
               </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SOBRE A EMPRESA - FIXED IMAGE */}
      <section id="sobre" className="py-28 bg-white px-10 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-clinic-bg border border-black/5 group">
              <img src="https://images.unsplash.com/photo-1532187863486-3f91ad9b0c78?q=80&w=1000&auto=format&fit=crop" alt="Estrutura DUNO" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-[2s]" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase mb-10 block leading-none">A Instituição DUNO</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text tracking-[calc(-0.02em)] uppercase mb-10 italic leading-[1.1]">História de <span className="text-primary not-italic">Amor e Tecnologia.</span></h2>
            <p className="text-sm font-bold text-clinic-text/50 uppercase leading-relaxed mb-10 italic tracking-tight">Fundada para redefinir a medicina veterinária, a DUNO combina o acolhimento de uma clínica tradicional com a precisão de um hospital de alta complexidade in-loco.</p>
            <div className="grid grid-cols-2 gap-10 text-center bg-[#F7F6F4] p-10 rounded-[2rem] border border-black/5 shadow-inner">
               <div className="border-r border-black/5">
                 <span className="block text-4xl font-serif font-black text-primary leading-none mb-2 italic">15+</span>
                 <span className="text-[9px] font-black uppercase text-clinic-text/40 tracking-[0.3em]">Anos de <br/> Referência</span>
               </div>
               <div>
                 <span className="block text-4xl font-serif font-black text-primary leading-none mb-2 italic">24h</span>
                 <span className="text-[9px] font-black uppercase text-clinic-text/40 tracking-[0.3em]">Medicina <br/> Ininterrupta</span>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ESPECIALISTAS - RELIABLE IMAGES */}
      <section id="especialistas" className="py-28 bg-[#F7F6F4] px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[10px] font-black uppercase tracking-[0.7em] text-primary mb-8 block leading-none">Corpo Clínico Sênior</span>
             <h2 className="text-5xl font-serif font-black text-clinic-text tracking-tighter uppercase italic leading-none">Mestres em <span className="text-primary not-italic">Vida Animal.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {EXPERTS.map((doc, i) => (
              <motion.div key={i} whileHover={{ y: -15 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] shadow-premium mb-10 border-[10px] border-white bg-clinic-bg ring-1 ring-black/5">
                   <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-clinic-text/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                      <p className="text-white text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed italic">Atendimento focado em precisão técnica e segurança emocional do seu pet.</p>
                   </div>
                </div>
                <div className="text-center px-4">
                  <h4 className="text-3xl font-serif font-black text-clinic-text uppercase mb-2 tracking-tighter leading-none italic">{doc.name}</h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-2">{doc.role}</p>
                  <p className="text-[9px] font-black text-black/20 uppercase tracking-[0.3em]">{doc.crmv}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS TÉCNICOS - FIXED IMAGES & BACKGROUNDS */}
      <section id="diferenciais" className="py-28 bg-white px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
             <span className="text-[11px] font-black uppercase tracking-[0.8em] text-primary mb-10 block font-black leading-none uppercase italic">A Engenharia do Cuidado</span>
             <h2 className="text-4xl md:text-[4rem] font-serif font-black text-clinic-text tracking-tighter uppercase mb-4 italic leading-none">Diferenciais <span className="text-primary not-italic">Competitivos.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {FEATURES.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="bg-[#FDFCFB] rounded-[2.5rem] overflow-hidden shadow-xl border border-black/[0.04] group transition-all hover:shadow-premium">
                <div className="h-44 overflow-hidden relative bg-clinic-bg">
                   <img src={item.img} alt={item.t} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
                <div className="p-10">
                  <div className="w-12 h-12 bg-clinic-bg border border-black/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12 shadow-sm">
                     {item.i}
                  </div>
                  <h4 className="text-lg font-serif font-black text-clinic-text mb-3 uppercase tracking-tight leading-none italic">{item.t}</h4>
                  <p className="text-[11px] font-bold text-clinic-text/40 leading-relaxed italic uppercase tracking-tight opacity-70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO & MAP */}
      <section id="contatos" className="py-28 bg-[#F7F6F4] px-10 md:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-stretch">
           <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[10px] font-black uppercase tracking-[0.7em] text-primary mb-10 block uppercase leading-none">Unidade Itaim Bibi</span>
              <h2 className="text-5xl font-serif font-black text-clinic-text tracking-tighter italic uppercase mb-14 leading-none decoration-primary/20 decoration-8 underline underline-offset-8">São Paulo <br/><span className="text-primary not-italic text-4xl block mt-4">Atendimento 24h.</span></h2>
              <div className="space-y-10 mb-16 bg-white p-10 rounded-[2rem] shadow-sm border border-black/5">
                 <div className="flex gap-6 items-start group cursor-pointer transition-all hover:translate-x-2">
                    <MapPin className="text-primary shrink-0 transition-transform group-hover:scale-110" size={28} /> 
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-clinic-text mb-1">Localização Central</h4>
                      <p className="text-[11px] font-bold uppercase text-clinic-text/40 leading-relaxed italic">{CLIENT_CONFIG.address}</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start group cursor-pointer transition-all hover:translate-x-2">
                    <Phone className="text-primary shrink-0 transition-transform group-hover:scale-110" size={28} /> 
                    <div>
                       <h4 className="text-xs font-black uppercase tracking-widest text-clinic-text mb-1">Central de Triagem</h4>
                       <p className="text-[11px] font-bold uppercase text-clinic-text/40 leading-relaxed italic">{CLIENT_CONFIG.phone} — {CLIENT_CONFIG.email}</p>
                    </div>
                 </div>
              </div>
              <a href={whatsappUrl} className="group relative overflow-hidden bg-clinic-text text-white p-7 rounded-[1.5rem] shadow-2xl transition-all hover:scale-[1.03] text-sm font-black uppercase tracking-[0.4em] flex items-center justify-center gap-5">
                 <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <WhatsAppIcon size={24} className="relative z-10" /> <span className="relative z-10">Mover para o WhatsApp</span>
              </a>
           </div>
           <div className="lg:col-span-7 h-[550px] lg:h-auto min-h-[500px] rounded-[4rem] overflow-hidden shadow-premium border-[15px] border-white group relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" className="grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000"></iframe>
           </div>
        </div>
      </section>

      {/* FOOTER - TECHNICAL & CONTRAST FIX */}
      <footer className="bg-clinic-text text-[#E5E7EB] pt-32 pb-16 px-10 md:px-16 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto border-b border-white/5 pb-24 mb-16 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl ring-2 ring-white/10"><PawPrint size={24} /></div>
                    <span className="font-serif text-5xl font-black text-white tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
                 </div>
                 <p className="text-2xl font-serif font-black italic text-white/30 leading-tight uppercase mb-12 tracking-tight">Cuidando da vida animal com a precisão exigida pela medicina moderna.</p>
                 <div className="flex gap-10">
                    <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:-translate-y-2"><Instagram size={36} /></a>
                    <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:-translate-y-2"><Facebook size={36} /></a>
                 </div>
              </div>
              <div>
                 <h4 className="text-[11px] font-black uppercase tracking-[0.6em] text-primary mb-12 underline decoration-primary/40 decoration-4 underline-offset-8">Mapa Institucional</h4>
                 <ul className="space-y-6 text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] font-black">
                    <li><a href="#sobre" className="hover:text-white transition-all flex items-center gap-2">A Instituição</a></li>
                    <li><a href="#especialistas" className="hover:text-white transition-all flex items-center gap-2">Mestres Clínicos</a></li>
                    <li><a href="#diferenciais" className="hover:text-white transition-all flex items-center gap-2">Infraestrutura</a></li>
                    <li><a href="#contatos" className="hover:text-white transition-all flex items-center gap-2">Agendamento</a></li>
                 </ul>
              </div>
              <div>
                 <h4 className="text-[11px] font-black uppercase tracking-[0.7em] text-white/30 mb-12">Ética & Dados</h4>
                 <div className="space-y-8 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] italic">
                    <p className="flex gap-4"><MapPin size={14} className="text-primary mt-1 shrink-0" /> {CLIENT_CONFIG.address}</p>
                    <p className="flex gap-4 text-primary bg-primary/5 p-6 rounded-2xl border border-white/5 leading-relaxed tracking-[0.1em] shadow-inner"><Award size={14} className="shrink-0" /> {CLIENT_CONFIG.crmv} <br/> Resp: Dr. Veterinário Jr</p>
                 </div>
              </div>
              <div className="flex flex-col">
                 <h4 className="text-[11px] font-black uppercase tracking-[0.7em] text-white/30 mb-12 underline decoration-white/10 underline-offset-8">Operação 24h</h4>
                 <p className="text-[10px] font-bold text-white/20 uppercase mb-10 italic leading-relaxed tracking-tight">Pronto atendimento hospitalar sênior in-loco todos os dias no coração de São Paulo.</p>
                 <div className="text-[3.5rem] font-serif font-black text-white/5 italic tracking-tighter uppercase leading-none mt-auto select-none">HOSPITAL</div>
              </div>
           </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:row justify-between items-center text-[10px] font-black text-white/10 uppercase tracking-[0.7em] gap-10 relative z-10">
           <p className="text-center">© 2026 {CLIENT_CONFIG.name} HOSPITAL VETERINÁRIO. CNPJ: {CLIENT_CONFIG.cnpj}</p>
           <div className="flex gap-12 font-black">
              <a href="#" className="hover:text-white">CONSELHO FEDERAL</a>
              <a href="#" className="hover:text-white">PRIVACIDADE</a>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] z-0 pointer-events-none" />
      </footer>
    </div>
  );
}
