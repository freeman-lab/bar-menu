import React from 'react'
import { Box, Flex } from 'theme-ui'
import { formatNumber } from './utils'
import Row from './row'
import Column from './column'
import { COLORS } from './constants'

const List = ({ contents, separator, setModal, setSelected }) => {
  return (
    <Row sx={{ mb: [5, 6, 6, 6] }}>
      <Column start={[1, 1, 2, 2]} width={[6, 8, 10, 10]}>
        <Row columns={[1, 2, 2, 2]}>
          {contents.map((d, i) => {
            return (
              <Flex
                key={i}
                sx={{
                  mt: [4, 5, 5, 5],
                  pt: [2, 0, 0, 0],
                  pb: [2, 0, 0, 0],
                  gap: [4],
                  cursor: 'pointer',
                  width: ['100%', 'fit-content', 'fit-content', 'fit-content'],
                  transition: 'opacity 0.15s',
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover': {
                      opacity: 0.7,
                    },
                  },
                }}
                onClick={() => {
                  setModal(true)
                  setSelected({ ...d, number: d.number })
                }}
              >
                <Box
                  sx={{
                    mt: ['4px', '8px', '8px', '8px'],
                    color: COLORS[d.family],
                    flexShrink: 0,
                    fontSize: [1, 2, 2, 2],
                    lineHeight: 1.3,
                  }}
                >
                  {formatNumber(d.number)}
                </Box>
                <Box sx={{}}>
                  <Box sx={{ fontSize: [3, 4, 4, 4] }}>{d.name}</Box>
                  <Box sx={{ fontSize: [2, 3, 3, 3], fontStyle: 'italic' }}>
                    {d.keywords.join(` ${separator} `)}
                  </Box>
                </Box>
              </Flex>
            )
          })}
        </Row>
      </Column>
    </Row>
  )
}

export default List
