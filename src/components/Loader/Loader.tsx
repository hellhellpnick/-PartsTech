import { FunctionComponent } from 'react';
import {
  WrapperLoader,
  LineOuter,
  LineInner,
  BoxCenterLoader,
} from './Loader.styled';

const Loader: FunctionComponent = () => {
  return (
    <BoxCenterLoader>
      <WrapperLoader>
        <LineOuter />
        <LineInner />
      </WrapperLoader>
    </BoxCenterLoader>
  );
};

export default Loader;
