import { useState, useEffect } from "react";

// use this hook to avoid a flash of changing content on fast connections when calling an api. It can be considered unpleasant to show a loading indication for a very brief time.

const showLoadingDelay = 350; // showLoading will only be true if the data has not been loaded after this value in ms.

const useShowLoading = (isLoading) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setShowLoading(true);
      }, showLoadingDelay);
    } else {
      setShowLoading(false);
    }

    return () => clearTimeout(timer);
  }, [isLoading, showLoadingDelay]);

  return showLoading;
};

export default useShowLoading;
