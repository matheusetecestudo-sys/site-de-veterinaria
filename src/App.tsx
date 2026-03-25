import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Plus,
  Minus,
  Star, 
  Award, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Quote,
  Heart,
  Activity,
  Microscope,
  Baby,
  Home,
  Sparkles,
  Stethoscope,
  PawPrint
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
  openingHours: "Seg-Sex: 08:00 - 22:00 | Sábado: 08:00 - 18:00",
  emergency: "Emergência 24h Disponível",
};

const SERVICES = [
  {
    id: "01",
    title: "Medicina Diagnóstica",
    description: "Equipamentos de imagem e exames laboratoriais de última geração para rápida precisão.",
    image: "https://images.unsplash.com/photo-1579154238328-341ef9798583?q=80&w=800&auto=format&fit=crop",
    special: "Alta Tecnologia"
  },
  {
    id: "02",
    title: "Bloco Cirúrgico 24h",
    description: "Infraestrutura avançada e anestesia inalatória monitorada para cirurgias complexas.",
    image: "/images/vet-surgery.png",
    special: "Hospitalar Elite"
  },
  {
    id: "03",
    title: "Internação Elite",
    description: "Espaços climatizados com supervisão médica 24h para garantir a melhor recuperação.",
    image: "/images/vet-clinic-interior.png",
    special: "Monitoramento VIP"
  },
  {
    id: "04",
    title: "Pediatria & Vacinação",
    description: "Cuidado amoroso e protocolos de imunização internacionais para filhotes.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
    special: "Cuidado Inicial"
  },
  {
    id: "05",
    title: "Higiene Odontológica",
    description: "Tratamentos para cálculo dentário e profilaxia avançada para a saúde bucal do pet.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    special: "Saúde de Ouro"
  },
  {
    id: "06",
    title: "Consultas Expert",
    description: "Cardiologia, Fisioterapia e Ortopedia com especialistas em constante atualização.",
    image: "https://images.unsplash.com/photo-1576201836106-cf1758af1c82?q=80&w=800&auto=format&fit=crop",
    special: "Especialidades"
  }
];

