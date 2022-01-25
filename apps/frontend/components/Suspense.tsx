import { Suspense } from "react";

const isBrowserEnvironment = typeof window !== "undefined";

export default function LatticeSuspense(
  props: React.SuspenseProps
): JSX.Element {
  if (typeof props.fallback === "undefined") {
    throw new Error("LatticeSuspense requires fallback prop!");
  }

  if (!isBrowserEnvironment) return props.fallback as JSX.Element;

  return <Suspense {...props} />;
}
