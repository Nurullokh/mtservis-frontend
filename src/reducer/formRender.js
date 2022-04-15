import {
  dataUZ as avtoCraneUZ,
  dataRU as avtoCraneRU,
} from "../components/JSONS/AvtoKran";
import {
  dataUZ as cleaningUZ,
  dataRU as cleaningRU,
} from "../components/JSONS/Cleaning";
import {
  dataUZ as diggingUZ,
  dataRU as diggingRU,
} from "../components/JSONS/Digging";
import {
  dataUZ as electroUZ,
  dataRU as electroRU,
} from "../components/JSONS/Electro";
import {
  dataUZ as gardeningUZ,
  dataRU as gardeningRU,
} from "../components/JSONS/Gardening";
import {
  dataUZ as homeUZ,
  dataRU as homeRU,
} from "../components/JSONS/HomeAlliance";
import {
  dataUZ as networkUZ,
  dataRU as networkRU,
} from "../components/JSONS/Internet";
import {
  dataUZ as mebelUZ,
  dataRU as mebelRU,
} from "../components/JSONS/Mebel";
import {
  dataUZ as buildingUZ,
  dataRU as buildingRU,
} from "../components/JSONS/Qurilish";
import {
  dataUZ as plumbingUZ,
  dataRU as plumbingRU,
} from "../components/JSONS/Santexnika";
import {
  dataUZ as roofingUZ,
  dataRU as roofingRU,
} from "../components/JSONS/TomYopish";
import {
  dataUZ as shippingUZ,
  dataRU as shippingRU,
} from "../components/JSONS/YukTashish";

export const selectedFormReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_FORM_TYPE":
      switch (action.payload.name) {
        case "/home_app":
          return [homeUZ, homeRU];
        case "/cleaning":
          return [cleaningUZ, cleaningRU];
        case "/shipping":
          return [shippingUZ, shippingRU];
        case "/plumbing":
          return [plumbingUZ, plumbingRU];
        case "/electro":
          return [electroUZ, electroRU];
        case "/network":
          return [networkUZ, networkRU];
        case "/mebel":
          return [mebelUZ, mebelRU];
        case "/gardening":
          return [gardeningUZ, gardeningRU];
        case "/roofing":
          return [roofingUZ, roofingRU];
        case "/building":
          return [buildingUZ, buildingRU];
        case "/digging":
          return [diggingUZ, diggingRU];
        case "/autocrane":
          return [avtoCraneUZ, avtoCraneRU];

        default:
          return state;
      }
    default:
      return state;
  }
};
