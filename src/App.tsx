// Deployment: 2026-03-25T20:45:00Z - STABLE TOTAL CLONE + MAP + FADEIN FIX (V8 - 10/10)
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
  CheckCircle2,
  ChevronRight,
  Heart,
  ShieldCheck,
  Award,
  Users,
  Instagram,
  Facebook,
  Linkedin,
  Plus,
  ArrowRight,
  Quote
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

const SERVICES = [
  { id: 1, t: "Pronto Socorro 24h", b: "Urgência", i: "https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=400" },
  { id: 2, t: "Bloco Cirúrgico", b: "Alta Complexidade", i: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=400" },
  { id: 3, t: "Diagnóstico AI", b: "Medicina do Futuro", i: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400" },
  { id: 4, t: "UTI Monitorada", b: "Suporte Vital", i: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400" },
  { id: 5, t: "Check-up Sênior", b: "Prevenção", i: "https://images.unsplash.com/photo-1559839734-2b71f1e3b778?q=80&w=400" },
  { id: 6, t: "Oncologia Pet", b: "Especialidades", i: "https://images.unsplash.com/photo-1594824476967-df4666cf308b?q=80&w=400" },
  { id: 7, t: "Odontologia", b: "Saúde Oral", i: "https://images.unsplash.com/photo-1628009142861-6ec649195d85?q=80&w=400" },
  { id: 8, t: "Gastroenterologia", b: "Clínica", i: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400" },
  { id: 9, t: "Neurologia", b: "Referência", i: "https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=400" },
  { id: 10, t: "Dermatologia", b: "Cuidado", i: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=400" },
  { id: 11, t: "Ortopedia", b: "Mobilidade", i: "https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=400" },
  { id: 12, t: "Nutrologia", b: "Base de Tudo", i: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=400" },
];

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }}>
    {children}
  </motion.div>
);

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

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de um atendimento na DUNO.")}`;

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-[#1A2E24] selection:bg-[#2D6A4F] selection:text-white antialiased overflow-x-hidden">
      {/* 24H BAR */}
      <div className="bg-[#B91C1C] text-white py-2 px-6 text-center text-[8px] font-black tracking-[0.4em] uppercase z-[300] relative">
        Hospital 24h em Operação — Agendamento Imediato no Itaim Bibi
      </div>

       {/* PROGRESS BAR */}
       <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#2D6A4F] z-[400] origin-left shadow-lg" style={{ scaleX }} />

      {/* LOADING */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-[#1A2E24] flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-6">
               <PawPrint size={56} />
            </motion.div>
            <h2 className="font-serif text-3xl font-black tracking-[0.6em] text-white uppercase italic">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP */}
      <motion.a 
        href={whatsappUrl} target="_blank" rel="noreferrer" 
        whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-[200] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center"
      >
        <WhatsAppIcon size={32} />
      </motion.a>

      {/* HEADER */}
      <nav className={`fixed w-full z-[150] transition-all duration-700 ${isScrolled ? 'top-0 py-3 bg-white/95 backdrop-blur-lg shadow-sm' : 'top-8 py-0 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10">
          <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="w-10 h-10 bg-[#2D6A4F] text-white rounded-xl flex items-center justify-center shadow-lg"><PawPrint size={20} /></div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-black tracking-tight text-[#1A2E24] uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#2D6A4F] mt-1 leading-none">Hospital Veterinário</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {['Início', 'Serviços', 'Experiência', 'Diferenciais'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1A2E24]/60 hover:text-[#2D6A4F] transition-all relative group h-10 flex items-center">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D6A4F] transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-[#2D6A4F] hover:bg-[#1A2E24] text-white h-11 px-10 rounded-full flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all shadow-xl">
              Agendar Agora
            </a>
          </div>

          <button className="lg:hidden p-3 text-[#2D6A4F]" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[200] bg-[#1A2E24] flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-20 border-b border-white/5 pb-10">
               <span className="font-serif text-4xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2"><X size={36} /></button>
            </div>
            <div className="flex flex-col gap-12">
               {['Início', 'Serviços', 'Experiência', 'Diferenciais'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif font-black text-white uppercase">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-[#2D6A4F] text-white p-10 rounded-full text-center font-black tracking-widest uppercase text-xl mt-12 flex items-center justify-center gap-4 shadow-xl">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="início" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden px-10 lg:px-24 bg-[#E5E7EB]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1600&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <FadeIn>
            <span className="text-[11px] font-black tracking-[0.6em] text-[#2D6A4F] uppercase mb-8 block leading-none">Engenharia Hospitalar de Elite</span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black text-[#1A2E24] leading-[1] tracking-tighter mb-10 uppercase italic">
              Excelência <br /> <span className="text-[#2D6A4F] not-italic text-[0.9em]">que seu pet sente.</span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-[#1A2E24]/50 mb-14 max-w-xl leading-relaxed uppercase tracking-tight italic">
              Infraestrutura hospitalar de alta complexidade e corpo clínico sênior 24 horas por dia.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
               <a href={whatsappUrl} className="bg-[#2D6A4F] hover:bg-[#1A2E24] text-white h-16 px-14 rounded-full flex items-center gap-4 font-black text-xs uppercase tracking-[0.4em] shadow-2xl transition-all transform hover:scale-105">
                 Falar com Recepcionista <ArrowRight size={18} />
               </a>
            </div>
            
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                 { v: "22+", t: "Especialidades" },
                 { v: "15k+", t: "Pacientes" },
                 { v: "100%", t: "Suporte 24h" },
                 { v: "4.9", t: "Avaliações" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col border-l border-black/5 pl-8">
                    <span className="text-4xl font-serif font-black text-[#2D6A4F] leading-none mb-1">{stat.v}</span>
                    <span className="text-[9px] font-bold text-black/20 uppercase tracking-[0.4em]">{stat.t}</span>
                 </div>
               ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section id="hospital" className="py-28 bg-white px-10 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn>
             <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-premium border-[20px] border-white z-10 relative group">
                   <img src="https://images.unsplash.com/photo-1559839734-2b71f1e3b778?q=80&w=800" alt="Medicina" className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[2rem] shadow-2xl z-20 hidden lg:block border border-black/5">
                   <span className="text-4xl font-serif font-black text-[#2D6A4F] leading-none block italic">15 Anos</span>
                   <span className="text-[10px] font-black uppercase text-black/30 tracking-[0.5em] mt-2 block">Dedicados à Vida</span>
                </div>
             </div>
          </FadeIn>
          <FadeIn delay={0.2}>
             <span className="text-[11px] font-black tracking-[0.8em] text-[#2D6A4F] uppercase mb-10 block">Hospital Veterinário DUNO</span>
             <h2 className="text-5xl md:text-7xl font-serif font-black text-[#1A2E24] leading-tight tracking-tighter uppercase italic mb-12 leading-none text-left">Medicina de <span className="text-[#2D6A4F] not-italic">Elite.</span></h2>
             <div className="space-y-8 text-sm font-bold text-[#1A2E24]/40 uppercase leading-relaxed italic tracking-tight mb-16 border-l-4 border-[#2D6A4F]/20 pl-10">
                <p>O Hospital Veterinário DUNO é o resultado de uma visão hospitalar focada em diagnósticos por imagem e UTIs de suporte vital. Localizado no Itaim Bibi, somos referência em cirurgias de alta complexidade.</p>
                <p>Nossa missão é aplicar a ciência médica veterinária com o mais alto rigor técnico e amor incondicional.</p>
             </div>
             <a href={whatsappUrl} className="bg-[#2D6A4F] hover:bg-[#1A2E24] text-white h-12 px-12 rounded-full inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all shadow-xl">
                Conhecer Nossos Especialistas <WhatsAppIcon size={16} />
             </a>
          </FadeIn>
        </div>
      </section>

      {/* SERVICE MOSAIC */}
      <section id="serviços" className="py-24 bg-[#F2F4F2] px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
             <span className="text-[11px] font-black tracking-[1em] text-[#2D6A4F] uppercase mb-10 block font-black leading-none italic uppercase">Mosaic Clinical Grid</span>
             <h2 className="text-5xl md:text-[5rem] font-serif font-black text-[#1A2E24] tracking-tighter uppercase italic leading-none">Nosso <span className="text-[#2D6A4F] not-italic">Escopo.</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
             {SERVICES.map((s, i) => (
               <motion.div
                 key={s.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="group relative h-64 md:h-80 overflow-hidden rounded-[2.5rem] shadow-sm bg-[#1A2E24] cursor-pointer"
               >
                 <img src={s.i} alt={s.t} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-1000 transform group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E24] via-transparent to-transparent opacity-90" />
                 <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                    <span className="bg-[#2D6A4F] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">{s.b}</span>
                    <h3 className="text-xl text-white font-serif font-black leading-tight uppercase tracking-tighter group-hover:text-[#2D6A4F] transition-colors">{s.t}</h3>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiência" className="py-28 bg-white px-10 md:px-16 border-y border-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div className="order-2 lg:order-1">
              <span className="text-[11px] font-black tracking-[0.8em] text-[#2D6A4F] uppercase mb-10 block leading-none">Engenharia Hospitalar</span>
              <h2 className="text-5xl md:text-[4.5rem] font-serif font-black text-[#1A2E24] leading-[1] tracking-tighter mb-10 uppercase italic">Tecnologia ao <br/> seu <span className="text-[#2D6A4F] not-italic">Lado.</span></h2>
              <p className="text-sm font-bold text-[#1A2E24]/40 uppercase leading-relaxed mb-16 italic max-w-lg">Sistemas de suporte vital, diagnósticos acelerados por inteligência artificial e monitoramento remoto de pacientes críticos.</p>
              <div className="flex flex-wrap gap-8">
                 {[
                   { i: <Activity />, t: "Monitoramento 24h" },
                   { i: <ShieldCheck />, t: "Assepsia Hospitalar" },
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center gap-4 text-[#1A2E24]/60">
                      <div className="w-12 h-12 rounded-2xl bg-[#F2F4F2] flex items-center justify-center text-[#2D6A4F]">{feat.i}</div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{feat.t}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 h-[550px]">
              <div className="h-full rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-[#FDFCFB]"><img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=600" className="w-full h-full object-cover" /></div>
              <div className="grid grid-rows-2 gap-6 h-full">
                 <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#FDFCFB]"><img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600" className="w-full h-full object-cover" /></div>
                 <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#FDFCFB]"><img src="https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=600" className="w-full h-full object-cover" /></div>
              </div>
           </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-[#F5F3F0] px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <span className="text-[11px] font-black tracking-[1em] text-[#2D6A4F] uppercase mb-10 block leading-none underline decoration-[#2D6A4F] underline-offset-8">Relatos Reais</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-[#1A2E24] leading-tight tracking-tighter uppercase italic">Casos de <span className="text-[#2D6A4F] not-italic">Sucesso Médico.</span></h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { n: "Isabela Santos", t: "O atendimento 24h na emergência foi fundamental para salvar minha calopsita. Profissionais nota 10.", r: "Tutora" },
                { n: "Marcos Oliveira", t: "Infraestrutura de ponta. Fizemos a cirurgia do Max e a recuperação foi assistida por câmeras. Muito seguro.", r: "Tutor" },
                { n: "Paula Regina", t: "Equipe técnica excelente e tratamento humanizado. A melhor clínica do Itaim Bibi para casos graves.", r: "Tutora" }
              ].map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                   <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-black/[0.03] h-full flex flex-col justify-between group hover:shadow-premium transition-all">
                      <div>
                         <Quote className="text-[#2D6A4F]/10 mb-10 group-hover:text-[#2D6A4F]/40 transition-colors" size={64} fill="currentColor" />
                         <p className="text-xl font-bold text-[#1A2E24]/60 italic leading-relaxed mb-12 tracking-tight">"{t.t}"</p>
                      </div>
                      <div className="flex items-center gap-6 border-t border-black/5 pt-10">
                         <div className="w-14 h-14 bg-[#2D6A4F]/10 text-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner"><Users size={24} /></div>
                         <div className="flex flex-col">
                            <span className="text-sm font-black uppercase text-[#1A2E24] leading-none">{t.n}</span>
                            <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] mt-2">{t.r}</span>
                         </div>
                      </div>
                   </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* MAP SECTION - RESTORED */}
      <section id="contatos" className="py-28 bg-white px-10 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-stretch">
           <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#2D6A4F] mb-10 block leading-none">Unidade Itaim Bibi</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-[#1A2E24] tracking-tighter italic uppercase mb-16 leading-none">Itaim Bibi <br/><span className="text-[#2D6A4F] not-italic text-[0.6em] block mt-6 font-black leading-none">Medicina Veterinária 24h.</span></h2>
              <div className="space-y-10 mb-16 bg-[#FDFCFB] p-10 rounded-[2.5rem] shadow-sm border border-black/5">
                 <div className="flex gap-6 items-start">
                    <MapPin className="text-[#2D6A4F] shrink-0" size={28} /> 
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#1A2E24] mb-1">Localização Principal</h4>
                      <p className="text-[12px] font-bold uppercase text-black/40 leading-relaxed italic">{CLIENT_CONFIG.address}</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <Phone className="text-[#2D6A4F] shrink-0" size={28} /> 
                    <div>
                       <h4 className="text-xs font-black uppercase tracking-widest text-[#1A2E24] mb-1">Central de Atendimento</h4>
                       <p className="text-[12px] font-bold uppercase text-black/40 leading-relaxed italic">{CLIENT_CONFIG.phone}</p>
                    </div>
                 </div>
              </div>
              <a href={whatsappUrl} className="group overflow-hidden bg-[#1A2E24] text-white p-8 rounded-full shadow-2xl transition-all hover:scale-[1.03] text-sm font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6">
                 <WhatsAppIcon size={24} /> Chamar no WhatsApp
              </a>
           </div>
           <div className="lg:col-span-7 h-[550px] lg:h-auto min-h-[500px] rounded-[5rem] overflow-hidden shadow-premium border-[20px] border-white group relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 shadow-inner"></iframe>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="diferenciais" className="bg-[#1A2E24] text-[#E5E7EB] pt-32 pb-16 px-10 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28 border-b border-white/5 pb-28">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-[#2D6A4F] text-white rounded-2xl flex items-center justify-center shadow-premium"><PawPrint size={24} /></div>
                    <span className="font-serif text-5xl font-black text-white tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
                 </div>
                 <p className="text-2xl font-serif font-black italic text-white/30 leading-tight uppercase leading-none mb-12 tracking-tight">Onde a ciência hospitalar encontra o amor incondicional.</p>
                 <div className="flex gap-10">
                    <a href="#" className="text-white/40 hover:text-[#2D6A4F] transition-all transform hover:-translate-y-2"><Instagram size={36} /></a>
                    <a href="#" className="text-white/40 hover:text-[#2D6A4F] transition-all transform hover:-translate-y-2"><Facebook size={36} /></a>
                 </div>
              </div>
              <div>
                 <h4 className="text-[11px] font-black uppercase tracking-[0.8em] text-[#2D6A4F] mb-12 underline decoration-[#2D6A4F] decoration-4 underline-offset-8">Mapa Institucional</h4>
                 <ul className="space-y-6 text-[11px] font-black text-white/40 uppercase tracking-[0.4em] italic leading-none">
                    <li><a href="#início" className="hover:text-white transition-all">Página Principal</a></li>
                    <li><a href="#serviços" className="hover:text-white transition-all">Especialidades</a></li>
                    <li><a href="#hospital" className="hover:text-white transition-all">Hospital</a></li>
                    <li><a href="#contatos" className="hover:text-white transition-all">Endereço</a></li>
                 </ul>
              </div>
              <div className="lg:col-span-2">
                 <h4 className="text-[11px] font-black uppercase tracking-[1em] text-white/20 mb-12 underline decoration-white/10 underline-offset-8">Hospital 24h - Unidade Central</h4>
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8 text-[11px] font-black text-white/20 uppercase tracking-[0.3em] italic">
                       <p className="flex gap-4"><MapPin size={16} className="text-[#2D6A4F] mt-1 shrink-0" /> {CLIENT_CONFIG.address}</p>
                       <p className="flex gap-4"><Phone size={16} className="text-[#2D6A4F] mt-1 shrink-0" /> {CLIENT_CONFIG.phone}</p>
                    </div>
                    <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 text-[11px] font-black text-[#2D6A4F] uppercase shadow-inner flex flex-col justify-center leading-relaxed">
                       {CLIENT_CONFIG.crmv} <br/> 
                       RESPONSÁVEL: VET SENIOR <br/>
                       CNPJ: {CLIENT_CONFIG.cnpj}
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex flex-col md:row justify-between items-center text-[10px] font-black text-white/5 uppercase tracking-[0.8em] gap-12">
              <p className="text-center">© 2026 {CLIENT_CONFIG.name} HOSPITAL VETERINÁRIO. MEDICINA DE ALTA PERFORMANCE.</p>
              <div className="flex gap-16">
                 <a href="#" className="hover:text-white">CONSELHO FEDERAL</a>
                 <a href="#" className="hover:text-white">PRIVACIDADE</a>
              </div>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2D6A4F]/5 rounded-full blur-[150px] z-0 pointer-events-none" />
      </footer>
    </div>
  );
}
