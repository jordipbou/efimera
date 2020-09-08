import { dispatch, html } from 'hybrids'

const moreInfo = (host, evt) =>
  dispatch (host, 'help', { bubbles: true, composed: true })

export const WelcomeBlockView = {
  render: () => html`
    <div class="welcome">
      <div class="line">Welcome to Efimera v1.0.10</div>
      <div class="line">Type ".help" or press <a href="#" onclick=${moreInfo}>here</a> for more information.</div>
    </div>
  `
}
