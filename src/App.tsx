// Deployment: 2026-03-25T19:50:00Z - FAQ EXPANSION + WA LOGO IN BUTTONS + GLOBAL SOFT HOVER + SOLID IMAGES
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
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
  Plus,
  Minus,
  CheckCircle2,
  ChevronRight,
  Heart,
  ShieldCheck,
  Award,
  Users
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
  email: "atendimento@duno.com.br",
  cnpj: "00.000.000/0001-00",
  crmv: "CRMV-SP 00000",
  openingHours: "Hospital Aberto 24 Horas — Todos os dias",
  description: "Referência Nacional em Medicina Veterinária de Alta Precisão.",
};

const SERVICES = [
  {
    id: "01",
    title: "Medicina do Futuro",
    description: "Diagnóstico completo com IA e suporte laboratorial imediato no Itaim Bibi.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800",
    badge: "Diagnóstico"
  },
  {
    id: "02",
    title: "Bloco Cirúrgico 24h",
    description: "Equipe sênior de cirurgiões e infraestrutura hospitalar de ponta.",
    image: "https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=800",
    badge: "Cirurgia"
  },
  {
    id: "03",
    title: "Internação de Elite",
    description: "Acomodações VIP monitoradas individualmente por câmeras 24 horas.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800",
    badge: "UTI Pet"
  },
  {
    id: "04",
    title: "Dermatologia & Alergia",
    description: "Tratamentos especializados para pele e recuperação imunológica avançada.",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800",
    badge: "Especialidade"
  },
  {
    id: "05",
    title: "Check-up Integral",
    description: "Avaliação completa em um único dia para longevidade e saúde do pet.",
    image: "https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=800",
    badge: "Prevenção"
  },
  {
    id: "06",
    title: "Spa & Estética VIP",
    description: "Higiene técnica com produtos premium e calmaria garantida para seu pet.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800",
    badge: "Spa & Care"
  }
];

const FAQS = [
  { id: 1, q: "Como agendar um atendimento na DUNO?", a: "O agendamento é feito instantaneamente via WhatsApp. Nossa equipe 24h está pronta para triagem imediata." },
  { id: 2, q: "O hospital realmente funciona em feriados?", a: "Sim. Operamos 24 horas por dia, 365 dias por ano, com equipe médica completa in-loco." },
  { id: 3, q: "Quais são as especialidades disponíveis?", a: "Oferecemos Cardiologia, Dermatologia, Ortopedia, Oncologia, Neurologia e Oftalmologia com mestres e doutores." },
  { id: 4, q: "Quais são os métodos de pagamento aceitos?", a: "Aceitamos todos os cartões de crédito (com parcelamento), débito, Pix e convênios parceiros (sob consulta)." },
  { id: 5, q: "Como acompanhar meu pet durante a internação?", a: "Nossas UTIs possuem câmeras individuais que você pode acessar pelo celular, além de boletins médicos de hora em hora." },
  { id: 6, q: "Posso levar meu pet sem agendamento em emergências?", a: "Sim. Casos de emergência têm prioridade imediata em nosso Pronto Socorro 24h, sem necessidade de agendamento prévio." }
];

