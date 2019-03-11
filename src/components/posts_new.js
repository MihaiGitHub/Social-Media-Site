import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    // field contains event handlers that need to be wired up to the JSX so that <Field is wired up
    // to the <input
    renderField(field){
        // field.input contains event handlers like onChange, onBlur, value of input etc
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input type="text" className="form-control"
                    /* field.input instead of this
                        onChange={field.input.onChange}
                        onFocus={field.input.onFocus}
                        onBlur={field.input.onBlur}
                        */
                    {...field.input} />
                    
                    {field.meta.touched ? field.meta.error : ''}
            </div>
        );
        // field.meta.touched = user has focused on the field then focused away
    }

    onSubmit(values){
        console.log(values)
    }

    render(){
        // handleSubmit is a property passed to this component on behalf of redux form when
        // redux form was wired at the bottom using export default reduxForm
        const { handleSubmit } = this.props;

// handleSubmit takes in the function defined above and passes to handleSubmit that runs reduxForm; if form is valid then call onSubmit
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                // name property specifies what piece of state this field produces
                    name="title" // Is referenced in the validate function as values.title
                    // component property takes in a function that will be used to display this field
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    // no () required since we are passing a reference to a function
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values){ // values is an object of all variables in the form
    const errors = {};

    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if(!values.categories){
        errors.categories = "Enter some categories";
    }
    if(!values.content){
        errors.content = "Enter some content please";
    }

    // If errors is empty, the form is fine to submit
    return errors;
}

// Helper to allow redux form to communicate from the component to the reducer that was set up
export default reduxForm({
    // Pass validate function to validate key for redux form to handle form validation
    validate, // validate: validate; when user submits form validate function will be called
    // Name of the form; In case of multiple forms on the page
    form: 'PostsNewForm' // Specifies namespace for the state generated by this component
})(PostsNew);