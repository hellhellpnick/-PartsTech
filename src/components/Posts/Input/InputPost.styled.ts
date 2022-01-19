import styled from 'styled-components';

interface IInputPlaceholder {
  isShow?: boolean;
  isFixed?: boolean;
}

interface ISearchInput {
  isFixed?: boolean;
}

const LabelSearchInput = styled.label`
  position: relative;
  min-width: 270px;
`;

const InputPlaceholder = styled.span<IInputPlaceholder>`
  position: absolute;
  left: 20px;
  top: ${(props) => (props.isFixed ? '-3px' : '10px')};
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  transition: all 0.2s ease;
  opacity: ${(props) => props.isShow && '0'};
`;

const SearchInput = styled.input<ISearchInput>`
  border: 1px solid ${(props) => props.theme.palette.border.main};
  border-radius: 8px;
  width: 100%;
  outline: none;
  padding: 10px 20px;
  margin-bottom: ${(props) => (!props.isFixed ? '40px' : '5px')};
  background-color: transparent;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-family: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  transition: all 0.2s ease;

  @media (min-width: 1024px) {
    &:hover {
      border-color: ${(props) => props.theme.palette.border.primary};
    }

    &:focus {
      border-color: ${(props) => props.theme.palette.border.primary};

      & + ${InputPlaceholder} {
        top: ${(props) => (!props.isFixed ? '-10px' : '-20px')};
        left: 10px;
        font-size: ${(props) => props.theme.typography.textSmall.main};
        background-color: ${(props) => props.theme.palette.background.primary};
        padding: 0 5px;
        opacity: 1;
      }
    }
  }
`;

export { SearchInput, LabelSearchInput, InputPlaceholder };
