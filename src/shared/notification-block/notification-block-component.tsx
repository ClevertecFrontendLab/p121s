import { NotificationBlockProps } from './notification-block-interfaces';
import * as S from './notification-block-styled';

export const NotificationBlock = ({ children, type }: NotificationBlockProps) => (
  <S.NotificationBlockStyled data-test-id={type}>{children}</S.NotificationBlockStyled>
);
