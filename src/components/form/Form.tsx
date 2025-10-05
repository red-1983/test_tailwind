'use client';

import { useState } from 'react';
import Button from '@/components/button/Button';
import CheckBox from '@/components/checkBox/CheckBox';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Форма отправлена! Состояние чекбокса: ${isChecked}`);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full mt-8 flex flex-col items-start gap-4"
    >
      <CheckBox
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      >
        Я согласен с{' '}
        <span className="underline">офертой рекуррентных платежей</span> и{' '}
        <span className="underline">Политикой конфиденциальности</span>
      </CheckBox>
      <Button
        className="bg-[#FDB056] text-black font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-1 hover:border-[#81FE95] hover:scale-[1.03]"
        disabled={!isChecked}
      >
        Отправить
      </Button>
      <p className="text-[#9B9B9B] w-full">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
        денежных средств для получения пожизненного доступа к приложению.
        Пользователь соглашается, что данные кредитной/дебетовой карты будут
        сохранены для осуществления покупок дополнительных услуг сервиса в
        случае желания пользователя.
      </p>
    </form>
  );
};

export default Form;
