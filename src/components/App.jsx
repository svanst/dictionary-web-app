import { useState } from "react";
import useSWR from "swr";
import MaxWidthWrapper from "./MaxWidthWrapper/MaxWidthWrapper";
import Header from "./Header/Header";
import styles from "./app.module.css";

import Result from "./Result/Result";
import Search from "./Search/Search";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import useShowLoading from "../hooks/use-show-loading.hook";

const apiEndpoint = import.meta.env.VITE_DICTIONARY_API_ENDPOINT;

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  if (!response.ok) {
    const error = new Error();
    error.status = response.status;
    error.message = `${response.status} - ${response.statusText}`;
    error.body = json;
    throw error;
  }
  return json;
}

const SWROptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export default function App() {
  const [submittedTerm, setSubmittedTerm] = useState("dharma");
  const { data, error, isLoading } = useSWR(
    submittedTerm ? `${apiEndpoint}/${submittedTerm}` : null,
    fetcher,
    SWROptions
  );
  const showLoading = useShowLoading(isLoading);

  if (error && !(error.body && error.status === 404)) {
    // A 404 is returned and the error has a body in the common scenario that a word is not found in the dictionary. Don't clutter the console in that case
    console.error("Failed to load data:", error);
  }

  return (
    <MaxWidthWrapper>
      <Header className={styles.header} />
      <main>
        <Search setSubmittedTerm={setSubmittedTerm} className={styles.search} />

        {showLoading && <p>Loading...</p>}
        {error && renderError(error)}
        {data?.[0] && <Result data={data[0]} />}
      </main>
    </MaxWidthWrapper>
  );
}

function renderError(errorObj) {
  return errorObj.body ? (
    <ErrorMessage {...errorObj.body} />
  ) : (
    <p>An error has occurred</p>
  );
}
