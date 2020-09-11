import React from 'react';
import UserProfile from 'react-user-profile'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            location: '',
            profile_pic: ''
        }
    }

    handleFile = event => {
        this.setState({ photoFile: e.target.files[0] })
        const file = event.target.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', this.props.currentUser.id)
        formData.append('user[profile_pic]', this.state.photoFile)
        addPhotoToUser(this.props.currentUser, formData)
    }
    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt='preview' /> : null
        return (
            <div className="card rounded-circle justify-content-end">
                <Form onSubmit={this.handleSubmit}>
                    <input type='file' id='profile_pic' value={this.state.profile_pic}
                        onChange={this.handleFile} />
                    {preview}
                    <button>save</button>
                </Form>
            </div>
        )
    }
}
const mapSTP = state => {
    return { currentUser: state.currentUser }
}
export default Profile;