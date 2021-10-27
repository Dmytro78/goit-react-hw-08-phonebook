import { Typography } from "@mui/material"

export default function HomeView() {
  return (
    <>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1, mt:15 }}>
        Welcome Phonebook! Please log in.
      </Typography>
    </>
  );
}
