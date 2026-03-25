// Deployment: 2026-03-25T18:55:00Z - FIX SCALE & ALIGNMENT
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
  Minus,
  CheckCircle2
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
  description: "Hospital Veterinário de Elite: Tecnologia de ponta e medicina humanizada em Pinheiros.",
};

const SERVICES = [
  {
    id: "01",
    title: "Medicina do Futuro",
    description: "Diagnóstico por imagem e laboratório próprio para resultados imediatos e precisos.",
    image: "https://images.unsplash.com/photo-1579683921124-2c7b11590e0b?q=80&w=600&auto=format&fit=crop",
    badge: "Laboratório"
  },
  {
    id: "02",
    title: "Bloco Cirúrgico",
    description: "Equipe sênior e infraestrutura hospitalar para cirurgias eletivas e emergenciais.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop",
    badge: "24 Horas"
  },
  {
    id: "03",
    title: "Internação Elite",
    description: "Suporte intensivo 24h com monitoramento constante em ambientes climatizados.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=600&auto=format&fit=crop",
    badge: "UTI Pet"
  },
  {
    id: "04",
    title: "Vacinação & Prevenção",
    description: "Protocolos vacinais de última geração para cães e gatos de todas as idades.",
    image: "https://images.unsplash.com/photo-1548129871-171884c3c970?q=80&w=600&auto=format&fit=crop",
    badge: "Cuidado"
  },
  {
    id: "05",
    title: "Especialidades Médicas",
    description: "Ortopedia, Cardiologia, Dermatologia e Nutrição em um único local.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop",
    badge: "Expertise"
  },
  {
    id: "06",
    title: "Estética & Spa",
    description: "Cuidado completo com higienização premium e bem-estar para o seu pet.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=600&auto=format&fit=crop",
    badge: "Bem-estar"
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
      {/* LOADING */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[200] bg-clinic-text flex flex-col items-center justify-center">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-6">
              <PawPrint size={32} />
            </motion.div>
            <h2 className="font-serif text-3xl font-bold tracking-[0.3em] text-white uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100]" />

      {/* WHATSAPP MOBILE */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-[95] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all active:scale-95 lg:hidden">
        <WhatsAppIcon size={28} />
      </a>

      {/* NAV - Refined Scale */}
      <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
        <div className={`max-w-6xl mx-auto px-6 flex justify-between items-center transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-3 rounded-2xl shadow-xl' : 'bg-transparent'}`}>
          <a href="#início" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
              <PawPrint size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-black tracking-tight text-clinic-text uppercase">{CLIENT_CONFIG.name}</span>
              <span className="text-[8px] font-black tracking-[0.4em] text-primary mt-0.5 uppercase">Hospital Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Serviços', 'Sobre', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.3em] text-clinic-text/60 hover:text-primary transition-all">{item}</a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-11 px-6 rounded-xl flex items-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-lg transition-all active:scale-95">
              <MessageCircle size={14} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden p-3 rounded-xl bg-white shadow-lg text-primary border border-primary/5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* HERO - Fixed Massive Font Sizes */}
      <section id="início" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden px-6 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1400&auto=format&fit=crop" 
            alt="Hero Veterinary" 
            className="w-full h-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-clinic-bg/90 via-clinic-bg/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/50 backdrop-blur-xl border border-white/60 rounded-full mb-8 shadow-lg">
              <CheckCircle2 size={14} className="text-primary" strokeWidth={3} />
              <span className="text-[9px] font-black tracking-[0.3em] text-clinic-text uppercase">Medicina Pet de Elite</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black text-clinic-text leading-[1.1] tracking-tighter mb-8 text-balance uppercase">
              O Seu Pet <br /> <span className="text-primary italic font-normal">Encontra a Arte.</span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-clinic-text/70 mb-12 max-w-xl leading-relaxed uppercase tracking-tight italic">
              Hospital 24h especializado em medicina de alta performance no Itaim Bibi. Tecnologia e calor humano.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-16 px-10 rounded-2xl flex items-center gap-4 font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95">
                Agendar Agora <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/60">
                <div className="flex text-amber-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="text-[10px] font-black text-clinic-text tracking-widest uppercase">4.9 no Google</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - Adjusted Scale */}
      <section id="serviços" className="py-24 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase">Tratamentos <span className="text-primary italic font-normal">Extraordinários.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col h-[500px] overflow-hidden rounded-3xl bg-clinic-bg border border-primary/5 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-[220px] relative overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 right-6 bg-white/90 px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest text-primary shadow-lg">
                    {s.badge}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-2xl font-serif font-black text-primary/10 block mb-2">{s.id}</span>
                    <h3 className="text-2xl font-serif font-black text-clinic-text mb-4 uppercase leading-none group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm font-bold text-clinic-text/40 leading-relaxed italic">{s.description}</p>
                  </div>
                  <a href={whatsappUrl} className="flex items-center gap-3 text-primary font-black text-[9px] uppercase tracking-widest hover:gap-5 transition-all">
                    Saiba Mais <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT - Fixed Scale */}
      <section id="sobre" className="py-24 bg-clinic-bg px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white">
              <img src="https://images.unsplash.com/photo-1544450175-752171242305?q=80&w=800&auto=format&fit=crop" alt="Clinical" className="w-full aspect-square object-cover" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block">Diferenciais</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text leading-tight tracking-tighter uppercase mb-12">O Melhor Para <span className="text-primary italic font-normal">Quem Você Ama.</span></h2>
            
            <div className="space-y-10">
              {[
                { t: "Hospital 24 Horas", i: <Clock className="text-primary" />, desc: "Plantão completo para emergências a qualquer hora." },
                { t: "Monitoramento VIP", i: <Activity className="text-primary" />, desc: "Acompanhamento em tempo real durante internação." },
                { t: "Alta Tecnologia", i: <Microscope className="text-primary" />, desc: "Diagnósticos acelerados com suporte laboratorial." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-clinic-text mb-1 uppercase tracking-tight">{item.t}</h4>
                    <p className="text-sm font-bold text-clinic-text/40 leading-relaxed italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP - Realigned */}
      <section id="localização" className="py-24 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block">Localização</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text tracking-tighter uppercase mb-12">Visite a <span className="text-primary italic">DUNO.</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center shadow-md grow-0 shrink-0"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-clinic-text mb-1 uppercase">Itaim Bibi</h4>
                  <p className="text-xs font-bold text-clinic-text/40 uppercase leading-none">{CLIENT_CONFIG.address}</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center shadow-md grow-0 shrink-0"><Phone size={24} /></div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-clinic-text mb-1 uppercase">Contato</h4>
                  <p className="text-xs font-bold text-clinic-text/40 uppercase leading-none">(11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-clinic-bg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" title="Map" className="grayscale-[0.2]"></iframe>
          </div>
        </div>
      </section>

      {/* FAQ - Normalized */}
      <section className="py-24 bg-clinic-bg px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-clinic-text uppercase tracking-tighter">Dúvidas <span className="text-primary italic font-normal text-3xl md:text-4xl">Frequentes.</span></h2>
          </div>
          
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-primary/5 cursor-pointer flex flex-col"
              >
                <div className="flex justify-between items-center gap-6">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-clinic-text leading-tight">{faq.q}</h4>
                  <Plus className="text-primary shrink-0" size={24} />
                </div>
                <p className="mt-6 text-sm font-bold text-clinic-text/40 leading-relaxed italic border-t border-primary/5 pt-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Realigned */}
      <footer className="bg-clinic-text text-white pt-24 pb-12 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center"><PawPrint size={24} /></div>
                <span className="font-serif text-4xl font-black tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-sm font-bold text-white/30 italic max-w-sm mb-12 uppercase tracking-widest">{CLIENT_CONFIG.address}</p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={20} /></a>
                <a href={whatsappUrl} className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"><WhatsAppIcon size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-8">Hospital</h4>
              <ul className="space-y-6 text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">
                <li><a href="#início" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Suporte</h4>
              <p className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase italic">Hospital Veterinário Itaim Bibi, SP. Ativo 24h.</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-[8px] font-black tracking-[0.4em] text-white/10 text-center uppercase">
            © 2026 {CLIENT_CONFIG.name} ELITE PET CARE.
          </div>
        </div>
      </footer>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[150] bg-clinic-text flex flex-col p-12 lg:hidden">
            <div className="flex justify-between items-center mb-16 pb-8 border-b border-white/10">
               <span className="font-serif text-3xl font-bold text-white uppercase tracking-tighter">DUNO</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-4 rounded-2xl"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-10 text-center">
               {['Serviços', 'Sobre', 'Localização'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-serif font-black text-white uppercase italic">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-8 rounded-[2rem] font-black tracking-widest uppercase text-xl mt-8">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
