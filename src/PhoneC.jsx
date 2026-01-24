import { Component } from "react";
import { nanoid } from 'nanoid'


export class Phone extends Component {
  state = {
    contacts: [
      {
        name: 'Booboo',
        id: nanoid(),
        number: '690-3456-2876'
      }
    ],
    filter: ''
  }

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  addConact = (name, number) => {
      const newContact = {
    id: nanoid(),
    name,
    number
  }
  }

  findContact = (e) => {
    console.log(e.target.value)
  }


  render() {
    console.log(this.state)
    return (
      <div className="Phone">

        <form action="" onSubmit={this.addConact}>
          <h1>Add Contact</h1>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add Contact</button>
        </form>


        <form onChange={this.findContact}>
          <p>Find contacts by name</p>
          <input type="text" />
        </form>

        <div>
          <h2>Contacts</h2>
          <ul style={{display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
          {this.state.contacts.map(contact => {
            return <li style={{display: "flex", alignItems: "center", gap: '20px'}}><p>{contact.name}: <span>{contact.number}</span></p><button onClick={() => this.deleteContact(contact.id)}>Delete</button></li>
          })}
          </ul>
        </div>

      </div>
    );
  }
}