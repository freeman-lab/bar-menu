import React, { useState, useEffect, useMemo } from 'react'
import { Container, Grid, Box, Flex } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import Row from './row'
import Column from './column'
import Divider from './divider'
import Filter from './filter'
import Section from './section'
import List from './list'
import Guide from './guide'
import FadeIn from './fade-in'
import Meta from './meta'
import Settings from './settings'
import Icon from './icon'
import { formatNumber } from './utils'
import { COLORS, FAMILIES, KEYWORDS } from './constants'

const Mobile = ({ children }) => {
  return (
    <Box as='span' sx={{ display: ['initial', 'none', 'none', 'none'] }}>
      {children}
    </Box>
  )
}

const Desktop = ({ children }) => {
  return (
    <Box as='span' sx={{ display: ['none', 'initial', 'initial', 'initial'] }}>
      {children}
    </Box>
  )
}

const BarMenu = ({
  title,
  sections,
  cocktails,
  welcome,
  renumber = true,
  filters = true,
  separator = '•',
  meta,
}) => {
  const [families, setFamilies] = useState(FAMILIES)
  const [keywords, setKeywords] = useState(KEYWORDS)
  const [modal, setModal] = useState(false)
  const [settings, setSettings] = useState(false)
  const [selected, setSelected] = useState(null)

  const renumbered = useMemo(() => {
    if (!renumber) return cocktails

    let counter = 1

    sections.forEach(({ contents }) => {
      contents.forEach((d) => {
        const index = cocktails.findIndex(({ name }) => name === d)
        if (cocktails[index]) {
          cocktails[index].number = counter
          counter += 1
        }
      })
    })

    return cocktails
  }, [renumber, sections, cocktails])

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const isNotCombinedKey = !(
          event.ctrlKey ||
          event.altKey ||
          event.shiftKey
        )
        if (isNotCombinedKey) {
          setModal(false)
          setSelected(null)
        }
      }
    })
  }, [])

  return (
    <>
      <Guide />
      <Meta {...meta} />
      <FadeIn>
        <Container sx={{ mt: [5, 6, 7, 8] }}>
          <Row>
            <Column
              start={[1, 3, 5, 5]}
              width={[6, 6, 8, 8]}
              sx={{ mr: [0, 0, -8, 0] }}
            >
              <Box
                sx={{
                  fontSize: [6, 7, 9, 9],
                }}
              >
                {title}
              </Box>
            </Column>
          </Row>
          {filters && (
            <Settings
              settings={settings}
              setSettings={setSettings}
              keywords={keywords}
              setKeywords={setKeywords}
              families={families}
              setFamilies={setFamilies}
            />
          )}
          <Box sx={{ mt: filters ? [5, -3, -3, -3] : [5, 6, 6, 7] }}>
            {sections.map(({ name, description, contents }) => {
              const filtered = renumbered
                .filter((d) => families[d.family])
                .filter(
                  (d) => keywords['all'] || d.keywords.some((d) => keywords[d])
                )
                .filter((d) => contents.includes(d.name))
                .sort(
                  (a, b) => contents.indexOf(a.name) - contents.indexOf(b.name)
                )

              if (filtered.length > 0) {
                return (
                  <Box key={name}>
                    <Section name={name} description={description} />
                    <Divider />
                    <List
                      contents={filtered}
                      separator={separator}
                      setModal={setModal}
                      setSelected={setSelected}
                    />
                  </Box>
                )
              } else {
                return null
              }
            })}
          </Box>
          <Row sx={{ mt: [7, 8, 9, 10], mb: [9, 8, 9, 10] }}>
            <Column start={[1, 1, 2, 2]} width={[5, 5, 5, 5]}>
              <Box sx={{ fontSize: [1, 2, 2, 2] }}>{welcome}</Box>
            </Column>
          </Row>
        </Container>
      </FadeIn>
      <Box
        sx={{
          pointerEvents: modal ? 'all' : 'none',
          position: 'fixed',
          inset: 0,
          width: '100%',
          backdropFilter: modal
            ? 'blur(12px) opacity(1)'
            : 'blur(12px) opacity(0)',
          transition: 'background-color 0.25s, backdrop-filter 0.25s',
          bg: alpha('background', modal ? 0.85 : 0),
          zIndex: 1001,
        }}
        onClick={() => {
          setSelected(null)
          setModal(false)
        }}
      >
        <Container>
          {selected && (
            <FadeIn duration={250}>
              <Row>
                <Column start={[1, 2, 3, 3]} width={[6, 6, 7, 7]}>
                  <Box
                    sx={{ position: 'relative' }}
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <Row
                      columns={[6, 6, 7, 7]}
                      sx={{
                        mt:
                          selected.ingredients.length <= 6
                            ? [9, '150px', '150px', 11]
                            : ['80px', '100px', '100px', 10],
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          fontSize: [5, 6, 6, 6],
                        }}
                      >
                        <Row columns={[6, 6, 7, 7]}>
                          <Column start={[6, 6, 7, 7]} width={[1, 1, 1, 1]}>
                            <Box
                              onClick={() => {
                                setSelected(null)
                                setModal(false)
                              }}
                              sx={{
                                cursor: 'pointer',
                                position: 'relative',
                                top: ['-11px', '-17px', '-17px', '-18px'],
                                transition: 'opacity 0.15s',
                                '@media (hover: hover) and (pointer: fine)': {
                                  '&:hover': {
                                    opacity: 0.5,
                                  },
                                },
                              }}
                            >
                              ×
                            </Box>
                          </Column>
                        </Row>
                      </Box>
                      <Column start={[1, 1, 1, 1]} width={[6, 6, 7, 7]}>
                        <Box
                          sx={{
                            color: COLORS[selected.family],
                            fontSize: [3, 4, 4, 4],
                            mb: [3],
                          }}
                        >
                          {formatNumber(selected.number)}
                        </Box>
                        <Box sx={{ fontSize: [4, 5, 5, 5] }}>
                          {selected.name}
                        </Box>
                        <Box
                          sx={{ fontSize: [3, 4, 4, 4], fontStyle: 'italic' }}
                        >
                          {selected.keywords.join(` ${separator} `)}
                        </Box>

                        <Box sx={{ mt: [3, 4, 4, 4], fontSize: [3, 4, 4, 4] }}>
                          {selected.ingredients.map((g, i) => {
                            return (
                              <Grid
                                key={i}
                                columns={[
                                  '85px 1fr',
                                  '125px 1fr',
                                  '125px 1fr',
                                  '125px 1fr',
                                ]}
                              >
                                <Box>
                                  {g.amount.value} {g.amount.units}
                                </Box>
                                <Box>{g.value}</Box>
                              </Grid>
                            )
                          })}
                        </Box>
                        <Row columns={[6, 6, 7, 7]}>
                          <Column start={[1, 1, 1, 1]} width={[6, 5, 6, 6]}>
                            <Box
                              sx={{ mt: [3, 4, 4, 4], fontSize: [3, 4, 4, 4] }}
                            >
                              {selected.recipe}
                            </Box>
                          </Column>
                        </Row>
                        {selected.origin && (
                          <Row columns={[6, 6, 7, 7]}>
                            <Column start={[1, 1, 1, 1]} width={[6, 6, 7, 7]}>
                              <Box
                                sx={{
                                  color: 'secondary',
                                  mt: [3, 4, 4, 4],
                                  fontSize: [2, 3, 3, 3],
                                  fontStyle: 'italic',
                                }}
                              >
                                {selected.origin.map((d, k) => {
                                  return (
                                    d +
                                    (k < selected.origin.length - 1
                                      ? ` ${separator} `
                                      : '')
                                  )
                                })}
                              </Box>
                            </Column>
                          </Row>
                        )}
                      </Column>
                    </Row>
                  </Box>
                </Column>
              </Row>
            </FadeIn>
          )}
        </Container>
      </Box>
    </>
  )
}

export default BarMenu
