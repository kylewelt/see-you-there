import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

let SearchForm = (props) => {
  const { handleSubmit } = props
  return (
    <Form as={'form'} onSubmit={handleSubmit}>
      <Form.Field>
        <label htmlFor='origin'>Starting Location 1</label>
        <Field name='origin' component='input' type='text' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='destination'>Starting Location 2</label>
        <Field name='destination' component='input' type='text' />
      </Form.Field>
      <Form.Button>
        Go
      </Form.Button>
    </Form>
  )
}

SearchForm = reduxForm({
  form: 'directionsSearch'
})(SearchForm)

export default SearchForm
