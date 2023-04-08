import { useEffect } from 'react';
import { useContextProfile } from '..';

const Reviews = (): JSX.Element => {
  const { user, handleSelectTab } = useContextProfile();

  useEffect(() => {
    handleSelectTab(1);
  }, [handleSelectTab]);

  if (!user) return <p>Carregando...</p>;
  return <div>Reviews</div>;
};

export default Reviews;
