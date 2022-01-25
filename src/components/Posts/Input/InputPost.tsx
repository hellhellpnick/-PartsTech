import { useState } from 'react';
import { SearchInput, LabelSearchInput, InputPlaceholder } from './InputPost.styled';

interface IInputPost {
  nameInput: string;
  textInput: string;
  addFunction: (e: React.FormEvent<HTMLInputElement>) => void;
  isFixed?: boolean;
}
const InputPost = ({ nameInput, textInput, addFunction, isFixed }: IInputPost) => {
  const [isShow, setShow] = useState(nameInput ? true : false);
  const [isInput, setInput] = useState(nameInput);

  const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value ? setShow(true) : setShow(false);
    addFunction(e);
    setInput(e.currentTarget.value);
  };

  return (
    <LabelSearchInput htmlFor={nameInput}>
      <SearchInput
        type="text"
        id={nameInput}
        onChange={changeInput}
        isFixed={isFixed}
        value={isInput}
      />
      <InputPlaceholder isShow={isShow} isFixed={isFixed}>
        {textInput}
      </InputPlaceholder>
    </LabelSearchInput>
  );
};

export default InputPost;
