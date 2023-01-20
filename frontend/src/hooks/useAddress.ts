import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import useApi from "./useApi";

const getCEPNumbers = (value: string) => {
    return value
        ?.replace("-", "")
        .replaceAll("_", "")
}

export const useAddress = <T extends FieldValues>(schema: any) => {
    const {
        register,
        setValue,
        watch,
        handleSubmit,
        getValues,
        setFocus,
        formState: { errors },
        ...rest
    } = useForm<T>({
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
        setFocus,
        watch,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        rest
    }
};
