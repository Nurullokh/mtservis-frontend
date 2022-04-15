import React, { useState } from "react";
import { Avatar, Container } from "@mantine/core";
import Home1 from "../Home/HomeParts/Home1";
import { Button } from "@mantine/core";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { InputWrapper } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../state/auth/auth.state";
import { useHistory } from "react-router-dom";
import { Autocomplete } from "@mantine/core";
import { Loader } from "@mantine/core";

import {
  RegionInterface,
  regions,
} from "../../server-state/mutations/use-register";
import { useUpload } from "../../server-state/mutations/use-upload";
import { UserProfile } from "../../server-state/queries/use-get-profile";
import { useUpdateProfile } from "../../server-state/mutations/use-update-profile";
import { setStorage } from "../../utils/local-storage";

const Input = styled("input")({
  display: "none",
});

interface FormValue extends RegionInterface {
  fName: string;
  lName: string;
  phone: string;
  city: string;
  profile_image_id: number;
  street: string;
}

const EditProfilePage = () => {
  const { state } = useLocation<UserProfile>();
  const upload = useUpload();
  const updateProfile = useUpdateProfile();
  const [mediaUrl, setMediaUrl] = useState(state.profile_image.file);

  const { push } = useHistory();

  const {
    tokens: { access },
  } = useAuth();
  const isLogin = Boolean(access);
  if (!isLogin) {
    push("/");
  }
  const { getInputProps, onSubmit, values, setValues } = useForm<FormValue>({
    initialValues: {
      city: state.city,
      fName: state.first_name,
      lName: state.last_name,
      phone: state.phone_number,
      profile_image_id: state.profile_image.id,
      region: state.region,
      street: state.street,
    },

    validate: {
      fName: (value) => (value.length > 3 ? null : "First name is too small"),
      lName: (value) => (value.length > 3 ? null : "First name is too small"),
      phone: (value) =>
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/.test(
          value
        )
          ? null
          : "This number does not exist or is not a valid format please try entering number again. ",
      city: (value) =>
        value.length > 5 ? null : "Please enter full name of city",
      street: (value) =>
        value.length > 5 ? null : "Please enter full name of street",
    },
  });

  const handleSubmit = (values: FormValue) => {
    updateProfile.mutate(
      {
        city: values.city,
        first_name: values.fName,
        last_name: values.lName,
        phone_number: values.phone,
        profile_image: values.profile_image_id,
        region: values.region,
        street: values.street,
        zip_code: "",
      },
      {
        onSuccess(res) {
          setStorage("lastName", res.last_name);
          setStorage("firstName", res.first_name);
        },
      }
    );
  };

  const handleUpload = (file: File) => {
    setMediaUrl(URL.createObjectURL(file));

    upload.mutate(
      { file },
      {
        onSuccess(res) {
          setValues({ ...values, profile_image_id: res.id });
        },
        onError() {
          setMediaUrl("");
        },
      }
    );
  };
  return (
    <>
      <Home1 />

      <Container size="sm">
        <Typography align="center" m="20px" variant="h3" component="h2">
          Edit Profile
        </Typography>
        <form onSubmit={onSubmit(handleSubmit)}>
          <label htmlFor="icon-button-file">
            <Typography mt="20px" variant="body1" component="h2">
              Profile picture
            </Typography>
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => {
                e.target.files &&
                  e.target.files.length > 0 &&
                  handleUpload(e.target.files[0]);
              }}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          {mediaUrl && (
            <div style={{ position: "relative", width: "min-content" }}>
              {upload.isLoading && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    zIndex: "10",
                    transform: "translate(-50%,-50%",
                  }}
                >
                  <Loader size="md" />
                </div>
              )}

              <Avatar size="xl" src={mediaUrl} />
            </div>
          )}

          <InputWrapper required label="First Name">
            <TextInput size="md" {...getInputProps("fName")} />
          </InputWrapper>
          <InputWrapper required label="Last Name">
            <TextInput size="md" {...getInputProps("lName")} />
          </InputWrapper>
          <InputWrapper required label="Phone">
            <TextInput size="md" {...getInputProps("phone")} />
          </InputWrapper>
          <Autocomplete
            size="md"
            label="Region"
            placeholder="Pick one"
            data={regions}
            {...getInputProps("region")}
          />
          <InputWrapper label="City">
            <TextInput size="md" {...getInputProps("city")} />
          </InputWrapper>
          <InputWrapper label="Street">
            <TextInput size="md" {...getInputProps("street")} />
          </InputWrapper>
          <Button
            disabled={!mediaUrl}
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type="submit"
            fullWidth
          >
            Edit profile
          </Button>
        </form>
        <div>
          <Typography align="center" m="20px" variant="caption" component="h2">
            Already have an account?
            <Link to="/signin">Signin</Link>
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default EditProfilePage;
