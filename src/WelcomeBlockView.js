import { html } from 'hybrids'

const moreInfo = (host, evt) =>
  console.log ('show more info!')

export const WelcomeBlockView = {
  render: () => html`
    <div class="welcome">
      <div class="line">Welcome to Efimera v1.0.1</div>
      <div class="line">Type ".help" of press <a href="#" onclick=${moreInfo}>here</a> for more information.</div>
    </div>
  `
}
