import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgImage5 = `${assetPathPrefix}/ed80c.png`;
const imgImage4 = `${assetPathPrefix}/1aba7.png`;
const imgImage6 = `${assetPathPrefix}/bc57a.png`;
const imgImage3 = `${assetPathPrefix}/56fe6.png`;
const imgImage7 = `${assetPathPrefix}/9282d.png`;
const imgImage1 = `${assetPathPrefix}/c0f4c.png`;
const imgImage8 = `${assetPathPrefix}/a6250.png`;

export default function Portfolio() {
  useScrollAnimation();

  const images = [
    { src: imgImage5, alt: 'Editorial nail work 1', span: 'col-span-2 row-span-2' },
    { src: imgImage4, alt: 'Editorial nail work 2', span: 'col-span-1 row-span-1' },
    { src: imgImage1, alt: 'Editorial nail work 3', span: 'col-span-1 row-span-1' },
    { src: imgImage6, alt: 'Editorial nail work 4', span: 'col-span-1 row-span-1' },
    { src: imgImage3, alt: 'Editorial nail work 5', span: 'col-span-1 row-span-1' },
    { src: imgImage7, alt: 'Editorial nail work 6', span: 'col-span-1 row-span-1' },
    { src: imgImage8, alt: 'Editorial nail work 7', span: 'col-span-1 row-span-1' },
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen w-full overflow-x-hidden">
      <div className="px-[80px] py-[120px]">
        <div className="flex flex-col gap-[16px] mb-[80px]" data-animate>
          <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[12px] tracking-[2px] uppercase">O Arquivo</p>
          <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(40px,5vw,72px)] tracking-[-2px] leading-[1.05]">
            Editorial de Alta Estética<br />
            <span className="font-['Cormorant_Garamond:Italic'] font-normal italic">por Bervelyn</span>
          </h1>
          <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px] max-w-[560px] mt-[8px]">
            Uma seleção curada dos trabalhos mais representativos. Cada imagem é um manifesto de precisão e beleza silenciosa.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} overflow-hidden rounded-[10px] shadow-[0px_24px_48px_-5px_rgba(45,43,42,0.1)] min-h-[280px]`}
              data-animate
              data-animate-delay={String(Math.min(i % 3 + 1, 5))}
            >
              <img alt={img.alt} className="w-full h-full object-cover" src={img.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
