import { SWRConfig } from "swr";
import { swrConfig } from "./swr.config";

interface IProps {
  children: React.ReactNode;
}

function Providers(props: IProps) {
  return <SWRConfig value={swrConfig}>{props.children}</SWRConfig>;
}

export default Providers;
