import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { formStateSelector } from "../store/selectors/storeSelectors";
import { Loader } from "@consta/uikit/Loader";

export default function Chart() {
  const formState = useSelector(formStateSelector);

  const getVlpData = () => {
    return formState.data && formState.data.vlp.q_liq && formState.data.vlp.p_wf
      ? formState.data.vlp.q_liq.reduce(
          (acc: string[][], item: string, index: number) => {
            formState.data && acc.push([item, formState.data.vlp.p_wf[index]]);
            return acc;
          },
          []
        )
      : [];
  };

  const getIprData = () => {
    return formState.data && formState.data.ipr.q_liq && formState.data.ipr.p_wf
      ? formState.data.ipr.q_liq.reduce(
          (acc: string[][], item: string, index: number) => {
            formState.data && acc.push([item, formState.data.ipr.p_wf[index]]);
            return acc;
          },
          []
        )
      : [];
  };

  const getPoint = () => {
    return formState.data && formState.data.point;
  };

  const newOptions = {
    chart: {
      type: "spline",
    },
    title: {
      text: "График узлового анализа",
    },

    xAxis: {
      reversed: false,
      maxPadding: 0.05,
      showLastLabel: true,
      title: {
        text: "Дебит жидкости, м3/cут",
      },
    },
    yAxis: {
      lineWidth: 4,
      title: {
        text: "Забойное давление, бар",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "Дебит жидкости : {point.x}, Забойное давление : {point.y}",
    },
    plotOptions: {
      spline: {
        marker: {
          enable: false,
        },
      },
    },
    series: [
      {
        name: "ИПР",
        data: getIprData(),
      },
      {
        name: "ВЛП",
        data: getVlpData(),
      },
      {
        name: "Режим работы",
        data: getPoint(),
      },
    ],
  };

  return (
    <div className="chart_content">
      {formState.loading ? (
        <Loader />
      ) : (
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={newOptions} />
        </div>
      )}
    </div>
  );
}
