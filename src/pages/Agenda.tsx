import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const assetPathPrefix = '/assets';
const imgAmbientGlow = `${assetPathPrefix}/9413a.svg`;

const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
}

const slots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30'];
const booked = new Set([2, 5, 9, 14, 18, 22, 25, 27]);

export default function Agenda() {
  useScrollAnimation();
  const navigate = useNavigate();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const days = getCalendarDays(year, month);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDay(null); setSelectedSlot(null);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDay(null); setSelectedSlot(null);
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen w-full overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute left-[200px] size-[1000px] top-[-100px] pointer-events-none opacity-40">
          <img alt="" className="block size-full" src={imgAmbientGlow} />
        </div>
        <div className="relative px-[80px] py-[120px]">
          <div className="flex flex-col gap-[16px] mb-[64px]" data-animate>
            <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[12px] tracking-[3px] uppercase">Agenda Exclusiva</p>
            <h1 className="font-['Cormorant_Garamond:Light'] font-light text-[#121212] text-[clamp(40px,5vw,64px)] tracking-[-2px] leading-[1.05]">
              Horários disponíveis
            </h1>
            <p className="font-['Schibsted_Grotesk:Regular'] font-normal leading-[1.7] text-[#8e8e87] text-[15px] max-w-[480px]">
              Atendimento exclusivo de terça a sábado, das 09:00 às 20:00. Selecione uma data e horário de sua preferência.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[64px] items-start">
            {/* Calendar */}
            <div className="flex flex-col gap-[24px]" data-animate data-animate-delay="1">
              <div className="flex items-center justify-between mb-[8px]">
                <button onClick={prevMonth} className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[20px] hover:text-[#121212] transition-colors w-[32px]">‹</button>
                <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[24px]">{MONTHS[month]} {year}</p>
                <button onClick={nextMonth} className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[20px] hover:text-[#121212] transition-colors w-[32px]">›</button>
              </div>
              <div className="grid grid-cols-7 gap-[4px]">
                {DAYS.map((d) => (
                  <div key={d} className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#8e8e87] text-[11px] tracking-[1px] uppercase text-center py-[8px] w-[48px]">{d}</div>
                ))}
                {days.map((day, i) => (
                  <div key={i} className="w-[48px] h-[48px] flex items-center justify-center">
                    {day !== null && (
                      <button
                        disabled={booked.has(day)}
                        onClick={() => { setSelectedDay(day); setSelectedSlot(null); }}
                        className={`w-full h-full flex items-center justify-center rounded-full font-['Schibsted_Grotesk:Regular'] font-normal text-[14px] transition-all duration-150 ${
                          booked.has(day)
                            ? 'text-[#d0d0c8] cursor-not-allowed line-through'
                            : selectedDay === day
                            ? 'bg-[#121212] text-white'
                            : 'text-[#121212] hover:bg-[#e5e5de]'
                        }`}
                      >
                        {day}
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-[16px] items-center text-[12px] font-['Schibsted_Grotesk:Regular'] text-[#8e8e87]">
                <div className="flex items-center gap-[6px]">
                  <div className="bg-[#121212] rounded-full size-[8px]" />
                  <span>Selecionado</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="bg-[#e5e5de] rounded-full size-[8px]" />
                  <span>Disponível</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="border border-[#d0d0c8] rounded-full size-[8px]" />
                  <span>Indisponível</span>
                </div>
              </div>
            </div>

            {/* Time slots */}
            {selectedDay && (
              <div className="flex flex-col gap-[24px] flex-1" data-animate>
                <p className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-[#121212] text-[11px] tracking-[2px] uppercase">
                  Horários disponíveis — {selectedDay} de {MONTHS[month]}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px]">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`border py-[16px] font-['Schibsted_Grotesk:Medium'] font-medium text-[15px] tracking-[1px] transition-all duration-150 ${
                        selectedSlot === slot
                          ? 'border-[#121212] bg-[#121212] text-white'
                          : 'border-[#e5e5de] text-[#121212] hover:border-[#121212]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {selectedSlot && (
                  <div className="mt-[16px]" data-animate>
                    <div className="bg-[#f1f1eb] p-[24px] rounded-[6px] mb-[24px]">
                      <p className="font-['Schibsted_Grotesk:Medium'] font-medium text-[#8e8e87] text-[12px] tracking-[1px] uppercase">Horário selecionado</p>
                      <p className="font-['Cormorant_Garamond:SemiBold'] font-semibold text-[#121212] text-[28px] mt-[4px]">
                        {selectedDay} de {MONTHS[month]}, {year} · {selectedSlot}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('/agendamento')}
                      className="bg-[#121212] flex items-center justify-center px-[40px] py-[18px] w-full hover:bg-[#2a2a2a] transition-colors duration-300"
                    >
                      <span className="font-['Schibsted_Grotesk:SemiBold'] font-semibold text-white text-[13px] tracking-[2px] uppercase">Confirmar este horário →</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {!selectedDay && (
              <div className="flex flex-col gap-[16px] flex-1 justify-center items-center py-[80px] text-center" data-animate data-animate-delay="1">
                <p className="font-['Cormorant_Garamond:Light'] font-light text-[#8e8e87] text-[28px]">Selecione uma data</p>
                <p className="font-['Schibsted_Grotesk:Regular'] font-normal text-[#8e8e87] text-[14px]">para ver os horários disponíveis</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
