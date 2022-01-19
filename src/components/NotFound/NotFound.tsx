import { BoxCenterLoader } from '../Loader/Loader.styled';
import { TextNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <BoxCenterLoader>
      <TextNotFound title="404">404</TextNotFound>
    </BoxCenterLoader>
  );
};

export default NotFound;
