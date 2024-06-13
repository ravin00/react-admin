import { createContext , useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            indigo: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            black: {
                100: "#d0d1d5",
                200: "#a1a4aa",
                300: "#727680",
                400: "#434955",
                500: "#141b2b",
                600: "#101622",
                700: "#0c101a",
                800: "#080b11",
                900: "#040509"
            },
            green: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#4cceac",
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922"
            },
            white: {
                100: "#f8fdfe",
                200: "#f1fbfd",
                300: "#e9f8fc",
                400: "#e2f6fb",
                500: "#dbf4fa",
                600: "#afc3c8",
                700: "#839296",
                800: "#586264",
                900: "#2c3132"
            },
            indigo: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632"
            },
            
        } : {}),
})
