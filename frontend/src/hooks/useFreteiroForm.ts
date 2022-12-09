import { useState } from "react";
import { IFreteiro } from "../interfaces";
import useApi from "./useApi";
import { SubmitHandler } from "react-hook-form";

type Props = {
    onSuccess: () => void
}

export const useFreteiroForm = ({ onSuccess }: Props) => {
    const { registerFreteiro } = useApi()

    const onSubmit: SubmitHandler<IFreteiro> = (data) => {
        const formData = new FormData();
        const { endereco, ...freteiro } = data;

        Object.entries(freteiro).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });
        Object.entries(endereco).forEach(([key, value]) => {
            if (value) formData.append(`endereco.${key}`, String(value));
        });

        registerFreteiro(formData)
            .then(onSuccess)
            .catch((res) => console.log(res));
    };

    return {
        onSubmit,
    }
}