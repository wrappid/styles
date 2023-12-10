import React, { useEffect, useState } from "react";
import { CoreConfigRegistry } from "./config/contextHandler";
import { CONFIG_TYPE } from "./config/constants";

export let customConfig : CONFIG_TYPE;

export default function ConfigProvider(props: any) {
  const [providerId, setProviderId] = useState<any>(null);

  useEffect(() => {
    customConfig = { ...(props.config || {}) };
    setProviderId("style-provider" + new Date());
  }, []);

  useEffect(() => {
    customConfig = { ...(props.config || {}) };
    setProviderId("style-provider" + new Date());
  }, [customConfig]);

  return customConfig ? (
    <CoreConfigRegistry.Provider key={providerId} value={customConfig}>
      {props.children}
    </CoreConfigRegistry.Provider>
  ) : null;
}
