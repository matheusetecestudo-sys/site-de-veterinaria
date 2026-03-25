// Deployment: 2026-03-25T19:30:00Z - RESPONSIVE FIX + ALIGNMENT + PREMIUM FOOTER + MOBILE OPTIMIZED
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Heart,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter
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
  openingHours: "Aberto 24 Horas — Todos os dias",
  description: "O Padrão Ouro da Medicina Veterinária Brasileira no Itaim Bibi.",
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
    title: "Bloco Cirúrgico 24h",
    description: "Equipe sênior e infraestrutura hospitalar para cirurgias complexas.",
    image: "https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=800&auto=format&fit=crop",
    badge: "Emergência"
  },
  {
    id: "03",
    title: "Internação de Elite",
    description: "UTI com monitoramento individual por câmeras acessíveis via smartphone.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    badge: "UTI Pet"
  },
  {
    id: "04",
    title: "Dermatologia Pet",
    description: "Tratamentos especializados para pele e alergias com tecnologia de ponta.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
    badge: "Especialidade"
  },
  {
    id: "05",
    title: "Check-up Executivo",
    description: "Bateria completa de exames preventivos em um único dia para longevidade.",
    image: "https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=800&auto=format&fit=crop",
    badge: "Check-up"
  },
  {
    id: "06",
    title: "Spa & Estética VIP",
    description: "Higiene técnica avançada com produtos premium e calmaria garantida.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop",
    badge: "Spa & Care"
  }
];

