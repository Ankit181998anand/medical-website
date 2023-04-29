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
const Home = () => {
    return (
      <Grid>
        <Box elevation={20}>
          <Grid align="center">
            <Icon>
              <AccountCircleOutlinedIcon />
            </Icon>
            <h3 style={text}>Enquary</h3>
            <Typography variant="caption" gutterBottom>
              Provide the code to view details  !
            </Typography>
          </Grid>
          <form>
            <Field
              id="standard-basic"
              label="Unique Code"
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

export default Home;
