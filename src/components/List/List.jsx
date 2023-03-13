import React from "react";
import { Item } from "./List.styled";

const List = ({ contacts, onDeleteContact }) => <ul>{contacts.map(({ id, name, number }) => <Item key={id}><p>{name}</p><p>{number}</p>
<button onClick = {()=>onDeleteContact(id)}>Delete</button></Item>)}</ul>

export default List;