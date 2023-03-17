import { CoreClasses, getEffectiveStyle } from "@wrappid/styles";
import StyleCard from "./StyleCard";

function App() {
  return (
    <>
      {`How to use`}

      {`getEffectiveStyle([CoreClasses.DEV_BORDER])=${JSON.stringify(
        getEffectiveStyle([CoreClasses.DEV_BORDER])
      )}`}
      <hr></hr>
      <h4>{`CoreClass`}</h4>
      <hr></hr>
      <StyleCard styles={[...Object.keys(CoreClasses)]} />
    </>
  );
}

export default App;
