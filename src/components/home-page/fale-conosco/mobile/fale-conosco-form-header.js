import * as React from "react"
import { Title, Text } from "../../../../styling/typography/index"

const FaleConoscoFormHeader = () => {
  return (
    <div>
      <Title
        as="h2"
        align="center"
        color="orange"
        weight="400"
        mt={{ min: "15px", max: "30px" }}
        mb="8"
      >
        Fale Conosco
      </Title>
      <Text variant="secondary" weight="300" align="center">
        Você precisa de ajuda? Deseja saber a disponibilidade de um produto? O
        qualquer outra coisa que possa ser de ajuda nas sua compras.
      </Text>
    </div>
  )
}

export default FaleConoscoFormHeader
