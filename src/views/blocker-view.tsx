import { useAppSelector } from "../store";
import { PropsWithChildren, useLayoutEffect } from "react";

export function BlockerView({ children }: PropsWithChildren) {
  const blockers = useAppSelector((state) => state.blocker.blockers);

  useLayoutEffect(() => {
    if (!blockers.length) return;
    function onBeforeUnload(event: BeforeUnloadEvent) {
      event.returnValue = blockers[blockers.length - 1].message;
    }
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [blockers]);

  return (
    <>
      {children}
      {blockers.map((blocker) => (
        <div key={blocker.id} className="blocker">
          {blocker.message}
        </div>
      ))}
    </>
  );
}
