import { use } from "react";
import YoubloomContext from "../contexts/YoubloomContext";

export default function useYoubloom() {
  const context = use(YoubloomContext);
  if (!context) {
    throw new Error("useYoubloom must be used within YoubloomProvider");
  }

  return context;
}
