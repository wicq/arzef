"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"meet"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#000000"},"dark":{"cal-brand":"#ffffff"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <Cal 
      namespace="meet"
      calLink="serkanc/meet"
      style={{width:"100%",height:"100%",overflow:"scroll"}}
      config={{"layout":"month_view","theme":"light"}}
    />
  );
} 