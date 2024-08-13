
import React, { Component } from 'react';
import { fetchWorkshops } from '../api/workshopsApi';
import WorkshopCard from '../components/WorkshopCard';
import styled from 'styled-components';

import './Workshops.css';
const Container = styled.div`
 
  display: flex;
  flex-direction :column
  
`;



class Workshops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const workshops = await fetchWorkshops();
      this.setState({ workshops, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { workshops, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <Container>
          <div className='workshopcontainer1'>
      <h1>WORKSHOPS</h1>
    </div>
   <div className='images'>
        {workshops.slice(0, 10).map(workshop => (
          <WorkshopCard key={workshop.id} title={workshop.title} body={workshop.body} />
        ))}
       </div> 

       <div className="workshopcontainer2">
          <h1>
          Observation First, Intervention Later
          </h1>
          <p2>
          We note that a teacher needs to be good listener. Our pursuit is to consciously nurture a space for you to observe, understand and introspect via the crafts and its local practices.
          </p2>
          </div>
          <div className="workshopcontainer3">
          <h1>
          Tools
          </h1>
          <p2>
          A large spectrum of craft tools at your disposal will enable translation of your thoughts and styles into a form on a cloth.
          </p2>
          </div>
          <div className="workshopcontainer4">
          <h1>
          Take Away
          </h1>
          <p2>
          Cost of the workshops includes: cours worksheet, dyeing fabric, dyestuff, chai with cool breezes in the fields
          </p2>
          </div>
          <div className="workshopcontainer5">
          <h1>
          Our Studio
          </h1>
          <p2>
          The countryside location of our studio is designed to be healthy, comfortable, and welcoming. The design prioritizes open spaces for people can move around and socialize freely without feeling confined.
          </p2>
          </div>
          <div className="workshopcontainer6">
          <h1>
          At Your Schedule
          </h1>
          <p2>
          Tell us your preferred dates and we will organise a workshop for you.
          </p2>
          </div>
          <div className="workshopcontainer7">
          <h1>
          Curious Case of a Designer
          </h1>
          <p2>          
            Are you a designer trying to make sense of the complex structural maze of craft production in India? The sheer degree of diversity and specialisation of works can be daunting.
          </p2>
          </div>
          <div className="workshopcontainer8">
          <h1>
          Group Learning
          </h1>
          <p2>
          We encourage a learning space that enables one not only to learn but also to share, question, laugh and develop deep intersubjective relations with it's co-learners from varied backgrounds.
          </p2>
          </div>
          <div className="workshopcontainer9">
          <h1>
          What Does Not Look Glamorous
          </h1>
          <p2>
          The process of 'making' is best understood when exposed to a variety of facets.
          </p2>
          </div>
          <div className="workshopcontainer10">
          <h1>
          BREATHE EASY
          </h1>
          <p2> 
          The countryside location of our studio has been designed with natural ventilation in mind, with large windows and doors that allow the breeze to flow through.

The design prioritizes open spaces for people can move around and socialize freely without feeling confined. The pockets of privacy and community provide a sense of security and belonging. The

studio embraces industrial style and leaves essential elements and services exposed, albeit neatly arranged, providing easy access for maintenance.

          </p2>
          </div> 
      </Container>
    
  
    );
  }
}

export default Workshops;
