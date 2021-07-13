import React, { useEffect, useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { gql, useQuery, useSubscription } from "@apollo/client"
import ButtonComponent from "../components/button"
import { GET_DARK_MODE } from "../graphql/reactivities/theme"

const LandingPage = () => {
  const [number, setNumber] = useState(1)
  const history = useHistory()
  const { loading, error, data } = useQuery(GET_DARK_MODE)
  // const { loading: l, error: e, data: d } = useQuery(gql`
  //   query {
  //     getAllFriend {
  //       lastName
  //       firstName
  //     }
  //   }
  // `, {
  //  // pollInterval: 500,
  //  // onCompleted: (data) => console.log(data),
  //   //notifyOnNetworkStatusChange: true
  // })
  //if(e) history.push('/ahuhu')
  const { loading: l, data: d } = useSubscription(gql`
    subscription {
      getNumberFriend
    }
  `, {
    onSubscriptionComplete: (data) => console.log(data),
    onSubscriptionData:(data) => {
      setNumber(data?.subscriptionData?.data.getNumberFriend)
      console.log('onSubscriptionData', data)}
  })
  useEffect(() => {
    console.log("d", d)
    return () => {
      console.log("thang test will un mount")
    }
  }, [])
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: number % 2 ? "black" : "white",
        color: data.darkMode ? "white" : "black",
      }}
    >
      <h1> Welcome to Theme Toggle Appliation!</h1>
      {/* {
        d?.getAllFriend.map((item) => <p key={item.id}>{item.lastName}</p>)
      } */}
      <ButtonComponent />
    </div>
  )
}

export default LandingPage
