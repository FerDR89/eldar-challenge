import { useNavigate } from "react-router-dom";
import { Button, colors, Stack, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { logout, selectAuth } from "../../redux/slices/auth";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h6" color="primary">
        Eldar Challenge
      </Typography>

      {isAuthenticated && (
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          endIcon={<LogoutIcon />}
          sx={{ color: colors.grey[500] }}
          onClick={handleLogout}
        >
          Salir
        </Button>
      )}
    </Stack>
  );
};
export default Header;
