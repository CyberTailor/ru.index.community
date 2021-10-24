import { AppBar, Button, Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import RuFediLogo from '../svg/ru-fedi'
import React from 'react'
import { graphql } from 'gatsby'
import { styled } from '@mui/styles'
import Link from '../components/Link'
import GroupCard from '../components/GroupCard'

export default function Communities ({ data }) {
  const instances = data.allGroupsJson.nodes
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar
        position='static' style={{
          background: 'transparent',
          width: '100%',
          maxWidth: 1536,
          margin: 'auto'
        }} elevation={0}
      >
        <Toolbar>
          <Link to='/'>
            <div style={{ height: 48 }}>
              <RuFediLogo />
            </div>
          </Link>
          <div style={{ flexGrow: 1 }} />
          <Link to='/communities' color='inherit' underline='none'>
            <Button color='inherit'>Серверы</Button>
          </Link>
          <Link to='/groups' color='inherit' underline='none'>
            <Button color='inherit'>Группы</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box py={1}>
        <Container maxWidth='xl'>
          <Grid container spacing={3} justify='space-around'>
            <Grid item container xs={12} spacing={3} justify='left'>
              <Grid item xs={12} sm={12} md={10}>
                <Typography variant='h2'>Группы</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} container spacing={2} justify='left'>
              {instances.map((i) => <Grid item xs={12} sm={6} md={4} key={i.id}><GroupCard instance={i} /></Grid>)}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export const query = graphql`
query {
    allGroupsJson(sort: {fields: handle}) {
        nodes {
            uri
            title
            short_description
            thumbnail
            icon
            handle
            members
        }
    }
  }
`
