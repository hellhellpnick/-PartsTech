import styled from 'styled-components';

const SectionPosts = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.background.primary};
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const BoxCenterPosts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const BoxListPosts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .page-link {
    cursor: pointer;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.primary};
    padding: 10px;
    transition: all 0.2s ease;

    @media (min-width: 1024px) {
      &:hover {
        color: ${(props) => props.theme.palette.text.main};
      }

      &:active {
        transform: scale(1.1);
      }
    }
  }

  .pagination {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

const LabelSearchInput = styled.label`
  position: relative;
  min-width: 270px;
`;

const InputPlaceholder = styled.span`
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  transition: all 0.2s ease;
`;

const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme.palette.border.main};
  border-radius: 8px;
  width: 100%;
  outline: none;
  padding: 10px 20px;
  margin-bottom: 40px;
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
        top: -10px;
        left: 10px;
        font-size: ${(props) => props.theme.typography.textSmall.main};
        background-color: ${(props) => props.theme.palette.background.primary};
        padding: 0 5px;
      }
    }
  }
`;

export {
  SectionPosts,
  SearchInput,
  LabelSearchInput,
  InputPlaceholder,
  BoxCenterPosts,
  BoxListPosts,
};
