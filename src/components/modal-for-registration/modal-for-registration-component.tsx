import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../shared/button';
import { Input } from '../../shared/input';
import { ModalForUserActions } from '../../shared/modal-for-user-actions';

import * as S from './modal-for-registration-styled';

export const ModalForRegistration = (): JSX.Element => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);

  const handlerChangeStep = () => {
    const newStep = step < 3 ? step + 1 : step;

    setStep(newStep);
  };

  const handlerGoLogIn = () => {
    navigate('/auth');
  };

  const handlerSubmit = () => {
    console.log('Submit form');
  };

  const shapeStep = [
    <React.Fragment>
      <Input
        id='login'
        type='text'
        placeholder='Придумайте логин для входа'
        notice='спользуйте для логина латинский алфавит и цифры'
      />
      <Input
        id='password'
        type='password'
        placeholder='Пароль'
        notice='Пароль не менее 8 символов, с заглавной буквой и цифрой'
      />
      <S.WrapperButton>
        <Button typeBtn='primary' width='full' onClick={handlerChangeStep}>
          Следующий шаг
        </Button>
      </S.WrapperButton>
    </React.Fragment>,

    <React.Fragment>
      <Input id='firstname' type='text' placeholder='Имя' notice='Используйте для логина латинский алфавит и цифры' />
      <Input
        id='lastname'
        type='text'
        placeholder='Фамилия'
        notice='Пароль не менее 8 символов, с заглавной буквой и цифрой'
      />
      <S.WrapperButton>
        <Button typeBtn='primary' width='full' onClick={handlerChangeStep}>
          Следующий шаг
        </Button>
      </S.WrapperButton>
    </React.Fragment>,

    <React.Fragment>
      <Input
        id='phone'
        type='text'
        placeholder='Номер телефона'
        notice='Используйте для логина латинский алфавит и цифры'
      />
      <Input
        id='email'
        type='email'
        placeholder='E-mail'
        notice='Пароль не менее 8 символов, с заглавной буквой и цифрой'
      />
      <S.WrapperButton>
        <Button typeBtn='primary' width='full' onClick={handlerSubmit}>
          Зарегистрироваться
        </Button>
      </S.WrapperButton>
    </React.Fragment>,
  ];

  return (
    <ModalForUserActions title='Регистрация' step={step} isLinkGoBack={false}>
      <form onSubmit={handlerSubmit}>
        {shapeStep[step - 1]}
        <S.AccountParagraph>
          Есть учётная запись?
          <Button typeBtn='text' img={true} onClick={handlerGoLogIn}>
            Войти
          </Button>
        </S.AccountParagraph>
      </form>
    </ModalForUserActions>
  );
};
