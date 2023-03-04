import { ChangeEvent, useState } from 'react';

import eyeCloseImg from '../../images/svg/eye-close.svg';
import eyeOpenImg from '../../images/svg/eye-open.svg';

import { InputProps } from './input-interfaces';
import * as S from './input-styled';

export const Input = ({ id, type, placeholder, notice }: InputProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [thisValue, setThisValue] = useState<string>('');
  const [isClosePassword, setIsOpenPassword] = useState<boolean>(true);
  const thisTypePassword = 'text';

  const handlerFocus = () => {
    setIsFocus(true);
  };

  const handlerBlur = () => {
    setIsFocus(false);
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setThisValue(e.target.value);
  };

  const handlerOpenClosePassword = (e: any) => {
    e.preventDefault();
    setIsOpenPassword(!isClosePassword);
  };

  return (
    <S.WrapperInput>
      <S.LabelStyled htmlFor={id} isFocus={thisValue ? true : isFocus}>
        {placeholder}
      </S.LabelStyled>
      <S.InputStyled
        id={id}
        type={type === 'password' && isClosePassword ? type : thisTypePassword}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onChange={handlerChange}
      />
      <S.ParagraphNotice>{notice}</S.ParagraphNotice>
      {type === 'password' ? (
        <S.OpenClosePasswordBtn img={isClosePassword ? eyeCloseImg : eyeOpenImg} onClick={handlerOpenClosePassword} />
      ) : (
        ''
      )}
    </S.WrapperInput>
  );
};
