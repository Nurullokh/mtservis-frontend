import React, { useState } from "react";
import Home1 from "../Home/HomeParts/Home1";
import { Container } from "@mantine/core";
import { Typography } from "@mui/material";
import { useForm } from "@mantine/form";
import { InputWrapper } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { useLogin } from "../../server-state/mutations/use-login";
import { useAuth } from "../../state/auth/auth.state";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface FormValues {
  email: string; // regular field, same as inferred type
  password: string; // values that may be undefined cannot be inferred
}

const SignInPage = () => {
  const { t, i18n } = useTranslation();

  const { push } = useHistory();
  const { mutate, isLoading } = useLogin();
  const [loginerror, setLoginerror] = useState(false);

  const {
    tokens: { access },
  } = useAuth();
  const isLogin = Boolean(access);
  if (isLogin) {
    push("/");
  }

  const { getInputProps, onSubmit, setErrors } = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length > 7 ? null : "Password is not valid"),
    },
  });
  const handleSubmit = (values: FormValues) => {
    const { email, password } = values;
    mutate(
      { email, password },
      {
        onSuccess() {
          push("/");
        },
        onError() {
          setLoginerror(true);
        },
      }
    );
  };
  return (
    <>
      <Home1 />
      <Container size="sm">
        <Typography align="center" m="20px" variant="h3" component="h2">
          {t("signin.h1")}
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
              {t("signin.incorrect")}
            </Typography>
          )}
          <InputWrapper label={t("signin.email")}>
            <TextInput size="md" {...getInputProps("email")} />
          </InputWrapper>
          <InputWrapper label={t("signin.password")}>
            <TextInput size="md" {...getInputProps("password")} />
          </InputWrapper>

          <Button
            loading={isLoading}
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type="submit"
            fullWidth
          >
            {t("signin.submit")}
          </Button>
          <div>
            <Typography
              align="center"
              m="20px"
              variant="caption"
              component="h2"
            >
              <Link to="/forgotpassword">{t("signin.forgot_pass")}</Link>
            </Typography>
          </div>
        </form>
      </Container>
    </>
  );
};

export default SignInPage;
