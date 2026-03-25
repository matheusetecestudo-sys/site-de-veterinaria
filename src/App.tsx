// Deployment: 2026-03-25T20:35:00Z - PURE VETERINARY CLINICAL MASTER (100% NICHE ALIGNED)
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
  Quote,
  Stethoscope,
  Syringe,
  Thermometer
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
  email: "hospital@duno.vet.br",
  cnpj: "12.345.678/0001-90",
  crmv: "CRMV-SP 54.321",
};

const SERVICES = [
  { id: 1, title: "Pronto Socorro 24h", badge: "Urgente", img: "https://images.unsplash.com/photo-1532187863486-3f91ad9b0c78?q=80&w=600" },
  { id: 2, title: "Cirurgia Geral & Especializada", badge: "Bloco", img: "https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=600" },
  { id: 3, title: "UTI de Alta Complexidade", badge: "Monitorado", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600" },
  { id: 4, title: "Diagnóstico por Imagem AI", badge: "Precisão", img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600" },
  { id: 5, title: "Cardiologia Veterinária", badge: "Checkup", img: "https://images.unsplash.com/photo-1559839734-2b71f1e3b778?q=80&w=600" },
  { id: 6, title: "Medicina Preventiva (Check-up)", badge: "Saúde", img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=600" },
  { id: 7, title: "Odontologia Veterinária", badge: "Higiene", img: "https://images.unsplash.com/photo-1628009142861-6ec649195d85?q=80&w=600" },
  { id: 8, title: "Laboratório Clínico 24h", badge: "Fast", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600" },
];

const TESTIMONIALS = [
  { name: "Mariana Silva", text: "Excelente equipe 24h. O suporte na UTI salvou meu animal após um trauma grave. Eternamente grata.", role: "Tutora do Pipoca" },
  { name: "Dr. Carlos Eduardo", text: "Diagnóstico rápido e infraestrutura hospitalar invejável. A melhor referência hospitalar no Itaim.", role: "Médico Tutor" },
  { name: "Fernanda Costa", text: "O sistema de monitoramento por câmeras me deu paz de espírito durante a internação. Profissionais nota 10.", role: "Tutora da Luna" },
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

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar um atendimento hospitalar na DUNO.")}`;

  const FadeIn = ({ children, delay = 0 }) => (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#F7F9F9] font-sans selection:bg-primary selection:text-white overflow-x-hidden antialiased text-clinic-text">
       {/* 24H EMERGENCY TOP BAR */}
      <div className="bg-[#B91C1C] text-white py-2 px-6 text-center text-[9px] font-black tracking-[0.4em] uppercase z-[250] relative flex items-center justify-center gap-3">
        <Activity size={14} className="animate-pulse" /> HOSPITAL VETERINÁRIO 24 HORAS — PRONTO ATENDIMENTO EM OPERAÇÃO
      </div>

      {/* PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[300] origin-left shadow-lg" style={{ scaleX }} />

      {/* LOADING */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-clinic-text flex flex-col items-center justify-center">
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
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[200] bg-[#25D366] text-white p-5 rounded-full shadow-2xl transition-all flex items-center justify-center"
      >
        <WhatsAppIcon size={28} />
      </motion.a>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-[150] transition-all duration-500 ${isScrolled ? 'top-0 py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5' : 'top-8 py-0 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10">
          <a href="#início" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shrink-0">
              <PawPrint size={20} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-black tracking-tight text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[9px] font-black tracking-[0.5em] uppercase text-primary mt-1 leading-none">Medicina Hospitalar</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Hospital', 'Especialidades', 'Experiência', 'Informações'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all relative group h-10 flex items-center">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-11 px-8 rounded-lg flex items-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all shadow-md">
              <WhatsAppIcon size={16} /> Agendar Agora 
            </a>
          </div>

          <button className="lg:hidden p-3 rounded-lg text-primary" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[200] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-20 border-b border-white/5 pb-10">
               <span className="font-serif text-4xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-12">
               {['Hospital', 'Especialidades', 'Experiência', 'Informações'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-black text-white uppercase">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-10 rounded-2xl text-center font-black tracking-widest uppercase text-lg mt-12 flex items-center justify-center gap-4 shadow-xl"><WhatsAppIcon size={20} /> Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - CLINICAL PRECISION */}
      <section id="início" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden px-10 lg:px-24 bg-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1600&auto=format&fit=crop" alt="Hospital Pet" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <FadeIn>
            <span className="text-[11px] font-black tracking-[0.6em] text-primary uppercase mb-8 block leading-none">Excelência Médica e Infraestrutura 24h</span>
            <h1 className="text-5xl md:text-[5rem] font-serif font-black text-clinic-text leading-[1.05] tracking-tighter mb-10 uppercase italic">
              Hospital Veterinário <br /> <span className="text-primary not-italic">de Alta Complexidade.</span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-clinic-text/60 mb-14 max-w-xl leading-relaxed uppercase tracking-tight italic opacity-80">
              Corpo clínico sênior focado em diagnósticos de precisão e suporte vital ininterrupto.
            </p>
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-16 px-12 rounded-xl inline-flex items-center gap-5 font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl transition-all transform hover:scale-105">
               <WhatsAppIcon size={24} /> Encaminhar para WhatsApp
            </a>
            
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                 { v: "22+", t: "Especialidades" },
                 { v: "15+", t: "Anos de Tradição" },
                 { v: "100%", t: "Suporte 24h" },
                 { v: "4.9+", t: "Avaliação Médica" }
               ].map((stat, i) => (
                 <div key={stat.t} className="flex flex-col border-l-2 border-primary/20 pl-8">
                    <span className="text-4xl font-serif font-black text-primary leading-none mb-2 italic">{stat.v}</span>
                    <span className="text-[10px] font-extrabold text-black/30 uppercase tracking-[0.2em]">{stat.t}</span>
                 </div>
               ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HOSPITAL SECTION - RE-ALIGNING TO NICHE */}
      <section id="hospital" className="py-28 bg-white px-10 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn>
             <div className="relative group">
                <div className="rounded-[3rem] overflow-hidden shadow-premium border-[15px] border-[#F7F9F9] z-10 relative">
                   <img src="https://images.unsplash.com/photo-1559839734-2b71f1e3b778?q=80&w=800" alt="Diretoria Médica" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 border border-black/5 flex flex-col items-center justify-center">
                   <span className="text-4xl font-serif font-black text-primary italic leading-none block">UTI 24h</span>
                   <span className="text-[10px] font-black uppercase text-black/20 tracking-widest mt-2 leading-none">Monitorada</span>
                </div>
             </div>
          </FadeIn>
          <FadeIn delay={0.2}>
             <span className="text-[11px] font-black tracking-[0.8em] text-primary uppercase mb-10 block leading-none">Referência Hospitalar</span>
             <h2 className="text-5xl md:text-6xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic mb-10 leading-none">Medicina que <span className="text-primary not-italic">Salva Vidas.</span></h2>
             <div className="space-y-8 text-sm font-bold text-clinic-text/50 uppercase leading-relaxed italic tracking-tight mb-14 border-l-4 border-primary/10 pl-10">
                <p>O Hospital Veterinário DUNO é reconhecido por sua infraestrutura de ponta no Itaim Bibi, operando ininterruptamente com equipes de cirurgia e internação crítica.</p>
                <p>Nossa missão é aplicar a ciência médica veterinária com o mais alto rigor técnico, garantindo transparência e segurança para os tutores.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { i: <Stethoscope />, t: "Checkups Sênior" },
                  { i: <Thermometer />, t: "UTI Aquecida" },
                  { i: <Syringe />, t: "Vacinologia AI" },
                  { i: <Heart />, t: "Cardiologia 24h" }
                ].map(item => (
                  <div key={item.t} className="flex items-center gap-4 text-clinic-text/60">
                     <span className="text-primary">{item.i}</span>
                     <span className="text-[10px] font-black uppercase tracking-widest">{item.t}</span>
                  </div>
                ))}
             </div>
          </FadeIn>
        </div>
      </section>

      {/* MOSAIC SPECIALTIES GRID - 100% VET */}
      <section id="especialidades" className="py-28 bg-[#F2F5F5] px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[11px] font-black tracking-[1em] text-primary uppercase mb-10 block leading-none">Diagnostic Center</span>
             <h2 className="text-5xl md:text-7xl font-serif font-black text-clinic-text tracking-tighter uppercase italic leading-none">Grade de <span className="text-primary not-italic">Atendimento.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {SERVICES.map((s, i) => (
               <motion.div
                 key={s.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ scale: 1.02 }}
                 className="group relative h-72 overflow-hidden rounded-[2.5rem] shadow-xl bg-clinic-text cursor-pointer transition-all hover:shadow-2xl"
               >
                 <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-clinic-text via-transparent to-transparent opacity-90" />
                 <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
                    <span className="bg-primary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">{s.badge}</span>
                    <h3 className="text-xl text-white font-serif font-black leading-tight uppercase tracking-tighter group-hover:text-primary transition-colors">{s.title}</h3>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA GRID - REAL HOSPITAL VIBE */}
      <section id="experiência" className="py-28 bg-white px-10 md:px-16 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <span className="text-[11px] font-black tracking-[0.8em] text-primary mb-10 block leading-none uppercase">Engenharia Clínica</span>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-clinic-text leading-[1.05] tracking-tighter mb-10 uppercase italic">Ambiente <span className="text-primary not-italic">Hospitalar</span> <br/> de Referência.</h2>
              <p className="text-sm font-bold text-clinic-text/40 uppercase leading-relaxed mb-14 italic max-w-md border-l-4 border-primary/20 pl-8">Unidades de tratamento intensivo equipadas com monitoramento multiparâmetro e sistemas de ventilação controlada.</p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-[#F2F5F5] p-6 rounded-2xl flex items-center justify-center gap-3">
                    <CheckCircle2 className="text-primary" size={20} /> <span className="text-[10px] font-black uppercase tracking-widest text-clinic-text/60">Selo ISO Pet</span>
                 </div>
                 <div className="bg-[#F2F5F5] p-6 rounded-2xl flex items-center justify-center gap-3">
                    <CheckCircle2 className="text-primary" size={20} /> <span className="text-[10px] font-black uppercase tracking-widest text-clinic-text/60">Bio Segurança</span>
                 </div>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-6 h-[550px]">
              <div className="h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"><img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=600" className="w-full h-full object-cover" /></div>
              <div className="grid grid-rows-2 gap-6 h-full">
                 <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"><img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600" className="w-full h-full object-cover" /></div>
                 <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"><img src="https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=600" className="w-full h-full object-cover" /></div>
              </div>
           </div>
        </div>
      </section>

      {/* TESTIMONIALS - VET NICHE */}
      <section className="py-28 bg-[#F0F4F4] px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-24">
              <span className="text-[11px] font-black tracking-[1em] text-primary uppercase mb-10 block leading-none">Confiança Conquistada</span>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic">Casos de <span className="text-primary not-italic">Sucesso Médico.</span></h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TESTIMONIALS.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                   <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-black/5 h-full flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all">
                      <div>
                         <Quote className="text-primary/10 mb-8 group-hover:text-primary/40 transition-colors" size={56} fill="currentColor" />
                         <p className="text-xl font-bold text-clinic-text/60 italic leading-relaxed mb-12 tracking-tight">"{t.text}"</p>
                      </div>
                      <div className="flex items-center gap-5 border-t border-black/5 pt-8">
                         <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"><PawPrint size={24} /></div>
                         <div className="flex flex-col">
                            <span className="text-sm font-black uppercase text-clinic-text leading-none">{t.name}</span>
                            <span className="text-[10px] font-extrabold text-black/20 uppercase tracking-[0.2em] mt-2">{t.role}</span>
                         </div>
                      </div>
                   </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* FOOTER - PURE CLINICAL */}
      <footer id="informações" className="bg-clinic-text text-[#E5E7EB] pt-32 pb-16 px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 border-b border-white/5 pb-24">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-xl ring-2 ring-white/10 shrink-0"><PawPrint size={24} /></div>
                    <span className="font-serif text-5xl font-black text-white tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
                 </div>
                 <p className="text-2xl font-serif font-black italic text-white/20 leading-tight uppercase leading-none mb-14 tracking-tight">Medicina Veterinária de referência acadêmica e clínica.</p>
                 <div className="flex gap-10">
                    <a href="#" className="text-white/30 hover:text-primary transition-all transform hover:-translate-y-2"><Instagram size={36} /></a>
                    <a href="#" className="text-white/30 hover:text-primary transition-all transform hover:-translate-y-2"><Facebook size={36} /></a>
                    <a href="#" className="text-white/30 hover:text-primary transition-all transform hover:-translate-y-2"><Linkedin size={36} /></a>
                 </div>
              </div>
              <div>
                 <h4 className="text-[11px] font-black uppercase tracking-[0.8em] text-primary mb-12 underline decoration-primary decoration-4 underline-offset-8">Hospital Unit</h4>
                 <ul className="space-y-6 text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] font-black italic">
                    <li><a href="#início" className="hover:text-white transition-all">Página Principal</a></li>
                    <li><a href="#especialidades" className="hover:text-white transition-all">Centro de Diagnóstico</a></li>
                    <li><a href="#experiência" className="hover:text-white transition-all">Infraestrutura</a></li>
                    <li><a href="#informações" className="hover:text-white transition-all">Dados Legais</a></li>
                 </ul>
              </div>
              <div className="lg:col-span-2">
                 <h4 className="text-[11px] font-black uppercase tracking-[1em] text-white/20 mb-12">Unidade Central Itaim Bibi</h4>
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6 text-[11px] font-bold text-white/20 uppercase tracking-[0.2em] italic">
                       <p className="flex gap-4"><MapPin size={16} className="text-primary mt-1 shrink-0" /> {CLIENT_CONFIG.address}</p>
                       <p className="flex gap-4"><Phone size={16} className="text-primary mt-1 shrink-0" /> {CLIENT_CONFIG.phone} — Agendamento 24h</p>
                    </div>
                    <div className="p-10 bg-white/5 rounded-[2rem] border border-white/10 text-[11px] font-black text-primary/80 uppercase shadow-inner leading-relaxed">
                       {CLIENT_CONFIG.crmv} <br/> 
                       RESP: DR. VETERINÁRIO JR <br/>
                       CNPJ: {CLIENT_CONFIG.cnpj}
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex flex-col md:row justify-between items-center text-[10px] font-black text-white/5 uppercase tracking-[0.8em] gap-12">
              <p className="text-center">© 2026 {CLIENT_CONFIG.name} HOSPITAL VETERINÁRIO. MEDICINA ANIMAL DE ALTA COMPLEXIDADE.</p>
              <div className="flex gap-16">
                 <a href="#" className="hover:text-white">DIRETRIZES MÉDICAS</a>
                 <a href="#" className="hover:text-white">POLÍTICA DE DADOS</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
