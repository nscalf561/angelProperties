import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Angel Properties </p>;
  }
}

class ContactForm extends React.Component {
  render () {
    return <p> asdasdasd </p>;
  }
}

render(<App/>, document.getElementById('app'));
render(<ContactForm/>, document.getElementById('login'));

// import React from 'react';
// import {render} from 'react-dom';

// class ContactForm extends React.Component {

//   render() {
//     return
//       React.createElement('form', {className: 'ContactForm'},
//         React.createElement('input', {
//           type: 'text',
//           placeholder: 'Name (required)',
//           value: this.props.value.name,
//         })

//       )
//   }
// }

// var ContactForm = React.createClass({
//   propTypes: {
//     value: React.PropTypes.object.isRequired
//   },


//   render: function() {
//     return (
//       React.createElement('form', {className: 'ContactForm'},
//         React.createElement('input', {
//           type: 'text',
//           placeholder: 'Name (required)',
//           value: this.props.value.name,
//         }),
//         React.createElement('input', {
//           type: 'email',
//           placeholder: 'Email',
//           value: this.props.value.email,
//         }),
//         React.createElement('textarea', {
//           placeholder: 'Description',
//           value: this.props.value.description,
//         }),
//         React.createElement('button', {type: 'submit'}, "Add Contact")
//       )
//     );
//   },
// });

// render(<ContactForm/>, document.getElementById('login'));





