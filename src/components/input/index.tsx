import { colors, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface IInput {
  error?: boolean;
  helperText?: string;
  label: string;
  register: UseFormRegister<any>;
  type: string;
}

const Input = ({ error, helperText, label, register, type }: IInput) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      color="secondary"
      type={type}
      sx={{
        mb: 3,
        "& fieldset": {
          borderColor: colors.deepPurple[500],
        },
        "& .MuiInputLabel-outlined": {
          color: colors.purple[100],
        },
        "& .MuiInputBase-input": {
          color: colors.purple[300],
        },
      }}
      fullWidth
      error={error}
      helperText={helperText}
      {...register}
    />
  );
};
export default Input;