const NAV_LINKS = [
  { name: 'Início', href: '#início' },
  { name: 'Serviços', href: '#serviços' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Localização', href: '#localização' },
  { name: 'FAQ', href: '#faq' }
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
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white mb-8">
              <PawPrint size={72} strokeWidth={3} />
            </motion.div>
            <h2 className="font-serif text-4xl font-black tracking-[0.5em] text-white uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[200] origin-left shadow-lg" />

      {/* WHATSAPP FLOAT */}
      <motion.a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-[100] bg-[#25D366] text-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(37,211,102,0.4)] flex items-center gap-4 group"
      >
        <WhatsAppIcon size={24} /> 
        <span className="font-black text-xs uppercase tracking-widest hidden md:inline-block">Atendimento 24h</span>
      </motion.a>

      {/* NAVIGATION - Scaled & Professional */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'top-4 px-6 md:px-12' : 'top-0 px-0'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all ${isScrolled ? 'rounded-[2rem] bg-white/90 backdrop-blur-2xl py-4 px-12 shadow-xl border border-white/50' : 'bg-transparent py-12 px-12 md:px-24'}`}>
          <a href="#início" className="flex items-center gap-5 group transition-transform hover:scale-[1.02]">
            <div className="w-14 h-14 bg-primary text-white rounded-[1.2rem] flex items-center justify-center shadow-xl ring-2 ring-white/10 group-hover:rotate-12 transition-transform">
              <PawPrint size={28} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-black tracking-tight text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name}</span>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mt-1">Hospital de Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.4em] text-clinic-text/50 hover:text-primary transition-all relative group h-10 flex items-center">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-14 px-10 rounded-[1.2rem] flex items-center gap-3 font-black text-[11px] uppercase tracking-widest shadow-2xl transition-all transform hover:scale-[1.05] active:scale-95">
              <WhatsAppIcon size={18} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden p-4 rounded-2xl bg-white shadow-2xl text-primary" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[150] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-10">
               <span className="font-serif text-5xl font-bold text-white uppercase tracking-tighter">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-5 rounded-2xl"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-10 overflow-y-auto">
               {NAV_LINKS.map((link) => (
                 <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-white uppercase italic">{link.name}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-10 rounded-3xl text-center font-black tracking-widest uppercase text-xl mt-12 flex items-center justify-center gap-4">
                 <WhatsAppIcon size={24} /> Agendar Agora
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - FIXED NICHED IMAGE & WA BUTTONS */}
      <section id="início" className="relative min-h-screen flex items-center pt-24 overflow-hidden px-8 lg:px-24 bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1600&auto=format&fit=crop" 
            alt="Elite Veterinary Action" 
            className="w-full h-full object-cover brightness-[0.6] lg:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 px-7 py-3 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-full mb-12 shadow-2xl">
               <ShieldCheck size={18} className="text-primary" strokeWidth={3} />
               <span className="text-[11px] font-black tracking-[0.5em] text-clinic-text uppercase">{CLIENT_CONFIG.description}</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-serif font-black text-clinic-text leading-[1] tracking-tighter mb-12 uppercase italic">
              O Seu Pet <br /> <span className="text-primary not-italic">Encontra a Arte.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-clinic-text/60 mb-20 max-w-2xl leading-relaxed uppercase tracking-tight opacity-80 italic">
              A maior infraestrutura tecnológica da medicina animal no Itaim Bibi.
            </p>
            <div className="flex flex-wrap gap-10 items-center">
               <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-24 px-16 rounded-[2rem] flex items-center gap-6 font-black text-md uppercase tracking-[0.3em] shadow-[0_40px_80px_rgba(27,67,50,0.3)] transition-all transform hover:scale-[1.05] active:scale-95">
                 <WhatsAppIcon size={28} /> Agendar Avaliação
               </a>
               <div className="hidden sm:flex items-center gap-6 px-10 py-6 bg-white/40 backdrop-blur-2xl rounded-[2rem] border border-white/50 shadow-2xl transition-transform hover:scale-[1.02]">
                  <div className="flex text-amber-500 gap-1.5">
                     {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <span className="text-[12px] font-black text-clinic-text tracking-[0.3em] uppercase opacity-60">Google 4.9+</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - DENTAL CARDS UPGRADE */}
      <section id="serviços" className="py-32 bg-white px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
             <span className="text-[12px] font-black uppercase tracking-[0.7em] text-primary mb-10 block">Procedimentos de Elite</span>
             <h2 className="text-5xl md:text-[5rem] font-serif font-black text-clinic-text leading-none tracking-tighter uppercase italic">Cuidados <span className="text-primary not-italic">Extraordinários.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative h-[500px] overflow-hidden rounded-[3rem] shadow-2xl bg-clinic-text cursor-pointer transition-all duration-700 hover:shadow-premium"
              >
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000 bg-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-text via-transparent to-transparent opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-12 flex flex-col justify-end">
                  <div className="mb-6">
                     <span className="bg-primary/95 px-4 py-2 rounded-full text-white text-[10px] font-black tracking-widest inline-block uppercase">{s.badge}</span>
                  </div>
                  <h3 className="text-4xl text-white font-serif font-black mb-5 tracking-tighter uppercase leading-none">{s.title}</h3>
                  <p className="text-white/60 text-lg mb-10 leading-relaxed italic line-clamp-2">{s.description}</p>
                  <a href={whatsappUrl} className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:gap-6 transition-all border-b border-white/10 pb-3 w-fit">
                    <WhatsAppIcon size={16} /> Agendar Agora
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS - TRUST & AUTHORITY - ADDED HOVER */}
      <section id="diferenciais" className="py-32 bg-clinic-bg px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative group cursor-pointer">
            <div className="rounded-[5rem] overflow-hidden shadow-premium border-[20px] border-white relative z-10 transition-transform duration-700 group-hover:scale-[1.03]">
              <img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=1200" alt="DUNO Tech" className="w-full aspect-square object-cover bg-primary/20 transition-transform duration-[4s] group-hover:scale-110" />
            </div>
            <div className="absolute -top-12 -left-12 w-56 h-56 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl z-20 border border-primary/5 group-hover:rotate-12 transition-all">
               <span className="text-5xl font-serif font-black text-primary leading-none">24h</span>
               <span className="text-[11px] font-black text-clinic-text uppercase tracking-widest mt-2">Hospital</span>
            </div>
          </motion.div>

          <div>
             <span className="text-[12px] font-black uppercase tracking-[0.8em] text-primary mb-12 block">A Excelência em Detalhes</span>
             <h2 className="text-5xl md:text-[4.5rem] font-serif font-black text-clinic-text leading-none tracking-tighter uppercase italic mb-16 underline decoration-primary/10 decoration-8 underline-offset-8">Referência em <br /> <span className="text-primary not-italic">Vida Animal.</span></h2>
             
             <div className="space-y-12">
               {[
                 { t: "Corpo Clínico Sênior", i: <Users className="text-primary" />, desc: "Mestres e Doutores especializados em cirurgias de alto risco." },
                 { t: "Monitoramento Vital", i: <Activity className="text-primary" />, desc: "Boxes aquecidos com câmeras individuais 24h para você." },
                 { t: "Laboratório de IA", i: <Microscope className="text-primary" />, desc: "Diagnósticos acelerados por algoritmos avançados." },
                 { t: "Atendimento Humanizado", i: <Heart className="text-primary" />, desc: "Protocolos de calmaria e baixo estresse para seu pet." }
               ].map((item, i) => (
                 <motion.div key={i} whileHover={{ x: 15 }} className="flex gap-10 items-start group cursor-default">
                   <div className="w-20 h-20 bg-white rounded-[1.8rem] flex items-center justify-center shadow-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform hover:rotate-6">
                     {item.i}
                   </div>
                   <div>
                     <h4 className="text-3xl font-serif font-black text-clinic-text mb-2 uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{item.t}</h4>
                     <p className="text-lg font-bold text-clinic-text/40 leading-relaxed italic">{item.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="localização" className="py-32 bg-white px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-20 items-center">
          <div className="lg:col-span-1">
             <span className="text-[12px] font-black uppercase tracking-[0.8em] text-primary mb-10 block">Institucional</span>
             <h2 className="text-6xl font-serif font-black text-clinic-text tracking-tighter uppercase mb-20 italic leading-none">Onde a Arte <br/><span className="text-primary not-italic text-5xl">Reside.</span></h2>
             <div className="space-y-12">
               <motion.div whileHover={{ x: 10 }} className="flex gap-10 group cursor-pointer">
                 <div className="w-18 h-18 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all"><MapPin size={32} /></div>
                 <div>
                   <h4 className="text-2xl font-serif font-bold text-clinic-text mb-1 uppercase tracking-tighter leading-none">Itaim Bibi — SP</h4>
                   <p className="text-sm font-bold text-clinic-text/30 uppercase leading-relaxed tracking-widest">{CLIENT_CONFIG.address}</p>
                 </div>
               </motion.div>
               <motion.div whileHover={{ x: 10 }} className="flex gap-10 group cursor-pointer">
                 <div className="w-18 h-18 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all"><Clock size={32} /></div>
                 <div>
                   <h4 className="text-2xl font-serif font-bold text-clinic-text mb-1 uppercase tracking-tighter leading-none">Disponibilidade 24h</h4>
                   <p className="text-sm font-bold text-clinic-text/30 uppercase leading-relaxed tracking-widest">{CLIENT_CONFIG.openingHours}</p>
                 </div>
               </motion.div>
             </div>
             <a href={whatsappUrl} className="mt-20 inline-flex items-center gap-6 group cursor-pointer bg-white p-6 rounded-[2rem] border border-primary/5 shadow-xl hover:shadow-service transition-all">
                <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"><WhatsAppIcon size={32} /></div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-primary uppercase tracking-widest">Botão de Emergência</span>
                   <span className="text-2xl font-serif font-black text-clinic-text uppercase tracking-tighter">Entrar em Contato</span>
                </div>
             </a>
          </div>

          <div className="lg:col-span-2 h-[550px] rounded-[4rem] overflow-hidden shadow-service border-[15px] border-clinic-bg group">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" title="Map" className="grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000"></iframe>
          </div>
        </div>
      </section>

      {/* FAQ MASTER EXPANDED */}
      <section id="faq" className="py-32 bg-clinic-bg px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[12px] font-black uppercase tracking-[1em] text-primary mb-10 block">Transparência Total</span>
             <h2 className="text-5xl md:text-8xl font-serif font-black text-clinic-text uppercase tracking-tighter italic leading-none">Dúvidas <br/><span className="text-primary not-italic text-6xl">Frequentes.</span></h2>
          </div>
          <div className="space-y-10">
            {FAQS.map((faq) => (
              <motion.div 
                key={faq.id} 
                className="bg-white rounded-[2.5rem] p-12 shadow-xl border border-primary/5 cursor-pointer group hover:shadow-premium transition-all"
                onClick={(e) => {
                  const el = e.currentTarget.querySelector('.answer');
                  el.classList.toggle('hidden');
                }}
              >
                <div className="flex justify-between items-center gap-12">
                  <h4 className="font-serif text-3xl md:text-4xl font-black text-clinic-text leading-tight uppercase tracking-tighter group-hover:text-primary transition-colors">{faq.q}</h4>
                  <Plus className="text-primary shrink-0 transition-transform group-hover:rotate-90" size={36} />
                </div>
                <p className="answer hidden mt-10 pt-10 border-t border-primary/5 text-2xl font-bold text-clinic-text/40 leading-relaxed italic shadow-inner bg-clinic-bg/10 rounded-2xl p-6">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER MASTER UPGRADED */}
      <footer className="bg-clinic-text text-white pt-40 pb-16 px-8 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40 pb-32 border-b border-white/5">
            <div className="lg:col-span-1">
               <div className="flex items-center gap-6 mb-12 transition-transform hover:scale-[1.02]">
                  <div className="w-20 h-20 bg-primary text-white rounded-[1.8rem] flex items-center justify-center shadow-xl ring-2 ring-white/10"><PawPrint size={40} /></div>
                  <span className="font-serif text-7xl font-black tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
               </div>
               <p className="text-3xl font-serif font-black italic text-white/30 mb-16 leading-tight uppercase tracking-tight">Cuidando da vida animal com a precisão exigida pela hospitalidade moderna.</p>
               <div className="flex gap-10">
                  <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:-translate-y-2"><Instagram size={40} /></a>
                  <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:-translate-y-2"><Facebook size={40} /></a>
               </div>
            </div>

            <div>
               <h4 className="text-[13px] font-black uppercase tracking-[0.8em] text-primary mb-16 underline decoration-primary decoration-4 underline-offset-8">Mapa do Site</h4>
               <ul className="space-y-10 text-[12px] font-black tracking-[0.4em] text-white/20 uppercase">
                  {NAV_LINKS.map(l => (
                    <li key={l.name}><a href={l.href} className="hover:text-white transition-all flex items-center gap-4 hover:translate-x-2"><ChevronRight size={14} className="text-primary" /> {l.name}</a></li>
                  ))}
               </ul>
            </div>

            <div>
               <h4 className="text-[13px] font-black uppercase tracking-[0.8em] text-white/20 mb-16">Infra Hospitalar</h4>
               <div className="space-y-10 text-[12px] font-black tracking-[0.3em] text-white/20 uppercase leading-relaxed italic">
                  <p className="flex gap-4 items-start"><MapPin size={18} className="text-primary mt-1 shrink-0" /> {CLIENT_CONFIG.address}</p>
                  <p className="flex gap-4 items-start"><Phone size={18} className="text-primary mt-1 shrink-0" /> {CLIENT_CONFIG.phone}</p>
                  <p className="flex gap-4 items-start bg-primary/5 p-6 rounded-2xl border border-white/5 text-primary not-italic"><Award size={18} className="shrink-0" /> {CLIENT_CONFIG.crmv} <br/> Resp: Dr. Veterinário Jr</p>
               </div>
            </div>

            <div>
               <h4 className="text-[13px] font-black uppercase tracking-[0.8em] text-white/20 mb-16">Agendamento</h4>
               <p className="text-[11px] font-black tracking-[0.4em] text-white/10 uppercase mb-12 leading-loose italic">Canal direto via WhatsApp Business para triagem e agendamento emergencial.</p>
               <a href={whatsappUrl} className="bg-primary hover:bg-white hover:text-clinic-text text-white w-full h-20 rounded-[1.5rem] flex items-center justify-center gap-6 font-black uppercase text-sm tracking-widest transition-all shadow-2xl relative overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  <WhatsAppIcon size={24} className="relative z-10" /> <span className="relative z-10">Mandar Mensagem</span>
               </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 text-[11px] font-black tracking-[0.6em] text-white/5 uppercase">
             <p>© 2026 {CLIENT_CONFIG.name} HOSPITAL VETERINÁRIO. CNPJ: {CLIENT_CONFIG.cnpj}</p>
             <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors">ÉTICA MÉDICA</a>
                <a href="#" className="hover:text-white transition-colors">POLÍTICAS</a>
             </div>
          </div>
        </div>
        <div className="absolute -bottom-40 -left-40 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[200px] z-0" />
      </footer>
    </div>
  );
}
