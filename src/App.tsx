// Deployment: 2026-03-25T20:00:00Z - COMPACT & PROFESSIONAL MASTER OVERHAUL (V5 - REAL 10/10)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Mail,
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
  openingHours: "Hospital 24h — Pronto Atendimento",
};

const SERVICES = [
  { id: "01", title: "Medicina do Futuro", description: "Diagnóstico completo com IA e suporte laboratorial imediato no Itaim Bibi.", image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800", badge: "Diagnóstico" },
  { id: "02", title: "Bloco Cirúrgico 24h", description: "Equipe sênior de cirurgiões e infraestrutura hospitalar de ponta.", image: "https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=800", badge: "Cirurgia" },
  { id: "03", title: "Internação de Elite", description: "Acomodações VIP monitoradas individualmente por câmeras 24 horas.", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800", badge: "UTI Pet" },
  { id: "04", title: "Dermatologia & Alergia", description: "Tratamentos especializados para pele e recuperação imunológica avançada.", image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800", badge: "Especialidade" },
  { id: "05", title: "Check-up Integral", description: "Avaliação completa em um único dia para longevidade e saúde do pet.", image: "https://images.unsplash.com/photo-1579621046025-4030468efcb9?q=80&w=800", badge: "Prevenção" },
  { id: "06", title: "Odonto Profilaxia", description: "Saúde bucal assistida com tecnologia ultrassônica para higiene profunda.", image: "https://images.unsplash.com/photo-1628009142861-6ec649195d85?q=80&w=800", badge: "Odontologia" },
];

const DOCTORS = [
  { name: "Dr. Roberto Silva", role: "Cirurgião Sênior", crmv: "CRMV-SP 12345", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400" },
  { name: "Dra. Ana Costa", role: "Oncologista", crmv: "CRMV-SP 67890", image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=400" },
  { name: "Dr. Carlos Lima", role: "Ortopedista", crmv: "CRMV-SP 11223", image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400" },
];

const FAQS = [
  { id: 1, q: "Como agendar um atendimento na DUNO?", a: "O agendamento é feito instantaneamente via WhatsApp. Nossa equipe 24h está pronta para triagem imediata." },
  { id: 2, q: "O hospital realmente funciona em feriados?", a: "Sim. Operamos 24 horas por dia, 365 dias por ano, com equipe médica completa in-loco." },
  { id: 3, q: "Como acompanhar meu pet durante a internação?", a: "Nossas UTIs possuem câmeras individuais que você pode acessar pelo celular via aplicativo seguro." },
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
    <div className="min-h-screen bg-[#FCFBF9] font-sans selection:bg-primary selection:text-white overflow-x-hidden antialiased">
      {/* 24H EMERGENCY TOP BAR */}
      <div className="bg-[#B91C1C] text-white py-2 px-6 text-center text-[10px] font-black tracking-[0.4em] uppercase z-[200] relative flex items-center justify-center gap-3">
        <Activity size={14} className="animate-pulse" /> Hospital 24h em Operação — Emergência: (11) 99999-9999
      </div>

      {/* LOADING */}
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

      {/* WHATSAPP FLOAT - COMPACT */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] bg-[#25D366] text-white p-5 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group">
        <WhatsAppIcon size={20} /> <span className="font-bold text-[10px] uppercase tracking-wider hidden md:inline-block">Conversar no WhatsApp</span>
      </a>

      {/* NAVIGATION - COMPACT & CENTERED */}
      <nav className={`fixed w-full z-[150] transition-all duration-500 ${isScrolled ? 'top-0 py-3 bg-white/95 backdrop-blur-md shadow-md' : 'top-8 py-0 bg-transparent'}`}>
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
            {['Serviços', 'Diferenciais', 'Unidades', 'FAQ'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-11 px-6 rounded-lg flex items-center gap-2.5 font-black text-[10px] uppercase tracking-widest transition-all shadow-md">
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
               {['Serviços', 'Diferenciais', 'Unidades', 'FAQ'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-black text-white uppercase">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-8 rounded-2xl text-center font-black tracking-widest uppercase text-lg mt-10 shadow-2xl flex items-center justify-center gap-3"><WhatsAppIcon size={20} /> Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - COMPACT & SOPHISTICATED */}
      <section id="início" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden px-10 lg:px-24 bg-white border-b border-black/[0.03]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1600&auto=format&fit=crop" 
            alt="Elite Veterinary Action" 
            className="w-full h-full object-cover brightness-[0.7]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/50 backdrop-blur-xl border border-white/50 rounded-full mb-8 shadow-sm">
               <ShieldCheck size={14} className="text-primary" strokeWidth={3} />
               <span className="text-[9px] font-black tracking-[0.3em] text-clinic-text uppercase leading-none">{CLIENT_CONFIG.name} | Hospital 24h Itaim Bibi</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-clinic-text leading-[1.1] tracking-tighter mb-8 uppercase italic max-w-4xl">
              O Seu Pet <br /> <span className="text-primary not-italic">Encontra a Arte de Cuidar.</span>
            </h1>
            <p className="text-base md:text-lg font-bold text-clinic-text/60 mb-12 max-w-xl leading-relaxed uppercase tracking-tight opacity-70">
              Excelência médica e infraestrutura tecnológica de ponta para quem é mais do que um animal de estimação.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
               <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-16 px-10 rounded-xl flex items-center gap-4 font-black text-[11px] uppercase tracking-[0.2em] shadow-lg transition-all transform hover:scale-[1.03]">
                 <WhatsAppIcon size={20} /> Agendar Consulta Agora
               </a>
               <div className="hidden sm:flex items-center gap-4 px-6 py-4 bg-white/40 backdrop-blur-xl rounded-xl border border-white/50 shadow-sm">
                  <div className="flex text-amber-500 gap-0.5">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[9px] font-black text-clinic-text tracking-[0.1em] uppercase opacity-60">Referência no Google</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - COMPACT CARDS */}
      <section id="serviços" className="py-24 bg-white px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block uppercase leading-none">Nossos Procedimentos</span>
             <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic">Medicina de <span className="text-primary not-italic">Alta Precisão.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative h-[380px] overflow-hidden rounded-[2rem] shadow-xl bg-clinic-text cursor-pointer transition-all duration-500 hover:shadow-2xl"
              >
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-1000 bg-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-text via-transparent to-transparent opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="mb-4">
                     <span className="border border-white/20 px-3 py-1 rounded-full text-white text-[8px] font-black tracking-widest inline-block uppercase bg-primary/40 backdrop-blur-md">{s.badge}</span>
                  </div>
                  <h3 className="text-2xl text-white font-serif font-black mb-3 tracking-tighter uppercase leading-none">{s.title}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed italic line-clamp-2">{s.description}</p>
                  <a href={whatsappUrl} className="flex items-center gap-3 text-white font-black text-[9px] uppercase tracking-[0.2em] hover:gap-5 transition-all w-fit group/btn">
                    <WhatsAppIcon size={14} className="text-primary" /> Agendar No WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / TEAM - NEW SECTION FOR 10/10 */}
      <section className="py-24 bg-[#F5F3F0] px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block uppercase leading-none">Corpo Clínico Sênior</span>
             <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic">Especialistas <span className="text-primary not-italic">Renomados.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doc, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/[0.03] flex items-center gap-6 group cursor-pointer transition-all hover:shadow-lg">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-inner shrink-0 bg-clinic-bg border border-black/[0.05]">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-black text-clinic-text leading-none mb-1 uppercase tracking-tight">{doc.name}</h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{doc.role}</p>
                  <p className="text-[8px] font-black text-black/20 uppercase tracking-widest">{doc.crmv}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS - COMPACT & PRECISE */}
      <section id="diferenciais" className="py-24 bg-white px-10 md:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group cursor-pointer overflow-hidden rounded-[3rem] shadow-premium">
            <img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=1200" alt="DUNO Internal" className="w-full aspect-[4/3] object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all" />
          </div>

          <div>
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-8 block uppercase leading-none">Diferenciais Técnicos</span>
             <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase italic mb-10 leading-none">O Padrão de <br /> <span className="text-primary not-italic">Excelência Mundial.</span></h2>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { t: "Plantão Hospitalar 24h", i: <Clock className="text-primary" />, desc: "Presença in-loco de médicos especialistas permanentemente." },
                 { t: "Laudos Via Smartphone", i: <Activity className="text-primary" />, desc: "Acesso imediato a todos os exames e monitoramento ao vivo." },
                 { t: "Centro de IA Médica", i: <Microscope className="text-primary" />, desc: "Algoritmos de diagnóstico para precisão quase absoluta." },
                 { t: "UTIs Humanizadas", i: <Heart className="text-primary" />, desc: "Boxes aquecidos e controle de ruído para menor estresse." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-5 items-start">
                   <div className="w-10 h-10 bg-[#F5F3F0] rounded-xl flex items-center justify-center shadow-sm shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                     {item.i}
                   </div>
                   <div>
                     <h4 className="text-base font-serif font-black text-clinic-text mb-1 uppercase tracking-tight leading-tight">{item.t}</h4>
                     <p className="text-[11px] font-bold text-clinic-text/40 leading-relaxed italic">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* LOCATION & FAQ COMBINED COMPACT GRID */}
      <section id="localização" className="py-24 bg-[#F5F3F0] px-10 md:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-8 block font-black leading-none uppercase">Presença no Itaim Bibi</span>
            <h2 className="text-4xl font-serif font-black text-clinic-text tracking-tighter uppercase mb-12 italic leading-none">Visite Nossa <br/><span className="text-primary not-italic block mt-2">Unidade Central.</span></h2>
            <div className="space-y-8 bg-white p-8 rounded-[2rem] shadow-sm border border-black/[0.03] mb-12">
               <div className="flex gap-6 items-start">
                  <MapPin className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight mb-1">Endereço Hospitalar</h4>
                    <p className="text-xs font-bold text-clinic-text/40 uppercase leading-none">{CLIENT_CONFIG.address}</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <Phone className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight mb-1">Contato Urgente</h4>
                    <p className="text-xs font-bold text-clinic-text/40 uppercase leading-none">{CLIENT_CONFIG.phone}</p>
                  </div>
               </div>
            </div>
            <a href={whatsappUrl} className="flex items-center gap-6 group cursor-pointer bg-primary p-6 rounded-[1.5rem] shadow-xl hover:scale-105 transition-all text-white">
               <WhatsAppIcon size={28} />
               <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/50">Emergência 24h</span>
                  <span className="text-xl font-serif font-black uppercase tracking-tighter">Falar com Recepcionista</span>
               </div>
            </a>
          </div>

          <div>
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-8 block leading-none uppercase">Dúvidas Frequentes</span>
             <h2 className="text-4xl font-serif font-black text-clinic-text tracking-tighter uppercase mb-12 italic leading-none">FAQ de <br/><span className="text-primary not-italic block mt-2 text-2xl">Atendimento.</span></h2>
             <div className="space-y-4">
               {FAQS.map((faq) => (
                 <div key={faq.id} className="bg-white p-6 rounded-2xl shadow-sm border border-black/[0.02] cursor-pointer group" onClick={(e) => {
                    const el = e.currentTarget.querySelector('.ans');
                    el.classList.toggle('hidden');
                 }}>
                    <div className="flex justify-between items-center gap-6">
                       <h4 className="text-sm font-bold text-clinic-text uppercase tracking-tight group-hover:text-primary transition-all">{faq.q}</h4>
                       <Plus size={16} className="text-primary" />
                    </div>
                    <p className="ans hidden mt-4 pt-4 border-t border-black/[0.05] text-[11px] font-bold text-clinic-text/40 italic leading-relaxed">{faq.a}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER - COMPACT, TECHNICAL & ULTRA-PROFESSIONAL */}
      <footer className="bg-clinic-text text-white pt-24 pb-8 px-10 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24 items-start">
            <div className="lg:col-span-2">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg"><PawPrint size={20} strokeWidth={3} /></div>
                  <span className="font-serif text-4xl font-black tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
               </div>
               <p className="text-lg font-serif font-black italic text-white/30 mb-8 max-w-sm leading-tight uppercase tracking-tight">Cuidando da vida animal com precisão tecnológica e hospitalidade 24h no coração de Pinheiros.</p>
               <div className="flex gap-6">
                  <a href="#" className="text-white/40 hover:text-primary transition-all transition-all"><Instagram size={20} /></a>
                  <a href="#" className="text-white/40 hover:text-primary transition-all transition-all"><Facebook size={20} /></a>
                  <a href="#" className="text-white/40 hover:text-primary transition-all transition-all"><Linkedin size={20} /></a>
               </div>
            </div>

            <div>
               <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-8 underline underline-offset-8 decoration-primary/30">Institucional</h4>
               <ul className="space-y-4 text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase">
                  <li><a href="#início" className="hover:text-white transition-all">Home</a></li>
                  <li><a href="#serviços" className="hover:text-white transition-all">Especialidades</a></li>
                  <li><a href="#diferenciais" className="hover:text-white transition-all">Tecnologia</a></li>
                  <li><a href="#localização" className="hover:text-white transition-all">Localização</a></li>
                  <li><a href="#faq" className="hover:text-white transition-all">Dúvidas (FAQ)</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Localização</h4>
               <div className="space-y-6 text-[8px] font-black tracking-[0.1em] text-white/20 uppercase leading-relaxed italic">
                  <p className="flex gap-3"><MapPin size={12} className="text-primary mt-1 shrink-0" /> {CLIENT_CONFIG.address}</p>
                  <p className="flex gap-3"><Phone size={12} className="text-primary mt-1 shrink-0" /> {CLIENT_CONFIG.phone} <br/> {CLIENT_CONFIG.email}</p>
                  <p className="flex gap-3 text-primary bg-primary/10 p-3 rounded-xl border border-white/5"><Award size={12} className="shrink-0" /> {CLIENT_CONFIG.crmv} | Prof. Resp. Dr Jr</p>
               </div>
            </div>

            <div className="bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between h-full">
               <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 leading-none">Canal Direto</h4>
               <p className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-8 italic">Atendimento hospitalar 24h para emergências imediatas no Itaim Bibi.</p>
               <a href={whatsappUrl} className="bg-primary hover:bg-white hover:text-clinic-text text-white w-full h-14 rounded-xl flex items-center justify-center gap-3 font-black uppercase text-[9px] tracking-widest transition-all shadow-xl">
                  <WhatsAppIcon size={16} /> Agendar Agora
               </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[8px] font-black tracking-[0.4em] text-white/5 uppercase">
             <div className="flex flex-col md:flex-row gap-4 md:gap-10">
               <p>© 2026 {CLIENT_CONFIG.name} HOSPITAL VETERINÁRIO. CNPJ: {CLIENT_CONFIG.cnpj}</p>
               <p className="hidden md:block">MEDICINA VETERINÁRIA DE ALTA PERFORMANCE</p>
             </div>
             <div className="flex gap-8 mt-6 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">POLÍTICAS</a>
                <a href="#" className="hover:text-white transition-colors">ÉTICA MÉDICA</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
