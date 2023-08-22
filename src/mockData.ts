const vlp = {
  q_liq: [0, 66.67, 133.33, 200, 266.67, 333.33, 400],
  p_wf: [36.58, 37.26, 38.94, 41.42, 44.55, 48.16, 52.15],
};

const ipr = {
  q_liq: [
    190.0446738744384, 187.46046182072422, 184.87624976701005,
    182.12243886015682, 177.57083329326997, 171.26580712037182, 163.59504945642,
    154.8214808983079, 145.1331376002457, 134.6700119019678, 123.53966094072084,
    111.82684391052348, 99.60000000000002, 87.15, 74.70000000000002, 62.25,
    49.80000000000001, 37.35000000000002, 24.900000000000006,
    12.450000000000017, 0,
  ],
  p_wf: [
    1, 13.45, 25.9, 38.349999999999994, 50.8, 63.25, 75.69999999999999,
    88.14999999999999, 100.6, 113.05, 125.5, 137.95, 150.39999999999998, 162.85,
    175.29999999999998, 187.75, 200.2, 212.64999999999998, 225.1,
    237.54999999999998, 250,
  ],
};

const point = [[150, 150]];

export const mockData = {
  vlp,
  ipr,
  point,
};