// Deployment: 2026-03-25T18:50:00Z - Final 10/10 Premium Polished V3
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
  CheckCircle2,
  ShieldCheck
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
    description: "Diagnóstico por imagem de alta resolução e exames laboratoriais em tempo real com precisão absoluta.",
    image: "https://images.unsplash.com/photo-1579683921124-2c7b11590e0b?q=80&w=1200&auto=format&fit=crop",
    badge: "Laboratório Próprio"
  },
  {
    id: "02",
    title: "Centro Cirúrgico Elite",
    description: "Infraestrutura avançada para cirurgias complexas com monitoramento multiparâmetro e anestesia segura.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop",
    badge: "Alta Complexidade"
  },
  {
    id: "03",
    title: "Internação VIP",
    description: "Acomodações individuais monitoradas 24h para garantir a melhor recuperação e conforto do seu pet.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop",
    badge: "Cuidado 24h"
  },
  {
    id: "04",
    title: "Pediatria Veterinária",
    description: "Cuidados especiais e protocolos de imunização internacionais para o início de uma vida longa e saudável.",
    image: "https://images.unsplash.com/photo-1548129871-171884c3c970?q=80&w=1200&auto=format&fit=crop",
    badge: "Crescimento Saudável"
  },
  {
    id: "05",
    title: "Ortopedia & Reabilitação",
    description: "Tratamentos especializados para mobilidade e fisioterapia avançada com resultados comprovados.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
    badge: "Expertise"
  },
  {
    id: "06",
    title: "Odontologia Pet",
    description: "Saúde bucal avançada com profilaxia e tratamentos periodontais de padrão ouro.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop",
    badge: "Higiene Plena"
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
      {/* 10/10 LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1 }} 
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
            className="fixed inset-0 z-[200] bg-clinic-text flex flex-col items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-24 h-24 rounded-[2rem] bg-primary flex items-center justify-center text-white shadow-2xl mb-8"
            >
              <PawPrint size={56} />
            </motion.div>
            <h2 className="font-serif text-5xl font-black tracking-[0.4em] text-white uppercase">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100]" />

      {/* STICKY CTA */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 z-[95] bg-[#25D366] text-white p-6 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all animate-pulse-whatsapp hidden lg:flex">
        <WhatsAppIcon size={36} />
      </a>

      {/* LUXURY NAVIGATION */}
      <nav className={`fixed w-full z-[80] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-10'}`}>
        <div className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all ${isScrolled ? 'bg-white/80 backdrop-blur-2xl py-4 rounded-[2.5rem] shadow-2xl border border-white/50' : 'bg-transparent'}`}>
          <a href="#início" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-primary text-white rounded-[1.2rem] flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
              <PawPrint size={24} strokeWidth={2.5} />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-4xl font-black tracking-tight text-clinic-text uppercase">{CLIENT_CONFIG.name}</span>
              <span className="text-[10px] font-black tracking-[0.4em] text-primary mt-1 uppercase">Hospital Elite</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {['Serviços', 'Sobre', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-[0.4em] text-clinic-text/60 hover:text-primary transition-all hover:translate-y-[-2px]">{item}</a>
            ))}
            <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-14 px-10 rounded-2xl flex items-center gap-3 font-black text-[11px] uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95">
              <MessageCircle size={18} /> Agendar Agora
            </a>
          </div>

          <button className="lg:hidden p-4 rounded-2xl bg-white shadow-lg text-primary border border-primary/5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* CINEMATIC HERO */}
      <section id="início" className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1600&auto=format&fit=crop" 
            alt="Hero Veterinary" 
            className="w-full h-full object-cover brightness-[0.7] animate-ken-burns scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-clinic-bg/95 via-clinic-bg/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full mb-10 shadow-xl">
              <CheckCircle2 size={16} className="text-primary" strokeWidth={3} />
              <span className="text-[11px] font-black tracking-[0.4em] text-clinic-text uppercase">O Padrão Ouro da Medicina Pet</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-serif font-black text-clinic-text leading-[0.85] tracking-tighter mb-10 text-balance uppercase">
              O Seu Pet <br /> <span className="text-primary italic font-normal">Encontra a Arte.</span>
            </h1>
            <p className="text-xl md:text-3xl font-black text-clinic-text/60 mb-16 max-w-2xl leading-tight uppercase tracking-tight italic">
              Hospital 24h especializado em medicina de alta performance. Onde tecnologia e amor se unem para salvar vidas.
            </p>
            <div className="flex flex-wrap gap-8">
              <a href={whatsappUrl} className="bg-primary hover:bg-clinic-text text-white h-24 px-16 rounded-[2.5rem] flex items-center gap-6 font-black text-sm uppercase tracking-[0.3em] shadow-[0_30px_60px_rgba(27,67,50,0.3)] transition-all hover:scale-105 active:scale-95">
                Agendar Avaliação <ArrowRight size={28} />
              </a>
              <div className="flex items-center gap-5 px-10 py-6 bg-white/50 backdrop-blur-xl rounded-[2.5rem] border border-white/50">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-clinic-text tracking-widest uppercase">4.9/5.0 — Google</span>
                  <span className="text-[9px] font-black text-primary/60 tracking-widest uppercase">Certificação Elite</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10/10 SERVICES GRID */}
      <section id="serviços" className="py-40 bg-white px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <span className="text-[12px] font-black uppercase tracking-[0.6em] text-primary mb-8 block">Nossas Clínicas</span>
              <h2 className="text-6xl md:text-[8rem] font-serif font-black text-clinic-text leading-none tracking-tighter uppercase">Tratamentos <span className="text-primary italic font-normal">Extraordinários.</span></h2>
            </div>
            <p className="text-xl font-black text-clinic-text/40 uppercase tracking-tight italic max-w-sm mb-4">Referência nacional em cirurgias complexas e pronto-atendimento 24h.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative h-[650px] overflow-hidden rounded-[4rem] bg-clinic-bg border border-primary/5 shadow-2xl hover:shadow-service transition-all duration-700"
              >
                <div className="h-2/5 relative overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" />
                  <div className="absolute top-10 right-10">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl text-[9px] font-black uppercase tracking-widest text-primary">
                      {s.badge}
                    </div>
                  </div>
                </div>

                <div className="p-14 flex flex-col justify-between h-3/5">
                  <div>
                    <div className="text-4xl font-serif font-black text-primary/10 mb-4 tracking-tighter">{s.id}</div>
                    <h3 className="text-4xl font-serif font-black text-clinic-text mb-6 tracking-tighter uppercase group-hover:text-primary transition-colors leading-none">{s.title}</h3>
                    <p className="text-xl font-black text-clinic-text/40 leading-relaxed italic line-clamp-3">
                      {s.description}
                    </p>
                  </div>
                  <a href={whatsappUrl} className="flex items-center justify-center gap-5 bg-white group-hover:bg-primary group-hover:text-white py-8 rounded-[2rem] font-black text-[12px] uppercase tracking-widest shadow-xl transition-all duration-500 border border-primary/5">
                    Saiba Mais <ArrowUpRight size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM EXPERIENCE SECTION */}
      <section id="sobre" className="py-40 bg-clinic-bg px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <div className="rounded-[6rem] overflow-hidden shadow-premium border-[20px] border-white relative z-10">
              <img src="https://images.unsplash.com/photo-1544164559-994ea601931a?q=80&w=1200&auto=format&fit=crop" alt="Clinical Interior" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px] z-0" />
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-0" />
          </div>

          <div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-primary mb-10 block">Segurança Integrada</span>
            <h2 className="text-6xl md:text-[8rem] font-serif font-black text-clinic-text leading-none tracking-tighter uppercase mb-20">O Melhor Para <br /> <span className="text-primary italic font-normal text-6xl md:text-[6rem]">Quem Você Ama.</span></h2>
            
            <div className="space-y-12">
              {[
                { t: "Plantão Médico 24h", i: <Clock className="text-primary" />, desc: "Suporte intensivo e equipes de prontidão em todas as especialidades." },
                { t: "Monitoramento por Câmeras", i: <Activity className="text-primary" />, desc: "Acompanhe a recuperação do seu pet em tempo real via celular." },
                { t: "Laudos em Minutos", i: <Microscope className="text-primary" />, desc: "Diagnóstico acelerado com inteligência artificial e médicos sêniores." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-10 group items-start"
                >
                  <div className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-110">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif font-black text-clinic-text mb-2 uppercase tracking-tighter">{item.t}</h4>
                    <p className="text-xl font-black text-clinic-text/40 leading-relaxed italic">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY LOCATION GRID */}
      <section id="localização" className="py-40 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-24 items-center">
          <div className="lg:col-span-1">
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-primary mb-10 block">Itaim Bibi — Pinheiros</span>
            <h2 className="text-7xl font-serif font-black text-clinic-text leading-none tracking-tighter uppercase mb-16 italic">Visite a <br/> <span className="text-primary not-italic bg-primary/5 px-4 rounded-2xl block mt-2">DUNO.</span></h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-[1.5rem] flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all shrink-0"><MapPin size={32} /></div>
                <div>
                  <h4 className="text-2xl font-serif font-black text-clinic-text mb-1 uppercase tracking-tighter">Endereço Elite</h4>
                  <p className="text-xl font-black text-clinic-text/40 uppercase leading-none">{CLIENT_CONFIG.address}</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-[1.5rem] flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all shrink-0"><Phone size={32} /></div>
                <div>
                  <h4 className="text-2xl font-serif font-black text-clinic-text mb-1 uppercase tracking-tighter">Contato Direto</h4>
                  <p className="text-xl font-black text-clinic-text/40 uppercase leading-none">(11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 h-[650px] rounded-[5rem] overflow-hidden shadow-service border-[15px] border-clinic-bg group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              title="Map" 
              className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 10/10 FAQ SECTION */}
      <section className="py-40 bg-clinic-bg px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-[14px] font-black uppercase tracking-[0.8em] text-primary/40 block mb-6">...</span>
            <h2 className="text-7xl md:text-[10rem] font-serif font-black text-clinic-text leading-none tracking-tighter uppercase italic">Dúvidas <br/> <span className="text-primary not-italic">FREQUENTES.</span></h2>
          </div>
          
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <FAQItem key={faq.id} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ULTRA-PREMIUM FOOTER */}
      <footer className="bg-clinic-text text-white pt-40 pb-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center"><PawPrint size={32} /></div>
                <span className="font-serif text-6xl font-black tracking-tighter uppercase">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-2xl text-white/40 font-black italic max-w-lg leading-snug mb-20 uppercase tracking-tight italic">
                Apoio Emergencial em Minutos. O Melhor para Quem Você Ama.
              </p>
              <div className="flex gap-8">
                <a href="#" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={24} /></a>
                <a href="#" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={24} /></a>
                <a href={whatsappUrl} className="w-16 h-16 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"><WhatsAppIcon size={24} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.6em] text-primary mb-12">Hospital</h4>
              <ul className="space-y-8 text-[11px] font-black tracking-[0.4em] text-white/30 uppercase">
                <li><a href="#início" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#serviços" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#localização" className="hover:text-primary transition-colors">Localização</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.6em] text-white/20 mb-12">Disponibilidade</h4>
              <div className="flex flex-col gap-10 text-[11px] font-black tracking-[0.3em] text-white/20 uppercase italic">
                <p>Hospital de Alta Performance Itaim Bibi — Pinheiros, SP</p>
                <p className="text-primary animate-pulse">24 Horas Ativo em Plantão Crítico</p>
              </div>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 text-[9px] font-black tracking-[0.6em] text-white/10 text-center uppercase">
            © 2026 {CLIENT_CONFIG.name} ELITE MEDICAL. PROJETADO PARA A VIDA.
          </div>
        </div>
      </footer>

      {/* MOBILE MENU NAV */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }} 
            className="fixed inset-0 z-[150] bg-clinic-text flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20 border-b border-white/10 pb-10">
               <span className="font-serif text-5xl font-black text-white uppercase">{CLIENT_CONFIG.name}</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white p-6 rounded-3xl shadow-xl"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-14">
               {['Serviços', 'Sobre', 'Localização'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif font-black text-white uppercase tracking-tight italic">{item}</a>
               ))}
               <a href={whatsappUrl} className="bg-primary text-white p-10 rounded-[2.5rem] text-center font-black tracking-[0.3em] uppercase text-2xl mt-10 shadow-2xl">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl hover:shadow-service transition-all duration-700 border border-primary/5 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-10">
        <h4 className={`font-serif text-2xl md:text-5xl font-black tracking-tighter leading-tight transition-colors ${isOpen ? 'text-primary' : 'text-clinic-text'}`}>
          {q}
        </h4>
        <div className={`shrink-0 w-20 h-20 rounded-full border border-primary/10 flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-45' : 'text-primary'}`}>
          <Plus size={40} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pt-12 text-2xl md:text-3xl font-black text-clinic-text/40 leading-relaxed italic border-t border-primary/5 mt-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
