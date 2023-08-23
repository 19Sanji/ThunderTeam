import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { TextField, TextFieldPropValue } from "@consta/uikit/TextField";
import { Text } from "@consta/uikit/Text";
import "../index.css";
import { Metrics, Names } from "../common";
import { FC } from "react";
import { formStateSelector } from "../store/selectors/storeSelectors";
import {
  writeGammaGasAction,
  writeGammaOilAction,
  writeGammaWatAction,
  writeGeoGradAction,
  writeHMesAction,
  writeHResAction,
  writePWhAction,
  writeRpAction,
  writeTResAction,
  writeTubingDAction,
  writeCasingDAction,
  writeWctAction,
  writeTVDAction,
  writeMDAction,
  writePResAction,
  writePiAction,
} from "../store/actions/formActions";

type Props = {};

export const Form: FC<Props> = () => {
  const formState = useSelector(formStateSelector);
  const dispatch = useAppDispatch();

  const getValue = (value: string | null): string | undefined => {
    return value === null ? undefined : String(value);
  };

  return (
    <div className="full-size p-1">
      <div className="title">
        <Text size="2xl">Введите данные</Text>
      </div>
      <div className="p-b-1">
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeWctAction(value));
          }}
          value={getValue(formState.pvt.wct)}
          type="text"
          placeholder={Names.wct}
          width="full"
          rightSide={Metrics.wct}
          labelPosition="top"
          label={Names.wct}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeGammaOilAction(value));
          }}
          value={getValue(formState.pvt.gamma_oil)}
          type="text"
          placeholder={Names.gamma_oil}
          width="full"
          // max={1}
          // min={0.5}
          rightSide={Metrics.gamma_oil}
          labelPosition="top"
          label={Names.gamma_oil}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeGammaGasAction(value));
          }}
          value={getValue(formState.pvt.gamma_gas)}
          type="text"
          placeholder={Names.gamma_gas}
          width="full"
          rightSide={Metrics.gamma_gas}
          labelPosition="top"
          label={Names.gamma_gas}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeGammaWatAction(value));
          }}
          value={getValue(formState.pvt.gamma_wat)}
          type="text"
          placeholder={Names.gamma_wat}
          width="full"
          rightSide={Metrics.gamma_wat}
          labelPosition="top"
          label={Names.gamma_wat}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeTResAction(value));
          }}
          value={getValue(formState.pvt.t_res)}
          type="text"
          placeholder={Names.t_res}
          width="full"
          max={263}
          min={20}
          rightSide={Metrics.t_res}
          labelPosition="top"
          label={Names.t_res}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeGeoGradAction(value));
          }}
          value={getValue(formState.geo_grad)}
          type="text"
          placeholder={Names.geo_grad}
          width="full"
          rightSide={Metrics.geo_grad}
          labelPosition="top"
          label={Names.geo_grad}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writePWhAction(value));
          }}
          value={getValue(formState.p_wh)}
          type="text"
          placeholder={Names.p_wh}
          width="full"
          rightSide={Metrics.p_wh}
          labelPosition="top"
          label={Names.p_wh}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeRpAction(value));
          }}
          value={getValue(formState.pvt.rp)}
          type="text"
          placeholder={Names.rp}
          width="full"
          max={400}
          min={50}
          rightSide={Metrics.rp}
          labelPosition="top"
          label={Names.rp}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeCasingDAction(value));
          }}
          value={getValue(formState.casing.casing_d)}
          type="text"
          placeholder={Names.casing_d}
          width="full"
          rightSide={Metrics.casing_d}
          labelPosition="top"
          label={Names.casing_d}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeTubingDAction(value));
          }}
          value={getValue(formState.tubing.tubing_d)}
          type="text"
          placeholder={Names.tubing_d}
          width="full"
          rightSide={Metrics.tubing_d}
          labelPosition="top"
          label={Names.tubing_d}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeHResAction(value));
          }}
          value={getValue(formState.h_res)}
          type="text"
          placeholder={Names.h_res}
          width="full"
          rightSide={Metrics.h_res}
          labelPosition="top"
          label={Names.h_res}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeHMesAction(value));
          }}
          value={getValue(formState.tubing.h_mes)}
          type="text"
          placeholder={Names.h_mes}
          width="full"
          rightSide={Metrics.h_mes}
          labelPosition="top"
          label={Names.h_mes}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writePResAction(value));
          }}
          value={getValue(formState.p_res)}
          type="text"
          placeholder={Names.p_res}
          width="full"
          rightSide={Metrics.p_res}
          labelPosition="top"
          label={Names.p_res}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writePiAction(value));
          }}
          value={getValue(formState.pi)}
          type="text"
          placeholder={Names.pi}
          width="full"
          rightSide={Metrics.pi}
          labelPosition="top"
          label={Names.pi}
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeMDAction(value));
          }}
          value={getValue(formState.inclinometry.MD)}
          type="text"
          placeholder={Names.MD}
          width="full"
          rightSide={Metrics.MD}
          labelPosition="top"
          label={Names.MD}
          caption="Введите 3 значения через запятую"
        />
        <TextField
          className="m-t-1"
          onChange={({ value }) => {
            dispatch(writeTVDAction(value));
          }}
          value={getValue(formState.inclinometry.TVD)}
          type="text"
          placeholder={Names.TVD}
          width="full"
          rightSide={Metrics.TVD}
          labelPosition="top"
          label={Names.TVD}
          caption="Введите 3 значения через запятую"
        />
      </div>
    </div>
  );
};
