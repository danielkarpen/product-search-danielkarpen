import Tbody from "./body";
import Thead from "./head";

export default () => `<table>${Thead()} ${Tbody()}</table>`;
