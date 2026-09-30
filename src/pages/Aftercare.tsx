import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgImage8 = `${assetPathPrefix}/a6250.png`;
const imgAmbientGlow = `${assetPathPrefix}/38e5f.svg`;

export default function Aftercare() {
  useScrollAnimation();
  const navigate = useNavigate();

  const tips = [
    {
      num: '01',
      title: 'Hidrate as cutículas diariamente',
      desc: 'Aplique óleo de jojoba ou amêndoas todas as noites para evitar o ressecamento da pele periférica. O óleo de jojoba é estruturalmente similar ao sebo natural da pele, garantindo absorção sem resíduo.',
    },
    {
      num: '02',
      title: 'Use luvas ao limpar',
      desc: 'Ao manusear produtos químicos ou fazer limpeza doméstica, use sempre luvas de proteção dedicadas. O contato com detergentes e desengordurantes corrói o gel gradualmente, encurtando a durabilidade.',
    },
    {
      num: '03',
      title: 'Respeite o calendário de manutenção',
      desc: 'Não force a retirada mecânica do gel. Agende sua manutenção entre 21 e 25 dias para saúde máxima. A retirada forçada pode levar ao adelgaçamento da lâmina e danos permanentes.',
    },
    {
      num: '04',
      title: 'Evite objetos afiados como ferramentas',
      desc: 'Usar as unhas para abrir lacres, descaspar etiquetas ou similar cria pontos de tensão no gel que podem gerar microfraturas e levantar a aplicação.',
    },
    {
      num: '05',
      title: 'Proteja as mãos do sol',
      desc: 'A exposição prolongada ao UV amarelece o top coat e descolore determinados pigmentos. Aplique protetor solar nas mãos ao sair.',
    },
  ];

  return (
    <div className="bg-[#f1f1eb] min-h-screen w-full overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute right-[0px] size-[700px] top-0 pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>
        <div className="relative px-[80px] py-[120px]">
          <div className="flex flex-col gap-[16px] mb-[80px]" data-animate>
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#121212] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase whitespace-nowrap">Cuidado Pós-Sessão</p>
            </div>
            <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4.5vw,64px)] tracking-[-2px] leading-[1.1]">
              Como manter o acabamento de luxo
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-[80px] items-start">
            <div className="flex flex-col gap-[48px] flex-1">
              <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[16px]" data-animate>
                A experiência de Bervelyn continua em casa. Com alguns rituais simples, você mantém a saúde da unha, o brilho do gel e a durabilidade do acabamento por muito mais tempo.
              </p>
              <div className="flex flex-col gap-[40px]">
                {tips.map((tip, i) => (
                  <div
                    key={tip.num}
                    className="flex gap-[32px] border-t border-[#e5e5de]/60 pt-[32px]"
                    data-animate
                    data-animate-delay={String(Math.min(i + 1, 5))}
                  >
                    <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[24px] w-[40px] shrink-0">{tip.num}</p>
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-['Schibsted_Grotesk:Bold'] font-bold text-[#121212] text-[15px]">{tip.title}</p>
                      <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[14px]">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-[380px] shrink-0" data-animate data-animate-delay="2">
              <img
                alt="Nail aftercare"
                className="w-full object-cover rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)] sticky top-[120px]"
                src={imgImage8}
              />
            </div>
          </div>

          <div className="mt-[80px]" data-animate>
            <button
              onClick={() => navigate('/agendamento')}
              className="bg-[#121212] flex items-center justify-center px-[40px] py-[18px] hover:bg-[#2a2a2a] transition-colors duration-300"
            >
              <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Agendar próxima sessão</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
