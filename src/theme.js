import { createContext , useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            grey: {
                900: "#141414",
                800: "#292929",
                700: "#3d3d3d",
                600: "#525252",
                500: "#666666",
                400: "#858585",
                300: "#a3a3a3",
                200: "#c2c2c2",
                100: "#e0e0e0",
            },
            primary: {
                900: "#040509",
                800: "#080b11",
                700: "#0c101a",
                600: "#101622",
                500: "#141b2b",
                400: "#434955",
                300: "#727680",
                200: "#a1a4aa",
                100: "#d0d1d5",
            },
            greenAccent: {
                900: "#0f2922",
                800: "#1e5245",
                700: "#2e7c67",
                600: "#3da58a",
                500: "#4cceac",
                400: "#70d8bd",
                300: "#94e2cd",
                200: "#b7ebde",
                100: "#dbf5ee",
            },
            redAccent: {
                900: "#2c3132",
                800: "#586264",
                700: "#839296",
                600: "#afc3c8",
                500: "#dbf4fa",
                400: "#e2f6fb",
                300: "#e9f8fc",
                200: "#f1fbfd",
                100: "#f8fdfe",
            },
            blueAccent: {
                900: "#151632",
                800: "#2a2d64",
                700: "#3e4396",
                600: "#535ac8",
                500: "#6870fa",
                400: "#868dfb",
                300: "#a4a9fc",
                200: "#c3c6fd",
                100: "#e1e2fe",
            },
            
        } : {}),
})
