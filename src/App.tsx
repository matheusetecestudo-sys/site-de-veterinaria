// Deployment: 2026-03-25T20:15:00Z - MASTER V6 (RE-ANIMATED + MAP + ABOUT + TRUST)
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
  ChevronRight,
  Heart,
  ShieldCheck,
  Award,
  Users,
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
  email: "clinica@duno.vet.br",
  cnpj: "12.345.678/0001-90",
  crmv: "CRMV-SP 54.321",
};

const SERVICES = [
  { id: "01", title: "Medicina do Futuro", description: "Diagnóstico completo com IA e suporte laboratorial imediato no Itaim Bibi.", image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800", badge: "Diagnóstico" },
  { id: "02", title: "Bloco Cirúrgico 24h", description: "Equipe sênior de cirurgiões e infraestrutura hospitalar de ponta.", image: "https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=800", badge: "Cirurgia" },
  { id: "03", title: "Internação de Elite", description: "Acomodações VIP monitoradas individualmente por câmeras 24 horas.", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800", badge: "UTI Pet" },
  { id: "04", title: "Check-up Integral", description: "Avaliação completa em um único dia para longevidade e saúde do pet.", image: "https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=800", badge: "Prevenção" },
];

const EXPERTS = [
  { name: "Dr. Roberto Silva", role: "Cirurgião Sênior", crmv: "CRMV-SP 123456", image: "https://images.unsplash.com/photo-1622253692010-333f2da6028d?q=80&w=400&auto=format&fit=crop" },
  { name: "Dra. Ana Costa", role: "Oncologista", crmv: "CRMV-SP 678901", image: "https://images.unsplash.com/photo-1594824476967-df4666cf308b?q=80&w=400&auto=format&fit=crop" },
  { name: "Dr. Carlos Lima", role: "Ortopedista", crmv: "CRMV-SP 112233", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" },
];

const FEATURES = [
  { t: "Plantão Hospitalar 24h", i: <Clock className="text-primary" />, desc: "Equipe de pronto atendimento sempre pronta.", img: "https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=600" },
  { t: "Laudos Via Smartphone", i: <Activity className="text-primary" />, desc: "Acompanhe tudo pelo celular.", img: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=600" },
  { t: "Centro de IA Médica", i: <Microscope className="text-primary" />, desc: "Diagnósticos acelerados por tecnologia.", img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600" },
  { t: "UTIs Humanizadas", i: <Heart className="text-primary" />, desc: "Ambiente calmo e silencioso.", img: "https://images.unsplash.com/photo-1628009142861-6ec649195d85?q=80&w=600" }
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
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#FCFBF9] font-sans selection:bg-primary selection:text-white overflow-x-hidden antialiased">
      {/* 24H EMERGENCY TOP BAR */}
      <div className="bg-[#B91C1C] text-white py-2 px-6 text-center text-[9px] font-black tracking-[0.4em] uppercase z-[200] relative">
        Hospital 24h Itaim Bibi — Urgência: (11) 99999-9999
      </div>

      {/* PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[300] origin-left" style={{ scaleX }} />

      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-6">
              <PawPrint size={56} />
            </motion.div>
            <h2 className="font-serif text-2xl font-black tracking-[0.4em] text-white uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP - ONLY LOGO */}
      <motion.a 
        href={whatsappUrl} target="_blank" rel="noreferrer" 
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[200] bg-[#25D366] text-white p-5 rounded-full shadow-2xl transition-all"
      >
        <WhatsAppIcon size={28} />
      </motion.a>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-[150] transition-all duration-500 ${isScrolled ? 'top-0 py-3 bg-white/95 backdrop-blur-md shadow-sm' : 'top-8 py-0 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-10">
          <a href="#início" className="flex items-center gap-3 group transition-transform hover:scale-105">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shrink-0">
              <PawPrint size={20} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tight text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[8px] font-black tracking-[0.4em] uppercase text-primary mt-0.5">Medicina de Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Sobre', 'Especialistas', 'Diferenciais', 'Contatos'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-11 px-6 rounded-lg flex items-center gap-2.5 font-black text-[10px] uppercase tracking-widest transition-all">
              <WhatsAppIcon size={14} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden p-3 rounded-lg bg-white/90 shadow-md text-primary" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[200] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-16">
               <span className="font-serif text-3xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-3 rounded-xl"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-10">
               {['Sobre', 'Especialistas', 'Diferenciais', 'Contatos'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-black text-white uppercase">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-8 rounded-2xl text-center font-black tracking-widest uppercase text-lg mt-10 flex items-center justify-center gap-3"><WhatsAppIcon size={20} /> Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="início" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden px-10 lg:px-24 bg-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1600" alt="Veterinary Hub" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <FadeIn>
            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6 block">Hospital Veterinário Itaim Bibi</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-clinic-text leading-tight tracking-tighter mb-8 uppercase italic">
              O Seu Pet <br /> <span className="text-primary not-italic">Merece a Medicina de Elite.</span>
            </h1>
            <p className="text-base font-bold text-clinic-text/60 mb-12 max-w-xl leading-relaxed uppercase tracking-tight opacity-70">
              Infraestrutura tecnológica 24h para diagnósticos precisos e cuidados humanizados.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
               <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-16 px-10 rounded-xl flex items-center gap-4 font-black text-[11px] uppercase tracking-[0.2em] shadow-lg transition-all">
                 <WhatsAppIcon size={20} /> Mandar Mensagem No WhatsApp
               </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SOBRE A EMPRESA */}
      <section id="sobre" className="py-24 bg-white px-10 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <img src="https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=1000" alt="Sobre a DUNO" className="rounded-3xl shadow-xl aspect-video object-cover" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase mb-8 block">Sobre o Hospital</span>
            <h2 className="text-4xl font-serif font-black text-clinic-text tracking-tighter uppercase mb-8 italic leading-none">A DUNO: <span className="text-primary not-italic">Tradição e Inovação.</span></h2>
            <p className="text-sm font-bold text-clinic-text/50 uppercase leading-relaxed mb-8 italic">Fundada no coração de São Paulo, a DUNO nasceu para redefinir o cuidado hospitalar animal, unindo especialistas renomados e o que há de mais avançado em tecnologia médica veterinária.</p>
            <div className="grid grid-cols-2 gap-8 text-center bg-[#F5F3F0] p-8 rounded-3xl">
               <div><span className="block text-3xl font-serif font-black text-primary">15+</span><span className="text-[8px] font-black uppercase text-clinic-text/40 tracking-widest">Anos de História</span></div>
               <div><span className="block text-3xl font-serif font-black text-primary">24h</span><span className="text-[8px] font-black uppercase text-clinic-text/40 tracking-widest">Sempre Abertos</span></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ESPECIALISTAS - HIGHER PROMINENCE */}
      <section id="especialistas" className="py-24 bg-[#F5F3F0] px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">Nosso Corpo Clínico</span>
             <h2 className="text-5xl font-serif font-black text-clinic-text tracking-tighter uppercase italic">Mestres em <span className="text-primary not-italic">Medicina Animal.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {EXPERTS.map((doc, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-xl mb-8 border-4 border-white">
                   <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-clinic-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-8">
                      <p className="text-white text-[10px] font-black uppercase tracking-widest leading-relaxed">Referência acadêmica e clínica com foco em bem-estar e precisão.</p>
                   </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-serif font-black text-clinic-text uppercase mb-2 tracking-tight">{doc.name}</h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-1">{doc.role}</p>
                  <p className="text-[9px] font-black text-black/20 uppercase tracking-[0.2em]">{doc.crmv}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS TÉCNICOS - WITH IMAGES */}
      <section id="diferenciais" className="py-24 bg-white px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-8 block font-black leading-none uppercase">Engenharia Hospitalar</span>
             <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text tracking-tighter uppercase italic leading-tight">Diferenciais <span className="text-primary not-italic">Competitivos.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-black/[0.05] group">
                <div className="h-40 overflow-hidden relative">
                   <img src={item.img} alt={item.t} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 bg-[#F5F3F0] rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                     {item.i}
                  </div>
                  <h4 className="text-base font-serif font-black text-clinic-text mb-2 uppercase tracking-tight">{item.t}</h4>
                  <p className="text-[11px] font-bold text-clinic-text/40 leading-relaxed italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO & MAP - RESTORED */}
      <section id="contatos" className="py-24 bg-[#F5F3F0] px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start mb-20">
             <div className="lg:col-span-1">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-8 block uppercase">Onde Estamos</span>
                <h2 className="text-5xl font-serif font-black text-clinic-text tracking-tighter italic uppercase mb-12">Itaim Bibi <br/><span className="text-primary not-italic text-3xl">São Paulo - SP.</span></h2>
                <div className="space-y-6">
                   <div className="flex gap-5"><MapPin className="text-primary shrink-0" size={24} /> <p className="text-xs font-bold uppercase text-clinic-text/50">{CLIENT_CONFIG.address}</p></div>
                   <div className="flex gap-5"><Phone className="text-primary shrink-0" size={24} /> <p className="text-xs font-bold uppercase text-clinic-text/50">{CLIENT_CONFIG.phone}</p></div>
                </div>
                <a href={whatsappUrl} className="mt-12 group flex items-center gap-4 bg-primary text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-all text-sm font-black uppercase tracking-widest">
                   <WhatsAppIcon size={24} /> Chamar no WhatsApp
                </a>
             </div>
             <div className="lg:col-span-2 h-[450px] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white group">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER - CLEAN & PROFESSIONAL */}
      <footer className="bg-clinic-text text-white pt-24 pb-12 px-10 md:px-16">
        <div className="max-w-6xl mx-auto border-b border-white/5 pb-20 mb-12">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center"><PawPrint size={20} /></div>
                    <span className="font-serif text-3xl font-black uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
                 </div>
                 <p className="text-xl font-serif font-black italic text-white/30 leading-tight uppercase mb-10">Medicina veterinária de elite e cuidado humanizado 24h.</p>
                 <div className="flex gap-8">
                    <a href="#" className="text-white/40 hover:text-primary transition-all"><Instagram size={28} /></a>
                    <a href="#" className="text-white/40 hover:text-primary transition-all"><Facebook size={28} /></a>
                    <a href="#" className="text-white/40 hover:text-primary transition-all"><Linkedin size={28} /></a>
                 </div>
              </div>
              <div className="lg:col-span-1">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-10 underline decoration-primary decoration-2 underline-offset-8">Mapa</h4>
                 <ul className="space-y-4 text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">
                    <li><a href="#sobre" className="hover:text-white transition-all">Sobre</a></li>
                    <li><a href="#especialistas" className="hover:text-white transition-all">Equipe</a></li>
                    <li><a href="#diferenciais" className="hover:text-white transition-all">Diferenciais</a></li>
                    <li><a href="#contatos" className="hover:text-white transition-all">Contatos</a></li>
                 </ul>
              </div>
              <div className="lg:col-span-1">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-10">Unidade SP</h4>
                 <div className="space-y-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.1em] italic">
                    <p className="flex gap-4"><MapPin size={12} className="text-primary mt-1" /> {CLIENT_CONFIG.address}</p>
                    <p className="flex gap-4 text-primary bg-primary/10 p-5 rounded-2xl border border-white/5"><Award size={12} /> {CLIENT_CONFIG.crmv} | Prof. Resp. Dr Jr</p>
                 </div>
              </div>
              <div className="lg:col-span-1">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-10">Urgência</h4>
                 <p className="text-[10px] font-bold text-white/10 uppercase mb-8 italic leading-relaxed">Pronto atendimento hospitalar in-loco 24 horas por dia em São Paulo.</p>
                 <div className="text-5xl font-serif font-black text-white/10 italic tracking-tighter uppercase leading-none">HOSPITAL 24H</div>
              </div>
           </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:row justify-between items-center text-[8px] font-black text-white/5 uppercase tracking-[0.6em] gap-8">
           <p>© 2026 {CLIENT_CONFIG.name} HOSPITAL VETERINÁRIO. CNPJ: {CLIENT_CONFIG.cnpj}</p>
           <div className="flex gap-12">
              <a href="#" className="hover:text-white">DIRETRIZES ÉTICAS</a>
              <a href="#" className="hover:text-white">PRIVACIDADE</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
