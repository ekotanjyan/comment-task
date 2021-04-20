import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            submittedDate: '',
            author: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const data = {
            comment: event.target.value,
            author: 'ekotanjyan',
            submittedDate: new Date().toString()
        };
        console.log(data)
        this.setState(data);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment,this.state.submittedDate, this.state.author);
        this.setState({
            comment: '',
            submittedDate: '',
            author: '',
        });
    }

    render() {
        return (
            <form className="comment-box" onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>
                <div>
                    <button type="submit">Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);
