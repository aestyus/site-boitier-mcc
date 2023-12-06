/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CategoriesCreateFormInputValues = {
    nom?: string;
    photo?: string;
};
export declare type CategoriesCreateFormValidationValues = {
    nom?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriesCreateFormOverridesProps = {
    CategoriesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nom?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriesCreateFormProps = React.PropsWithChildren<{
    overrides?: CategoriesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CategoriesCreateFormInputValues) => CategoriesCreateFormInputValues;
    onSuccess?: (fields: CategoriesCreateFormInputValues) => void;
    onError?: (fields: CategoriesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoriesCreateFormInputValues) => CategoriesCreateFormInputValues;
    onValidate?: CategoriesCreateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriesCreateForm(props: CategoriesCreateFormProps): React.ReactElement;
