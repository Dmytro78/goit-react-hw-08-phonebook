import { Button } from "@mui/material";
import { Box } from "@mui/system";


export default function AuthNav() {
    return (
        <Box>
        <Button href="/login" exact color="inherit" variant="outlined">Log In</Button>
        <Button href="/register" exact color="inherit" variant="outlined" sx={{ ml: 3 }}>Register</Button>
        </Box>
    )
}
