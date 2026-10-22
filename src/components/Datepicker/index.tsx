import React, { useState, useRef, useEffect } from 'react';

const DatePickerInput: React.FC = () => {
  // حالة المكون مع تحديد أنواعها
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  // استخدام useRef مع تحديد نوع العنصر الذي سيتم الإشارة إليه
  const datePickerRef = useRef<HTMLDivElement>(null);

  // وظائف المساعدة مع تحديد أنواع المعاملات والقيمة الراجعة
  const daysInMonth = (month: number, year: number): number => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number): number => new Date(year, month, 1).getDay();

  // تغيير الشهر
  const handlePrevMonth = (): void => {
    setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
  };

  const handleNextMonth = (): void => {
    setCurrentMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
  };

  // تحديد التاريخ وإغلاق التقويم
  const handleDayClick = (day: number): void => {
    const newDate: Date = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setShowCalendar(false); // إخفاء التقويم بعد الاختيار
  };

  // معالجة النقر خارج المكون لإخفائه
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // عرض الأيام في التقويم
  const renderDays = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const totalDays: number = daysInMonth(currentMonth, currentYear);
    const firstDay: number = firstDayOfMonth(currentMonth, currentYear);
    const today: Date = new Date();

    // خلايا فارغة
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }

    // أيام الشهر
    for (let day = 1; day <= totalDays; day++) {
      const isSelected: boolean = selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
      const isToday: boolean = today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear;

      days.push(
        <div
          key={day}
          className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-200 
          ${isSelected ? 'bg-blue-500 text-white font-bold' : 'hover:bg-gray-200'}
          ${isToday && !isSelected ? 'border-2 border-blue-500' : ''}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="relative w-64" ref={datePickerRef}>
      {/* حقل الإدخال */}
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
        value={selectedDate.toLocaleDateString()}
        onFocus={() => setShowCalendar(true)}
        readOnly
      />

      {/* عرض التقويم */}
      {showCalendar && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <button className="p-2 rounded-full hover:bg-gray-100" onClick={handlePrevMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="font-semibold text-gray-800">
              {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100" onClick={handleNextMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-2">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-sm">
            {renderDays()}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;