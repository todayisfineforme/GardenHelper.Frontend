import React from 'react';
import { MailSlurp } from "mailslurp-client";
const mailslurp = new MailSlurp({ apiKey: "af09981b8affd4ed72c06191454258b498d6f3196de5bdf9fc25f57e5acd5cb3" });

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }


    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    resetForm() {

        this.setState({ name: '', email: '', message: '' })
    }

    async handleSubmit(event) {
        event.preventDefault();
        let inbox = await mailslurp.getInbox('6ecd2217-2e07-4a27-8dd7-92ef3af2a991');
        const options = {
            to: ['melanieduah@yahoo.com'],
            subject: 'Hey i need you help',
            body: `Message from: ${this.state.name}.
                      
                  ${this.state.message}

                My email is: ${this.state.email}`
        }
        await mailslurp.sendEmail(inbox.id, options);
        this.resetForm();
        alert('message received')
      
    }

    render() {
        return (
            <div className="container-fluid h-100 mainpagesbackground">
                <div className="row h-100">
                    <div className="col-md-12 mt-5 d-flex justify-content-center">
                        <div className="card w-50 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body w-50 mx-auto mt-5">
                                <h5 className="card-title">Any Problem Contact Us</h5>
                                <form id="contact-form" onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" id="fullname" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" id="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Messages</label>
                                            <textarea className="form-control" id="messages" rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-secondary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact;