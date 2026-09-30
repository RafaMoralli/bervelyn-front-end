import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgShieldCheck = `${assetPathPrefix}/0dc53.svg`;
const imgTrash2 = `${assetPathPrefix}/2ae02.svg`;
const imgWind = `${assetPathPrefix}/d794e.svg`;
const imgAmbientGlow = `${assetPathPrefix}/ce7f9.svg`;

export default function Biosseguranca() {
  useScrollAnimation();
  const navigate = useNavigate();

  const protocols = [
    {
      icon: imgShieldCheck,
      title: 'Autoclave Hospitalar',
      desc: 'Todos os instrumentos metálicos passam por processo de esterilização sob calor e pressão em autoclave de nível cirúrgico.',
      detail: 'O ciclo de esterilização opera a 134°C e 2,1 bar de pressão por um mínimo de 18 minutos, seguindo as normas da ANVISA para estabelecimentos de saúde estética. Cada ciclo é registrado e documentado.',
    },
    {
      icon: imgTrash2,
      title: 'Kits Descartáveis',
      desc: 'Lixas, palitos e toalhas são de uso estritamente individual e descartados sob seus olhos após a sessão.',
      detail: 'Nenhum material poroso ou absorvente é reaproveitado. Cada kit é aberto na presença da cliente e descartado em contentor de resíduos sólidos classificados conforme a RDC 222/2018.',
    },
    {
      icon: imgWind,
      title: 'Ambiente Controlado',
      desc: 'Ar climatizado com filtragem contínua de micropartículas em suspensão e exaustão dedicada para resíduos de pó.',
      detail: 'O atelier conta com filtro HEPA H13 para retenção de 99,95% das partículas ≥ 0,2μm, sistema de exaustão localizada no ponto de trabalho e renovação de ar a cada 20 minutos.',
    },
    {
      icon: imgShieldCheck,
      title: 'Higienização de Superfícies',
      desc: 'Mesa de trabalho, estofados e equipamentos higienizados com solução clorada entre cada atendimento.',
      detail: 'Solução de hipoclorito de sódio a 1% em contato de 10 minutos, seguida de limpeza com álcool 70° gel. Macas e cadeiras revestidas com capa descartável trocada a cada sessão.',
    },
    {
      icon: imgShieldCheck,
      title: 'EPI Completo',
      desc: 'A profissional utiliza máscara respiratória, luvas nitrílicas e óculos de proteção durante todo o atendimento.',
      detail: 'Máscara PFF2 (N95) para proteção respiratória, luvas nitrílicas antialérgicas trocadas a cada sessão e óculos de proteção para procedimentos com polimento ou lixamento.',
    },
    {
      icon: imgWind,
      title: 'Produto de Qualidade',
      desc: 'Utilização exclusiva de produtos registrados na ANVISA, sem substâncias proibidas ou agressivas.',
      detail: 'Géis, bases, esmaltes e produtos de preparo são auditados para conformidade regulatória. Sem uso de metil metacrilato (MMA), formaldeído ou outros agentes nocivos.',
    },
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen w-full overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute right-[100px] size-[700px] top-0 pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>
        <div className="relative px-[80px] py-[120px]">
          <div className="flex flex-col gap-[16px] mb-[80px]" data-animate>
            <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[12px] tracking-[2px] uppercase">Biossegurança</p>
            <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4.5vw,64px)] tracking-[-2px] leading-[1.1]">
              Segurança Absoluta &amp; Rigor Cirúrgico
            </h1>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px] max-w-[560px] mt-[8px]">
              No atelier Bervelyn, a biossegurança não é um diferencial — é o piso mínimo de respeito à saúde da cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
            {protocols.map((p, i) => (
              <div
                key={p.title}
                className="border border-[#e5e5de] flex flex-col gap-[24px] p-[32px] rounded-[8px] shadow-[0px_12px_32px_0px_rgba(45,43,42,0.06)]"
                data-animate
                data-animate-delay={String(Math.min(i % 3 + 1, 3))}
              >
                <div className="bg-[#f1f1eb] flex items-center justify-center rounded-[24px] size-[48px]">
                  <img alt="" className="size-[20px]" src={p.icon} />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[24px]">{p.title}</p>
                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[14px]">{p.desc}</p>
                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[13px] border-t border-[#e5e5de] pt-[12px] mt-[4px]">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[80px] bg-[#f1f1eb] p-[64px] rounded-[10px]" data-animate>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px]">
              <div>
                <p className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[36px] tracking-[-1px]">
                  Seu cuidado começa antes da sessão.
                </p>
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px] max-w-[480px] mt-[16px]">
                  Cada protocolo foi desenvolvido para que você saia do atelier não apenas com unhas bonitas — mas com total confiança na saúde da sua lâmina.
                </p>
              </div>
              <button
                onClick={() => navigate('/agendamento')}
                className="bg-[#121212] flex items-center justify-center px-[40px] py-[18px] shrink-0 hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase whitespace-nowrap">Agendar com segurança</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
