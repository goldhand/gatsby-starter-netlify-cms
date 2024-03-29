import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from './Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function createQueryMap() {
  const search = !!global.location
    ? global.location.search
    : '';
  const params = new URLSearchParams(search);
  return (key) => {
    if (params.has(key)) {
      return params.get(key)
    }
    return ''
  }
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    const queryMap = createQueryMap();
    const agentName = queryMap('agentName');
    const agentEmail = queryMap('agentEmail');
    this.state = {
      isValidated: false,
      'agent-name': agentName,
      'agent-email': agentEmail,
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const body = encode({
      'form-name': form.getAttribute('name'),
      ...this.state,
    })
    console.log('body: ', body)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <>
        {this.state['agent-name'] && (
          <>
            <h2 className="is-size-1 has-text-weight-bold has-text-centered">
              {'Fill out the form below to connect with '}
              <em className="has-text-primary">{this.state['agent-name']}</em>
            </h2>
            <br />
          </>
        )}
        <form
          name="contact"
          method="post"
          action="/contact/thanks/?no-cache=1"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="agent-name" id="agent-name" value={this.state['agent-name']} />
          <input type="hidden" name="agent-email" id="agent-email" value={this.state['agent-email']} />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label is-hidden" htmlFor={'first-name'}>
                  First Name
                </label>
                <div className="control">
                  <input
                    className="input"
                    placeholder={'First Name'}
                    type={'text'}
                    name={'first-name'}
                    onChange={this.handleChange}
                    id={'first-name'}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-hidden" htmlFor={'last-name'}>
                  Last Name
                </label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Last Name"
                    type={'text'}
                    name={'last-name'}
                    onChange={this.handleChange}
                    id={'last-name'}
                    required={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label is-hidden" htmlFor={'phone'}>
              Phone Number
            </label>
            <div className="control">
              <input
                className="input"
                placeholder="Phone Number"
                type={'tel'}
                name={'phone'}
                onChange={this.handleChange}
                id={'phone'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label is-hidden" htmlFor={'email'}>
              Email Address
            </label>
            <div className="control">
              <input
                className="input"
                placeholder="Email Address"
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={false}
              />
            </div>
          </div>
          <div className="field">
            <label className="label is-hidden" htmlFor={'referred'}>
              Referred By
            </label>
            <div className="control">
              <input
                className="input"
                placeholder="Referred By"
                type={'text'}
                name={'referred'}
                onChange={this.handleChange}
                id={'referred'}
                required={true}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label" htmlFor={'learn'}>
                  Contact Me About...
                </label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      type={'select'}
                      name={'learn'}
                      onChange={this.handleChange}
                      id={'learn'}
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Select Option
                      </option>
                      <option value="Medicare Advantage Plans">
                        Medicare Advantage Plans
                      </option>
                      <option value="Medicare Supplement Insurance">
                        Medicare Supplement Insurance
                      </option>
                      <option value="Prescription Drug Plans">
                        Prescription Drug Plans
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={'topic'}>
                  Additional interests...
                </label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      type={'select'}
                      name={'topic'}
                      onChange={this.handleChange}
                      id={'topic'}
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Select Option
                      </option>
                      <option value="Additional No Cost Benefits">
                        Additional No Cost Benefits
                      </option>
                      <option value="Medicare Part A &amp; B">
                        Medicare Part A &amp; B
                      </option>
                      <option value="Dental, Vision and Hearing Benefits">
                        Dental, Vision and Hearing Benefits
                      </option>
                      <option value="Medicare Plans for those on ACCCHS">
                        Medicare Plans for those on ACCCHS
                      </option>
                      <option value="Disability">Disability</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label is-hidden" htmlFor={'message'}>
              Message
            </label>
            <div className="control">
              <textarea
                placeholder="Send us a message..."
                className="textarea"
                name={'message'}
                onChange={this.handleChange}
                id={'message'}
                required={false}
              />
            </div>
          </div>
          <p className="disclaimer">
            <em>
              {
                '*As a result of completing this form, a sales agent may mail, call or email you to discuss Medicare Advantage, Prescription Drug Plans or Medicare Supplement Insurance.'
              }
            </em>
          </p>
          <div className="field submit-field is-flex">
            <button
              className="button is-primary is-fullwidth is-medium"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }
}
