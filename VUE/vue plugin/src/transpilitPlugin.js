export default {
  install(app, options)
  {
    app.config.globalProperties.$alert = text =>
    {
      window.alert(text)
    }
    
  }
}