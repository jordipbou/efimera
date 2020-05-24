
export let getData0 = (x) => x.data[0]
export let getChannelFromData0 = (x) => x.data[0] & 0xF
export let getChannelFromData0If = (p) => (x) => p(x) ? getChannelFromData0 (x) : undefined
export let getData1 = (x) => x.data[1]
export let getData2 = (x) => x.data[2]
export let getData1If = (p) => (x) => p(x) ? getData1 (x) : undefined
export let getData2If = (p) => (x) => p(x) ? getData2 (x) : undefined
