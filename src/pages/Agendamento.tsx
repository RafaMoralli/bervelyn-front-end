import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

const assetPathPrefix = '/assets';
const imgAmbientGlow = `${assetPathPrefix}/9413a.svg`;

const services = [
  { id: 'alongamento', title: 'Alongamento de Alta Precisão', duration: 150, durationLabel: '150 min', price: 'R$ 380' },
  { id: 'esmaltacao', title: 'Esmaltação em Gel', duration: 60, durationLabel: '60 min', price: 'R$ 130' },
  { id: 'manutencao', title: 'Manutenção & Blindagem', duration: 120, durationLabel: '120 min', price: 'R$ 240' },
  { id: 'spa', title: 'Spa dos Pés Regenerativo', duration: 75, durationLabel: '75 min', price: 'R$ 180' },
  { id: 'banho', title: 'Banho de Gel Protetor', duration: 90, durationLabel: '90 min', price: 'R$ 190' },
];

const DAYS_PT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS_PT = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const OCCUPIED: Record<number, string[]> = {
  3: ['09:00', '10:30', '14:00'],
  7: ['11:00', '15:30'],
  10: ['09:00', '13:00', '16:00'],
  14: ['10:00', '14:30'],
  17: ['09:00', '11:30', '16:30'],
  21: ['10:00', '13:30'],
  24: ['09:00', '14:00', '17:00'],
};

function generateSlots(durationMin: number): string[] {
  const slots: string[] = [];
  let h = 9, m = 0;
  while (true) {
    const end = h * 60 + m + durationMin;
    if (end > 20 * 60) break;
    slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    m += 30;
    if (m >= 60) { h += 1; m -= 60; }
  }
  return slots;
}

type Step = 'service' | 'datetime' | 'form' | 'success';

function useFadeIn(step: Step) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    const id = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(id);
  }, [step]);
  return ref;
}

