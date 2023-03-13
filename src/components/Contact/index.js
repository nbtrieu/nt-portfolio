// import { useState } from "react";

// import { validateEmail } from "../../utils/helpers";

function Contact() {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState; 

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log('Submit Form', formState);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`Your ${e.targe.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }

  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //     console.log('Handle Form', formState);
  //   }
  // };

  return (
    <section className="my-5">
      {/* <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn btn-info">Submit</button>
      </form> */}
      <div className="flex-row d-flex align-items-start contacts">
        <div className="col-1">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div className="col-md-1">
          nicole.nghi.trieu@gmail.com
        </div>
      </div>
      <div className="flex-row d-flex align-items-start contacts mt-3 mb-6">
        <div className="col-1">
          <i class="fa fa-mobile" aria-hidden="true"></i>
        </div>
        <div className="col-md-6">
          (949) 245-5845
        </div>
      </div>
    </section>
  )
};

export default Contact;