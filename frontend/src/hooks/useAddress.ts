import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IFreteiro, IPedido } from "../interfaces";
import { schemaPedido } from "../pages/RegisterFrete/schemas";
import useApi from "./useApi";

const getCEPNumbers = (value: string) => {
    return value
        ?.replace("-", "")
        .replaceAll("_", "")
}

export const useAddress = (schema:any) => {
    const {
        register,
        setValue,
        watch,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm<IPedido>({
        resolver: yupResolver(schema),
    })
    const { getCEP } = useApi()

    const completeAddress = (e: any) => {
        const { name, value } = e.target
        if (!value) return
        const cepDestino = getCEPNumbers(value);

        if (cepDestino.length !== 8) return

        const tipoDot = name.indexOf(".");
        const tipo = name.slice(0, tipoDot);

        const rua = tipo.concat(".rua");
        const bairro = tipo.concat(".bairro");
        const cidade = tipo.concat(".cidade");
        const estado = tipo.concat(".estado");

        if (getValues(rua) || getValues(bairro) || getValues(cidade) || getValues(estado)) return

        getCEP(cepDestino).then((res) => {
            setValue(rua, res.logradouro);
            setValue(bairro, res.bairro);
            setValue(cidade, res.localidade);
            setValue(estado, res.uf);
        });
    }
    return {
        register,
        completeAddress,
        watch,
        handleSubmit,
        formState: { errors },
        setValue
    }
};
