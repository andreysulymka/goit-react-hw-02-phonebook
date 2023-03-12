import React from "react";

const List = ({ contacts, onDeleteContact }) => <ul>{contacts.map(({ id, name, number }) => <li key={id}><p>{name}</p><p>{number}</p>
<button onClick = {()=>onDeleteContact(id)}>Delete</button></li>)}</ul>

export default List;