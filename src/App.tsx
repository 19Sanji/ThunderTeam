import { useEffect, useState } from "react";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { Sidebar } from "@consta/uikit/Sidebar";
import { Button } from "@consta/uikit/Button";

import { Form } from "./components/Form";
import { useSelector } from "react-redux";
import { formStateSelector } from "./store/selectors/storeSelectors";
import { useAppDispatch } from "./store/store";

import { mockData } from "./mockData";
import {
  setLoadingAction,
  setDataAction,
  clearAllMetrics,
} from "./store/actions/formActions";
import axios from "axios";

type dataType = {
  inclinometry: {
    MD: string | string[] | null;
    TVD: string | string[] | null;
  };
  casing: {
    casing_d: string | null;
  };
  tubing: {
    tubing_d: string | null;
    h_mes: string | null;
  };
  pvt: {
    wct: string | null;
    rp: string | null;
    gamma_oil: string | null;
    gamma_gas: string | null;
    gamma_wat: string | null;
    t_res: string | null;
  };
  p_wh: string | null;
  geo_grad: string | null;
  h_res: string | null;
  pi: string | null;
  p_res: string | null;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const formState = useSelector(formStateSelector);
  const dispatch = useAppDispatch();

  const openSidebar = () => {
    dispatch(clearAllMetrics());
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    dispatch(clearAllMetrics());
    setIsSaveButtonDisabled(true);
    setIsSidebarOpen(false);
  };

  async function sendData(data: dataType) {
    dispatch(setLoadingAction(true));
    // setTimeout(() => {
    //   dispatch(setDataAction(mockData));
    //   dispatch(setLoadingAction(false));
    // }, 5000);

    await axios
      .post("http://localhost:8080", data)
      .then(function (response) {
        dispatch(setDataAction(response));
        dispatch(setLoadingAction(false));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onSave = () => {
    const data: dataType = {
      inclinometry: {
        MD: null,
        TVD: null,
      },
      casing: {
        casing_d: null,
      },
      tubing: {
        tubing_d: null,
        h_mes: null,
      },
      pvt: {
        wct: null,
        rp: null,
        gamma_oil: null,
        gamma_gas: null,
        gamma_wat: null,
        t_res: null,
      },
      p_wh: null,
      geo_grad: null,
      h_res: null,
      pi: null,
      p_res: null,
    };
    data.inclinometry.MD =
      formState.inclinometry.MD && formState.inclinometry.MD.split(",");
    data.inclinometry.TVD =
      formState.inclinometry.TVD && formState.inclinometry.TVD.split(",");
    data.casing.casing_d = formState.casing.casing_d;
    data.tubing.tubing_d = formState.tubing.tubing_d;
    data.tubing.h_mes = formState.tubing.h_mes;
    data.pvt.wct = formState.pvt.wct;
    data.pvt.rp = formState.pvt.rp;
    data.pvt.gamma_oil = formState.pvt.gamma_oil;
    data.pvt.gamma_gas = formState.pvt.gamma_gas;
    data.pvt.gamma_wat = formState.pvt.gamma_wat;
    data.pvt.t_res = formState.pvt.t_res;
    data.p_wh = formState.p_wh;
    data.geo_grad = formState.geo_grad;
    data.h_res = formState.h_res;
    data.pi = formState.pi;
    data.p_res = formState.p_res;

    sendData(data);
    closeSidebar();
  };

  useEffect(() => {
    if (
      formState.casing.casing_d !== null &&
      formState.geo_grad !== null &&
      formState.h_res !== null &&
      formState.inclinometry.MD !== null &&
      formState.inclinometry.TVD !== null &&
      formState.p_wh !== null &&
      formState.pvt.gamma_gas !== null &&
      formState.pvt.gamma_oil !== null &&
      formState.pvt.gamma_wat !== null &&
      formState.pvt.rp !== null &&
      formState.pvt.t_res !== null &&
      formState.tubing.h_mes !== null &&
      formState.tubing.tubing_d !== null &&
      formState.p_res !== null
    ) {
      setIsSaveButtonDisabled(false);
    }
  }, [formState]);

  return (
    <div className="App">
      <MainPage openSidebar={openSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickOutside={closeSidebar}
        onEsc={closeSidebar}
        size="1/2"
      >
        <Sidebar.Content className="sidebar_content">
          <Form />
        </Sidebar.Content>
        <Sidebar.Actions className="sidebar_footer_actions">
          <Button
            size="m"
            view="primary"
            label="Сделать прогноз"
            width="default"
            onClick={onSave}
            // disabled={isSaveButtonDisabled}
          />
          <Button
            size="m"
            view="ghost"
            label="Закрыть"
            width="default"
            onClick={closeSidebar}
          />
        </Sidebar.Actions>
      </Sidebar>
    </div>
  );
}

export default App;
