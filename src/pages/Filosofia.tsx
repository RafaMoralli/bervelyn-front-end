import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgAmbientGlow = `${assetPathPrefix}/af19f.svg`;

export default function Filosofia() {
  useScrollAnimation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#f1f1eb] min-h-screen w-full overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute left-[200px] size-[900px] top-[-100px] pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>
        <div className="relative px-[80px] py-[140px] max-w-[1100px] mx-auto">
          <div className="flex flex-col gap-[24px] mb-[80px]" data-animate>
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#9e1a1a] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#9e1a1a] text-[12px] tracking-[2px] uppercase">O Manifesto</p>
            </div>
            <h1 className="font-['Parisienne:Regular'] text-[#121212] text-[clamp(48px,6vw,80px)]">Filosofia</h1>
          </div>

          <div className="flex flex-col gap-[64px]">
            <div data-animate>
              <p className="font-['Cormorant_Garamond:Light'] font-light leading-[1.3] text-[#121212] text-[clamp(28px,3.5vw,44px)] tracking-[-1px] max-w-[900px]">
                "A verdadeira sofisticação não grita; ela reside no acabamento impecável, na biossegurança intransigente e na naturalidade que reflete quem você realmente é."
              </p>
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[11px] tracking-[3px] uppercase mt-[24px]">— Bervelyn, Nail Designer</p>
            </div>

            {[
              {
                num: '01',
                title: 'Precisão como forma de respeito',
                body: 'Cada sessão é encarada como uma composição editorial. Cada milímetro de curvatura, cada detalhe de simetria e cada escolha de acabamento é pensado para honrar a anatomia natural da cliente.',
              },
              {
                num: '02',
                title: 'Biossegurança como ética',
                body: 'Não se trata apenas de seguir normas. Trata-se de respeito profundo pela saúde da cliente. O rigor cirúrgico não é um diferencial — é o piso mínimo de dignidade no atendimento.',
              },
              {
                num: '03',
                title: 'Beleza que não agride',
                body: 'O luxo autêntico não sacrifica a saúde. No atelier Bervelyn, os resultados são conquistados sem agressividade química, sem pressão mecânica excessiva, sem comprometer a integridade da lâmina ungueal.',
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="border-t border-[#e5e5de] pt-[40px] flex gap-[48px]"
                data-animate
                data-animate-delay={String(i + 1)}
              >
                <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[24px] w-[40px] shrink-0">{item.num}</p>
                <div className="flex flex-col gap-[16px]">
                  <h2 className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[32px]">{item.title}</h2>
                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.8] text-[#8e8e87] text-[15px] max-w-[680px]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[80px]" data-animate>
            <button
              onClick={() => navigate('/agendamento')}
              className="bg-[#121212] flex items-center justify-center px-[40px] py-[18px] hover:bg-[#2a2a2a] transition-colors duration-300"
            >
              <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Agendar experiência</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
