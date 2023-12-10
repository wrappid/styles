import React, { useEffect, useState } from "react";
import { CoreConfigContext } from "./config/contextHandler";
import { CONFIG_TYPE } from "./config/constants";

export let customConfig: CONFIG_TYPE;

export default function ConfigProvider(props: any) {
  const [providerId, setProviderId] = useState<any>(null);

  useEffect(() => {
    customConfig = { ...(props?.config || {}) };
    setProviderId("style-provider" + new Date());
  }, []);

  useEffect(() => {
    customConfig = { ...(props?.config || {}) };
    setProviderId("style-provider" + new Date());
  }, [customConfig]);

  return customConfig ? (
    <CoreConfigContext.Provider key={providerId} value={customConfig}>
      {props.children}
    </CoreConfigContext.Provider>
  ) : null;
}
