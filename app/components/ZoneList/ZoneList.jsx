import React, { Component } from 'react'

export default class ZoneList extends Component {
  render () {
    const {
      data
    } = this.props

    return (
      <ul>
        <li>
          <p>Stilleggen van alarmsignaal</p>
          <p>
            {
              data['alarm_first'] === false &&
              'geen gegevens beschikbaar'
            }
            {
              data['alarm_first'] === 0 &&
              'gratis'
            }
            {
              data['alarm_first'] !== 0 &&
              data['alarm_first'] !== false &&
              data['alarm_first']
            }
          </p>
        </li>
        <li>
          <p>Eeste interventie door falend alarm</p>
          <p>
            {
              data['alarm_next'] === false &&
              'geen gegevens beschikbaar'
            }
            {
              data['alarm_next'] === 0 &&
              'gratis'
            }
            {
              data['alarm_next'] !== 0 &&
              data['alarm_next'] !== false &&
              data['alarm_next']
            }
          </p>
        </li>
        <li>
          <p>Toegang tot woning na verlies sleutel</p>
          <p>
            {
              data['lost_key'] === false &&
              'geen gegevens beschikbaar'
            }
            {
              data['lost_key'] === 0 &&
              'gratis'
            }
            {
              data['lost_key'] !== 0 &&
              data['lost_key'] !== false &&
              data['lost_key']
            }
          </p>
        </li>
        <li>
          <p>Leegpompen bij wateroverlast (behalve bij noodweer)</p>
          <p>
            {
              data['water'] === false &&
              'geen gegevens beschikbaar'
            }
            {
              data['water'] === 0 &&
              'gratis'
            }
            {
              data['water'] !== 0 &&
              data['water'] !== false &&
              data['water']
            }
          </p>
        </li>
        <li>
          <p>Reinigen van oppervlakte na bv. verkeersongeval</p>
          <p>
            {
              data['clean'] === false &&
              'geen gegevens beschikbaar'
            }
            {
              data['clean'] === 0 &&
              'gratis'
            }
            {
              data['clean'] !== 0 &&
              data['clean'] !== false &&
              data['clean']
            }
          </p>
        </li>
        <li>
          <p>Redden van dieren</p>
          <p>
            {
              data['animals'] === false &&
              'geen gegevens beschikbaar'
            }
            {
              data['animals'] === 0 &&
              'gratis'
            }
            {
              data['animals'] !== 0 &&
              data['animals'] !== false &&
              data['animals']
            }
          </p>
        </li>
        <li>
          <p>Wespennest verdelgen</p>
          <p>
            {
              data['wasp'] === false &&
              'geen gegevens beschikbaar'
            }
            {
              data['wasp'] === 0 &&
              'gratis'
            }
            {
              data['wasp'] !== 0 &&
              data['wasp'] !== false &&
              data['wasp']
            }
          </p>
        </li>
      </ul>
    )
  }
}
