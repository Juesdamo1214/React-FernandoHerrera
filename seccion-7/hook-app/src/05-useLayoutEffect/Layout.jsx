import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, QuoteRickAndMorty } from "../03-example";

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);


  return (
    <>
      <h1>Rick and Morty </h1>
      <hr />

      {
        isLoading
          ? (
            <LoadingQuote />
          )
          : (
            <QuoteRickAndMorty data={data} />
          )
      }
      <button className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}>
        Next quote
      </button>
    </>
  )
}
