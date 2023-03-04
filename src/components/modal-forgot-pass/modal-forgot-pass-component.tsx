import { useNavigate } from 'react-router-dom';

import { Button } from '../../shared/button';
import { Input } from '../../shared/input';
import { ModalForUserActions } from '../../shared/modal-for-user-actions';

import * as S from './modal-forgot-pass-styled';

export const ModalForForgotPass = () => {
  const navigate = useNavigate();
  const handlerSubmit = () => {
    console.log('Submit form');
  };

  const handlerGoRegistration = () => {
    navigate('/registration');
  };

  return (
    <ModalForUserActions title='Восстановление пароля' isLinkGoBack={true} linkGoBackTitle='вход в личный кабинет'>
      <form onSubmit={handlerSubmit}>
        <Input
          id='email'
          type='email'
          placeholder='E-mail'
          notice='На это email будет отправлено письмо с инструкциями по восстановлению пароля'
        />
        <S.WrapperButton>
          <Button typeBtn='primary' width='full' onClick={handlerSubmit}>
            Восстановить
          </Button>
        </S.WrapperButton>
        <S.AccountParagraph>
          Нет учётной записи?
          <Button typeBtn='text' img={true} onClick={handlerGoRegistration}>
            Регистрация
          </Button>
        </S.AccountParagraph>
      </form>
    </ModalForUserActions>
  );
};
