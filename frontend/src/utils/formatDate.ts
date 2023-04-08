export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-BR');
};
