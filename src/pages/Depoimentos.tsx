import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgAmbientGlow = `${assetPathPrefix}/912c8.svg`;

const testimonials = [
  {
    quote: 'A experiência no atelier da Clara redefiniu o que eu considero manicure de luxo. A atenção ao detalhe anatômico é absurda. Minhas unhas nunca estiveram tão saudáveis.',
    name: 'Cliente Bervelyn',
    role: 'Cliente atendida',
    service: 'Alongamento de Alta Precisão',
  },
  {
    quote: 'O acabamento do alongamento é tão fino e natural que as pessoas juram que são minhas unhas reais. Sem contar o padrão cirúrgico de limpeza e biossegurança.',
    name: 'Cliente Bervelyn',
    role: 'Cliente atendida',
    service: 'Esmaltação em Gel',
  },
  {
    quote: 'Um oásis de calmaria. Ir ao atelier não é apenas fazer as unhas, é um ritual estético restaurador. O esmalte em gel realmente dura intacto por semanas.',
    name: 'Cliente Bervelyn',
    role: 'Cliente atendida',
    service: 'Manutenção & Blindagem',
  },
  {
    quote: 'Nunca imaginei que cuidar das minhas unhas poderia ser tão transformador. O spa dos pés foi uma experiência de bem-estar completa.',
    name: 'Cliente Bervelyn',
    role: 'Cliente atendida',
    service: 'Spa dos Pés Regenerativo',
  },
  {
    quote: 'O rigor da Bervelyn com a biossegurança me tranquilizou desde o primeiro momento. Sinto que minha saúde é levada a sério — isso não tem preço.',
    name: 'Cliente Bervelyn',
    role: 'Cliente atendida',
    service: 'Banho de Gel Protetor',
  },
  {
    quote: 'Resultado impecável, atendimento único. Cada visita ao atelier é um momento de pausa e autocuidado que faz falta durante toda a semana.',
    name: 'Cliente Bervelyn',
    role: 'Cliente atendida',
    service: 'Alongamento de Alta Precisão',
  },
];

export default function Depoimentos() {
  useScrollAnimation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#121212] min-h-screen w-full overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute left-[100px] size-[800px] top-[-100px] pointer-events-none opacity-50">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>
        <div className="relative px-[80px] py-[120px]">
          <div className="flex flex-col gap-[16px] mb-[80px]" data-animate>
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#e5e5de] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#e5e5de] text-[12px] tracking-[2px] uppercase whitespace-nowrap">Depoimentos</p>
            </div>
            <h1 className="font-['Cormorant_Garamond:Light'] font-light text-white text-[clamp(40px,5vw,72px)] tracking-[-2px] leading-[1.05]">
              O que dizem sobre Bervelyn
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#1e1e1e] border border-[#e5e5de]/20 flex flex-col gap-[24px] p-[40px] rounded-[8px]"
                data-animate
                data-animate-delay={String(Math.min(i % 3 + 1, 3))}
              >
                <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[48px] leading-none">"</p>
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#e5e5de] text-[14px] flex-1">{t.quote}</p>
                <div className="border-t border-[#e5e5de]/20 pt-[20px] flex flex-col gap-[4px]">
                  <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-white text-[18px]">{t.name}</p>
                  <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[11px] tracking-[1px] uppercase">{t.role}</p>
                  <p className="font-['Schibsted_Grotesk:Italic'] font-normal italic text-[#8e8e87] text-[12px] mt-[4px]">{t.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[80px] text-center" data-animate>
            <p className="font-['Cormorant_Garamond:Light'] font-light text-white text-[32px] mb-[32px]">Pronta para vivenciar?</p>
            <button
              onClick={() => navigate('/agendamento')}
              className="bg-white flex items-center justify-center px-[40px] py-[18px] mx-auto hover:bg-[#e5e5de] transition-colors duration-300"
            >
              <span className="font-['Schibsted_Grotesk:Bold'] font-bold text-[#121212] text-[13px] tracking-[2px] uppercase whitespace-nowrap">Agendar com Bervelyn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
