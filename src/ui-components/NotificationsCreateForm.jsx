/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Notifications } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function NotificationsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    titre: "",
    corps: "",
  };
  const [titre, setTitre] = React.useState(initialValues.titre);
  const [corps, setCorps] = React.useState(initialValues.corps);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitre(initialValues.titre);
    setCorps(initialValues.corps);
    setErrors({});
  };
  const validations = {
    titre: [{ type: "Required" }],
    corps: [],
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
          titre,
          corps,
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
          await DataStore.save(new Notifications(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NotificationsCreateForm")}
      {...rest}
    >
      <TextField
        label="Titre"
        isRequired={true}
        isReadOnly={false}
        value={titre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titre: value,
              corps,
            };
            const result = onChange(modelFields);
            value = result?.titre ?? value;
          }
          if (errors.titre?.hasError) {
            runValidationTasks("titre", value);
          }
          setTitre(value);
        }}
        onBlur={() => runValidationTasks("titre", titre)}
        errorMessage={errors.titre?.errorMessage}
        hasError={errors.titre?.hasError}
        {...getOverrideProps(overrides, "titre")}
      ></TextField>
      <TextField
        label="Corps"
        isRequired={false}
        isReadOnly={false}
        value={corps}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titre,
              corps: value,
            };
            const result = onChange(modelFields);
            value = result?.corps ?? value;
          }
          if (errors.corps?.hasError) {
            runValidationTasks("corps", value);
          }
          setCorps(value);
        }}
        onBlur={() => runValidationTasks("corps", corps)}
        errorMessage={errors.corps?.errorMessage}
        hasError={errors.corps?.hasError}
        {...getOverrideProps(overrides, "corps")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