const FAQS = [
  { id: 1, q: "Como agendar um atendimento na DUNO?", a: "O agendamento é feito instantaneamente via WhatsApp. Nossa equipe 24h está pronta para triagem imediata." },
  { id: 2, q: "O hospital realmente funciona em feriados?", a: "Sim. Operamos 24 horas por dia, 365 dias por ano, com equipe médica completa in-loco." },
  { id: 3, q: "Vocês atendem quais especialidades?", a: "Oferecemos Cardiologia, Dermatologia, Ortopedia, Oncologia e Neurologia com especialistas renomados." }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="min-h-screen bg-clinic-bg font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-8">
              <PawPrint size={72} />
            </motion.div>
            <h2 className="font-serif text-3xl font-bold tracking-[0.5em] text-white uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[200]" />

      {/* WHATSAPP FLOAT MOBILE */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-[95] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all active:scale-95 lg:hidden flex items-center justify-center">
        <WhatsAppIcon size={28} />
      </a>

      {/* NAVIGATION - Scaled & Aligned */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'top-4 px-6' : 'top-0 px-0'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all ${isScrolled ? 'rounded-[2rem] bg-white/90 backdrop-blur-xl py-4 px-10 shadow-xl border border-white/50' : 'bg-transparent py-10 px-10'}`}>
          <a href="#início" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 outline outline-white/20">
              <PawPrint size={24} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl md:text-4xl font-black tracking-tight text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-primary mt-1">Hospital de Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Serviços', 'Diferenciais', 'Localização', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.4em] text-clinic-text/60 hover:text-primary transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-12 px-8 rounded-xl flex items-center gap-3 font-black text-[10px] uppercase tracking-widest shadow-xl transition-all active:scale-95">
              <MessageCircle size={16} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden p-3 rounded-xl bg-white/90 backdrop-blur-md shadow-xl text-primary border border-primary/5" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[150] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-16">
               <span className="font-serif text-4xl font-bold text-white uppercase tracking-tighter tracking-[0.2em]">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-4 rounded-xl shadow-xl"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-10">
               {['Serviços', 'Diferenciais', 'Localização', 'FAQ'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-white uppercase italic">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-8 rounded-2xl text-center font-black tracking-widest uppercase text-xl mt-10 shadow-2xl">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO BANNER - FIXED ALIGNMENT & IMAGE */}
      <section id="início" className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6 lg:px-24 bg-clinic-bg">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1600&auto=format&fit=crop" 
            alt="Elite Veterinary Care" 
            className="w-full h-full object-cover brightness-[0.6] lg:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-clinic-bg/95 via-clinic-bg/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full mb-10 shadow-xl">
               <CheckCircle2 size={16} className="text-primary" strokeWidth={3} />
               <span className="text-[10px] font-black tracking-[0.4em] text-clinic-text uppercase">{CLIENT_CONFIG.description}</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-serif font-black text-clinic-text leading-[1.05] tracking-tighter mb-10 text-balance uppercase italic">
              O Seu Pet <br /> <span className="text-primary not-italic">Encontra a Arte.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-clinic-text/60 mb-16 max-w-2xl leading-relaxed uppercase tracking-tight opacity-70">
              Hospital 24h especializado em medicina de alta tecnologia no coração do Itaim Bibi.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
               <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-20 px-12 rounded-[1.5rem] flex items-center gap-6 font-black text-sm uppercase tracking-[0.2em] shadow-[0_30px_60px_rgba(27,67,50,0.3)] transition-all transform hover:scale-105 active:scale-95">
                 Agendar Avaliação <ArrowRight size={24} />
               </a>
               <div className="hidden sm:flex items-center gap-5 px-8 py-5 bg-white/40 backdrop-blur-xl rounded-[1.5rem] border border-white/50 shadow-lg">
                  <div className="flex text-amber-500">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] font-black text-clinic-text tracking-[0.2em] uppercase">Avaliação Google 4.9+</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - RESPONSIVE GRID */}
      <section id="serviços" className="py-24 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
             <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary mb-8 block">Procedimentos de Elite</span>
             <h2 className="text-5xl md:text-7xl font-serif font-black text-clinic-text leading-none tracking-tighter uppercase italic">Cuidados <span className="text-primary not-italic">Extraordinários.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl bg-clinic-text cursor-pointer hover:shadow-service transition-all duration-700"
              >
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-text via-transparent to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
                  <div className="mb-4">
                     <span className="bg-primary/90 px-3 py-1 rounded-full text-white text-[9px] font-black tracking-widest inline-block uppercase">{s.badge}</span>
                  </div>
                  <h3 className="text-3xl text-white font-serif font-black mb-4 tracking-tighter uppercase leading-none">{s.title}</h3>
                  <p className="text-white/60 text-base mb-8 leading-relaxed italic line-clamp-2">{s.description}</p>
                  <a href={whatsappUrl} className="flex items-center gap-2 text-white font-black text-[9px] uppercase tracking-[0.2em] hover:gap-4 transition-all border-b border-white/10 pb-2 w-fit">
                    Agendar Consulta <ChevronRight size={14} className="text-primary" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / EXPERIENCE */}
      <section id="diferenciais" className="py-24 bg-clinic-bg px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[4rem] overflow-hidden shadow-premium border-[15px] border-white relative z-10">
              <img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=1200" alt="Experience" className="w-full aspect-square object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-10 block uppercase">Qualidade DUNO</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-clinic-text leading-none tracking-tighter uppercase italic mb-12">O Melhor para <br /> <span className="text-primary not-italic">Quem Você Ama.</span></h2>
            
            <div className="space-y-12">
              {[
                { t: "Hospital 24 Horas", i: <Clock className="text-primary" />, desc: "Plantão completo para emergências a qualquer hora do dia ou da noite." },
                { t: "Monitoramento VIP", i: <Activity className="text-primary" />, desc: "Acompanhamento em tempo real durante internação via smartphone." },
                { t: "Alta Tecnologia", i: <Microscope className="text-primary" />, desc: "Diagnósticos acelerados com suporte laboratorial internacional." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform hover:scale-110">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-black text-clinic-text mb-2 uppercase tracking-tight leading-none">{item.t}</h4>
                    <p className="text-base font-bold text-clinic-text/40 leading-relaxed italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="localização" className="py-24 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-10 block uppercase">Visite a DUNO</span>
            <h2 className="text-6xl font-serif font-black text-clinic-text tracking-tighter uppercase mb-16 italic leading-none">Localização <br/><span className="text-primary not-italic">Elite.</span></h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shadow-md grow-0 shrink-0 group-hover:bg-primary group-hover:text-white transition-all"><MapPin size={28} /></div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-clinic-text mb-1 uppercase tracking-tighter leading-none">Itaim Bibi</h4>
                  <p className="text-sm font-bold text-clinic-text/40 uppercase leading-relaxed">{CLIENT_CONFIG.address}</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shadow-md grow-0 shrink-0 group-hover:bg-primary group-hover:text-white transition-all"><Phone size={28} /></div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-clinic-text mb-1 uppercase tracking-tighter leading-none">Contato 24h</h4>
                  <p className="text-sm font-bold text-clinic-text/40 uppercase leading-relaxed">{CLIENT_CONFIG.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-clinic-bg group">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" title="Map" className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"></iframe>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-clinic-bg px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-8 block uppercase">Transparência</span>
             <h2 className="text-6xl md:text-8xl font-serif font-black text-clinic-text uppercase tracking-tighter italic leading-none">Dúvidas <span className="text-primary not-italic">Frequentes.</span></h2>
          </div>
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <motion.div 
                key={faq.id} 
                className="bg-white rounded-[2rem] p-10 shadow-xl border border-primary/5 cursor-pointer group"
              >
                <div className="flex justify-between items-center gap-10">
                  <h4 className="font-serif text-2xl md:text-3xl font-black text-clinic-text leading-tight uppercase group-hover:text-primary transition-colors">{faq.q}</h4>
                  <Plus className="text-primary shrink-0 transition-transform group-hover:rotate-90" size={32} />
                </div>
                <p className="mt-8 text-xl font-bold text-clinic-text/40 leading-relaxed italic border-t border-primary/5 pt-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER UPGRADE */}
      <footer className="bg-clinic-text text-white pt-32 pb-16 px-6 lg:px-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center text-primary shadow-xl ring-1 ring-white/10"><PawPrint size={32} /></div>
                <span className="font-serif text-6xl font-black tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-3xl font-serif font-black italic text-white/30 max-w-lg mb-16 leading-tight uppercase tracking-tight">Referência nacional em tecnologia veterinária 24h. Cuidando da vida no Itaim Bibi.</p>
              <div className="flex gap-10">
                 <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:-translate-y-2"><InstagramIcon size={32} /></a>
                 <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:-translate-y-2"><FacebookIcon size={32} /></a>
                 <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:-translate-y-2"><Twitter size={32} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-12">Links Úteis</h4>
              <ul className="space-y-8 text-[11px] font-black tracking-[0.4em] text-white/30 uppercase">
                <li><a href="#início" className="hover:text-primary transition-all">Início</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-all">Nossos Serviços</a></li>
                <li><a href="#diferenciais" className="hover:text-primary transition-all">Sobre a Clínica</a></li>
                <li><a href="#localização" className="hover:text-primary transition-all">Localização</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Disponibilidade 24h</h4>
              <div className="space-y-10 text-[11px] font-black tracking-[0.3em] text-white/20 uppercase italic leading-relaxed">
                 <p className="flex gap-4"><MapPin className="text-primary shrink-0" size={16} /> {CLIENT_CONFIG.address}</p>
                 <p className="flex gap-4"><Phone className="text-primary shrink-0" size={16} /> {CLIENT_CONFIG.phone}</p>
                 <p className="flex gap-4 text-primary bg-primary/5 p-4 rounded-xl border border-primary/10">Bairro: Itaim Bibi — São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 space-y-10 md:space-y-0 text-[9px] font-black tracking-[0.5em] text-white/5 uppercase">
             <p>© 2026 {CLIENT_CONFIG.name} ELITE PET CARE. TODOS OS DIREITOS RESERVADOS.</p>
             <div className="flex gap-10">
                <a href="#" className="hover:text-white transition-colors">POLÍTICAS</a>
                <a href="#" className="hover:text-white transition-colors">ÉTICA MÉDICA</a>
             </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] z-0" />
      </footer>
    </div>
  );
}
