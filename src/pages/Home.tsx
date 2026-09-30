import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgImage1 = `${assetPathPrefix}/c0f4c.png`;
const imgImage2 = `${assetPathPrefix}/97f08.png`;
const imgImage5 = `${assetPathPrefix}/ed80c.png`;
const imgImage4 = `${assetPathPrefix}/1aba7.png`;
const imgImage6 = `${assetPathPrefix}/bc57a.png`;
const imgImage3 = `${assetPathPrefix}/56fe6.png`;
const imgImage7 = `${assetPathPrefix}/9282d.png`;
const imgImage8 = `${assetPathPrefix}/a6250.png`;
const imgAmbientGlowBiosecurity = `${assetPathPrefix}/ce7f9.svg`;
const imgAmbientGlowTestimonials = `${assetPathPrefix}/912c8.svg`;
const imgAmbientGlowAuthority = `${assetPathPrefix}/c5043.svg`;
const imgAmbientGlowAftercare = `${assetPathPrefix}/38e5f.svg`;
const imgAmbientGlowCta = `${assetPathPrefix}/9413a.svg`;
const imgAmbientGlowServices = `${assetPathPrefix}/a5111.svg`;
const imgAmbientGlowPortfolio = `${assetPathPrefix}/2feea.svg`;
const imgAmbientGlowManifesto = `${assetPathPrefix}/af19f.svg`;
const imgAmbientGlowHero = `${assetPathPrefix}/f7c8f.svg`;
const imgCheck = `${assetPathPrefix}/375a0.svg`;
const imgShieldCheck = `${assetPathPrefix}/0dc53.svg`;
const imgTrash2 = `${assetPathPrefix}/2ae02.svg`;
const imgWind = `${assetPathPrefix}/d794e.svg`;
const imgLine2 = `${assetPathPrefix}/7ee80.svg`;

