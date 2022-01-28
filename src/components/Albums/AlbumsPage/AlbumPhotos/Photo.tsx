import { WrapperImg, ImgBasic, ImgMini } from './Photos.styled';

const Photo = ({ item, isText }: any) => {
  return (
    <WrapperImg>
      <ImgBasic src={item.url} alt={item.title} onClick={() => isText(item.title)} />
      <ImgMini src={item.thumbnailUrl} alt={item.title} onClick={() => isText(item.title)} />
    </WrapperImg>
  );
};

export default Photo;
