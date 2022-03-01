export function deepFreeze(freezeTarget) {
  Object.freeze(freezeTarget)

  if (freezeTarget === undefined) {
    return freezeTarget
  }

  Object.getOwnPropertyNames(freezeTarget).forEach((prop) => {
    if (
      freezeTarget[prop] !== null &&
      (typeof freezeTarget[prop] === 'object' ||
        typeof freezeTarget[prop] === 'function') &&
      !Object.isFrozen(freezeTarget[prop])
    ) {
      deepFreeze(freezeTarget[prop])
    }
  })

  return freezeTarget
}

export function debounce(fn) {
  let frame
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }
    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}
export function camelize(str) {
  const KEBAB_ARRAY = str.split('-')
  const CAPITAL_ARRAY = KEBAB_ARRAY.map((item, index) =>
    index
      ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      : item.toLowerCase()
  )

  return CAPITAL_ARRAY.join('')
}
