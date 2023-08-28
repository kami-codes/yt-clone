import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import {logo} from "../utils/constants"
import {SearchBar} from "."

const Navbar = () => (
<Stack p={2} sx={{background: "#000", justifyContent: "space-between", position: "sticky", top: "0px"}}
direction="row"
alignItems="center"
>

  <Link to="/" style={{alignItems: "center", display: "flex"}}>
<img src={logo} alt="home" height={45} />
  </Link>
<SearchBar />


</Stack>
)

export default Navbar
