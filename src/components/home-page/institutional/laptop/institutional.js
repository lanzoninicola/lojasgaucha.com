import * as React from "react"

import { GridFixedContainer, GridFluidContainer } from "@layouts/index"
import { Title, Text } from "@typography"
import { ButtonPrimaryBlue } from "@buttons"

import { colorsTheme } from "@theme"

const Institutional = () => {
  return (
    <>
      <GridFixedContainer
        columns="1fr"
        rows="1fr 1fr 1fr 1fr"
        bg={colorsTheme("orange")}
        pl="176"
        pr="176"
        pt="96"
      >
        <GridFluidContainer>
          <GridFixedContainer columns="1fr 1fr" rows="1fr">
            <GridFixedContainer columns="1fr" rows=".25fr 1fr" centerX>
              <Title as="h3" weight="700" color="white" uppercase>
                Em
              </Title>
              <GridFixedContainer
                rows="1fr"
                columns="1fr .25fr"
                hAuto
                top
                centerY
              >
                <Text color="blue" size="240">
                  15
                </Text>
                <Text color="blue" size="25" pt="24">
                  anos de atividade
                </Text>
              </GridFixedContainer>
            </GridFixedContainer>

            <GridFixedContainer columns="1fr" rows=".25fr 1fr" centerX>
              <Title as="h3" weight="700" color="white" uppercase>
                nós entregamos
              </Title>
              <GridFixedContainer rows="1fr 1fr 1fr" columns="1fr" gap="16">
                <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                  <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                    <Text color="blue" weight="600" size="72" align="right">
                      180
                    </Text>
                    <Text color="blue">cozinhas</Text>
                  </GridFixedContainer>
                  <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                    <Text color="blue" weight="600" size="72" align="right">
                      320
                    </Text>
                    <Text color="blue">mesas</Text>
                  </GridFixedContainer>
                </GridFixedContainer>
                <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                  <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                    <Text color="blue" weight="600" size="72" align="right">
                      540
                    </Text>
                    <Text color="blue">camas</Text>
                  </GridFixedContainer>
                  <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                    <Text color="blue" weight="600" size="72" align="right">
                      1520
                    </Text>
                    <Text color="blue">colchões</Text>
                  </GridFixedContainer>
                </GridFixedContainer>
                <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                  <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                    <Text color="blue" weight="600" size="72" align="right">
                      1300
                    </Text>
                    <Text color="blue">sofà</Text>
                  </GridFixedContainer>
                  <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
                    <Text color="blue" weight="600" size="72" align="right">
                      900
                    </Text>
                    <Text color="blue">comodas</Text>
                  </GridFixedContainer>
                </GridFixedContainer>
              </GridFixedContainer>
            </GridFixedContainer>
          </GridFixedContainer>
        </GridFluidContainer>
        <GridFixedContainer columns="1fr" rows="1fr">
          <Title as="h3" weight="700" color="white" uppercase>
            e fizemos muitas famílias felizes
          </Title>
        </GridFixedContainer>
        <GridFixedContainer columns="1fr" rows="1fr 1fr">
          <Title as="h3" weight="700" color="white">
            porque de móveis, nos entendemos!
          </Title>
          <ButtonPrimaryBlue>Agendamento</ButtonPrimaryBlue>
        </GridFixedContainer>
      </GridFixedContainer>
    </>
  )
}

export default Institutional
