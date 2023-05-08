import React from "react";

export let appStyles = null;
export let coreStyles = null;

export default function StylesProvider(props) {
  appStyles = props.appStyles;
  coreStyles = props.coreStyles;
  return props.children;
}
