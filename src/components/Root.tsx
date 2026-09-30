import { Link, Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="bg-[#faf8f5] min-h-screen w-full">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e5e5de] flex items-center justify-between px-[80px] py-[28px]">
        <Link to="/" className="flex flex-col gap-[2px] items-start">
          <span className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[28px] tracking-[-1px] leading-none">
            Bervelyn
          </span>
          <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[10px] tracking-[3px] uppercase leading-none">
            Bervelyn | Nails &amp; Lifestyle
          </span>
        </Link>
        <div className="hidden md:flex font-['Schibsted_Grotesk:Medium'] font-medium gap-[40px] items-center text-[#121212] text-[12px] tracking-[1px] uppercase">
          <Link to="/" className="hover:opacity-60 transition-opacity">Início</Link>
          <Link to="/filosofia" className="hover:opacity-60 transition-opacity">Filosofia</Link>
          <Link to="/servicos" className="hover:opacity-60 transition-opacity">Serviços</Link>
          <Link to="/portfolio" className="hover:opacity-60 transition-opacity">Portfólio</Link>
          <Link to="/biosseguranca" className="hover:opacity-60 transition-opacity">Biossegurança</Link>
        </div>
        <div className="flex items-center gap-[12px]">
          <Link
            to="/login"
            className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[12px] tracking-[1px] uppercase hover:text-[#121212] transition-colors whitespace-nowrap hidden md:block"
          >
            Entrar
          </Link>
          <Link
            to="/agendamento"
            className="border border-[#121212] flex items-center justify-center px-[28px] py-[14px] hover:bg-[#121212] hover:text-white transition-colors duration-300"
          >
            <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[13px] tracking-[1.5px] uppercase whitespace-nowrap">
              Agende sua experiência
            </span>
          </Link>
        </div>
      </nav>
      <div className="pt-[89px]">
        <Outlet />
      </div>
    </div>
  );
}
