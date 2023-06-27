export const formatCEP = (cep: string) => {
  return `${cep.substring(0, 5)}-${cep.substring(5)}`;
};
