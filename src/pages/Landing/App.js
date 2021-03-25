import "./App.css";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import { Container, Button, Box, Typography } from "@material-ui/core";
import {Facebook, GitHub, Mail, } from '@material-ui/icons'

function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
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
