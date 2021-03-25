import "./App.css";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import { Container, Button, Box, Typography } from "@material-ui/core";
import { Facebook, GitHub, Mail } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../../context/UserDataContext";

function App() {
  const history = useHistory();
  const { setUserData } = useContext(UserDataContext);

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    setUserData(res);
    history.push("/profile");
  };

  return (
    <div className="App">
      <Container maxWidth="sm" className="App-container">
        <Box className="app-box">
          <Typography variant="h4" gutterBottom>
            Social Media Login
          </Typography>
          <Button
            startIcon={<Facebook />}
            color="primary"
            variant="contained"
            onClick={() => handleOnClick(facebookProvider)}
          >
            Facebook
          </Button>
          <Button
            startIcon={<GitHub />}
            variant="contained"
            onClick={() => handleOnClick(githubProvider)}
          >
            Github
          </Button>
          <Button
            startIcon={<Mail />}
            color="secondary"
            variant="contained"
            onClick={() => handleOnClick(googleProvider)}
          >
            Google
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
