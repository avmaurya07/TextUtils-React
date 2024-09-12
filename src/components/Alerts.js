import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{height: "50px"}}>
    {props.alert && <div>
     <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert} </strong>
</div>
    </div>}
    </div>
  )
}
