import React, { Component } from 'react'
import './card.style.css'
export class Card extends Component {
  render() {
      const {name,email,id} = this.props
    return (
        <div key={id} className='card-container'>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}`} className="card-image"/>
        <h2 >{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card