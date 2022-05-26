import { forwardRef, useState } from "react";
import { AppProvider } from "./context/AppContext";
import { statuses } from "./statuses";
import { Settings, UpdatableProps } from "./types";
import Container from "./components/Container";

function App(
  { props }: { props: { settings: Settings; container: HTMLElement } },
  ref: any
) {
  const [status, setStatus] = useState<string>(statuses.COMPLETED);

  const updateProps = (values: UpdatableProps) => {
    if (values.status) {
      setStatus(values.status);
    }
  };

  ref.current = {
    container: props.container,
    statuses,
    updateProps,
  };

  return (
    <AppProvider
      value={{
        status,
      }}
    >
      <Container />
    </AppProvider>
  );
}

export default forwardRef(App);
