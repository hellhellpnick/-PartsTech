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

  .page-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    width: 30px;
    height: 30px;
    transition: all 0.2s ease;

    &:not(:last-child) {
      margin-right: 5px;
    }

    @media (min-width: 1024px) {
      &:hover {
        border-color: rgba(113, 114, 115, 0.5);
        border-radius: 50%;
      }
    }
  }

  .page-link {
    cursor: pointer;
    align-self: center;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.primary};
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

  .active {
    border-color: ${(props) => props.theme.palette.border.primary};
    border-radius: 50%;
  }

  .pagination {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }
`;

export { SectionPosts, BoxCenterPosts, BoxListPosts };
