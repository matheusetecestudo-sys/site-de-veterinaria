// Deployment: 2026-03-25T18:35:00Z - Final V3 Premium
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Award, 
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
  Minus
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
  emergency: "Apoio Emergencial em Minutos",
};

const SERVICES = [
  {
    id: "01",
    title: "Medicina do Futuro",
    description: "Equipamentos diagnósticos de padrão internacional com biometria e IA para laudos em tempo real.",
    image: "https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=1200",
    badge: "Alta Tecnologia",
    rating: "4.9/5.0 — 2.4k+ Atendimentos"
  },
  {
    id: "02",
    title: "Bloco Cirúrgico Elite",
    description: "Anestesia inalatória com monitoramento multiparâmetro e equipe focada em segurança máxima.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200",
    badge: "Segurança 24h",
    rating: "5.0/5.0 — 800+ Cirurgias"
  },
  {
    id: "03",
    title: "Internação 5 Estrelas",
    description: "Acomodações VIP monitoradas individualmente por câmeras que você acessa pelo smartphone.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200",
    badge: "Conforto Luxo",
    rating: "4.9/5.0 — 1.5k+ Estadias"
  },
  {
    id: "04",
    title: "Dermatologia & Alergologia",
    description: "Protocolos exclusivos para recuperação da pele e controle alérgico com as melhores terapias do mundo.",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=1200",
    badge: "Especialidade",
    rating: "4.8/5.0 — 900+ Pacientes"
  },
  {
    id: "05",
    title: "Check-up Executivo Pet",
    description: "Bateria completa de exames preventivos em um único dia, com foco na longevidade máxima.",
    image: "https://images.unsplash.com/photo-1579619573010-0925c43d78c3?q=80&w=1200",
    badge: "Prevenção",
    rating: "5.0/5.0 — 3.1k+ Checkups"
  },
  {
    id: "06",
    title: "Atendimento In Loco",
    description: "Equipe móvel equipada para diagnósticos e tratamentos na comodidade da sua residência (Itaim Bibi).",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1200",
    badge: "Praticidade",
    rating: "4.7/5.0 — 600+ Domicílios"
  }
];

