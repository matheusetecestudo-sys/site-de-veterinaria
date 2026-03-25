// Deployment: 2026-03-25T20:30:00Z - LUXURY VETERINARY OVERHAUL (ESTÉTICA LAYOUT PHILOSOPHY)
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
  email: "clinica@duno.vet.br",
  cnpj: "12.345.678/0001-90",
  crmv: "CRMV-SP 54.321",
};

const SERVICES = [
  { id: 1, title: "Medicina Preventiva", badge: "Saúde", img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=600" },
  { id: 2, title: "Cirurgia Avançada", badge: "24h", img: "https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=600" },
  { id: 3, title: "UTI & Emergência", badge: "Crítico", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600" },
  { id: 4, title: "Odontologia Pet", badge: "Oral", img: "https://images.unsplash.com/photo-1628009142861-6ec649195d85?q=80&w=600" },
  { id: 5, title: "Dermatologia", badge: "Pele", img: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=600" },
  { id: 6, title: "Oncologia", badge: "Especial", img: "https://images.unsplash.com/photo-1594824476967-df4666cf308b?q=80&w=600" },
  { id: 7, title: "Fisioterapia", badge: "Rehab", img: "https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=600" },
  { id: 8, title: "Gastroenterologia", badge: "Clínica", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600" },
  { id: 9, title: "Neurologia", badge: "Cérebro", img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600" },
  { id: 10, title: "Oftalmologia", badge: "Visão", img: "https://images.unsplash.com/photo-1559839734-2b71f1e3b778?q=80&w=600" },
  { id: 11, title: "Laboratório 24h", badge: "IA", img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600" },
  { id: 12, title: "Check-up Sênior", badge: "Longevidade", img: "https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=600" },
];

const TESTIMONIALS = [
  { name: "Mariana Oliveira", text: "A DUNO salvou a vida do meu gato com uma rapidez impressionante. O atendimento 24h é real e muito humano.", role: "Tutora do Pipoca" },
  { name: "Carlos Eduardo", text: "Ambiente limpo, tecnológico e médicos que realmente explicam o que está acontecendo. Melhor do Itaim.", role: "Tutor da Luna" },
  { name: "Fernanda Lima", text: "O sistema de câmeras na UTI me deu muita tranquilidade. Pude ver meu pet o tempo todo pelo celular.", role: "Tutora do Thor" },
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
    <div className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-primary selection:text-white overflow-x-hidden antialiased text-clinic-text">
       {/* 24H EMERGENCY TOP BAR */}
      <div className="bg-[#B91C1C] text-white py-1.5 px-6 text-center text-[8px] font-black tracking-[0.5em] uppercase z-[250] relative">
        Hospital Veterinário 24h em Operação — Itaim Bibi
      </div>

      {/* PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[300] origin-left" style={{ scaleX }} />

      {/* LOADING */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-6">
               <PawPrint size={56} />
            </motion.div>
            <h2 className="font-serif text-2xl font-black tracking-[0.6em] text-white uppercase italic">{CLIENT_CONFIG.name}</h2>
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

      {/* NAVIGATION - ESTÉTICA STYLE */}
      <nav className={`fixed w-full z-[150] transition-all duration-500 ${isScrolled ? 'top-0 py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5' : 'top-8 py-0 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10">
          <a href="#início" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shrink-0">
              <PawPrint size={20} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tight text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[8px] font-black tracking-[0.5em] uppercase text-primary mt-0.5">Hospital Veterinário</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Início', 'Serviços', 'Experiência', 'Diferenciais'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all relative group h-10 flex items-center">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-10 px-8 rounded-full flex items-center gap-2 font-black text-[9px] uppercase tracking-widest transition-all shadow-md">
              Agendar Agora
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
            <div className="flex justify-between items-center mb-20">
               <span className="font-serif text-3xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-12">
               {['Início', 'Serviços', 'Experiência', 'Diferenciais'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-white uppercase">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-8 rounded-full text-center font-black tracking-widest uppercase text-lg mt-12 flex items-center justify-center gap-3 shadow-xl">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - REFINED SCALE */}
      <section id="início" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden px-10 lg:px-24 bg-[#E5E7EB]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1600&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <FadeIn>
            <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase mb-8 block leading-none">Cuidado Científico e Amoroso</span>
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-black text-clinic-text leading-[1.1] tracking-tighter mb-10 uppercase italic">
              Realçando a <span className="text-primary not-italic">Vida Natural</span> <br /> através da Ciência Veterinária.
            </h1>
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-14 px-12 rounded-full inline-flex items-center gap-4 font-black text-[11px] uppercase tracking-widest shadow-xl transition-all transform hover:scale-105">
               Agendar Avaliacão <ArrowRight size={16} />
            </a>
            
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
               {[
                 { v: "22+", t: "Especialidades" },
                 { v: "15k+", t: "Pets Atendidos" },
                 { v: "100%", t: "Suporte 24h" },
                 { v: "4.9", t: "Avaliação Google" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col border-l border-black/5 pl-6">
                    <span className="text-3xl font-serif font-black text-primary leading-none mb-1">{stat.v}</span>
                    <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest">{stat.t}</span>
                 </div>
               ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT - ESTÉTICA PROFILE BOX */}
      <section className="py-24 bg-white px-10 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn>
             <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[15px] border-white z-10 relative group">
                   <img src="https://images.unsplash.com/photo-1559839734-2b71f1e3b778?q=80&w=800" alt="Dra. Responsável" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-black/5">
                   <span className="text-2xl font-serif font-black text-primary leading-none block italic">15 Anos</span>
                   <span className="text-[9px] font-black uppercase text-black/40 tracking-widest mt-1">de Prática Hospitalar</span>
                </div>
             </div>
          </FadeIn>
          <FadeIn delay={0.2}>
             <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase mb-10 block">Nossa Diretriz Digital</span>
             <h2 className="text-5xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic mb-10 leading-none">Medicina que <span className="text-primary not-italic">Acolhe.</span></h2>
             <div className="space-y-6 text-sm font-bold text-clinic-text/50 uppercase leading-relaxed italic tracking-tight mb-12">
                <p>O Hospital Veterinário DUNO nasceu da visão de que o tratamento animal deve ser tão preciso quanto a medicina humana, mas tão afetuoso quanto o colo de um tutor. </p>
                <p>Nossa infraestrutura no Itaim Bibi é projetada para o bem-estar absoluto do seu pet, unindo diagnóstico por imagem AI, neurologia avançada e suporte crítico 24h.</p>
             </div>
             <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-12 px-10 rounded-full inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all shadow-lg">
                Falar com Especialista <WhatsAppIcon size={14} />
             </a>
          </FadeIn>
        </div>
      </section>

      {/* MOSAIC SERVICE GRID - ESTÉTICA PROFILE */}
      <section id="serviços" className="py-24 bg-[#F7F6F4] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase mb-8 block font-black leading-none uppercase">Mosaic Care Center</span>
             <h2 className="text-5xl font-serif font-black text-clinic-text tracking-tighter uppercase italic leading-none">Nossos <span className="text-primary not-italic">Procedimentos.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
             {SERVICES.map((s, i) => (
               <motion.div
                 key={s.id}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 whileHover={{ y: -5 }}
                 className="group relative h-48 md:h-64 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-sm bg-clinic-text cursor-pointer transition-all hover:shadow-xl"
               >
                 <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 bg-primary/20" />
                 <div className="absolute inset-0 bg-gradient-to-t from-clinic-text via-transparent to-transparent opacity-80" />
                 <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 flex flex-col justify-end">
                    <span className="bg-primary text-white text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full w-fit mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{s.badge}</span>
                    <h3 className="text-sm md:text-lg text-white font-serif font-black leading-tight uppercase tracking-tighter">{s.title}</h3>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA (PORTFÓLIO) GRID - ESTÉTICA PROFILE */}
      <section id="experiência" className="py-24 bg-white px-10 md:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase mb-8 block leading-none">Infraestrutura em Foco</span>
              <h2 className="text-5xl font-serif font-black text-clinic-text leading-[1.1] tracking-tighter mb-10 uppercase italic">Um Ambiente <span className="text-primary not-italic">Planejado</span> <br/> para a Experiência.</h2>
              <p className="text-sm font-bold text-clinic-text/40 uppercase leading-relaxed mb-12 italic max-w-md">Cada detalhe do nosso hospital foi pensado para reduzir o estresse animal, desde a música ambiente até o sistema de ventilação negativa.</p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-[#F7F6F4] overflow-hidden grayscale opacity-50"><PawPrint size={14} /></div>
                ))}
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="h-full rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=600" className="w-full h-full object-cover" /></div>
              <div className="grid grid-rows-2 gap-4 h-full">
                 <div className="rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600" className="w-full h-full object-cover" /></div>
                 <div className="rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600" className="w-full h-full object-cover" /></div>
              </div>
           </div>
        </div>
      </section>

      {/* TESTIMONIALS - ESTÉTICA STYLE */}
      <section className="py-24 bg-[#FCF5F5] px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-20">
              <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase mb-8 block leading-none">Social Proof</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic">O que dizem <span className="text-primary not-italic">nossos pacientes.</span></h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                   <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/[0.03] h-full flex flex-col justify-between group hover:shadow-xl transition-all">
                      <div>
                         <Quote className="text-primary/20 mb-6 group-hover:text-primary transition-colors" size={40} fill="currentColor" />
                         <p className="text-lg font-bold text-clinic-text/60 italic leading-relaxed mb-10 tracking-tight">"{t.text}"</p>
                      </div>
                      <div className="flex items-center gap-4 border-t border-black/5 pt-6">
                         <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Users size={20} /></div>
                         <div className="flex flex-col">
                            <span className="text-xs font-black uppercase text-clinic-text leading-none">{t.name}</span>
                            <span className="text-[8px] font-bold text-black/20 uppercase tracking-widest mt-1">{t.role}</span>
                         </div>
                      </div>
                   </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ - ESTÉTICA TOGGLES STYLE */}
      <section id="diferenciais" className="py-24 bg-white px-10 md:px-16">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
               <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase mb-8 block leading-none">Transparência Digital</span>
               <h2 className="text-5xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic leading-none">Perguntas <span className="text-primary not-italic">Frequentes.</span></h2>
            </div>
            <div className="space-y-4">
               {["Como agendar consulta?", "Vocês são 24h?", "Atendem convênio?", "Especialidades disponíveis?"].map((q, i) => (
                 <div key={i} className="bg-[#F7F6F4] rounded-2xl p-6 cursor-pointer group" onClick={(e) => {
                    const ans = e.currentTarget.querySelector('.ans');
                    ans.classList.toggle('hidden');
                 }}>
                    <div className="flex justify-between items-center px-2">
                       <h4 className="text-sm font-black uppercase text-clinic-text/60 tracking-tighter group-hover:text-primary transition-colors">{q}</h4>
                       <ChevronRight size={16} className="text-primary group-hover:rotate-90 transition-transform" strokeWidth={3} />
                    </div>
                    <p className="ans hidden mt-6 pt-6 border-t border-black/5 text-[11px] font-bold text-clinic-text/40 italic leading-relaxed uppercase tracking-tight">
                       Para esta questão, o agendamento via WhatsApp é o caminho mais rápido para triagem imediata com nossa equipe de suporte 24h.
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FOOTER - ESTÉTICA STYLE */}
      <footer className="bg-clinic-text text-[#E5E7EB] pt-24 pb-12 px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20 border-b border-white/5 pb-20">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center"><PawPrint size={20} /></div>
                    <span className="font-serif text-3xl font-black text-white tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
                 </div>
                 <p className="text-xl font-serif font-black italic text-white/30 leading-tight uppercase leading-none mb-10">Onde a ciência encontra o amor incondicional.</p>
                 <div className="flex gap-8">
                    <a href="#" className="text-white/40 hover:text-primary transition-all"><Instagram size={28} /></a>
                    <a href="#" className="text-white/40 hover:text-primary transition-all"><Facebook size={28} /></a>
                 </div>
              </div>
              <div>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-10 underline decoration-primary decoration-2 underline-offset-8">Mapa</h4>
                 <ul className="space-y-4 text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] font-black">
                    <li><a href="#início" className="hover:text-white transition-all">Home</a></li>
                    <li><a href="#serviços" className="hover:text-white transition-all">Serviços</a></li>
                    <li><a href="#experiência" className="hover:text-white transition-all">Experiência</a></li>
                    <li><a href="#diferenciais" className="hover:text-white transition-all">FAQ</a></li>
                 </ul>
              </div>
              <div className="lg:col-span-2">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.7em] text-white/20 mb-10">Localização Itaim Bibi</h4>
                 <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4 text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] italic">
                       <p className="flex gap-3"><MapPin size={12} className="text-primary mt-1" /> {CLIENT_CONFIG.address}</p>
                       <p className="flex gap-3"><Phone size={12} className="text-primary mt-1" /> {CLIENT_CONFIG.phone}</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-[9px] font-bold text-primary/60 uppercase">
                       {CLIENT_CONFIG.crmv} | Prof. Resp. Dr Jr <br/>
                       {CLIENT_CONFIG.cnpj}
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex flex-col md:row justify-between items-center text-[8px] font-black text-white/5 uppercase tracking-[0.6em] gap-8">
              <p>© 2026 {CLIENT_CONFIG.name} HOSPITAL VETERINÁRIO. TODOS OS DIREITOS RESERVADOS.</p>
              <div className="flex gap-12">
                 <a href="#" className="hover:text-white">ÉTICA MÉDICA</a>
                 <a href="#" className="hover:text-white">PRIVACIDADE</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
