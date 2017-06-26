import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as topojson from 'topojson-client'
import be from './BE.json'
import SvgContainer from 'components/SvgContainer/SvgContainer'
import Gem from 'components/Gem/Gem'

const d3 = require('d3')

class Belgium extends Component {
  render () {
    const {
      scale,
      center,
      width,
      height,
      selectedAdmin
    } = this.props.map.be
    const {
      data,
      onClick,
      zone
    } = this.props
    const projection = d3
      .geoMercator()
      .scale(scale)
      .translate([width / 2, height / 2])
      .center(center)
    const path = d3
      .geoPath()
      .projection(
          projection
      )
    const regions = topojson
      .feature(
          be,
          be
          .objects[`BEL_adm${selectedAdmin}`]
      )
      .features

    return (
      <SvgContainer
        width={width}
        height={height}
      >
        {
          <g>
            {
              regions.map((e, i) => {
                const gem = e.properties['NAME_4']
                return (
                  e.properties['ID_1'] === 2 &&
                  <Gem
                    key={i}
                    d={path(e)}
                    fill={data[gem].zone === zone ? '#7FC242' : 'rgba(251, 251, 251, 0.5)'}
                    name={gem}
                    zone={data[gem].zone}
                    onClick={onClick}
                  />
                )
              })
            }
          </g>
        }
      </SvgContainer>
    )
  }
}

const mapStateToProps = (store) => ({
  'map': store.map
})

export default connect(mapStateToProps)(Belgium)
