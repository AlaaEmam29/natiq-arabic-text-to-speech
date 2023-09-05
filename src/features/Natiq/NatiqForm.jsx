import React from "react";
import { useForm } from "react-hook-form";
import { useContextNatiq } from "../../context/NatiqContext";
import { styled } from "styled-components";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { isArabic } from "../../utils/helper";
import Textarea from "../../ui/Textarea";
import { FaCheck, FaTimes, FaSpinner } from "react-icons/fa";

const StyledForm = styled(Form)`
  position: relative;
`;

const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  width: 25%;
  left: 50%;
  text-align: center;
`;

const ClearButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  width: 25%;
  left: 10%;
  text-align: center;
`;

export default function NatiqForm() {
  const { handleSubmit, register, formState, setValue } = useForm();
  const { errors } = formState;
  const { handleNatiqApi, isLoading, handleClear } = useContextNatiq();

  const submitForm = (data) => {
    handleNatiqApi(data.text);
  };

  const errorForm = (error) => {
    console.log(error);
  };

  const handleOnChangeTextarea = (e) => {
    const text = e.target.value;
    if (isArabic(text) || text === "") {
      setValue("text", text);
    } else {
      setValue("text", text.slice(0, -1));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm, errorForm)}>
      <FormRow label="Enter Arabic text" error={errors?.text?.message}>
        <Textarea
          dir="rtl"
          name="text"
          id="text"
          disabled={isLoading}
          placeholder="ادخل النص العربي هنا"
          {...register("text", {
            required:
              "This field is required - Please enter Arabic text only - يدعم اللغة العربية فقط",
          })}
          onChange={handleOnChangeTextarea}
        />
      </FormRow>
      <FormRow type="row">
        <SubmitButton disabled={isLoading} type="submit">
          {isLoading ? (
            <FaSpinner className="icon-spin" />
          ) : (
            <>
              <FaCheck /> Echo
            </>
          )}
        </SubmitButton>
        <ClearButton type="reset" disabled={isLoading} onClick={handleClear}>
          <FaTimes /> Clear
        </ClearButton>
      </FormRow>

    </StyledForm>
  );
}
