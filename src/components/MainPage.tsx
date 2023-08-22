import { Button } from "@consta/uikit/Button";

import Chart from "./Chart";
import { FC, useState } from "react";
import { FileField } from "@consta/uikit/FileField";
import { TextField } from "@consta/uikit/TextField";

type Props = {
  openSidebar: () => void;
};

export const MainPage: FC<Props> = ({ openSidebar }) => {
  const [value, setValue] = useState<string | null>(null);

  const onChange = (e: DragEvent | React.ChangeEvent) => {
    const targer = e?.target as HTMLInputElement;
    const files = targer?.files ? targer?.files : undefined;
    if (files) {
      const file = files[0];
      //отправить на бэк
    }
  };

  const handleChange = ({ value }: { value: string | null }) => setValue(value);

  return (
    <>
      <Chart />
      <div>
        <Button label="Ввести данные" onClick={openSidebar} />
        <div className="m-t-1">
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
        </div>
      </div>
    </>
  );
};
