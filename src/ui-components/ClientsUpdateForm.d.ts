/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Clients } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClientsUpdateFormInputValues = {
    nom?: string;
    prenom?: string;
    email?: string;
    telephone?: string;
    genre?: string;
    dateNaissance?: string;
    nombrePoints?: number;
};
export declare type ClientsUpdateFormValidationValues = {
    nom?: ValidationFunction<string>;
    prenom?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
    dateNaissance?: ValidationFunction<string>;
    nombrePoints?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientsUpdateFormOverridesProps = {
    ClientsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nom?: PrimitiveOverrideProps<TextFieldProps>;
    prenom?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<TextFieldProps>;
    dateNaissance?: PrimitiveOverrideProps<TextFieldProps>;
    nombrePoints?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clients?: Clients;
    onSubmit?: (fields: ClientsUpdateFormInputValues) => ClientsUpdateFormInputValues;
    onSuccess?: (fields: ClientsUpdateFormInputValues) => void;
    onError?: (fields: ClientsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientsUpdateFormInputValues) => ClientsUpdateFormInputValues;
    onValidate?: ClientsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientsUpdateForm(props: ClientsUpdateFormProps): React.ReactElement;
