/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Clients } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ClientsUpdateForm(props) {
  const {
    id: idProp,
    clients: clientsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    genre: "",
    dateNaissance: "",
    nombrePoints: "",
  };
  const [nom, setNom] = React.useState(initialValues.nom);
  const [prenom, setPrenom] = React.useState(initialValues.prenom);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [genre, setGenre] = React.useState(initialValues.genre);
  const [dateNaissance, setDateNaissance] = React.useState(
    initialValues.dateNaissance
  );
  const [nombrePoints, setNombrePoints] = React.useState(
    initialValues.nombrePoints
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clientsRecord
      ? { ...initialValues, ...clientsRecord }
      : initialValues;
    setNom(cleanValues.nom);
    setPrenom(cleanValues.prenom);
    setEmail(cleanValues.email);
    setTelephone(cleanValues.telephone);
    setGenre(cleanValues.genre);
    setDateNaissance(cleanValues.dateNaissance);
    setNombrePoints(cleanValues.nombrePoints);
    setErrors({});
  };
  const [clientsRecord, setClientsRecord] = React.useState(clientsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Clients, idProp)
        : clientsModelProp;
      setClientsRecord(record);
    };
    queryData();
  }, [idProp, clientsModelProp]);
  React.useEffect(resetStateValues, [clientsRecord]);
  const validations = {
    nom: [{ type: "Required" }],
    prenom: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    telephone: [{ type: "Required" }, { type: "Phone" }],
    genre: [{ type: "Required" }],
    dateNaissance: [{ type: "Required" }],
    nombrePoints: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nom,
          prenom,
          email,
          telephone,
          genre,
          dateNaissance,
          nombrePoints,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Clients.copyOf(clientsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClientsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nom"
        isRequired={true}
        isReadOnly={false}
        value={nom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom: value,
              prenom,
              email,
              telephone,
              genre,
              dateNaissance,
              nombrePoints,
            };
            const result = onChange(modelFields);
            value = result?.nom ?? value;
          }
          if (errors.nom?.hasError) {
            runValidationTasks("nom", value);
          }
          setNom(value);
        }}
        onBlur={() => runValidationTasks("nom", nom)}
        errorMessage={errors.nom?.errorMessage}
        hasError={errors.nom?.hasError}
        {...getOverrideProps(overrides, "nom")}
      ></TextField>
      <TextField
        label="Prenom"
        isRequired={true}
        isReadOnly={false}
        value={prenom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              prenom: value,
              email,
              telephone,
              genre,
              dateNaissance,
              nombrePoints,
            };
            const result = onChange(modelFields);
            value = result?.prenom ?? value;
          }
          if (errors.prenom?.hasError) {
            runValidationTasks("prenom", value);
          }
          setPrenom(value);
        }}
        onBlur={() => runValidationTasks("prenom", prenom)}
        errorMessage={errors.prenom?.errorMessage}
        hasError={errors.prenom?.hasError}
        {...getOverrideProps(overrides, "prenom")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              prenom,
              email: value,
              telephone,
              genre,
              dateNaissance,
              nombrePoints,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Telephone"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              prenom,
              email,
              telephone: value,
              genre,
              dateNaissance,
              nombrePoints,
            };
            const result = onChange(modelFields);
            value = result?.telephone ?? value;
          }
          if (errors.telephone?.hasError) {
            runValidationTasks("telephone", value);
          }
          setTelephone(value);
        }}
        onBlur={() => runValidationTasks("telephone", telephone)}
        errorMessage={errors.telephone?.errorMessage}
        hasError={errors.telephone?.hasError}
        {...getOverrideProps(overrides, "telephone")}
      ></TextField>
      <TextField
        label="Genre"
        isRequired={true}
        isReadOnly={false}
        value={genre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              prenom,
              email,
              telephone,
              genre: value,
              dateNaissance,
              nombrePoints,
            };
            const result = onChange(modelFields);
            value = result?.genre ?? value;
          }
          if (errors.genre?.hasError) {
            runValidationTasks("genre", value);
          }
          setGenre(value);
        }}
        onBlur={() => runValidationTasks("genre", genre)}
        errorMessage={errors.genre?.errorMessage}
        hasError={errors.genre?.hasError}
        {...getOverrideProps(overrides, "genre")}
      ></TextField>
      <TextField
        label="Date naissance"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dateNaissance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              prenom,
              email,
              telephone,
              genre,
              dateNaissance: value,
              nombrePoints,
            };
            const result = onChange(modelFields);
            value = result?.dateNaissance ?? value;
          }
          if (errors.dateNaissance?.hasError) {
            runValidationTasks("dateNaissance", value);
          }
          setDateNaissance(value);
        }}
        onBlur={() => runValidationTasks("dateNaissance", dateNaissance)}
        errorMessage={errors.dateNaissance?.errorMessage}
        hasError={errors.dateNaissance?.hasError}
        {...getOverrideProps(overrides, "dateNaissance")}
      ></TextField>
      <TextField
        label="Nombre points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={nombrePoints}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nom,
              prenom,
              email,
              telephone,
              genre,
              dateNaissance,
              nombrePoints: value,
            };
            const result = onChange(modelFields);
            value = result?.nombrePoints ?? value;
          }
          if (errors.nombrePoints?.hasError) {
            runValidationTasks("nombrePoints", value);
          }
          setNombrePoints(value);
        }}
        onBlur={() => runValidationTasks("nombrePoints", nombrePoints)}
        errorMessage={errors.nombrePoints?.errorMessage}
        hasError={errors.nombrePoints?.hasError}
        {...getOverrideProps(overrides, "nombrePoints")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || clientsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || clientsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
