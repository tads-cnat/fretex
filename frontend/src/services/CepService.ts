import { cepApi } from "../api/cep";


async function getCep(cep: string){
    const response = await cepApi.get(`/${cep}/json/`);
    return response.data;
}

export { getCep };