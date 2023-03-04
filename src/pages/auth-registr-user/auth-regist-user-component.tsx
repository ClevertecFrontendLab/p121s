import { useParams } from 'react-router-dom';

import { ModalForAuth } from '../../components/modal-for-auth';
import { ModalForRegistration } from '../../components/modal-for-registration';
import { ModalForForgotPass } from '../../components/modal-forgot-pass';
import { ModalNotification } from '../../shared/modal-notification';

import * as S from './auth-registr-user-styled';

export const AuthRegistrationUser = (): JSX.Element => {
  const params = useParams();

  return (
    <S.WrapperPage>
      <S.Cleverland>Cleverland</S.Cleverland>
      {params.category === 'registration' && (
        <ModalForRegistration />
      )}
      {params.category === 'auth' && (
        <ModalForAuth />
      )}
      {params.category === 'forgot-pass' && (
        <ModalForForgotPass />
      )}
      <ModalNotification title='Данные не сохранились' text='Что-то пошло не так. Попробуйте ещё раз' buttonText='повторить' />
    </S.WrapperPage>
  );
};
