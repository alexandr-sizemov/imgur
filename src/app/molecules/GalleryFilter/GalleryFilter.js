import React, { Component, PropTypes } from 'react'

class GalleryFilter extends Component {

  onLimitChange(limit){
    this.props.updateLimit(limit.target.value)
  }

  onSortChange(sort){
    this.props.updateSort(sort.target.value)
  }

  onSectionChange(section){
    this.props.updateSection(section.target.value)
  }

  onViralChange(viral){
    this.props.updateViral(viral.target.checked)
  }

  onSubmit(e){
    e.preventDefault()
    const {section, sort, limit, page, viral} = this.props.galleryFilter
    this.props.load({section, sort, limit, page, viral})
  }
        
  render() {
    let { sort, section, limit, viral, items, sections, sorts } = this.props.galleryFilter
    return (

        <div className="container-fluid gallery-filter">
          <form className="form-inline">
            <div className="form-group filter-form">

              <label className="filter-label" htmlFor="section">Section</label>
              <select name="section" className="form-control" onChange={(section)=>this.onSectionChange(section)} >
                {sections.map(sectionOption => <option key={sectionOption} value={sectionOption} key={sectionOption}>{sectionOption}</option>)}
              </select>
            </div>
            <div className="form-group filter-form">
              <label className="filter-label" htmlFor="section">Sort </label>
              <select name="section" className="form-control" onChange={(sort)=>this.onSortChange(sort)}>
                {sorts.filter(sort => sort.available).map(sortOption => <option key={sortOption.value} value={sortOption.value} key={sortOption.value}>{sortOption.value}</option>)}
              </select>
            </div>
            <div className="form-group filter-form">
              <label className="filter-label" htmlFor="section">Give me </label>
              <select name="section" className="form-control" onChange={(limit)=>this.onLimitChange(limit)}>
                {items.map(itemsOption => <option value={itemsOption} key={itemsOption}>{itemsOption}</option>)}
              </select>
            </div>
            <div className="form-group filter-form">
              <div className="checkbox">
                <label className="filter-label">
                  Viral
                </label>
                  <input type="checkbox" value={viral} onChange={(viral)=>this.onViralChange(viral)} /> 
              </div>
            </div>
            <button className="btn btn-default" onClick={(e)=>this.onSubmit(e)}>Submit</button>
          </form>
        </div>

    )
  }
}

GalleryFilter.propTypes = {

}

export default GalleryFilter
