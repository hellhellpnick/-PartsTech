import { WrapperLoader, LineOuter, LineInner } from './../Loader.styled';
import { BoxCenterMiniLoader } from './MiniLoader.styled';

const MiniLoader = () => {
  return (
    <BoxCenterMiniLoader>
      <WrapperLoader>
        <LineOuter />
        <LineInner />
      </WrapperLoader>
    </BoxCenterMiniLoader>
  );
};

export default MiniLoader;
