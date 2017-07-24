import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

let SearchForm = (props) => {
  const { handleSubmit } = props
  return (
    <Form as={'form'} onSubmit={handleSubmit}>
      <label htmlFor='origin'>Starting Location 1</label>
      <Field name='origin' component='input' type='text' />
      <label htmlFor='destination'>Starting Location 2</label>
      <Field name='destination' component='input' type='text' />
      <button type='submit'>Go</button>
    </Form>
  )
}

SearchForm = reduxForm({
  form: 'directionsSearch'
})(SearchForm)

export default SearchForm
