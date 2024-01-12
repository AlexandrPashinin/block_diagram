import Head from 'next/head'

import { Container, Row, Card, Button } from 'react-bootstrap'
import App from "../src/components/App";
import Flow from '../src/components/Flow';

export default function Home() {
  return (
      <Container class="" fluid>
        <Container>
          {/*<App/>*/}
          <Flow />
        </Container>
      </Container>
)
}
