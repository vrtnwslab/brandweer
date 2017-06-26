import React, { Component } from 'react'
import Belgium from 'components/Belgium/Belgium'
import ZoneList from 'components/ZoneList/ZoneList'
import SearchBar from 'components/SearchBar/SearchBar'
require('font-awesome-sass-loader')

export default class Layout extends Component {
  render () {
    const {
      map,
      data,
      zone,
      onClick
    } = this.props

    const gemList = Object.keys(data.gem).map((gem) => {
      return {
        gem: gem,
        zone: data.gem[gem].zone
      }
    })

    return (
      <div className='app__main row'>
        <header className='app__header small-24 columns'>
          <h2 className='header__title'>
            {'Hoeveel kost een interventie van de brandweer?'}
          </h2>
        </header>
        <div className='app__content small-24 columns'>
          <div className='row'>
            <div className='small-24 columns'>
              <SearchBar
                dataSource={gemList}
                onSelectZone={onClick}
              />
              <Belgium
                data={data.gem}
                map={map}
                onClick={onClick}
                zone={zone}
              />
            </div>
          </div>
          <div className='row'>
            {
              zone &&
              <div className='small-24 columns'>
                <div className='zone__title'>
                  <h4>{zone}</h4>
                </div>
              </div>
            }
            {
              !zone &&
              <div className='small-24 columns'>
                <div className='zone__title'>
                  <h4>Klik op de kaart voor de bedragen per zone</h4>
                </div>
              </div>
            }
          </div>
          <div className='row'>
            {
              zone &&
              <div className='small-24 columns'>
                <ZoneList
                  data={{...data.zones[zone]}}
                />
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
