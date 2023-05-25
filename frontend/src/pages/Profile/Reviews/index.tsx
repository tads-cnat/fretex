import { useEffect } from 'react';
import { useContextProfile } from '..';

const Reviews = (): JSX.Element => {
  const { handleSelectTab } = useContextProfile();

  useEffect(() => {
    handleSelectTab(1);
  }, [handleSelectTab]);

  return <div>Reviews</div>;
};

export default Reviews;
