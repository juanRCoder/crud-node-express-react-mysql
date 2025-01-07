import { Typography } from "@mui/material";
import Users from "../components/Users";

export default function UserLayout() {
  return (
    <>
      <Typography variant="h4" component="h1" align="right" className="w-auto" sx={{mx: "2rem", mt: "2rem"}}>
        CRUD-NODE-REACT-MYSQL
      </Typography>
      <Users />
    </>
  )
}
