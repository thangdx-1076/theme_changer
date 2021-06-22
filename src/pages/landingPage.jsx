import React from 'react'
import { gql, useQuery } from '@apollo/client';
import ButtonComponent from '../components/button';
import { GET_DARK_MODE } from '../graphql/reactivities/theme';

const LandingPage = () => {

  const { loading, error, data } = useQuery(GET_DARK_MODE);
  const { loading: l, error: e, data: d } = useQuery(gql`
    query {
      getAllFriend {
        lastName
        firstName
      }
    }
  `, {
    //pollInterval: 500,
    onCompleted: (data) => console.log(data),
    notifyOnNetworkStatusChange: true
  })
  return (
    <div style={{ height: '100vh', backgroundColor: data.darkMode ? 'black' : 'white', color: data.darkMode ? 'white' : 'black' }}>
      <h1> Welcome to Theme Toggle Appliation!</h1>
      {
        d?.getAllFriend.map((item) => <p key={item.id}>{item.lastName}</p>)
      }
      <ButtonComponent />
    </div>
  )
}

export default LandingPage
