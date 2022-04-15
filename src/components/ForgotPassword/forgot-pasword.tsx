import React, { useState } from "react";
import Home1 from "../Home/HomeParts/Home1";
import { Container } from "@mantine/core";
import { Typography } from "@mui/material";
import { useForm } from "@mantine/form";
import { InputWrapper } from "@mantine/core";
import { TextInput, Modal } from "@mantine/core";
import { Button } from "@mantine/core";
import { useAuth } from "../../state/auth/auth.state";
import { Link, useHistory } from "react-router-dom";
import { useForgotPassword } from "../../server-state/mutations/use-forgot-password";
import { useVerfyResetPassword } from "../../server-state/mutations/use-verify-reset-password";
import { useResetPassword } from "../../server-state/mutations/use-reset-password";
import { useTranslation } from "react-i18next";

interface FormValues {
  email: string; // regular field, same as inferred type
  code: string;
}

const ForgotPasswordPage = () => {
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const { push } = useHistory();
  const { mutate, isLoading } = useForgotPassword();
  const [loginerror, setLoginerror] = useState(false);
  const [verificationKey, setVerificationKey] = useState("");
  const verification = useVerfyResetPassword();
  const resetPassword = useResetPassword();
  const { t, i18n } = useTranslation();

  const {
    tokens: { access },
  } = useAuth();
  const isLogin = Boolean(access);
  if (isLogin) {
    push("/");
  }

  const { getInputProps, onSubmit, setErrors, values } = useForm<FormValues>({
    initialValues: {
      email: "",
      code: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const resetPasswordfFields = useForm<{
    password: string;
    confirmPassword: string;
  }>({
    initialValues: { confirmPassword: "", password: "" },
    validate: {
      password: (value) =>
        /^.*(?=.{13,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(value)
          ? null
          : "Password must contain at least 13 characters, one uppercase, one number",
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleSubmit = (values: FormValues) => {
    const { email } = values;
    mutate(
      { email },
      {
        onSuccess() {
          setOpened(true);
        },
        onError() {
          setLoginerror(true);
        },
      }
    );
  };

  const checkVerificationCode = () => {
    const { code, email } = values;
    verification.mutate(
      { code, email },
      {
        onSuccess(res) {
          setOpened(false);
          setVerificationKey(res.verification_key);
          setOpened2(true);
        },
        onError() {
          setErrors({ code: "Not valid code" });
        },
      }
    );
  };

  const handleResetPassword = (values: {
    password: string;
    confirmPassword: string;
  }) => {
    const { confirmPassword, password } = values;

    resetPassword.mutate(
      {
        confirm_password: confirmPassword,
        password,
        verification_key: verificationKey,
      },
      {
        onSuccess() {
          push("/signin");
        },
      }
    );
  };

  return (
    <>
      <Home1 />
      <Container size="sm">
        <Typography align="center" m="20px" variant="h3" component="h2">
          {t("forgot.h1")}
        </Typography>
        <form onSubmit={onSubmit(handleSubmit)}>
          {loginerror && (
            <Typography
              mt="20px"
              mb="20px"
              variant="subtitle2"
              // component="h2"
              color="red"
            >
              {t("forgot.incorrect")}
            </Typography>
          )}
          <InputWrapper label={t("forgot.email")}>
            <TextInput size="md" {...getInputProps("email")} />
          </InputWrapper>

          <Button
            loading={isLoading}
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type="submit"
            fullWidth
          >
            {t("forgot.send")}
          </Button>
          <div></div>
        </form>
      </Container>
      <Modal
        closeOnClickOutside={false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <InputWrapper label="Verification code">
          <TextInput size="md" {...getInputProps("code")} required />
        </InputWrapper>
        <Button
          loading={verification.isLoading}
          mt="md"
          fullWidth
          onClick={checkVerificationCode}
        >
          Verify
        </Button>
      </Modal>

      <Modal
        closeOnClickOutside={false}
        opened={opened2}
        onClose={() => setOpened2(false)}
      >
        <form onSubmit={resetPasswordfFields.onSubmit(handleResetPassword)}>
          <InputWrapper label={t("forgot.password")}>
            <TextInput
              size="md"
              {...resetPasswordfFields.getInputProps("password")}
              required
            />
          </InputWrapper>
          <InputWrapper label={t("forgot.confirm")}>
            <TextInput
              size="md"
              {...resetPasswordfFields.getInputProps("confirmPassword")}
              required
            />
          </InputWrapper>
          <Button
            loading={resetPassword.isLoading}
            type="submit"
            mt="md"
            fullWidth
          >
            {t("forgot.changepass")}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default ForgotPasswordPage;
