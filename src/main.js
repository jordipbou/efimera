import './main.css'

export * as RMidi from './frMIDI/main.js'
//export * as RMusic from './rmusic.js'
//export * as RMusic_Defs from './rmusic_defs.js'
//export * as LinnStrumentJS from './linnstrument.js'

export * as ramda from 'ramda'

export * as tone from 'tone'

export * as rxjs from 'rxjs'
export * as rxjs_operators from 'rxjs/operators'

export * as hybrids from 'hybrids'

import { token } from './Gists.js'
import { Octokit } from '@octokit/rest'
export const octokit = new Octokit ({ auth: token })

import './App.js'

