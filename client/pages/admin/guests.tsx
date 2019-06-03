// tslint:disable-next-line: no-implicit-dependencies
import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import GuestsTable from "../../components/GuestTable";
import Layout from "../../components/Layout";

const ALL_GUESTS_QUERY = gql`
  query {
    guests {
      forename
      surname
      attending
    }
  }
`;

export default function Guest() {
  const {
    data: { guests },
    loading,
  }: any = useQuery(ALL_GUESTS_QUERY);

  return <Layout>{!loading && <GuestsTable guests={guests} />}</Layout>;
}
