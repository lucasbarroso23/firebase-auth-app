import React, { useContext } from "react";
import { UserDataContext } from "../../context/UserDataContext";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as yup from "yup";

import "./Profile.css";

const Profile = () => {
  const { userData } = useContext(UserDataContext);
  console.log(userData);

  const emailSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  return (
    <div className="App">
      <Container maxWidth="sm" className="App-container">
        <Box className="app-box">
          <img className="profile-img" src={userData.photoURL} alt="MyPhoto" />
          <Typography variant="h4" gutterBottom>
            Bem vindo {userData.displayName}
          </Typography>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={emailSchema}
            onSubmit={() => console.log("email enviado")}
          >
            <Form>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="name"
                  component={TextField}
                  label="Name"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="email"
                  component={TextField}
                  label="Email"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="message"
                  component={TextField}
                  label="Message"
                />
              </Box>
              <Button color="primary" variant="contained" type="submit">
                Enviar
              </Button>
            </Form>
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
