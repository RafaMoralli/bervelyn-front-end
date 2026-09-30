import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgAmbientGlow = `${assetPathPrefix}/a5111.svg`;

const services = [
  { id: 'alongamento', num: '01', title: 'Alongamento de Alta Precisão', desc: 'Escultura impecável com foco em simetria editorial, anatomia natural e acabamento invisível. Ideal para quem busca um resultado de alta estética.', detail: 'O protocolo utiliza gel de alta densidade com cura em LED, modelagem manual sobre molde descartável e acabamento com pó de quartzo para textura natural. Cada etapa é executada com ferramentas esterilizadas em autoclave.', duration: '150 min', price: 'R$ 380' },
  { id: 'esmaltacao', num: '02', title: 'Esmaltação em Gel', desc: 'Aplicação de esmalte em gel com acabamento editorial e secagem em cabine LED de última geração. Resultado duradouro e brilho espelhado.', detail: 'Preparação da lâmina, aplicação de primer sem ácido, base gel, duas camadas de cor e top coat antirisco. Curado em cabine LED profissional. Resultado com duração de 3 a 4 semanas.', duration: '60 min', price: 'R$ 130' },
  { id: 'manutencao', num: '03', title: 'Manutenção & Blindagem', desc: 'Reposicionamento do ponto de tensão, correção de crescimento e blindagem estruturada para preservar a saúde da unha e manter o acabamento impecável.', detail: 'Avaliação do crescimento, lixa e preparo, reposicionamento do gel, correção estrutural e nova blindagem. Indicado entre 21 e 25 dias após o serviço anterior.', duration: '120 min', price: 'R$ 240' },
  { id: 'spa', num: '04', title: 'Spa dos Pés Regenerativo', desc: 'Ritual relaxante com esfoliação botânica orgânica, hidratação profunda em tadelakt morna e massagem relaxante.', detail: 'Imersão em solução botânica, esfoliação com sal marinho e óleos essenciais, hidratação com manteiga de karité aquecida, massagem reflexológica e esmaltação final.', duration: '75 min', price: 'R$ 180' },
  { id: 'banho', num: '05', title: 'Banho de Gel Protetor', desc: 'Blindagem estruturada sobre as unhas naturais, ideal para quem busca força sem alteração no comprimento original.', detail: 'Aplicação de gel builder diretamente sobre a lâmina natural, com espessura mínima para preservar a estética. Protege contra quebras sem alterar o comprimento.', duration: '90 min', price: 'R$ 190' },
];

export default function Servicos() {
  useScrollAnimation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#faf9f6] min-h-screen w-full overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute left-[-50px] size-[800px] top-[100px] pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>
        <div className="relative px-[80px] py-[120px]">
          <div className="flex flex-col gap-[16px] mb-[80px]" data-animate>
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#121212] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase">Os Protocolos</p>
            </div>
            <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(40px,5vw,72px)] tracking-[-2px]">Serviços sob Medida</h1>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px] max-w-[560px] mt-[8px]">
              Cada protocolo é desenhado para honrar a anatomia da sua unha e o seu estilo de vida.
            </p>
          </div>
          <div className="flex flex-col gap-[32px]">
            {services.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => navigate(`/servicos/${svc.id}`)}
                className="border-b border-[#e5e5de] flex gap-[40px] items-start pb-[40px] w-full text-left group"
                data-animate
                data-animate-delay={String(Math.min(i + 1, 5))}
              >
                <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[24px] w-[40px] shrink-0">{svc.num}</p>
                <div className="flex flex-1 flex-col gap-[8px] min-w-0">
                  <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[28px] group-hover:opacity-70 transition-opacity">{svc.title}</p>
                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[14px] max-w-[700px]">{svc.desc}</p>
                </div>
                <div className="flex flex-col gap-[8px] items-end shrink-0">
                  <p className="font-['Cormorant_Garamond:Regular'] font-normal text-[#121212] text-[28px]">{svc.price}</p>
                  <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[12px] tracking-[1px] whitespace-nowrap">{svc.duration}</p>
                  <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1px] uppercase underline group-hover:opacity-60 transition-opacity">
                    Ver detalhes →
                  </span>
                </div>
              </button>
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
