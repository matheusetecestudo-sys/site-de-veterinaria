// Deployment: 2026-03-25T19:05:00Z - STUNNING Service Cards + Updated Menu + New Hero
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
  CheckCircle2,
  Award,
  ChevronRight
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
  openingHours: "Hospital Aberto 24h",
  description: "O Padrão Ouro da Medicina Veterinária Brasileira.",
};

const SERVICES = [
  {
    id: "01",
    title: "Medicina do Futuro",
    description: "Diagnóstico acelerado por IA e exames laboratoriais imediatos.",
    image: "https://images.unsplash.com/photo-1579619573010-0925c43d78c3?q=80&w=1200",
    badge: "Laboratório"
  },
  {
    id: "02",
    title: "Bloco Cirúrgico 24h",
    description: "Equipe sênior e infraestrutura para cirurgias complexas.",
    image: "https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=1200",
    badge: "Emergência"
  },
  {
    id: "03",
    title: "Internação de Elite",
    description: "Acomodações VIP monitoradas individualmente 24 horas por dia.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200",
    badge: "UTI Pet"
  },
  {
    id: "04",
    title: "Vacinação Global",
    description: "Protocolos internacionais para proteção máxima do seu pet.",
    image: "https://images.unsplash.com/photo-1548129871-171884c3c970?q=80&w=1200",
    badge: "Prevenção"
  },
  {
    id: "05",
    title: "Ortopedia Avançada",
    description: "Fisioterapia e reabilitação para casos de alta complexidade.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200",
    badge: "Avançado"
  },
  {
    id: "06",
    title: "Odonto Profilaxia",
    description: "Saúde bucal assistida e tratamentos periodontais padrão ouro.",
    image: "https://images.unsplash.com/photo-1628009142861-6ec649195d85?q=80&w=1200",
    badge: "Estética"
  }
];

const NAV_LINKS = [
  { name: 'Início', href: '#início' },
  { name: 'Serviços', href: '#serviços' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Local', href: '#localização' }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    <div className="min-h-screen bg-clinic-bg font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* LOADING */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-6">
              <PawPrint size={64} />
            </motion.div>
            <h2 className="font-serif text-3xl font-bold tracking-[0.5em] text-white uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHATSAPP CTA - Desktop only fixed */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 z-[95] bg-[#25D366] text-white p-6 rounded-3xl shadow-2xl transition-all hover:scale-110 active:scale-95 hidden lg:flex items-center gap-3">
        <WhatsAppIcon size={24} /> <span className="font-black text-xs uppercase tracking-widest">Agendar Whatsapp</span>
      </a>

      {/* NAV - UPDATED LUXURY LOOK */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'top-4 px-6' : 'top-0 px-0'}`}>
        <div className={`max-w-6xl mx-auto flex justify-between items-center transition-all ${isScrolled ? 'rounded-[1.5rem] bg-white/80 backdrop-blur-xl py-4 px-10 shadow-2xl border border-white/50' : 'bg-transparent py-10 px-10'}`}>
          <a href="#início" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-primary text-white rounded-[0.8rem] flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
              <PawPrint size={20} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-black tracking-tighter text-clinic-text uppercase">{CLIENT_CONFIG.name}</span>
              <span className={`text-[8px] font-black tracking-[0.4em] uppercase transition-colors ${isScrolled ? 'text-primary' : 'text-primary/70'}`}>Hospital Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all hover:translate-y-[-2px]">{link.name}</a>
            ))}
            <a href={whatsappUrl} className="bg-primary text-white h-12 px-8 rounded-xl flex items-center gap-3 font-black text-[10px] uppercase tracking-widest hover:bg-clinic-text transition-all shadow-xl active:scale-95">
              <MessageCircle size={16} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden text-primary p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[150] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-16">
               <span className="font-serif text-4xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-5 rounded-2xl"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-10">
               {NAV_LINKS.map((link) => (
                 <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-white uppercase italic">{link.name}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-8 rounded-3xl text-center font-black tracking-[0.2em] uppercase text-xl mt-10 shadow-2xl">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO - NEW POWERFUL BANNER */}
      <section id="início" className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=1600&auto=format&fit=crop" 
            alt="Elite Banner" 
            className="w-full h-full object-cover brightness-[0.6] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-clinic-bg/95 via-clinic-bg/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full mb-10 shadow-xl">
               <CheckCircle2 size={16} className="text-primary" />
               <span className="text-[10px] font-black tracking-[0.4em] text-clinic-text uppercase">{CLIENT_CONFIG.description}</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-black text-clinic-text leading-[1] tracking-tighter mb-10 uppercase italic">
              O Seu Pet <br /> <span className="text-primary/70 not-italic">Encontra a Arte.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-clinic-text/60 mb-12 max-w-xl leading-relaxed uppercase tracking-tight opacity-70">
              Hospital 24h especializado em medicina de alta tecnologia no coração de Pinheiros.
            </p>
            <div className="flex flex-wrap gap-8">
               <a href={whatsappUrl} className="bg-primary text-white h-20 px-12 rounded-[1.2rem] flex items-center gap-5 font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all active:scale-95">
                 Agendar Avaliação <ArrowRight size={24} />
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - NEW CARDS 10/10 (DENTAL STYLE) */}
      <section id="serviços" className="py-32 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-6 block">Procedimentos de Elite</span>
             <h2 className="text-5xl md:text-6xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic">Cuidados <span className="text-primary not-italic">Extraordinários.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-clinic-text"
              >
                {/* Full Image background */}
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-text via-transparent to-transparent opacity-90" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end transition-all">
                  <div className="mb-6">
                     <span className="bg-primary/80 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-widest">
                       {s.badge}
                     </span>
                  </div>
                  <h3 className="text-4xl text-white font-serif font-black mb-5 tracking-tighter uppercase leading-none">
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed italic line-clamp-2">
                    {s.description}
                  </p>
                  <a href={whatsappUrl} className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:gap-6 transition-all border-b border-white/10 pb-2 w-fit">
                    Agendar Consulta <ChevronRight size={16} className="text-primary" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-clinic-text text-white py-32 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 items-start mb-24">
            <div className="lg:col-span-2">
               <div className="flex items-center gap-4 mb-8 text-primary">
                  <PawPrint size={48} />
                  <span className="font-serif text-5xl font-black tracking-tighter text-white uppercase leading-none">{CLIENT_CONFIG.name}</span>
               </div>
               <p className="text-white/30 text-2xl font-serif font-black italic max-w-sm mb-12 uppercase tracking-tighter italic">Infraestrutura 24h para quem você ama.</p>
               <div className="flex gap-6">
                  <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={24} /></a>
                  <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={24} /></a>
               </div>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-10">Páginas</h4>
               <ul className="space-y-6 text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">
                 {NAV_LINKS.map(l => (
                    <li key={l.name}><a href={l.href} className="hover:text-primary transition-colors">{l.name}</a></li>
                 ))}
               </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-10">Local</h4>
               <p className="text-[10px] font-black tracking-[0.2em] text-white/20 uppercase italic leading-relaxed">{CLIENT_CONFIG.address}</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-[9px] font-black tracking-[0.4em] text-white/5 text-center uppercase">
            © 2026 {CLIENT_CONFIG.name} ELITE VETERINARY HUB.
          </div>
        </div>
      </footer>
    </div>
  );
}
