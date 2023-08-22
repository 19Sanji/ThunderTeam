import { formSlice } from "../slices/formSlice";
import { AppDispatch } from "../store";

export const writeHResAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeHRes(value));

export const writeGeoGradAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeGeoGrad(value));

export const writePWhAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writePWh(value));

export const writeTResAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeTRes(value));

export const writeGammaWatAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeGammaWat(value));

export const writeGammaGasAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeGammaGas(value));

export const writeGammaOilAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeGammaOil(value));

export const writeRpAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeRp(value));

export const writeWctAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeWct(value));

export const writeHMesAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeHMes(value));

export const writeCasingDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeCasingD(value));

export const writeTubingDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeTubingD(value));

export const writeTVDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeTVD(value));

export const writeMDAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writeMD(value));

export const writePResAction =
  (value: string | null) => (dispatch: AppDispatch) =>
    dispatch(formSlice.actions.writePRes(value));
