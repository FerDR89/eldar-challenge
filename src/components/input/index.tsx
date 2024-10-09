import { colors, TextField } from "@mui/material";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IInput<T extends FieldValues> {
  error?: boolean;
  helperText?: string;
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  type: string;
  multiline?: boolean;
}

const Input = <T extends FieldValues>({
  error,
  helperText,
  label,
  register,
  type,
  name,
  multiline,
}: IInput<T>) => {
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
      multiline={multiline}
      {...register(name)}
    />
  );
};
export default Input;
