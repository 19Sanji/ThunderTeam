import { FormState } from "../slices/formSlice";
import { RootState } from "../store";

export const formStateSelector = (state: RootState): FormState => state.form;
