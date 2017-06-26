import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.handleNewRequest = this.handleNewRequest.bind(this)
    this.state = {
      searchText: ''
    }
  }

  handleUpdateInput (searchText) {
    console.log(searchText)
    this.setState({
      searchText: searchText
    })
  }
  handleNewRequest (zone) {
    const {
      onSelectZone
    } = this.props

    onSelectZone(zone)
    this.setState({
      searchText: ''
    })
  }
  render () {
    const {
      dataSource
    } = this.props

    return (
      <AutoComplete
        fullWidth
        id={'1'}
        maxSearchResults={5}
        onNewRequest={(e) => this.handleNewRequest(e.zone)}
        onUpdateInput={this.handleUpdateInput}
        dataSource={dataSource}
        searchText={this.state.searchText}
        floatingLabelText={
          <div
            className='hintText'
          >
            <i className='fa fa-search' />
            <span>{'Zoek je gemeente'}</span>
          </div>
        }
        dataSourceConfig={{text: 'gem', value: 'zone'}}
        filter={AutoComplete.caseInsensitiveFilter}
      />
    )
  }
}
