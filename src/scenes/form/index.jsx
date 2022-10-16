import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box paddingLeft={2} marginRight={2}>
      <Header title="Form" subtitle="Manage your forms" />
    </Box>
  )
}

export default Form