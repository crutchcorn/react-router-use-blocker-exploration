import { useLayoutEffect } from "react";
import { v4 } from "uuid";
import { addBlocker, removeBlocker, useAppDispatch } from "../store";

interface UseAppBlockerProps {
  message: string | undefined;
}

export const useAppBlocker = ({ message }: UseAppBlockerProps) => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (!message) return;
    const id = v4();
    const blocker = { id, message };
    dispatch(addBlocker(blocker));
    return () => {
      dispatch(removeBlocker(blocker));
    };
  }, [dispatch, message]);
};
