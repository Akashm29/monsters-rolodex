import React, { Component } from 'react'
import Card from '../card/card.component'
import './card-list.style.css'
export class CardList extends Component {
  render() {
      const {monsters} = this.props
    return (
      <div className='card-list'>
          {monsters.map(monster => {
            const {email,id,name} = monster
              return <Card email={email} id={id} name={name}/>
          } )}
      </div>
    )
  }
}

export default CardList