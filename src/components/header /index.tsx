import { useNavigate } from "react-router-dom";
import { Button, colors, Stack, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { logout, selectAuth } from "../../redux/slices/auth";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(selectAuth);

  const onLogOut = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py="15px"
    >
      <Typography variant="h6" color="primary">
        Eldar Challenge
      </Typography>

      {isAuthenticated && (
        <Button
          variant="outlined"
          size="small"
          endIcon={<LogoutIcon />}
          sx={{ color: colors.grey[500] }}
          onClick={onLogOut}
        >
          Salir
        </Button>
      )}
    </Stack>
  );
};
export default Header;
