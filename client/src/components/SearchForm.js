import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

let SearchForm = (props) => {
  const { handleSubmit } = props
  return (
    <Form as={'form'} onSubmit={handleSubmit}>
      <Form.Field>
        <label htmlFor='origin'>Start Location A</label>
        <Field name='origin' component='input' type='text' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='destination'>Start Location B</label>
        <Field name='destination' component='input' type='text' />
      </Form.Field>
      <Form.Button>
        Find a place to meet
      </Form.Button>
    </Form>
  )
}

SearchForm = reduxForm({
  form: 'directionsSearch'
})(SearchForm)

export default SearchForm
