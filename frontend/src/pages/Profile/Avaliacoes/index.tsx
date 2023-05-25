import { useEffect } from 'react';
import { useContextProfile } from '..';

const Avaliacoes = (): JSX.Element => {
  const { user, handleSelectTab } = useContextProfile();

  useEffect(() => {
    handleSelectTab(2);
  }, [handleSelectTab]);

  if (!user) return <p>Carregando...</p>;
  return <div>Avaliacoes</div>;
};

export default Avaliacoes;