const FAQS = [
  {
    question: "Como funciona o plantão de emergência 24h?",
    answer: "Nosso hospital conta com médicos veterinários e equipe técnica de prontidão 24 horas por dia, 7 dias por semana, inclusive em feriados. Estamos preparados para cirurgias e atendimentos críticos a qualquer momento."
  },
  {
    question: "Preciso agendar as consultas com antecedência?",
    answer: "Recomendamos o agendamento prévio para consultas de rotina e especialistas para garantir o melhor horário. No entanto, casos urgentes são atendidos imediatamente em nosso pronto-socorro."
  },
  {
    question: "Vocês atendem quais tipos de animais?",
    answer: "Somos especialistas em pequenos animais (cães e gatos), oferecendo infraestrutura separada para minimizar o estresse entre as espécies em nossa área de internação."
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Aceitamos todos os cartões de crédito (com parcelamento em cirurgias), débito, Pix e dinheiro. Também trabalhamos com diversos convênios veterinários."
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-primary/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left group transition-all"
      >
        <span className={`font-serif text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-clinic-text'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-primary/5 text-primary'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-clinic-text/70 leading-relaxed font-bold">
              {answer}
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
  
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta na DUNO Veterinária.")}`;

  return (
    <div className="min-h-screen bg-clinic-bg font-sans selection:bg-primary selection:text-white">
      {/* Loading */}
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-white flex items-center justify-center">
             <h2 className="font-serif text-4xl font-bold tracking-[0.4em] text-primary uppercase animate-pulse">{CLIENT_CONFIG.name}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Nav */}
      <nav className={`fixed w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-xl' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#início" className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary shadow-xl'}`}>
              <PawPrint size={24} />
            </div>
            <span className="font-serif text-4xl font-bold tracking-tighter text-clinic-text uppercase">{CLIENT_CONFIG.name}</span>
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {['Sobre', 'Serviços', 'Diferenciais', 'Localização'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest font-bold text-clinic-text/70 hover:text-primary transition-colors">{item}</a>
            ))}
            <a href={whatsappUrl} className="bg-primary text-white h-14 px-10 text-[10px] uppercase font-bold tracking-widest rounded-2xl flex items-center gap-2 hover:bg-black transition-all shadow-xl">
              Falar Conosco
            </a>
          </div>
          <button className="lg:hidden text-clinic-text bg-white/50 p-3 rounded-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="início" className="relative h-[95vh] flex items-center pt-24 overflow-hidden px-6 md:px-14">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
            alt="Medical Hero" 
            className="w-full h-full object-cover brightness-[0.7] transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-6 block">Referência em Medicina Animal</span>
            <h1 className="text-6xl md:text-9xl font-serif text-clinic-text leading-[1.0] font-bold tracking-tighter mb-10">
               A Saúde do <br /> <span className="text-primary italic font-medium">Seu Pet é Arte.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
               <a href={whatsappUrl} className="bg-primary text-white rounded-2.5xl gap-4 shadow-2xl h-20 px-12 text-sm font-bold tracking-[0.2em] flex items-center justify-center hover:-translate-y-1 transition-all uppercase">
                  Agendar Avaliação <ArrowRight size={20} />
               </a>
               <div className="flex items-center gap-4 py-4 px-6 border border-primary/10 rounded-2xl bg-white/30 backdrop-blur-sm">
                  <div className="flex text-amber-500">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-clinic-text uppercase tracking-widest">Avaliação 4.9 no Google</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - WITHOUT ICONS, BETTER DESIGN */}
      <section id="serviços" className="py-32 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24 border-b border-primary/10 pb-16">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.6em] text-primary font-bold mb-6 block">Nossas Áreas</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-clinic-text tracking-tight">Medicina de Alta <span className="text-primary italic font-medium">Performance.</span></h2>
            </div>
            <p className="text-lg text-clinic-text/60 font-bold max-w-sm mb-2 italic">Resultados clínicos de excelência por meio de tecnologia avançada e cuidado compassivo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col h-[600px] overflow-hidden rounded-[2.5rem] bg-clinic-bg border border-primary/5 hover:shadow-[0_40px_80px_rgba(27,67,50,0.1)] transition-all duration-700"
              >
                <div className="h-2/3 relative overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute bottom-10 left-10">
                    <span className="text-8xl font-serif font-bold opacity-10 text-white tracking-widest transition-opacity group-hover:opacity-40">{s.id}</span>
                  </div>
                  <div className="absolute top-10 right-10">
                    <div className="bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-white/30 text-[9px] font-black uppercase tracking-widest text-primary shadow-sm">
                       {s.special}
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-clinic-text mb-4 transition-colors group-hover:text-primary">{s.title}</h3>
                    <p className="text-base text-clinic-text/70 leading-relaxed font-bold italic line-clamp-3">{s.description}</p>
                  </div>
                  <a href={whatsappUrl} className="text-[11px] font-bold uppercase tracking-widest text-primary flex items-center gap-3 group/btn">
                     AGENDAR AGORA <div className="p-2 border border-primary/20 rounded-full group-hover/btn:bg-primary group-hover/btn:text-white transition-all"><ArrowRight size={14} /></div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation & FAQ */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-clinic-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div id="diferenciais">
              <span className="text-xs uppercase tracking-[0.6em] text-primary font-bold mb-8 block">Nossos Padrões</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-clinic-text leading-[1.1] mb-12">Cuidados que <span className="text-primary italic font-medium">Transformam Vidas.</span></h2>
              
              <div className="space-y-12 mb-20">
                {[
                  { t: "Infraestrutura 24h", i: <Clock className="text-primary" /> },
                  { t: "Exames Laboratoriais Próprios", i: <Microscope className="text-primary" /> },
                  { t: "Equipe Especializada", i: <Award className="text-primary" /> }
                ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 items-center group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-500">{item.i}</div>
                      <h4 className="text-2xl font-serif font-bold text-clinic-text uppercase tracking-tight">{item.t}</h4>
                   </div>
                ))}
              </div>

              {/* FAQ SECTION ADDED HERE */}
              <div id="faq" className="mt-20 pt-20 border-t border-primary/10">
                <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-10 block">Perguntas Frequentes</span>
                <div className="space-y-4">
                   {FAQS.map((faq, i) => (
                     <FAQItem key={i} question={faq.question} answer={faq.answer} />
                   ))}
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[20px] border-white">
                <img src="/images/vet-clinic-interior.png" alt="Clinical Environment" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
              <div className="absolute -bottom-16 -left-16 bg-white p-12 rounded-[3.5rem] shadow-2xl max-w-sm hidden xl:block border border-primary/5">
                <div className="flex text-amber-500 mb-6"><Quote size={40} className="opacity-20 translate-x-[-10px]" /></div>
                <p className="text-2xl font-serif font-bold text-clinic-text leading-relaxed italic">"Aqui, seu pet não é um paciente, é o amor da sua vida recebendo o melhor da medicina."</p>
                <span className="block mt-8 text-xs font-bold text-primary uppercase tracking-[0.3em]">— Dra. Juliana Martins</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="localização" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-24 items-center">
          <div className="lg:col-span-1">
             <span className="text-xs uppercase tracking-[0.6em] text-primary font-bold mb-8 block">Onde Estamos</span>
             <h2 className="text-5xl font-serif font-bold text-clinic-text mb-12 uppercase tracking-tighter leading-none">{CLIENT_CONFIG.name} <br/> <span className="text-primary italic font-medium">Pinheiros</span></h2>
             <div className="space-y-10">
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0"><MapPin size={28} /></div>
                   <div>
                      <h4 className="font-serif text-2xl font-bold text-clinic-text mb-2 tracking-tight uppercase">Endereço</h4>
                      <p className="text-base text-clinic-text/60 font-bold">{CLIENT_CONFIG.address}</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0"><Clock size={28} /></div>
                   <div>
                      <h4 className="font-serif text-2xl font-bold text-clinic-text mb-2 tracking-tight uppercase">Horários</h4>
                      <p className="text-base text-clinic-text/60 font-bold">{CLIENT_CONFIG.openingHours}</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="lg:col-span-2 h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[15px] border-clinic-bg relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3308828552393!2d-46.67498772412806!3d-23.592474962295692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57530444379b%3A0x6b5e024220fa9449!2sRua%20Joaquim%20Floriano%2C%2072%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004534-000!5e0!3m2!1spt-BR!2sbr!4v1711310000000!5m2!1spt-BR!2sbr" 
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="DUNO Map" className="grayscale-[0.1]"
             ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-5 mb-12">
                <span className="text-5xl">🐾</span>
                <span className="font-serif text-6xl font-bold tracking-tighter uppercase leading-none">{CLIENT_CONFIG.name}</span>
              </div>
              <p className="text-white/40 text-2xl font-serif font-bold italic max-w-lg leading-relaxed">{CLIENT_CONFIG.emergency}</p>
              <div className="flex gap-6 mt-12">
                <a href="#" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={28} /></a>
                <a href="#" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={28} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-3xl font-bold mb-10 tracking-tight uppercase">Sitemap</h4>
              <ul className="space-y-6 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                <li><a href="#sobre" className="hover:text-primary">A Clínica</a></li>
                <li><a href="#serviços" className="hover:text-primary">Especialidades</a></li>
                <li><a href="#diferenciais" className="hover:text-primary">Padrão Ouro</a></li>
                <li><a href="#localização" className="hover:text-primary">Onde Estamos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-3xl font-bold mb-10 tracking-tight uppercase">Contato</h4>
              <ul className="space-y-8 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                <li className="flex gap-4"><MapPin className="text-primary" /> {CLIENT_CONFIG.address}</li>
                <li className="flex gap-4"><Phone className="text-primary" /> (11) 99999-9999</li>
                <li className="flex gap-4"><Clock className="text-primary" /> 24 Horas</li>
              </ul>
            </div>
          </div>
          <div className="pt-20 border-t border-white/10 text-[11px] font-bold tracking-[0.4em] text-white/20 flex flex-col md:flex-row justify-between items-center gap-10">
             <p>© 2026 {CLIENT_CONFIG.name}. TODOS OS DIREITOS RESERVADOS.</p>
             <div className="flex gap-12"><a href="#">PRIVACIDADE</a> <a href="#">TERMOS</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