const FAQS = [
  { id: 1, q: "Como agendar um atendimento na DUNO?", a: "O agendamento é feito em segundos via WhatsApp, onde nossa recepção 24h irá direcionar seu pet para o melhor especialista." },
  { id: 2, q: "O hospital realmente funciona em feriados?", a: "Sim, sem exceções. Nossa equipe está completa no local 24 horas por dia para garantir suporte imediato." },
  { id: 3, q: "A DUNO oferece suporte pós-operatório remoto?", a: "Sim, fornecemos um canal exclusivo via WhatsApp para monitorar a recuperação do seu pet em tempo real com orientações médicas." }
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-premium transition-all duration-500 group border border-primary/5 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-6">
        <h4 className={`font-serif text-[1.8rem] md:text-[2.5rem] font-black tracking-tighter leading-tight transition-colors ${isOpen ? 'text-primary' : 'text-clinic-text'}`}>
          {faq.q}
        </h4>
        <div className={`shrink-0 w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-45' : 'text-primary'}`}>
          <Plus size={32} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-10 text-xl md:text-2xl text-clinic-text font-black opacity-40 leading-relaxed italic border-t border-primary/5 mt-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta na DUNO Veterinária.")}`;

  return (
    <div className="min-h-screen bg-clinic-bg font-sans selection:bg-primary selection:text-white">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-10">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-8xl mb-6 text-primary">🐾</motion.div>
            <h2 className="font-serif text-5xl font-bold tracking-[0.4em] text-primary uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100]" />

      {/* Floating CTA */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 z-[95] bg-[#25D366] text-white p-6 rounded-full shadow-[0_30px_60px_rgba(37,211,102,0.5)] animate-pulse-whatsapp hover:scale-110 transition-transform hidden md:flex items-center justify-center">
        <WhatsAppIcon size={36} />
      </a>

      {/* NAV */}
      <nav className={`fixed w-full z-[80] transition-all duration-700 ${isScrolled ? 'top-6 px-10' : 'top-0 px-0'}`}>
        <div className={`max-w-7xl mx-auto px-10 py-5 transition-all flex justify-between items-center ${isScrolled ? 'mx-auto rounded-[2rem] border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
          <a href="#início" className="flex items-center gap-4 group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all bg-primary text-white shadow-xl group-hover:rotate-12`}>
               <PawPrint size={26} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-black tracking-tighter text-clinic-text leading-none uppercase">{CLIENT_CONFIG.name}</span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-black text-primary mt-1">Hospital de Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-14">
            {['Serviços', 'Sobre', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.5em] font-black text-clinic-text/60 hover:text-primary transition-all hover:translate-y-[-2px]">{item}</a>
            ))}
            <a href={whatsappUrl} className="bg-primary text-white h-14 px-10 text-[10px] uppercase font-black tracking-widest rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_rgba(27,67,50,0.2)] hover:bg-black transition-all hover:scale-105 active:scale-95">
              <MessageCircle size={18} /> AGENDAR AGORA
            </a>
          </div>

          <button className="lg:hidden text-primary p-4 bg-white/50 backdrop-blur-md rounded-[1.5rem] shadow-xl border border-white/50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[150] bg-clinic-bg flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-20 border-b border-primary/10 pb-10">
               <span className="font-serif text-4xl font-bold tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-4 rounded-3xl shadow-xl"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-10">
               {['Serviços', 'Sobre', 'Localização'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-clinic-text uppercase tracking-tight">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-8 rounded-3xl text-center font-black tracking-widest uppercase text-xl mt-10 shadow-2xl">AGENDAR AGORA</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO cinematic V3 */}
      <section id="início" className="relative h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579619573010-0925c43d78c3?q=80&w=1400&auto=format&fit=crop" 
            alt="Elite Veterinary Care" 
            className="w-full h-full object-cover brightness-[0.75] animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/30 backdrop-blur-xl border border-white/40 text-primary font-black text-[10px] tracking-[0.5em] uppercase rounded-full mb-12 shadow-2xl">
               <Star size={16} fill="currentColor" className="text-amber-500" /> MEDICINA PET DE ALTA PERFORMANCE
            </div>
            <h1 className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-serif text-clinic-text leading-[0.85] font-black tracking-tighter mb-10 text-balance uppercase">
               O seu Pet <br /> <span className="text-primary italic font-normal">encontra a Arte.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-clinic-text font-black mb-16 max-w-xl leading-tight opacity-70 uppercase tracking-tighter italic">
               Infraestrutura hospitalar de elite no coração do Itaim Bibi. Atendimento 24h especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
               <a href={whatsappUrl} className="bg-primary text-white rounded-[2rem] gap-6 shadow-[0_30px_60px_rgba(27,67,50,0.3)] h-24 px-14 text-sm font-black tracking-[0.3em] uppercase flex items-center justify-center hover:bg-black hover:scale-105 transition-all">
                 AGENDAR AVALIAÇÃO <ArrowRight size={28} />
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES premium V3 */}
      <section id="serviços" className="py-40 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
             <span className="section-subtitle">Diferenciais Clínicos</span>
             <h2 className="section-title">Tratamentos <span className="text-primary italic font-medium">Extraordinários.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-[700px] overflow-hidden rounded-[4rem] bg-white border border-primary/5 shadow-2xl hover:shadow-service transition-all duration-700"
              >
                <div className="h-1/2 w-full relative overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-10 right-10">
                    <div className="bg-white px-6 py-3 rounded-full shadow-2xl text-[9px] font-black uppercase tracking-widest text-primary">
                       {s.badge}
                    </div>
                  </div>
                </div>

                <div className="p-14 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-4xl font-serif font-black text-clinic-text mb-8 tracking-tighter uppercase group-hover:text-primary transition-colors leading-tight">{s.title}</h3>
                    <p className="text-xl text-clinic-text font-black leading-relaxed opacity-40 line-clamp-3 italic">
                      {s.description}
                    </p>
                  </div>
                  <a href={whatsappUrl} className="mt-12 flex items-center justify-center gap-5 bg-clinic-bg group-hover:bg-primary group-hover:text-white py-8 rounded-[2rem] font-black tracking-widest text-xs uppercase transition-all duration-700 border border-primary/5">
                    AGENDAR AGORA <ArrowUpRight size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE luxury v3 */}
      <section id="sobre" className="py-40 bg-clinic-bg px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="rounded-[6rem] overflow-hidden shadow-premium border-[20px] border-white">
                 <img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=1200" alt="DUNO Experience" className="w-full aspect-square object-cover" />
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <span className="section-subtitle">Selo de Qualidade DUNO</span>
              <h2 className="section-title mb-20">O Melhor para <br /> <span className="text-primary italic font-medium">Quem você Ama.</span></h2>
              <div className="space-y-16">
                {[
                  { t: "Plantão Médico 24h", d: "Time de especialistas em cirurgia e internação sempre prontos.", i: <Clock className="text-primary" /> },
                  { t: "Monitoramento por Câmeras", d: "Veja seu pet na internação direto pelo seu celular 24/7.", i: <Activity className="text-primary" /> },
                  { t: "Laudos em Minutos", d: "Diagnósticos por imagem digitais com precisão microscópica.", i: <Microscope className="text-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-12 group">
                    <div className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-700 mb-4">{item.i}</div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-serif text-[2.5rem] font-black text-clinic-text mb-2 uppercase tracking-tighter leading-none">{item.t}</h4>
                      <p className="text-xl text-clinic-text font-black opacity-40 leading-relaxed italic">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP luxury v3 */}
      <section id="localização" className="py-40 bg-white px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-24 items-center">
            <div className="lg:col-span-1">
               <span className="section-subtitle">Localização Itaim Bibi</span>
               <h2 className="text-[4.5rem] font-serif font-black text-clinic-text mb-16 tracking-tighter uppercase leading-none">Visite a <br/> <span className="text-primary italic font-medium px-4 bg-primary/5 rounded-2xl">DUNO.</span></h2>
               <div className="space-y-14">
                  <div className="flex gap-8 group">
                     <div className="w-20 h-20 bg-primary/5 text-primary rounded-3xl flex items-center justify-center shadow-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500"><MapPin size={36} /></div>
                     <div>
                        <h4 className="font-serif text-3xl font-black text-clinic-text mb-1 tracking-tight uppercase">Endereço</h4>
                        <p className="text-xl text-clinic-text font-black opacity-40 uppercase">{CLIENT_CONFIG.address}</p>
                     </div>
                  </div>
                  <div className="flex gap-8 group">
                     <div className="w-20 h-20 bg-primary/5 text-primary rounded-3xl flex items-center justify-center shadow-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500"><Phone size={36} /></div>
                     <div>
                        <h4 className="font-serif text-3xl font-black text-clinic-text mb-1 tracking-tight uppercase">Contato 24h</h4>
                        <p className="text-xl text-clinic-text font-black opacity-40 uppercase">(11) 99999-9999</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-2 h-[600px] rounded-[5rem] overflow-hidden shadow-premium border-[15px] border-clinic-bg relative">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="DUNO Map"></iframe>
            </div>
        </div>
      </section>

      {/* FAQ luxury v3 */}
      <section className="py-40 bg-clinic-bg px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="section-subtitle">FAQ</span>
            <h2 className="text-6xl md:text-9xl font-serif font-black text-clinic-text uppercase tracking-tighter leading-none">Dúvidas <br/> <span className="text-primary italic font-medium">FREQUENTES.</span></h2>
          </div>
          <div className="space-y-10">
            {FAQS.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER luxury v3 */}
      <footer className="bg-clinic-text text-white pt-40 pb-20 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-16">
                 <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center text-white shadow-xl"><PawPrint size={44} /></div>
                 <span className="font-serif text-8xl font-black tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-white/30 text-3xl font-serif font-black italic max-w-lg leading-snug mb-20">{CLIENT_CONFIG.emergency}</p>
              <div className="flex gap-8">
                <a href="#" className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={28} /></a>
                <a href="#" className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={28} /></a>
                <a href={whatsappUrl} className="w-16 h-16 rounded-[1.5rem] bg-[#25D366]/20 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"><WhatsAppIcon size={28} /></a>
              </div>
            </div>
            <div>
               <h4 className="font-serif text-3xl font-black mb-12 tracking-tight uppercase text-primary">Hospital</h4>
               <ul className="space-y-8 text-[11px] font-black tracking-[0.4em] text-white/30 uppercase">
                  <li><a href="#início">Início</a></li>
                  <li><a href="#serviços">Serviços</a></li>
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#localização">Contato</a></li>
               </ul>
            </div>
            <div>
               <h4 className="font-serif text-3xl font-black mb-12 tracking-tight uppercase text-white/40">Suporte 24h</h4>
               <ul className="space-y-10 text-[11px] font-black tracking-[0.3em] text-white/20 uppercase">
                  <li className="flex gap-4"><MapPin className="text-primary shrink-0" /> {CLIENT_CONFIG.address}</li>
                  <li className="flex gap-4"><Phone className="text-primary shrink-0" /> (11) 99999-9999</li>
                  <li className="flex gap-4 border-l-4 border-primary pl-4 text-primary font-black animate-pulse"> HOSPITAL 24H ATIVO</li>
               </ul>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 text-[10px] font-black tracking-[0.5em] text-white/10 text-center uppercase">
            <p>© 2026 {CLIENT_CONFIG.name} ELITE VETERINARY CARE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
