import React, { useState, useEffect } from 'react'
import { Box, Container } from 'theme-ui'
import Row from './row'
import Column from './column'

const Guide = ({ color = 'muted' }) => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    function handler(event) {
      const { key, keyCode, metaKey } = event
      if (key === ';' && metaKey) {
        setDisplay((prev) => !prev)
      }
    }

    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        left: 0,
        top: 0,
        zIndex: color === 'teal' ? 5000 : -1,
        pointerEvents: 'none',
        display: display ? 'initial' : 'none',
      }}
    >
      <Container>
        <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
          <GuideColumns indices={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
        </Box>
        <Box sx={{ display: ['none', 'initial', 'none', 'none'] }}>
          <GuideColumns indices={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </Box>
        <Box sx={{ display: ['initial', 'none', 'none', 'none'] }}>
          <GuideColumns indices={[1, 2, 3, 4, 5, 6]} />
        </Box>
      </Container>
    </Box>
  )
}

function GuideColumns({ indices }) {
  return (
    <Row>
      {indices.map((i) => {
        return (
          <Column
            key={i}
            start={[i]}
            width={[1]}
            sx={{
              bg: 'teal',
              height: '100vh',
              opacity: 0.4,
            }}
          ></Column>
        )
      })}
    </Row>
  )
}

export default Guide
