import { useEffect } from 'react';

const useChangeTitlePage = () => {
  const ChangeTitle = (title: string) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };

  return { ChangeTitle };
};

export default useChangeTitlePage;
