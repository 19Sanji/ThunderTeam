import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Chart() {
  const vlp = {
    q_liq: [0, 66.67, 133.33, 200, 266.67, 333.33, 400],
    p_wf: [
      37.66, 541807237.74, 2167137688.78, 4875987788.67, 8668373644.15,
      13544272194.46, 19503674136.19,
    ],
  };

  const getVlpData = () => {
    return vlp.q_liq.reduce((acc: number[][], item, index) => {
      acc.push([item, vlp.p_wf[index]]);
      return acc;
    }, []);
  };

  const ipr = {
    q_liq: [
      190.0446738744384, 187.46046182072422, 184.87624976701005,
      182.12243886015682, 177.57083329326997, 171.26580712037182,
      163.59504945642, 154.8214808983079, 145.1331376002457, 134.6700119019678,
      123.53966094072084, 111.82684391052348, 99.60000000000002, 87.15,
      74.70000000000002, 62.25, 49.80000000000001, 37.35000000000002,
      24.900000000000006, 12.450000000000017, 0,
    ],
    p_wf: [
      1, 13.45, 25.9, 38.349999999999994, 50.8, 63.25, 75.69999999999999,
      88.14999999999999, 100.6, 113.05, 125.5, 137.95, 150.39999999999998,
      162.85, 175.29999999999998, 187.75, 200.2, 212.64999999999998, 225.1,
      237.54999999999998, 250,
    ],
  };

  // const iprData = [
  //   [190.0446738744384, 1],
  //   [187.46046182072422, 13.45],
  //   [184.87624976701005, 25.9],
  //   [182.12243886015682, 38.349999999999994],
  //   [177.57083329326997, 50.8],
  //   [171.26580712037182, 63.25],
  //   [163.59504945642, 75.69999999999999],
  //   [154.8214808983079, 88.14999999999999],
  //   [145.1331376002457, 100.6],
  //   [134.6700119019678, 113.05],
  //   [123.53966094072084, 125.5],
  //   [111.82684391052348, 137.95],
  //   [99.600000000000027, 150.39999999999998],
  //   [74.70000000000002, 162.85],
  //   [49.80000000000001, 175.29999999999998],
  //   [37.35000000000002, 187.75],
  //   [24.900000000000006, 200.2],
  //   [12.450000000000017, 212.64999999999998],
  // ];

  // const vlpData = [
  //   [1, 6],
  //   [2, 5],
  //   [3, 4],
  //   [4, 3],
  //   [5, 2],
  //   [6, 1],
  //   [150, 200],
  //   [160, 210],
  // ];

  const point = [[120.0446738744384, 130]];

  const getIprData = () => {
    return ipr.q_liq.reduce((acc: number[][], item, index) => {
      acc.push([item, ipr.p_wf[index]]);
      return acc;
    }, []);
  };

  console.log("getVlpData", getVlpData());
  console.log("getIprData", getIprData());

  const newOptions = {
    chart: {
      type: "spline",
      // inverted: true,
    },
    title: {
      text: "Atmosphere Temperature by Altitude",
      align: "left",
    },

    xAxis: {
      reversed: false,
      maxPadding: 0.05,
      showLastLabel: true,
    },
    yAxis: {
      lineWidth: 4,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x}, {point.y}",
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
        name: "Точка",
        data: point,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={newOptions} />
    </div>
  );
}
