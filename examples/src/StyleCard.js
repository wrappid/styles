import React from "react";
import { CoreClasses, getEffectiveStyle } from "@wrappid/styles";

function StyleCard({ styles }) {
  /* return (
    <>
      {styles.map((className) => {
        return (
          <>
            {typeof CoreClasses[className] === "string" && (
              <>
                {className + "=" + JSON.stringify(CoreClasses[className])}
                <pre>
                  {JSON.stringify(getEffectiveStyle([CoreClasses[className]]))}
                </pre>
                <hr></hr>
              </>
            )}
            {typeof CoreClasses[className] === "object" &&
              Object.keys(CoreClasses[className]).length > 0 && (
                <>
                  {className}
                  <div style={{ paddingLeft: 8 }}>
                    <pre>{JSON.stringify(CoreClasses[className])}</pre>
                    <StyleCard
                      styles={[...Object.keys(CoreClasses[className])]}
                    />
                  </div>
                  <hr></hr>
                </>
              )}
          </>
        );
      })}
    </>
  ); */
  const [data, setdata] = React.useState(CoreClasses);

  const getCurrent = (node) =>
    data
      .filter((cNode) => cNode.parent_id === node)
      .map((cNode) => (
        <ul key={`node_${cNode.id}`}>
          <li>{cNode.name}</li>
          {this.getCurrent(cNode.id)}
        </ul>
      ));
  function print(obj, prefix) {
    prefix = prefix || "";
    return Object.keys(obj).reduce(function (acc, key) {
      var value = obj[key];
      if (typeof value === "object") {
        acc.push.apply(acc, print(value, prefix + (prefix ? "." : "") + key));
      } else {
        acc.push(prefix + (prefix ? "." : "") + key + " = " + value);
      }
      return acc;
    }, []);
  }
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* {getCurrent(null)} */}
      <pre>{print(CoreClasses).join("\n")}</pre>
      {/* {Array.from([...print(CoreClasses, "")]).map((className) => {
        <>
          {className}
          <hr />
        </>;
      })} */}
    </div>
  );
}

export default StyleCard;
