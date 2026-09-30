import { useParams, useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services: Record<string, { num: string; title: string; desc: string; detail: string; duration: string; price: string; includes: string[] }> = {
  alongamento: {
    num: '01',
    title: 'Alongamento de Alta Precisão',
    desc: 'Escultura impecável com foco em simetria editorial, anatomia natural e acabamento invisível.',
    detail: 'O protocolo utiliza gel de alta densidade com cura em LED, modelagem manual sobre molde descartável e acabamento com pó de quartzo para textura natural. Cada etapa é executada com ferramentas esterilizadas em autoclave.',
    duration: '150 min',
    price: 'R$ 380',
    includes: ['Preparação e higienização da lâmina', 'Molde descartável de precisão', 'Gel de alta densidade curado em LED', 'Acabamento com pó de quartzo', 'Biossegurança nível hospitalar'],
  },
  esmaltacao: {
    num: '02',
    title: 'Esmaltação em Gel',
    desc: 'Aplicação de esmalte em gel com acabamento editorial e secagem em cabine LED de última geração.',
    detail: 'Preparação da lâmina, aplicação de primer sem ácido, base gel, duas camadas de cor e top coat antirisco. Curado em cabine LED profissional. Resultado com duração de 3 a 4 semanas.',
    duration: '60 min',
    price: 'R$ 130',
    includes: ['Limpeza e preparo da lâmina', 'Primer sem ácido', 'Base, cor e top coat em gel', 'Cura em cabine LED profissional', 'Durabilidade de 3 a 4 semanas'],
  },
  manutencao: {
    num: '03',
    title: 'Manutenção & Blindagem',
    desc: 'Reposicionamento do ponto de tensão, correção de crescimento e blindagem estruturada.',
    detail: 'Avaliação do crescimento, lixa e preparo, reposicionamento do gel, correção estrutural e nova blindagem. Indicado entre 21 e 25 dias após o serviço anterior.',
    duration: '120 min',
    price: 'R$ 240',
    includes: ['Avaliação do crescimento', 'Reposicionamento do gel', 'Correção estrutural', 'Nova blindagem protetora', 'Ideal entre 21 e 25 dias'],
  },
  spa: {
    num: '04',
    title: 'Spa dos Pés Regenerativo',
    desc: 'Ritual relaxante com esfoliação botânica orgânica, hidratação profunda e massagem.',
    detail: 'Imersão em solução botânica, esfoliação com sal marinho e óleos essenciais, hidratação com manteiga de karité aquecida, massagem reflexológica e esmaltação final.',
    duration: '75 min',
    price: 'R$ 180',
    includes: ['Imersão em solução botânica', 'Esfoliação com sal marinho', 'Hidratação com manteiga de karité', 'Massagem reflexológica', 'Esmaltação final'],
  },
  banho: {
    num: '05',
    title: 'Banho de Gel Protetor',
    desc: 'Blindagem estruturada sobre as unhas naturais, ideal para quem busca força sem alteração no comprimento.',
    detail: 'Aplicação de gel builder diretamente sobre a lâmina natural, com espessura mínima para preservar a estética. Protege contra quebras sem alterar o comprimento.',
    duration: '90 min',
    price: 'R$ 190',
    includes: ['Preparação da lâmina natural', 'Gel builder de espessura mínima', 'Proteção contra quebras', 'Sem alteração de comprimento', 'Acabamento natural'],
  },
};

export default function ServicoDetalhe() {
  useScrollAnimation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = id ? services[id] : null;

  if (!service) {
    return (
      <div className="bg-[#faf9f6] min-h-screen flex items-center justify-center px-[80px]">
        <div className="text-center">
          <p className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[48px]">Serviço não encontrado</p>
          <button onClick={() => navigate('/servicos')} className="mt-[32px] font-['Schibsted_Grotesk:Medium'] font-medium text-[#121212] text-[13px] tracking-[1px] uppercase underline">
            Ver todos os serviços
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#faf9f6] min-h-screen w-full overflow-x-hidden">
      <div className="px-[80px] py-[120px] max-w-[1100px]">
        <button
          onClick={() => navigate('/servicos')}
          className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[12px] tracking-[1px] uppercase mb-[64px] hover:text-[#121212] transition-colors flex items-center gap-[8px]"
          data-animate
        >
          ← Todos os serviços
        </button>

        <div className="flex flex-col gap-[8px] mb-[64px]" data-animate>
          <div className="flex gap-[16px] items-baseline">
            <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[32px]">{service.num}</p>
            <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4.5vw,64px)] tracking-[-2px] leading-[1.05]">
              {service.title}
            </h1>
          </div>
          <div className="flex gap-[40px] items-center mt-[16px]">
            <p className="font-['Cormorant_Garamond:Regular'] font-normal text-[#121212] text-[40px]">{service.price}</p>
            <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[13px] tracking-[1px]">{service.duration}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[80px]">
          <div className="flex flex-col gap-[32px] flex-1">
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.8] text-[#8e8e87] text-[16px]" data-animate>
              {service.desc}
            </p>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.8] text-[#8e8e87] text-[15px]" data-animate data-animate-delay="1">
              {service.detail}
            </p>
          </div>
          <div className="lg:w-[380px]" data-animate data-animate-delay="2">
            <div className="border border-[#e5e5de] p-[40px] rounded-[8px]">
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase mb-[24px]">O que está incluído</p>
              <div className="flex flex-col gap-[16px]">
                {service.includes.map((item) => (
                  <div key={item} className="flex gap-[12px] items-start border-b border-[#e5e5de] pb-[16px] last:border-0 last:pb-0">
                    <div className="bg-[#121212] rounded-full size-[4px] mt-[8px] shrink-0" />
                    <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/agendamento')}
                className="bg-[#121212] flex items-center justify-center px-[32px] py-[16px] w-full mt-[40px] hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Reservar este serviço</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
