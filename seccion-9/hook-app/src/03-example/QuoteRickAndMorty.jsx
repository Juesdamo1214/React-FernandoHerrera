import { useLayoutEffect, useRef, useState } from "react"


export const QuoteRickAndMorty = ({ data }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width : 0, height : 0});


  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect()
    setBoxSize({ width, height });
  }, [])

  const { name, species, image } = data
  return (
    <>
      <blockquote
        className="blockquote text-center"
        style={{ display: 'flex' }}
      >
        {/* <img src={image} alt="" /> */}
        <p ref={pRef} className="mb-1">{name}</p>
        <footer className="blockquote-footer">{species}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