export default function Home() {
  useScrollAnimation();
  const navigate = useNavigate();

  const services = [
    { id: 'alongamento', num: '01', title: 'Alongamento de Alta Precisão', desc: 'Escultura impecável com foco em simetria editorial, anatomia natural e acabamento invisível. Ideal para quem busca um resultado de alta estética.', duration: '150 min', price: 'R$ 380' },
    { id: 'esmaltacao', num: '02', title: 'Esmaltação em Gel', desc: 'Aplicação de esmalte em gel com acabamento editorial e secagem em cabine LED de última geração. Resultado duradouro e brilho espelhado.', duration: '60 min', price: 'R$ 130' },
    { id: 'manutencao', num: '03', title: 'Manutenção & Blindagem', desc: 'Reposicionamento do ponto de tensão, correção de crescimento e blindagem estruturada para preservar a saúde da unha e manter o acabamento impecável.', duration: '120 min', price: 'R$ 240' },
    { id: 'spa', num: '04', title: 'Spa dos Pés Regenerativo', desc: 'Ritual relaxante com esfoliação botânica orgânica, hidratação profunda em tadelakt morna e massagem relaxante.', duration: '75 min', price: 'R$ 180' },
    { id: 'banho', num: '05', title: 'Banho de Gel Protetor', desc: 'Blindagem estruturada sobre as unhas naturais, ideal para quem busca força sem alteração no comprimento original.', duration: '90 min', price: 'R$ 190' },
  ];

  return (
    <div className="bg-[#faf8f5] w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute left-[-100px] size-[900px] top-[-80px] pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlowHero} />
        </div>
        <div className="relative flex flex-col lg:flex-row items-start min-h-[640px]">
          <div className="flex flex-col justify-between gap-[48px] pl-[80px] pr-[64px] py-[100px] lg:w-[52%]">
            <div className="flex flex-col gap-[24px]" data-animate>
              <div className="flex gap-[8px] items-center">
                <div className="bg-[#121212] h-px w-[16px]" />
                <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase whitespace-nowrap">Nails &amp; Lifestyle</p>
              </div>
              <div className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(48px,5vw,76px)] tracking-[-2px]">
                <p className="leading-[1.05]">A precisão da forma,</p>
                <p className="font-['Cormorant_Garamond:Italic'] font-normal italic leading-[1.05]">o luxo do minimalismo.</p>
              </div>
              <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[16px] max-w-[480px]">
                Moda, viagens &amp; curadoria de experiências. Bervelyn cria acabamentos editoriais com simetria cirúrgica, paleta curada e um olhar contemporâneo para a mulher que valoriza a elegância.
              </p>
            </div>
            <div className="flex gap-[24px] items-center" data-animate data-animate-delay="2">
              <button
                onClick={() => navigate('/agendamento')}
                className="bg-[#121212] drop-shadow-[0px_6px_10px_rgba(45,43,42,0.12)] flex items-center justify-center px-[32px] py-[16px] hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[13px] text-white tracking-[2px] uppercase whitespace-nowrap">Reservar Experiência</span>
              </button>
              <button
                onClick={() => navigate('/sobre')}
                className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[1px] underline uppercase whitespace-nowrap hover:opacity-60 transition-opacity"
              >
                Conhecer Bervelyn
              </button>
            </div>
          </div>
          <div className="lg:flex-1 h-[640px] lg:h-auto self-stretch hidden lg:block">
            <img alt="Nail editorial photography" className="w-full h-full object-cover rounded-bl-[12px]" src={imgImage1} />
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="bg-[#f1f1eb] relative overflow-hidden">
        <div className="absolute left-[300px] size-[800px] top-[-100px] pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlowManifesto} />
        </div>
        <div className="relative flex flex-col gap-[40px] items-center px-[80px] py-[120px] text-center" data-animate>
          <button
            onClick={() => navigate('/filosofia')}
            className="section-title-link font-['Parisienne:Regular'] text-[#9e1a1a] text-[44px] whitespace-nowrap"
          >
            O Manifesto
          </button>
          <p className="font-['Cormorant_Garamond:Light'] font-light leading-[1.3] text-[#121212] text-[clamp(26px,3vw,40px)] tracking-[-1px] max-w-[960px]" data-animate data-animate-delay="1">
            "A verdadeira sofisticação não grita; ela reside no acabamento impecável, na biossegurança intransigente e na naturalidade que reflete quem você realmente é."
          </p>
          <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[11px] tracking-[3px] uppercase whitespace-nowrap" data-animate data-animate-delay="2">
            — Bervelyn, Nail Designer
          </p>
        </div>
      </section>

      {/* ── AUTHORITY ── */}
      <section className="bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute right-0 size-[850px] top-[100px] pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlowAuthority} />
        </div>
        <div className="relative flex flex-col lg:flex-row gap-[80px] items-center px-[80px] py-[140px]">
          <div className="lg:w-[52%] shrink-0" data-animate>
            <img
              alt="Bervelyn portrait"
              className="w-full max-h-[700px] object-cover object-top rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)]"
              src={imgImage2}
            />
          </div>
          <div className="flex flex-col gap-[32px] max-w-[480px]">
            <div className="flex gap-[8px] items-center" data-animate>
              <div className="bg-[#121212] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase whitespace-nowrap">Bervelyn</p>
            </div>
            <button
              onClick={() => navigate('/sobre')}
              className="section-title-link font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4vw,52px)] leading-[1.1] text-left"
              data-animate data-animate-delay="1"
            >
              Arquitetura para as unhas, saúde para sua pele.
            </button>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.8] text-[#8e8e87] text-[15px]" data-animate data-animate-delay="2">
              Bervelyn cria experiências de luxo entre moda, viagens e curadoria de momentos. No atelier, o foco é a precisão editorial, a saúde da unha e um acabamento que parece parte da pele — sem agressividade, apenas elegância.
            </p>
            <div className="flex flex-col gap-[16px]" data-animate data-animate-delay="3">
              {[
                'Especialização avançada em alongamento em gel invisível',
                'Certificação internacional em anatomia e saúde da unha',
                'Biossegurança nível hospitalar com tripla esterilização',
              ].map((item) => (
                <div key={item} className="flex gap-[12px] items-center">
                  <img alt="" className="shrink-0 size-[14px]" src={imgCheck} />
                  <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#121212] text-[14px]">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-[16px]" data-animate data-animate-delay="4">
              <p className="font-['Parisienne:Regular'] text-[#121212] text-[36px]">Bervelyn</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute right-0 size-[900px] top-0 pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlowPortfolio} />
        </div>
        <div className="relative flex flex-col gap-[64px] px-[80px] py-[120px]">
          <div className="flex items-end justify-between" data-animate>
            <div className="flex flex-col gap-[12px]">
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[12px] tracking-[2px] uppercase">O Arquivo</p>
              <button
                onClick={() => navigate('/portfolio')}
                className="section-title-link font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4vw,56px)] tracking-[-1px] text-left"
              >
                <span className="block leading-[1.1]">Editorial de Alta Estética</span>
                <span className="block font-['Cormorant_Garamond:Italic'] font-normal italic leading-[1.1]">por Bervelyn</span>
              </button>
            </div>
            <button
              onClick={() => navigate('/portfolio')}
              className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[1px] underline uppercase whitespace-nowrap hover:opacity-60 transition-opacity shrink-0 ml-8"
            >
              Ver o arquivo completo
            </button>
          </div>
          <div className="flex gap-[32px] h-[480px]" data-animate data-animate-delay="1">
            <div className="flex-1 rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)] overflow-hidden">
              <img alt="Editorial nail work" className="w-full h-full object-cover" src={imgImage5} />
            </div>
            <div className="w-[38%] rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)] overflow-hidden">
              <img alt="Editorial nail work" className="w-full h-full object-cover" src={imgImage4} />
            </div>
          </div>
          <div className="flex gap-[32px] h-[340px]" data-animate data-animate-delay="2">
            <div className="flex-1 rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)] overflow-hidden">
              <img alt="Editorial nail work" className="w-full h-full object-cover" src={imgImage6} />
            </div>
            <div className="flex-1 rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)] overflow-hidden">
              <img alt="Editorial nail work" className="w-full h-full object-cover" src={imgImage3} />
            </div>
            <div className="flex-1 rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)] overflow-hidden">
              <img alt="Editorial nail work" className="w-full h-full object-cover" src={imgImage7} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute left-[-50px] size-[800px] top-[100px] pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlowServices} />
        </div>
        <div className="relative flex flex-col gap-[80px] px-[80px] py-[140px]">
          <div className="flex flex-col gap-[16px]" data-animate>
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#121212] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase whitespace-nowrap">Os Protocolos</p>
            </div>
            <button
              onClick={() => navigate('/servicos')}
              className="section-title-link font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4vw,56px)] tracking-[-1px] text-left"
            >
              Serviços sob Medida
            </button>
          </div>
          <div className="flex flex-col gap-[32px]">
            {services.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => navigate(`/servicos/${svc.id}`)}
                className="border-b border-[#e5e5de] flex gap-[40px] items-start pb-[32px] w-full text-left group hover:bg-[#f8f6f2]/60 transition-colors duration-200 -mx-4 px-4 rounded-sm"
                data-animate
                data-animate-delay={String(Math.min(i + 1, 5))}
              >
                <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[24px] w-[40px] shrink-0">{svc.num}</p>
                <div className="flex flex-1 flex-col gap-[8px] min-w-0">
                  <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[24px] group-hover:opacity-75 transition-opacity">{svc.title}</p>
                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[14px] max-w-[700px]">{svc.desc}</p>
                </div>
                <div className="flex gap-[40px] items-center shrink-0">
                  <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[12px] tracking-[1px] whitespace-nowrap">{svc.duration}</p>
                  <p className="font-['Cormorant_Garamond:Regular'] font-normal text-[#121212] text-[28px] text-right w-[120px]">{svc.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#121212] relative overflow-hidden">
        <div className="absolute left-[100px] size-[800px] top-0 pointer-events-none opacity-60">
          <img alt="" className="block size-full" src={imgAmbientGlowTestimonials} />
        </div>
        <div className="relative flex flex-col gap-[80px] px-[80px] py-[140px]">
          <div className="flex flex-col gap-[16px]" data-animate>
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#e5e5de] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#e5e5de] text-[12px] tracking-[2px] uppercase whitespace-nowrap">Depoimentos</p>
            </div>
            <button
              onClick={() => navigate('/depoimentos')}
              className="section-title-link font-['Cormorant_Garamond:Light'] font-light text-[56px] text-white tracking-[-1px] text-left"
            >
              O que dizem sobre Bervelyn
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-[32px]">
            {[
              {
                quote: 'A experiência no atelier da Clara redefiniu o que eu considero manicure de luxo. A atenção ao detalhe anatômico é absurda. Minhas unhas nunca estiveram tão saudáveis.',
                name: 'Cliente Bervelyn',
                role: 'Cliente atendida',
              },
              {
                quote: 'O acabamento do alongamento é tão fino e natural que as pessoas juram que são minhas unhas reais. Sem contar o padrão cirúrgico de limpeza e biossegurança.',
                name: 'Cliente Bervelyn',
                role: 'Cliente atendida',
              },
              {
                quote: 'Um oásis de calmaria. Ir ao atelier não é apenas fazer as unhas, é um ritual estético restaurador. O esmalte em gel realmente dura intacto por semanas.',
                name: 'Cliente Bervelyn',
                role: 'Cliente atendida',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#1e1e1e] border border-[#e5e5de] flex flex-1 flex-col gap-[24px] items-start p-[40px] rounded-[8px] opacity-90 drop-shadow-[0px_20px_20px_rgba(45,43,42,0.08)]"
                data-animate
                data-animate-delay={String(i + 1)}
              >
                <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[48px] leading-none">"</p>
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#e5e5de] text-[14px] flex-1">{t.quote}</p>
                <div className="border-t border-[#e5e5de]/20 pt-[20px] w-full flex flex-col gap-[4px]">
                  <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[18px] text-white">{t.name}</p>
                  <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[11px] tracking-[1px] uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIOSECURITY ── */}
      <section className="bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute right-[200px] size-[700px] top-0 pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlowBiosecurity} />
        </div>
        <div className="relative flex flex-col gap-[64px] px-[80px] py-[120px]">
          <div className="flex items-end justify-between" data-animate>
            <div className="flex flex-col gap-[12px] max-w-[700px]">
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[12px] tracking-[2px] uppercase">Biossegurança</p>
              <button
                onClick={() => navigate('/biosseguranca')}
                className="section-title-link font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4vw,56px)] tracking-[-1px] leading-[1.1] text-left"
              >
                Segurança Absoluta &amp; Rigor Cirúrgico
              </button>
            </div>
            <button
              onClick={() => navigate('/biosseguranca')}
              className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[1px] uppercase whitespace-nowrap hover:opacity-60 transition-opacity shrink-0 ml-8 underline"
            >
              Protocolos de Biossegurança
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-[32px]">
            {[
              { icon: imgShieldCheck, title: 'Autoclave Hospitalar', desc: 'Todos os instrumentos metálicos passam por processo de esterilização sob calor e pressão em autoclave de nível cirúrgico.' },
              { icon: imgTrash2, title: 'Kits Descartáveis', desc: 'Lixas, palitos e toalhas são de uso estritamente individual e descartados sob seus olhos após a sessão.' },
              { icon: imgWind, title: 'Ambiente Controlado', desc: 'Ar climatizado com filtragem contínua de micropartículas em suspensão e exaustão dedicada para resíduos de pó.' },
            ].map((card, i) => (
              <div
                key={card.title}
                className="border border-[#e5e5de] flex flex-1 flex-col gap-[24px] p-[32px] rounded-[8px] shadow-[0px_12px_32px_0px_rgba(45,43,42,0.06)]"
                data-animate
                data-animate-delay={String(i + 1)}
              >
                <div className="bg-[#f1f1eb] flex items-center justify-center rounded-[24px] size-[48px]">
                  <img alt="" className="size-[20px]" src={card.icon} />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[24px]">{card.title}</p>
                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[14px]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFTERCARE ── */}
      <section className="bg-[#f1f1eb] relative overflow-hidden">
        <div className="absolute right-[200px] size-[700px] top-0 pointer-events-none">
          <img alt="" className="block size-full" src={imgAmbientGlowAftercare} />
        </div>
        <div className="relative flex flex-col lg:flex-row gap-[80px] items-center px-[80px] py-[120px]">
          <div className="flex flex-col gap-[32px] max-w-[600px]">
            <div className="flex gap-[8px] items-center" data-animate>
              <div className="bg-[#121212] h-px w-[16px]" />
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[12px] tracking-[2px] uppercase whitespace-nowrap">Cuidado Pós-Sessão</p>
            </div>
            <button
              onClick={() => navigate('/aftercare')}
              className="section-title-link font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,4vw,52px)] leading-[1.1] text-left"
              data-animate data-animate-delay="1"
            >
              Como manter o acabamento de luxo
            </button>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px]" data-animate data-animate-delay="2">
              A experiência de Bervelyn continua em casa. Com alguns rituais simples, você mantém a saúde da unha, o brilho do gel e a durabilidade do acabamento.
            </p>
            <div className="flex flex-col gap-[20px]" data-animate data-animate-delay="3">
              {[
                { title: 'Hidrate as cutículas', desc: 'Aplique óleo de jojoba ou amêndoas todas as noites para evitar o ressecamento da pele periférica.' },
                { title: 'Use luvas ao limpar', desc: 'Ao manusear produtos químicos ou limpeza, use sempre luvas de proteção dedicadas.' },
                { title: 'Respeite o calendário', desc: 'Não force a retirada mecânica do gel. Agende sua manutenção entre 21 e 25 dias para saúde máxima.' },
              ].map((tip) => (
                <div key={tip.title} className="flex flex-col gap-[4px]">
                  <p className="font-['Schibsted_Grotesk:Bold'] font-bold text-[#121212] text-[14px]">{tip.title}</p>
                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.5] text-[#8e8e87] text-[13px]">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[36%] shrink-0" data-animate data-animate-delay="2">
            <img
              alt="Nail aftercare"
              className="w-full max-h-[520px] object-cover rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)]"
              src={imgImage8}
            />
          </div>
        </div>
      </section>

      {/* ── CTA / BOOKING ── */}
      <section className="bg-[#121212] relative overflow-hidden">
        <div className="absolute left-[200px] size-[1000px] top-[-100px] pointer-events-none opacity-60">
          <img alt="" className="block size-full" src={imgAmbientGlowCta} />
        </div>
        <div className="relative flex flex-col gap-[40px] items-center px-[80px] py-[160px] text-center">
          <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#e5e5de] text-[12px] tracking-[3px] uppercase whitespace-nowrap" data-animate>
            Agenda Exclusiva — Atendimento por Horário
          </p>
          <div className="font-['Cormorant_Garamond:Light'] font-light text-[clamp(42px,5vw,72px)] text-center text-white tracking-[-2px] max-w-[800px]" data-animate data-animate-delay="1">
            <p className="leading-[1.1]">Pronta para elevar o padrão</p>
            <p className="font-['Cormorant_Garamond:Italic'] font-normal italic leading-[1.1]">das suas unhas?</p>
          </div>
          <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[16px] max-w-[560px]" data-animate data-animate-delay="2">
            Garanta seu horário e experimente o cuidado exclusivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center pt-[16px]" data-animate data-animate-delay="3">
            <button
              onClick={() => navigate('/agendamento')}
              className="bg-white flex items-center justify-center px-[40px] py-[18px] hover:bg-[#e5e5de] transition-colors duration-300"
            >
              <span className="font-['Schibsted_Grotesk:Bold'] font-bold text-[#121212] text-[13px] tracking-[2px] uppercase whitespace-nowrap">Agendar com Bervelyn</span>
            </button>
            <button
              onClick={() => navigate('/agenda')}
              className="border border-white flex items-center justify-center px-[28px] py-[14px] hover:bg-white/10 transition-colors duration-300"
            >
              <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[13px] text-white tracking-[1.5px] uppercase whitespace-nowrap">Ver agenda</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#faf9f6] flex flex-col gap-[80px] pb-[48px] pt-[96px] px-[80px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[48px]">
          <div className="flex flex-col gap-[24px] max-w-[380px]">
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[28px] tracking-[-1px] leading-none">Bervelyn</p>
              <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[10px] tracking-[3px] uppercase leading-none">Bervelyn | Nails &amp; Lifestyle</p>
            </div>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.6] text-[#8e8e87] text-[13px]">
              Moda, viagens &amp; curadoria de experiências. Bervelyn cria acabamentos editoriais com simetria cirúrgica, paleta curada e um olhar contemporâneo para a mulher que valoriza a elegância.
            </p>
          </div>
          <div className="flex gap-[64px] lg:gap-[96px] flex-wrap">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase">Funcionamento</p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px]">Terça a Sábado</p>
                <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[14px]">09:00 – 20:00</p>
                <p className="font-['Schibsted_Grotesk:Italic'] font-normal italic text-[#8e8e87] text-[13px]">Somente com agendamento</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase">Atelier</p>
              <div className="flex flex-col gap-[8px] text-[14px]">
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87]">R. Pedro Doll, 63 – Santana</p>
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87]">São Paulo, SP</p>
                <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212]">contato@bervelyn.com.br</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase">Conectar</p>
              <div className="flex flex-col gap-[8px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212]">
                <p>Instagram: @thebervelyn</p>
                <p>YouTube</p>
                <p>WhatsApp</p>
                <p className="text-[#8e8e87]">2.083 seguidores · 14 seguindo</p>
                <p className="text-[#8e8e87]">Parcerias: DM no Instagram</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e5e5de]" />
        <div className="flex items-center justify-between">
          <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[12px]">© 2025 Bervelyn. Todos os direitos reservados.</p>
          <div className="flex gap-[24px]">
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[12px] cursor-pointer hover:text-[#121212] transition-colors">Políticas de Cancelamento</p>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[12px] cursor-pointer hover:text-[#121212] transition-colors">Termos de Serviço</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
