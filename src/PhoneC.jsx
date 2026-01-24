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

  addConact = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let number = e.target.number.value;
    if (!this.state.contacts.some(
      c => c.number === number
    )) {
      const newContact = {
        name: name,
        id: nanoid(),
        number: number
      }

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
    } else {
      alert(`You already have a contact with the number of ${number}!`)
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
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
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
          <ul style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            {this.state.contacts.map(contact => {
              return <li style={{ display: "flex", alignItems: "center", gap: '20px' }}><p>{contact.name}: <span>{contact.number}</span></p><button onClick={() => this.deleteContact(contact.id)}>Delete</button></li>
            })}
          </ul>
        </div>

      </div>
    );
  }
}