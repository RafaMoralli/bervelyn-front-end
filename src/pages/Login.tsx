import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router';

const assetPathPrefix = '/assets';
const imgHero = `${assetPathPrefix}/c0f4c.png`;
const imgAmbientGlow = `${assetPathPrefix}/9413a.svg`;

type Mode = 'login' | 'cadastro' | 'recuperar';

function useFadeIn(dep: unknown) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    const id = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(id);
  }, [dep]);
  return ref;
}

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', senha: '' });
  const [cadastroForm, setCadastroForm] = useState({ nome: '', email: '', senha: '', confirmar: '' });
  const [recuperarEmail, setRecuperarEmail] = useState('');

  const formRef = useFadeIn(mode);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const handleRecuperar = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex">

      {/* ── Left panel — brand image ── */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[58%] relative overflow-hidden">
        <img
          alt="Bervelyn nail editorial"
          className="w-full h-full object-cover"
          src={imgHero}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121212]/60" />
        {/* Brand text */}
        <div className="absolute bottom-[64px] left-[56px] right-[56px] flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <div className="bg-white/60 h-px w-[16px]" />
            <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white/70 text-[11px] tracking-[2px] uppercase">Bervelyn | Nails &amp; Lifestyle</p>
          </div>
          <p className="font-['Cormorant_Garamond:Light'] font-light text-white text-[clamp(28px,3vw,42px)] tracking-[-1px] leading-[1.1] max-w-[420px]">
            "A elegância não se impõe.<br />
            <span className="font-['Cormorant_Garamond:Italic'] font-normal italic">Ela simplesmente aparece."</span>
          </p>
          <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-white/50 text-[12px] tracking-[2px] uppercase">— Bervelyn</p>
        </div>
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex-1 bg-[#faf9f6] flex flex-col relative overflow-hidden">
        <div className="absolute right-[-100px] size-[700px] top-[-100px] pointer-events-none opacity-50">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>

        <div className="relative flex flex-col h-full px-[clamp(28px,6vw,72px)] py-[56px]">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-[56px]">
            <Link to="/" className="flex flex-col gap-[2px] items-start group">
              <span className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[26px] tracking-[-1px] leading-none group-hover:opacity-70 transition-opacity">
                Bervelyn
              </span>
              <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[9px] tracking-[3px] uppercase leading-none">
                Nails &amp; Lifestyle
              </span>
            </Link>
            <Link
              to="/"
              className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[12px] tracking-[1px] uppercase hover:text-[#121212] transition-colors"
            >
              ← Início
            </Link>
          </div>

          {/* Form area */}
          <div className="flex flex-col justify-center flex-1 max-w-[400px] mx-auto w-full">
            <div ref={formRef}>

              {/* ── LOGIN ── */}
              {mode === 'login' && (
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[40px] tracking-[-1px] leading-none">
                      Bem-vinda de volta
                    </h1>
                    <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] leading-[1.6]">
                      Acesse sua conta para gerenciar seus agendamentos.
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[8px]">
                      <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">E-mail</label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        required
                        value={loginForm.email}
                        onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                        className="border border-[#e5e5de] bg-white px-[18px] py-[14px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors rounded-[4px] w-full"
                      />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <div className="flex items-center justify-between">
                        <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">Senha</label>
                        <button
                          type="button"
                          onClick={() => setMode('recuperar')}
                          className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[12px] hover:text-[#121212] transition-colors"
                        >
                          Esqueci minha senha
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          required
                          value={loginForm.senha}
                          onChange={e => setLoginForm({ ...loginForm, senha: e.target.value })}
                          className="border border-[#e5e5de] bg-white px-[18px] py-[14px] pr-[48px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors rounded-[4px] w-full"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(v => !v)}
                          className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#8e8e87] hover:text-[#121212] transition-colors"
                        >
                          {showPassword ? (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M1 9s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.2"/>
                              <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                              <path d="M2 2l14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M1 9s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.2"/>
                              <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#121212] flex items-center justify-center px-[40px] py-[16px] mt-[4px] hover:bg-[#2a2a2a] transition-colors duration-300 w-full"
                    >
                      <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Entrar</span>
                    </button>
                  </form>

                  <Divider />

                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] text-center">
                    Ainda não tem conta?{' '}
                    <button onClick={() => setMode('cadastro')} className="text-[#121212] underline underline-offset-2 hover:opacity-60 transition-opacity font-['Schibsted_Grotesk:SemiBold'] font-semibold">
                      Criar conta
                    </button>
                  </p>
                </div>
              )}

              {/* ── CADASTRO ── */}
              {mode === 'cadastro' && (
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[40px] tracking-[-1px] leading-none">
                      Criar sua conta
                    </h1>
                    <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] leading-[1.6]">
                      Acesse histórico de sessões, preferências e muito mais.
                    </p>
                  </div>

                  <form onSubmit={handleCadastro} className="flex flex-col gap-[18px]">
                    {[
                      { key: 'nome', label: 'Nome completo', type: 'text', placeholder: 'Seu nome' },
                      { key: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                    ].map(field => (
                      <div key={field.key} className="flex flex-col gap-[8px]">
                        <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          value={cadastroForm[field.key as keyof typeof cadastroForm]}
                          onChange={e => setCadastroForm({ ...cadastroForm, [field.key]: e.target.value })}
                          className="border border-[#e5e5de] bg-white px-[18px] py-[14px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors rounded-[4px] w-full"
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-[8px]">
                      <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">Senha</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Mínimo 8 caracteres"
                          required
                          minLength={8}
                          value={cadastroForm.senha}
                          onChange={e => setCadastroForm({ ...cadastroForm, senha: e.target.value })}
                          className="border border-[#e5e5de] bg-white px-[18px] py-[14px] pr-[48px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors rounded-[4px] w-full"
                        />
                        <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#8e8e87] hover:text-[#121212] transition-colors">
                          <EyeIcon open={showPassword} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">Confirmar senha</label>
                      <div className="relative">
                        <input
                          type={showConfirm ? 'text' : 'password'}
                          placeholder="Repita a senha"
                          required
                          value={cadastroForm.confirmar}
                          onChange={e => setCadastroForm({ ...cadastroForm, confirmar: e.target.value })}
                          className="border border-[#e5e5de] bg-white px-[18px] py-[14px] pr-[48px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors rounded-[4px] w-full"
                        />
                        <button type="button" onClick={() => setShowConfirm(v => !v)} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#8e8e87] hover:text-[#121212] transition-colors">
                          <EyeIcon open={showConfirm} />
                        </button>
                      </div>
                      {cadastroForm.confirmar && cadastroForm.senha !== cadastroForm.confirmar && (
                        <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#9e1a1a] text-[12px]">As senhas não coincidem.</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={cadastroForm.senha !== cadastroForm.confirmar && cadastroForm.confirmar.length > 0}
                      className="bg-[#121212] flex items-center justify-center px-[40px] py-[16px] mt-[4px] hover:bg-[#2a2a2a] transition-colors duration-300 w-full disabled:opacity-40"
                    >
                      <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Criar conta</span>
                    </button>

                    <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[12px] text-center leading-[1.5]">
                      Ao criar uma conta, você concorda com os nossos{' '}
                      <span className="text-[#121212] underline cursor-pointer">Termos de Serviço</span>.
                    </p>
                  </form>

                  <Divider />

                  <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] text-center">
                    Já tem uma conta?{' '}
                    <button onClick={() => setMode('login')} className="text-[#121212] underline underline-offset-2 hover:opacity-60 transition-opacity font-['Schibsted_Grotesk:SemiBold'] font-semibold">
                      Entrar
                    </button>
                  </p>
                </div>
              )}

              {/* ── RECUPERAR SENHA ── */}
              {mode === 'recuperar' && (
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[40px] tracking-[-1px] leading-none">
                      Recuperar senha
                    </h1>
                    <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] leading-[1.6]">
                      Informe seu e-mail e enviaremos um link para redefinir sua senha.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="flex flex-col gap-[20px]">
                      <div className="bg-[#f1f1eb] border border-[#e5e5de] rounded-[8px] p-[24px] flex gap-[16px] items-start">
                        <div className="flex items-center justify-center size-[36px] rounded-full bg-[#121212] shrink-0 mt-[2px]">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[14px]">E-mail enviado</p>
                          <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[13px] leading-[1.6]">
                            Verifique a caixa de entrada de <span className="text-[#121212]">{recuperarEmail}</span> e siga as instruções para redefinir sua senha.
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => { setMode('login'); setSubmitted(false); setRecuperarEmail(''); }}
                        className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#121212] text-[13px] tracking-[1px] uppercase underline underline-offset-2 hover:opacity-60 transition-opacity text-center"
                      >
                        ← Voltar ao login
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRecuperar} className="flex flex-col gap-[20px]">
                      <div className="flex flex-col gap-[8px]">
                        <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">E-mail cadastrado</label>
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          required
                          value={recuperarEmail}
                          onChange={e => setRecuperarEmail(e.target.value)}
                          className="border border-[#e5e5de] bg-white px-[18px] py-[14px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors rounded-[4px] w-full"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#121212] flex items-center justify-center px-[40px] py-[16px] hover:bg-[#2a2a2a] transition-colors duration-300 w-full"
                      >
                        <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Enviar link de recuperação</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode('login')}
                        className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[13px] tracking-[1px] uppercase hover:text-[#121212] transition-colors text-center"
                      >
                        ← Voltar ao login
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Bottom */}
          <div className="text-center mt-[40px]">
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#c0bfb8] text-[12px]">© 2025 Bervelyn. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-[16px]">
      <div className="flex-1 h-px bg-[#e5e5de]" />
      <span className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#c0bfb8] text-[12px] tracking-[1px]">ou</span>
      <div className="flex-1 h-px bg-[#e5e5de]" />
    </div>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1 9s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M2 2l14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1 9s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
