import { memo } from "react";

export const Small = memo(({ value }) => {

  console.log('Me Volvi a dibujar');

  return (
    <small>{value}</small>
  )
})
