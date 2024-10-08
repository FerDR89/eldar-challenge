import { colors, Link, Stack, Typography } from "@mui/material";

const Foooter = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="body1" color="primary" mr={1}>
        Resources:
      </Typography>

      <Link
        href="
        https://jsonplaceholder.typicode.com/guide/"
        target="_blank"
        rel="noopener"
        underline="none"
        variant="caption"
        sx={{
          color: colors.grey[500],
          mt: "0.125rem",
        }}
      >
        JSONPlaceholder
      </Link>
    </Stack>
  );
};
export default Foooter;