export default function Agendamento() {
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [calMonth, setCalMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const contentRef = useFadeIn(step);

  const svc = services.find(s => s.id === selectedService);

  const calDays = useMemo(() => {
    const year = calMonth.getFullYear();
    const month = calMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    return cells;
  }, [calMonth]);

  const isDisabled = (d: Date) => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const day = d.getDay();
    return d < today || day === 0 || day === 1;
  };

  const isSelected = (d: Date) => selectedDate?.toDateString() === d.toDateString();

  const slots = useMemo(() => svc ? generateSlots(svc.duration) : [], [svc]);
  const occupiedForDay = selectedDate ? (OCCUPIED[selectedDate.getDate()] ?? []) : [];

  const prevMonth = () => setCalMonth(m => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  const nextMonth = () => setCalMonth(m => new Date(m.getFullYear(), m.getMonth() + 1, 1));

  const selectDate = (d: Date) => {
    if (isDisabled(d)) return;
    setSelectedDate(d);
    setSelectedSlot('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
    : '';

  const stepIndex = { service: 0, datetime: 1, form: 2, success: 3 }[step];

  return (
    <div className="bg-[#faf9f6] min-h-screen w-full overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute left-[100px] size-[1000px] top-[-100px] pointer-events-none opacity-40">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>

        <div className="relative px-[clamp(24px,6vw,80px)] py-[120px] max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="flex flex-col gap-[12px] mb-[56px]">
            <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[12px] tracking-[3px] uppercase">Agenda Exclusiva</p>
            <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(36px,5vw,64px)] tracking-[-2px] leading-[1.05]">
              Agende sua experiência
            </h1>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px]">
              Atendimento exclusivo, somente com horário marcado. Terça a Sábado, das 09h às 20h.
            </p>
          </div>

          {/* Step indicator */}
          {step !== 'success' && (
            <div className="flex items-center gap-[0] mb-[64px]">
              {['Protocolo', 'Data & Horário', 'Seus dados'].map((label, i) => (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center gap-[6px]">
                    <div className={`flex items-center justify-center size-[32px] rounded-full border transition-all duration-400 ${
                      i <= stepIndex ? 'bg-[#121212] border-[#121212]' : 'bg-transparent border-[#e5e5de]'
                    }`}>
                      {i < stepIndex ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <span className={`font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[11px] ${i <= stepIndex ? 'text-white' : 'text-[#8e8e87]'}`}>{i + 1}</span>
                      )}
                    </div>
                    <span className={`font-['Schibsted_Grotesk:Medium'] font-medium text-[10px] tracking-[1px] uppercase whitespace-nowrap transition-colors duration-300 ${i === stepIndex ? 'text-[#121212]' : 'text-[#8e8e87]'}`}>
                      {label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className={`h-px w-[clamp(28px,5vw,88px)] mx-[8px] mb-[18px] transition-colors duration-500 ${i < stepIndex ? 'bg-[#121212]' : 'bg-[#e5e5de]'}`} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step content — fade-in on step change */}
          <div ref={contentRef}>

            {/* ── STEP 1: SERVICE ── */}
            {step === 'service' && (
              <div className="flex flex-col gap-[16px]">
                <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase mb-[8px]">Escolha o protocolo</p>
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`border flex items-center justify-between p-[24px] rounded-[6px] text-left transition-all duration-200 ${
                      selectedService === s.id
                        ? 'border-[#121212] bg-[#121212]'
                        : 'border-[#e5e5de] bg-white/50 hover:border-[#121212]/40'
                    }`}
                  >
                    <div className="flex flex-col gap-[4px]">
                      <p className={`font-['Cormorant_Garamond:SemiBold'] font-semibold text-[22px] ${selectedService === s.id ? 'text-white' : 'text-[#121212]'}`}>{s.title}</p>
                      <p className={`font-['Schibsted_Grotesk:Regular'] font-normal text-[13px] ${selectedService === s.id ? 'text-[#e5e5de]' : 'text-[#8e8e87]'}`}>{s.durationLabel}</p>
                    </div>
                    <p className={`font-['Cormorant_Garamond:Regular'] font-normal text-[30px] shrink-0 ml-6 ${selectedService === s.id ? 'text-white' : 'text-[#121212]'}`}>{s.price}</p>
                  </button>
                ))}
                <button
                  onClick={() => selectedService && setStep('datetime')}
                  disabled={!selectedService}
                  className="bg-[#121212] flex items-center justify-center px-[40px] py-[18px] mt-[8px] disabled:opacity-30 hover:bg-[#2a2a2a] transition-colors duration-300"
                >
                  <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Continuar →</span>
                </button>
              </div>
            )}

            {/* ── STEP 2: DATE & TIME ── */}
            {step === 'datetime' && (
              <div className="flex flex-col gap-[40px]">

                {/* Service badge */}
                <div className="bg-[#f1f1eb] inline-flex gap-[16px] items-center px-[20px] py-[12px] rounded-[6px] self-start flex-wrap">
                  <span className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[20px]">{svc?.title}</span>
                  <span className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[12px]">{svc?.durationLabel} · {svc?.price}</span>
                </div>

                <div className="flex flex-col xl:flex-row gap-[48px] items-start">

                  {/* ── Calendar ── */}
                  <div className="flex flex-col gap-[16px] xl:w-[420px] shrink-0 w-full">
                    <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase">1. Escolha a data</p>

                    <div className="border border-[#e5e5de] bg-white rounded-[12px] p-[28px] shadow-[0px_8px_32px_rgba(45,43,42,0.06)]">

                      {/* Month navigation */}
                      <div className="flex items-center justify-between mb-[28px]">
                        <button onClick={prevMonth} className="flex items-center justify-center size-[36px] border border-[#e5e5de] rounded-full hover:border-[#121212] transition-colors">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M9 11L5 7l4-4" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[22px]">
                          {MONTHS_PT[calMonth.getMonth()]} {calMonth.getFullYear()}
                        </p>
                        <button onClick={nextMonth} className="flex items-center justify-center size-[36px] border border-[#e5e5de] rounded-full hover:border-[#121212] transition-colors">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M5 3l4 4-4 4" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>

                      {/* Day headers */}
                      <div className="grid grid-cols-7 mb-[6px]">
                        {DAYS_PT.map(day => (
                          <div key={day} className="flex items-center justify-center py-[4px]">
                            <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[10px] tracking-[1px] uppercase text-[#8e8e87]">{day}</span>
                          </div>
                        ))}
                      </div>

                      {/* Days */}
                      <div className="grid grid-cols-7 gap-y-[2px]">
                        {calDays.map((d, i) => {
                          if (!d) return <div key={`e-${i}`} />;
                          const disabled = isDisabled(d);
                          const sel = isSelected(d);
                          const isToday = d.toDateString() === new Date().toDateString();
                          return (
                            <button
                              key={d.toISOString()}
                              onClick={() => selectDate(d)}
                              disabled={disabled}
                              className={`flex items-center justify-center mx-auto w-[36px] aspect-square rounded-full text-[14px] transition-all duration-150 ${
                                sel
                                  ? 'bg-[#121212] text-white'
                                  : disabled
                                  ? 'text-[#d0cfc8] cursor-not-allowed'
                                  : isToday
                                  ? 'border border-[#121212] text-[#121212] hover:bg-[#f1f1eb]'
                                  : 'text-[#121212] hover:bg-[#f1f1eb]'
                              }`}
                            >
                              <span className={`font-['Schibsted_Grotesk:${sel ? 'SemiBold' : 'Regular'}'] ${sel ? 'font-semibold' : 'font-normal'}`}>
                                {d.getDate()}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Legend */}
                      <div className="flex gap-[16px] items-center mt-[20px] pt-[16px] border-t border-[#e5e5de] flex-wrap gap-y-[8px]">
                        <div className="flex gap-[6px] items-center">
                          <div className="size-[8px] rounded-full border border-[#121212]" />
                          <span className="font-['Schibsted_Grotesk:Regular'] font-normal text-[11px] text-[#8e8e87]">Hoje</span>
                        </div>
                        <div className="flex gap-[6px] items-center">
                          <div className="size-[8px] rounded-full bg-[#121212]" />
                          <span className="font-['Schibsted_Grotesk:Regular'] font-normal text-[11px] text-[#8e8e87]">Selecionado</span>
                        </div>
                        <div className="flex gap-[6px] items-center">
                          <div className="size-[8px] rounded-full bg-[#e5e5de]" />
                          <span className="font-['Schibsted_Grotesk:Regular'] font-normal text-[11px] text-[#8e8e87]">Fechado (Dom/Seg)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Time slots ── */}
                  <div className="flex flex-col gap-[16px] flex-1 w-full">
                    <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase">
                      2. {selectedDate ? `Horários — ${formattedDate}` : 'Escolha um horário'}
                    </p>

                    {!selectedDate ? (
                      <div className="border border-dashed border-[#e5e5de] rounded-[12px] flex flex-col gap-[14px] items-center justify-center py-[72px] text-center px-[24px]">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                          <rect x="4" y="7" width="28" height="26" rx="4" stroke="#d0cfc8" strokeWidth="1.5"/>
                          <path d="M4 14h28" stroke="#d0cfc8" strokeWidth="1.5"/>
                          <path d="M12 3v8M24 3v8" stroke="#d0cfc8" strokeWidth="1.5" strokeLinecap="round"/>
                          <circle cx="12" cy="22" r="1.5" fill="#d0cfc8"/>
                          <circle cx="18" cy="22" r="1.5" fill="#d0cfc8"/>
                          <circle cx="24" cy="22" r="1.5" fill="#d0cfc8"/>
                        </svg>
                        <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] max-w-[240px] leading-[1.6]">
                          Selecione uma data no calendário para ver os horários disponíveis
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-[24px]">
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]">
                          {slots.map(slot => {
                            const occupied = occupiedForDay.includes(slot);
                            const sel = selectedSlot === slot;
                            return (
                              <button
                                key={slot}
                                onClick={() => !occupied && setSelectedSlot(slot === selectedSlot ? '' : slot)}
                                disabled={occupied}
                                className={`border rounded-[8px] py-[16px] px-[10px] flex flex-col items-center gap-[4px] transition-all duration-200 ${
                                  occupied
                                    ? 'border-[#e5e5de] bg-[#f7f6f3] cursor-not-allowed'
                                    : sel
                                    ? 'border-[#121212] bg-[#121212]'
                                    : 'border-[#e5e5de] bg-white hover:border-[#121212]/50 hover:shadow-[0px_4px_12px_rgba(45,43,42,0.06)]'
                                }`}
                              >
                                <span className={`font-['Cormorant_Garamond:SemiBold'] font-semibold text-[22px] leading-none ${
                                  occupied ? 'text-[#c8c7c0]' : sel ? 'text-white' : 'text-[#121212]'
                                }`}>
                                  {slot}
                                </span>
                                <span className={`font-['Schibsted_Grotesk:Regular'] font-normal text-[9px] tracking-[0.5px] uppercase ${
                                  occupied ? 'text-[#c8c7c0]' : sel ? 'text-[#e5e5de]' : 'text-[#8e8e87]'
                                }`}>
                                  {occupied ? 'Ocupado' : sel ? 'Selecionado' : 'Disponível'}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Selected summary */}
                        {selectedSlot && (
                          <div className="bg-[#f1f1eb] border border-[#e5e5de] rounded-[8px] p-[20px] flex gap-[16px] items-center">
                            <div className="flex flex-col gap-[3px] flex-1">
                              <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[10px] tracking-[1.5px] uppercase">Reserva selecionada</p>
                              <p className="font-['Cormorant_Garamond:Regular'] font-normal text-[#121212] text-[22px] capitalize leading-none mt-[2px]">
                                {formattedDate} · {selectedSlot}
                              </p>
                            </div>
                            <div className="flex items-center justify-center size-[36px] rounded-full bg-[#121212] shrink-0">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7l3.5 3.5 5.5-6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-[16px] pt-[8px]">
                  <button
                    onClick={() => setStep('service')}
                    className="border border-[#e5e5de] flex items-center justify-center px-[32px] py-[16px] hover:border-[#121212] transition-colors duration-200"
                  >
                    <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#121212] text-[13px] tracking-[1px] uppercase">← Voltar</span>
                  </button>
                  <button
                    onClick={() => selectedDate && selectedSlot && setStep('form')}
                    disabled={!selectedDate || !selectedSlot}
                    className="bg-[#121212] flex flex-1 items-center justify-center px-[40px] py-[16px] disabled:opacity-30 hover:bg-[#2a2a2a] transition-colors duration-300"
                  >
                    <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Continuar →</span>
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: FORM ── */}
            {step === 'form' && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] max-w-[640px]">

                {/* Booking summary */}
                <div className="bg-[#121212] rounded-[12px] p-[28px] flex flex-col gap-[16px]">
                  <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[10px] tracking-[2px] uppercase">Resumo da reserva</p>
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-['Cormorant_Garamond:Light'] font-light text-white text-[28px] leading-none">{svc?.title}</p>
                    <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px] capitalize">{formattedDate} · {selectedSlot}</p>
                  </div>
                  <div className="border-t border-white/10 pt-[16px] flex items-center justify-between">
                    <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[13px]">{svc?.durationLabel}</span>
                    <span className="font-['Cormorant_Garamond:Regular'] font-normal text-white text-[30px]">{svc?.price}</span>
                  </div>
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-[20px]">
                  {[
                    { key: 'name', label: 'Nome completo', type: 'text', placeholder: 'Seu nome' },
                    { key: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                    { key: 'phone', label: 'WhatsApp', type: 'tel', placeholder: '(11) 99999-9999' },
                  ].map((field) => (
                    <div key={field.key} className="flex flex-col gap-[8px]">
                      <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="border border-[#e5e5de] bg-white px-[20px] py-[14px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors rounded-[4px]"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[1.5px] uppercase">Observações (opcional)</label>
                    <textarea
                      rows={3}
                      placeholder="Alguma preferência ou cuidado especial?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="border border-[#e5e5de] bg-white px-[20px] py-[14px] font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] text-[#121212] placeholder:text-[#c0bfb8] outline-none focus:border-[#121212] transition-colors resize-none rounded-[4px]"
                    />
                  </div>
                </div>

                <div className="flex gap-[16px]">
                  <button
                    type="button"
                    onClick={() => setStep('datetime')}
                    className="border border-[#e5e5de] flex items-center justify-center px-[32px] py-[16px] hover:border-[#121212] transition-colors duration-200"
                  >
                    <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#121212] text-[13px] tracking-[1px] uppercase">← Voltar</span>
                  </button>
                  <button
                    type="submit"
                    className="bg-[#121212] flex flex-1 items-center justify-center px-[40px] py-[16px] hover:bg-[#2a2a2a] transition-colors duration-300"
                  >
                    <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Confirmar agendamento</span>
                  </button>
                </div>
              </form>
            )}

            {/* ── STEP 4: SUCCESS ── */}
            {step === 'success' && (
              <div className="flex flex-col gap-[32px] items-center text-center py-[60px] max-w-[560px] mx-auto">
                <div className="flex items-center justify-center size-[72px] rounded-full bg-[#f1f1eb] border border-[#e5e5de]">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l7 7L23 8" stroke="#121212" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['Parisienne:Regular'] text-[#9e1a1a] text-[60px] leading-none">Obrigada</p>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[28px]">Seu agendamento foi recebido.</p>
                  <p className="font-['Cormorant_Garamond:Italic'] font-normal italic text-[#8e8e87] text-[22px] capitalize">{formattedDate} às {selectedSlot}</p>
                </div>
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px]">
                  Entraremos em contato pelo WhatsApp em até 24h para confirmar sua experiência. Enquanto isso, siga-nos no Instagram{' '}
                  <span className="text-[#121212]">@thebervelyn</span> para inspiração.
                </p>
                <div className="flex gap-[16px] flex-wrap justify-center pt-[8px]">
                  <button
                    onClick={() => navigate('/')}
                    className="border border-[#121212] flex items-center justify-center px-[32px] py-[14px] hover:bg-[#121212] hover:text-white transition-colors duration-300"
                  >
                    <span className="font-['Schibsted_Grotesk:Medium'] font-medium text-[13px] tracking-[1.5px] uppercase">Voltar ao início</span>
                  </button>
                  <button
                    onClick={() => {
                      setStep('service');
                      setSelectedService('');
                      setSelectedDate(null);
                      setSelectedSlot('');
                      setForm({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="bg-[#121212] flex items-center justify-center px-[32px] py-[14px] hover:bg-[#2a2a2a] transition-colors duration-300"
                  >
                    <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Novo agendamento</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
