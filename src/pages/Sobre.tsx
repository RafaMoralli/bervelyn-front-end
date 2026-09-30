import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgImage2 = `${assetPathPrefix}/97f08.png`;
const imgCheck = `${assetPathPrefix}/375a0.svg`;

export default function Sobre() {
  useScrollAnimation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#faf9f6] min-h-screen w-full overflow-x-hidden">
      <div className="px-[80px] py-[120px]">
        <div className="flex flex-col gap-[16px] mb-[80px]" data-animate>
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#121212] h-px w-[16px]" />
            <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase">Bervelyn</p>
          </div>
          <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(40px,5vw,72px)] tracking-[-2px] leading-[1.05]">
            Arquitetura para as unhas,<br />
            <span className="font-['Cormorant_Garamond:Italic'] font-normal italic">saúde para sua pele.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-[80px] items-start">
          <div className="lg:w-[48%]" data-animate>
            <img
              alt="Bervelyn portrait"
              className="w-full object-cover rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)]"
              src={imgImage2}
            />
          </div>
          <div className="flex flex-col gap-[40px] flex-1">
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.8] text-[#8e8e87] text-[16px]" data-animate data-animate-delay="1">
              Bervelyn cria experiências de luxo entre moda, viagens e curadoria de momentos. No atelier, o foco é a precisão editorial, a saúde da unha e um acabamento que parece parte da pele — sem agressividade, apenas elegância.
            </p>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.8] text-[#8e8e87] text-[15px]" data-animate data-animate-delay="2">
              Com formação internacional em anatomia ungueal e anos de prática editorial, Bervelyn desenvolveu uma metodologia própria que combina o rigor técnico com a sensibilidade estética. Cada cliente recebe um protocolo personalizado, alinhado à saúde da sua unha e ao seu estilo de vida.
            </p>
            <div className="flex flex-col gap-[16px]" data-animate data-animate-delay="3">
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase">Credenciais</p>
              {[
                'Especialização avançada em alongamento em gel invisível',
                'Certificação internacional em anatomia e saúde da unha',
                'Biossegurança nível hospitalar com tripla esterilização',
                'Formação em estética editorial e fotografia de produto',
                'Membro da Associação Brasileira de Nail Designers',
              ].map((item) => (
                <div key={item} className="flex gap-[12px] items-start">
                  <img alt="" className="shrink-0 size-[14px] mt-[2px]" src={imgCheck} />
                  <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#121212] text-[14px]">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-[8px]" data-animate data-animate-delay="4">
              <p className="font-['Parisienne:Regular'] text-[#121212] text-[40px]">Bervelyn</p>
            </div>
            <button
              onClick={() => navigate('/agendamento')}
              className="border border-[#121212] flex items-center justify-center px-[32px] py-[16px] w-fit hover:bg-[#121212] hover:text-white transition-colors duration-300"
              data-animate data-animate-delay="5"
            >
              <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[13px] tracking-[1.5px] uppercase whitespace-nowrap">Agendar com Bervelyn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
