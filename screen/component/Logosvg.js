import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function TestSvg(){  
  const svgcode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="2500" height="2500"><path d="M1000 0C447.8 0 0 447.8 0 1000a993.26 993.26 0 0 0 51 315.8h299V474.4l650 650 650-650v841.4h299a999.82 999.82 0 0 0 51-315.8C2000 447.8 1552.2 0 1000 0" fill="#fa6800"/><path d="M850.6 1274L566.8 990.2v529.4H145.4C321 1807.6 638 2000 1000 2000s679-192.4 854.4-480.4H1433V990.2L1149.4 1274 1000 1423.4 850.6 1274z" fill="#4c4c4c"/></svg>`;
  const Svg = () => <SvgXml xml={svgcode} width="70" 
  height="70" />;  

  return <Svg />;}