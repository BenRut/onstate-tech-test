import { createGlobalStyle } from 'styled-components';
import InterRegular from '../fonts/Inter-Regular.woff';
import InterSemiBold from '../fonts/Inter-SemiBold.woff';

export default createGlobalStyle`
  @font-face {
     font-family: 'Inter-SemiBold';
     font-style: normal;
    font-weight: normal;
  src: local('Inter-SemiBold '), url('${InterSemiBold}') format('woff');
  }
  @font-face {
     font-family: 'Inter-Regular';
     font-style: normal;
    font-weight: normal;
  src: local('Inter-Regular '), url('${InterRegular}') format('woff');
  }
`;
