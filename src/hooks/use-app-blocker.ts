import { useLayoutEffect } from "react";
import { v4 } from "uuid";
import {
  addBlocker,
  removeBlocker,
  useAppDispatch,
  useAppSelector,
} from "../store";
import { useBlocker } from "react-router-dom";

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

  const blockers = useAppSelector((state) => state.blocker.blockers);

  useBlocker(() => {
    if (!blockers.length) return false;
    return !confirm(blockers[blockers.length - 1].message);
  });
};
