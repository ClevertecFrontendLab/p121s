import { useNavigate } from 'react-router-dom';

import { Button } from '../../shared/button';
import { Input } from '../../shared/input';
import { ModalForUserActions } from '../../shared/modal-for-user-actions';

import * as S from './modal-for-auth-styled';

export const ModalForAuth = (): JSX.Element => {
  const navigate = useNavigate();
  const handlerGoRegistration = () => {
    navigate('/registration');
  };

  const handlerSubmit = () => {
    console.log('Submit form');
  };

  return (
    <ModalForUserActions title='Вход в личный кабинет' isLinkGoBack={false}>
      <form onSubmit={handlerSubmit}>
        <Input id='login' type='text' placeholder='Логин' notice='Используйте для логина латинский алфавит и цифры' />
        <Input
          id='password'
          type='password'
          placeholder='Пароль'
          notice='Пароль не менее 8 символов, с заглавной буквой и цифрой'
        />
        <S.WrapperButton>
          <Button typeBtn='primary' width='full' onClick={handlerSubmit}>
            Вход
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
