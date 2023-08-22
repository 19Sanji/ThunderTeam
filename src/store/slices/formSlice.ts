import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  inclinometry: {
    MD: string | null;
    TVD: string | null;
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

  loading: boolean;
  data: any;
}

const initialState: FormState = {
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

  loading: false,
  data: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // Inclinometry
    writeMD: (state, action: PayloadAction<string | null>) => {
      state.inclinometry.MD = action.payload;
    },
    writeTVD: (state, action: PayloadAction<string | null>) => {
      console.log(action.payload);
      state.inclinometry.TVD = action.payload;
    },

    //Casing
    writeCasingD: (state, action: PayloadAction<string | null>) => {
      state.casing.casing_d = action.payload;
    },

    // Tubing
    writeTubingD: (state, action: PayloadAction<string | null>) => {
      state.tubing.tubing_d = action.payload;
    },
    writeHMes: (state, action: PayloadAction<string | null>) => {
      state.tubing.h_mes = action.payload;
    },

    //PVT
    writeWct: (state, action: PayloadAction<string | null>) => {
      state.pvt.wct = action.payload;
    },
    writeRp: (state, action: PayloadAction<string | null>) => {
      state.pvt.rp = action.payload;
    },
    writeGammaOil: (state, action: PayloadAction<string | null>) => {
      state.pvt.gamma_oil = action.payload;
    },
    writeGammaGas: (state, action: PayloadAction<string | null>) => {
      state.pvt.gamma_gas = action.payload;
    },
    writeGammaWat: (state, action: PayloadAction<string | null>) => {
      state.pvt.gamma_wat = action.payload;
    },
    writeTRes: (state, action: PayloadAction<string | null>) => {
      state.pvt.t_res = action.payload;
    },

    //p_wh
    writePWh: (state, action: PayloadAction<string | null>) => {
      state.p_wh = action.payload;
    },

    //geo_grad
    writeGeoGrad: (state, action: PayloadAction<string | null>) => {
      state.geo_grad = action.payload;
    },

    //h_res
    writeHRes: (state, action: PayloadAction<string | null>) => {
      state.h_res = action.payload;
    },

    //pi
    writePi: (state, action: PayloadAction<string | null>) => {
      state.pi = action.payload;
    },

    //p_res
    writePRes: (state, action: PayloadAction<string | null>) => {
      state.p_res = action.payload;
    },

    clearAllMetrics: (state) => {
      state.inclinometry.MD = null;
      state.inclinometry.TVD = null;
      state.casing.casing_d = null;
      state.tubing.tubing_d = null;
      state.tubing.h_mes = null;
      state.pvt.wct = null;
      state.pvt.rp = null;
      state.pvt.gamma_oil = null;
      state.pvt.gamma_gas = null;
      state.pvt.gamma_wat = null;
      state.pvt.t_res = null;
      state.p_wh = null;
      state.geo_grad = null;
      state.h_res = null;
      state.pi = null;
      state.p_res = null;
    },

    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    checkMetrics: (state) => {},
  },
});

export const {
  writeHRes,
  writeGeoGrad,
  writePWh,
  writeTRes,
  writeGammaWat,
  writeGammaGas,
  writeGammaOil,
  writeRp,
  writeWct,
  writeHMes,
  writeCasingD,
  writeTubingD,
  writeTVD,
  writeMD,
  writePi,
  writePRes,
  clearAllMetrics,
  checkMetrics,
  setData,
  setLoading,
} = formSlice.actions;

export default formSlice.reducer;
