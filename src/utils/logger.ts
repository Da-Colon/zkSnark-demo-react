class Logger {
  error(title: string, message: string) {
    console.group(
      `Error %c${title}`,
      "color: #FF0000; font-weight: bold; font-size: 12px; text-decoration: underline;",
    )
    console.log(
      `%c${message}`,
      "color: #800000; font-weight: bold; font-size: 8px; "
    )
    console.groupEnd()
  }
  info(title: string, message: string) {
    console.group(
      `Info %c${title}`,
      "color: #FFFF00; font-weight: bold; font-size: 12px; text-decoration: underline;",
    )
    console.log(
      `%c${message}`,
      "color: #808000; font-weight: bold; font-size: 8px; "
    )
    console.groupEnd()
  }
}

export default new Logger();