import React, { Children } from 'react'
const gridCols = 3
const gridSize = 12

export default (props) => {
  const cols = parseInt(props.cols) || gridCols
  const childrenCount = React.Children.count(props.children)
  const children = React.Children.toArray(props.children)
  const result = []
  for(let i = 0; i < childrenCount; i+=cols){
    const rowChildren = children.slice(i,i+cols)
    result.push(<Row key={i} cols={cols}>{rowChildren}</Row>)
  }
  return <div> {result} </div>
}

const Col = props => {
  return <div className={'col-md-'+gridSize/props.cols}>{props.children}</div>
}
const Row = props => {
  const row = React.Children.map(props.children, child => <Col key={child.id} cols={props.cols}> {child}</Col>)
  return <div className="row"> {row} </div> 
}