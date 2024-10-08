import { TRoles } from "../interfaces/roles";

export const CAN_EDIT_FORM: TRoles[] = ["admin"];

export const FEED_BACK_VALIDATION = Object.freeze({
  required: "Este campo es requerido",
  validName: "Este campo no acepta caracteres especiales y/o números",
  validPassword:
    "Debes ingresar al menos una mayúscula, un carácter especial y un número",
  minNameCharacters: "Debes ingresar al menos dos caracteres",
  minPasswordCharacters: "Debes ingresar al menos ocho caracteres",
  maxCharacters: "Debes ingresar menos de veinte caracteres",
});
