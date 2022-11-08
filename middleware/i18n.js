export default function({ isHMR, app, store, route, params, error, redirect }) {
    const defaultLocale = app.i18n.fallbackLocale;
  
  
 

    app.i18n.locale = store.state.locale;
  

  }
  