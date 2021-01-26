export function error(message) {
  const err = console.error
  const styles = ["color: white", `background: red`, "font-size: 12px"]

  if (Object.keys(message).length > 0) {
    message = JSON.stringify(message)
  }

  if (typeof message === "function") {
    styles.push("border-radius: 5px", "padding: 0px 5px 0px 5px")
  } else {
    styles.push("border-radius: 10px", "padding: 5px")
  }

  const strStyle = styles.join(";")

  return err(`%c${message}`, strStyle)
}

export function warn(message) {
  const err = console.warn
  const styles = ["color: white", `background: orange`, "font-size: 12px"]

  if (Object.keys(message).length > 0) {
    message = JSON.stringify(message)
  }

  if (typeof message === "function") {
    styles.push("border-radius: 5px", "padding: 0px 5px 0px 5px")
  } else {
    styles.push("border-radius: 10px", "padding: 5px")
  }

  const strStyle = styles.join(";")

  return err(`%c${message}`, strStyle)
}

export function log(message) {
  const err = console.warn
  const styles = ["color: white", `background: green`, "font-size: 12px"]

  if (Object.keys(message).length > 0) {
    message = JSON.stringify(message)
  }

  if (typeof message === "function") {
    styles.push("border-radius: 5px", "padding: 0px 5px 0px 5px")
  } else {
    styles.push("border-radius: 10px", "padding: 5px")
  }

  const strStyle = styles.join(";")

  return err(`%c${message}`, strStyle)
}
