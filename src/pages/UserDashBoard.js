import React from 'react';
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';

export default function UserDashBoard({currentUser, blockers, solutions}) {
  
  // console.log("currentUser: ", currentUser)
  // console.log("blockers: ", blockers)
  // console.log("solutions: ", solutions)

  const userSolutions = solutions.filter(solution => solution.user_id === currentUser.id)
  // console.log("userSolutions: ", userSolutions)

  const userBlockers = userSolutions.map(solution => blockers[solution.blocker_id - 1])
  // console.log("userBlockers: ", userBlockers)

  return(
    <>
      <h3>UserDashBoard page</h3>
      {userBlockers.map((blocker, index) => {
        return (  
          <Row key={index}>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">
                  {blocker.blocker_description}
                </CardTitle>
                <CardText>
                  {solutions.filter(solution => solution.blocker_id === blocker.id).map(solution => solution.description)}
                </CardText>
                <Button>
                  Edit Blocker
                </Button>
              </Card>
            </Col>
          </Row>
        )
      })}
    </>
  )
}