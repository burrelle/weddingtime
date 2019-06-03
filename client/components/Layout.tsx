import React, { ReactNode } from "react";
import { Container } from "semantic-ui-react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}
