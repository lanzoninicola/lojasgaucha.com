import * as React from "react"

import { GridFluidContainer, GridFixedContainer, FlexContainer } from "@layouts"
import { colorsTheme } from "@theme"
import { SVGIcon } from "@icons"
import { Text, Title } from "@typography"
import { ButtonPrimaryOrange } from "@buttons"
import { NavLink } from "@navigation"

import { Logo } from "@logo"

const Footer = () => {
  return (
    <GridFixedContainer
      as="footer"
      columns="1fr"
      rows="1fr"
      pl={{ laptop: 160, tablet: 80 }}
      bg={colorsTheme("blue")}
    >
      <GridFixedContainer columns="1fr" rows="1fr 1fr 1fr">
        <GridFluidContainer centerY>
          <Logo variant="primary" />
          <SVGIcon name="FOOTER_DECORATIVE" size="250" color="orange" />
        </GridFluidContainer>

        <GridFluidContainer>
          {/** Addresses */}
          <GridFixedContainer columns="1fr" rAuto>
            <GridFixedContainer columns=".1fr 1fr" rAuto>
              <SVGIcon name="PIN" size="24" color="orange" />
              <Text color="white" weight="400">
                Avenida Tupi, 2361 - Centro, Pato Branco - Paraná
              </Text>
            </GridFixedContainer>
            <GridFixedContainer columns=".1fr 1fr" rAuto>
              <SVGIcon name="CALL_PHONE" size="24" color="orange" />
              <Text color="white" weight="400">
                (46) 3224-5152
              </Text>
            </GridFixedContainer>
            <GridFixedContainer columns=".1fr 1fr" rAuto>
              <SVGIcon name="MAIL" size="24" color="orange" />
              <Text color="white" weight="400">
                sac@lojasgaucha.com
              </Text>
            </GridFixedContainer>
            <GridFixedContainer columns=".1fr 1fr" rAuto>
              <SVGIcon name="CLOCK" size="24" color="orange" />
              <GridFixedContainer columns="1fr" rAuto gap="4">
                <Text color="orange" weight="400">
                  SEG - SEX
                </Text>
                <Text color="white" weight="400">
                  das 9:00h às 18:00h
                </Text>
                <Text color="orange" weight="400">
                  SABADO
                </Text>
                <Text color="white" weight="400">
                  das 9:00h às 12:00h
                </Text>
              </GridFixedContainer>
            </GridFixedContainer>
          </GridFixedContainer>
          {/** Addresses */}

          {/** CTA */}
          <GridFixedContainer columns="1fr" rAuto>
            <Title as="h5" color="orange">
              Vem a visitar a nossa loja, clique e agenda um apuntamento
            </Title>
            <Text color="white" weight="400">
              Venha e experimente qualidade a um preço que você não esperava.
            </Text>
            <Text color="orange" weight="400">
              Para sua casa, para sua família
            </Text>
            <ButtonPrimaryOrange>AGENDAMENTO</ButtonPrimaryOrange>
          </GridFixedContainer>
          {/** CTA */}
          {/** LINKS */}
          <GridFixedContainer columns=".5fr 1fr .5fr" rows="1fr">
            <div></div>
            <GridFixedContainer columns="1fr" rAuto>
              <NavLink to={{ type: "link", value: "/ambientes" }}>
                <GridFixedContainer columns=".1fr 1fr" rAuto>
                  <SVGIcon name="HOME" size="24" color="orange" />
                  <Text color="white" weight="400">
                    Ambientes
                  </Text>
                </GridFixedContainer>
              </NavLink>

              <NavLink to={{ type: "link", value: "/sobrenos" }}>
                <GridFixedContainer columns=".1fr 1fr" rAuto>
                  <SVGIcon name="SHOP" size="24" color="orange" />
                  <Text color="white" weight="400">
                    Sobre Nos
                  </Text>
                </GridFixedContainer>
              </NavLink>

              <NavLink to={{ type: "link", value: "/privacy" }}>
                <GridFixedContainer columns=".1fr 1fr" rAuto>
                  <SVGIcon name="FILE_TEXT" size="24" color="orange" />
                  <Text color="white" weight="400" noWrap>
                    Politica de privacidade
                  </Text>
                </GridFixedContainer>
              </NavLink>
            </GridFixedContainer>

            <div></div>
          </GridFixedContainer>
          {/** LINKS */}
        </GridFluidContainer>
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default Footer
