import { Button } from "@consta/uikit/Button";

import Chart from "./Chart";
import { FC, useState } from "react";
import { FileField } from "@consta/uikit/FileField";
import { TextField } from "@consta/uikit/TextField";
import { useSelector } from "react-redux";
import { formStateSelector } from "../store/selectors/storeSelectors";

type Props = {
  openSidebar: () => void;
};

export const MainPage: FC<Props> = ({ openSidebar }) => {
  // const [value, setValue] = useState<string | null>(null);
  const formState = useSelector(formStateSelector);

  // const onChange = (e: DragEvent | React.ChangeEvent) => {
  //   const targer = e?.target as HTMLInputElement;
  //   const files = targer?.files ? targer?.files : undefined;
  //   if (files) {
  //     const file = files[0];
  //   }
  // };

  // const handleChange = ({ value }: { value: string | null }) => setValue(value);

  return (
    <>
      <Chart />
      <div>
        <Button label="Ввести данные" onClick={openSidebar} />
        {formState.data && formState.data.prom_data && (
          <div className="prom_data">
            <TextField
              className="m-t-1"
              value={
                formState.data.prom_data[formState.data.prom_data.length - 1][0]
              }
              type="text"
              placeholder={"Плотность смеси"}
              width="full"
              rightSide={"кг/м3"}
              labelPosition="top"
              label={"Плотность смеси"}
              disabled={true}
            />
            <TextField
              className="m-t-1"
              value={
                formState.data.prom_data[formState.data.prom_data.length - 1][1]
              }
              type="text"
              placeholder={"nu"}
              width="full"
              rightSide={"сП"}
              labelPosition="top"
              label={"Вязкость смеси"}
              disabled={true}
            />
            <TextField
              className="m-t-1"
              value={
                formState.data.prom_data[formState.data.prom_data.length - 1][2]
              }
              type="text"
              placeholder={"p"}
              width="full"
              rightSide={"м3/с"}
              labelPosition="top"
              label={"Расход смеси"}
              disabled={true}
            />
          </div>
        )}
        {/* <div className="m-t-1">
          <FileField id={"loader_project"} onChange={onChange}>
            {(props) => (
              <Button
                id={"btn"}
                {...props}
                className="m-l-1"
                label={"Загрузить"}
                view={"secondary"}
              />
            )}
          </FileField>
          <TextField
            onChange={handleChange}
            value={value}
            type="number"
            min={0}
            max={20}
            step={5}
            placeholder="Топ скважин"
            className="m-l-1"
          />
        </div> */}
      </div>
    </>
  );
};
