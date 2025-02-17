import { useState } from "react";
import { NoContent } from "./components/NoContent";
import { YesContent } from "./components/YesContent";
import { ButtonsSection } from "./components/ButtonsSection";

export default function App() {
  const [noCount, setNoCount] = useState<number>(0);
  const [yesPressed, setYesPressed] = useState<boolean>(false);

  return (
    <section>
      <h1>{!yesPressed ? "Будеш моєю Валентинкою???" : "ЙОООООО"}</h1>
      {yesPressed ? (
        <YesContent />
      ) : (
        <>
          <NoContent noCount={noCount} />
          <ButtonsSection
            setNoCount={setNoCount}
            noCount={noCount}
            setYesPressed={setYesPressed}
          />
        </>
      )}
    </section>
  );
}
