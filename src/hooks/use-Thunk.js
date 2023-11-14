import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";

function useThunk(Thunk) {
  const [loading, setloading] = useState(false);
  const [err, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(() => {
    setloading(true);
    dispatch(Thunk())
      .unwrap()
      .catch((err) => setError(err))
      .finally(() => setloading(false));
  }, [dispatch, Thunk]);
  return [runThunk, loading, err];
}

export { useThunk };
