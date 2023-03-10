import styled from 'styled-components';

import { ToastStyledProps } from './toast-interfaces';

export const ToastStyled = styled.div<ToastStyledProps>`
  width: 100%;
  min-height: 80px;
  padding: 28px 72px 28px 68px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  ${(props) =>
    props.type === 'success'
      ? ''
      : `
        background: #feebea;
        border: 1.5px solid #f42c4f;
    `}
`;
