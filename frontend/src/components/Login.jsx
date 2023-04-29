import styled from "@emotion/styled";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Box = styled(Paper)`
  margin: 20px auto;
  width: 300px;
  padding: 30px 20px;
`;

const Icon = styled(Avatar)`
  background-color: #1bbd7e;
`;

const Field = styled(TextField)`
  margine-bottom: 10px;
`;

const Btn = styled(Button)`
  margin-left: 90px;
`;
const text = { margin: 0 };

const Login = () => {
    return (
      <Grid>
        <Box elevation={20}>
          <Grid align="center">
            <Icon>
              <AccountCircleOutlinedIcon />
            </Icon>
            <h3 style={text}>Login</h3>
            <Typography variant="caption" gutterBottom>
              Provide Email Id and Password to login !
            </Typography>
          </Grid>
          <form>
        

            <Field
              id="standard-basic"
              label="Email Id"
              variant="standard"
              fullWidth
            />

           

            <Field
              id="standard-basic"
              label="Password"
              variant="standard"
              fullWidth
            />

            <Btn>
              <Button variant="contained">Submit</Button>
            </Btn>
          </form>
        </Box>
      </Grid>
    );
};

export default Login;
