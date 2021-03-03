import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base de cores
    primary: "#070D2D", //fundo escuro
    secondary: "#FE5430", // roxo

    //cores
    black: "#1E1F20",
    white: "#F7F7FE",
    lightGray: "#E0E0E0", //O cinza para algumas palavras
    lightGray2: "#EFEFF0",
    boderCar: "#35334E", //Borda dos carrossel 
    gray: "#BEC1D2",
    blue: "#42B0FF",
    darkGray: "#898C95",
    darkgreen: "#FE5430",
    transparentLightGray: '#CCD4D5D6',
    transparentLightGray1: "rgba(255,255,255,0.7)",
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    
    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    //dimensocoes do app
    width,
    height
}

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};



const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;