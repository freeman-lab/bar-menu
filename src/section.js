import React from 'react'
import { Box } from 'theme-ui'
import Row from './row'
import Column from './column'

const Section = ({ name, description }) => {
  return (
    <Row>
      <Column
        start={[1, 1, 2, 2]}
        width={[6, 8, 10, 10]}
        sx={{
          fontSize: [4, 5, 5, 5],
          mt: [3, 5, 5, 5],
          color: 'secondary',
        }}
      >
        {name}
        <Box
          as='span'
          sx={{ ml: [4], fontStyle: 'italic', fontSize: [2, 3, 3, 3] }}
        >
          {description}
        </Box>
      </Column>
    </Row>
  )
}

export default Section
