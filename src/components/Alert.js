import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.color} alert-dismissible fade show position-absolute w-100`} role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    </div>
  )
}