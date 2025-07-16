Consent Manager Installation Instructions

1. Extract the contents of this zip file
2. Place the files in your website directory
3. Add the following code to your HTML page, inside the <head> tag:

<link rel="stylesheet" id="silktide-consent-manager-css" href="path-to-css/silktide-consent-manager.css">
<script src="path-to-js/silktide-consent-manager.js"></script>
<script>
silktideCookieBannerManager.updateCookieBannerConfig({
  background: {
    showBackground: true
  },
  cookieIcon: {
    position: "bottomLeft"
  },
  cookieTypes: [
    {
      id: "necessary",
      name: "Necessary",
      description: "<p>\n</p><p data-start=\"497\" data-end=\"575\"></p><p></p><blockquote data-start=\"229\" data-end=\"495\"><p data-start=\"231\" data-end=\"495\"><strong data-start=\"231\" data-end=\"326\">Esta web no utiliza cookies propias ni de terceros, ni recoge datos personales del usuario.</strong><br data-start=\"326\" data-end=\"329\">\nSolo se recogen datos si tú los proporcionas voluntariamente mediante formularios de contacto u otros medios.<br data-start=\"440\" data-end=\"443\">\nPuedes continuar navegando con total tranquilidad.</p>\n</blockquote>",
      required: true,
      onAccept: function() {
        console.log('Add logic for the required Necessary here');
      }
    }
  ],
  text: {
    banner: {
      description: "<strong data-start=\"231\" data-end=\"326\" style=\"color: rgb(36, 51, 71); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 16px;\">Esta web no utiliza cookies propias ni de terceros, ni recoge datos personales del usuario.</strong><br data-start=\"326\" data-end=\"329\" style=\"color: rgb(36, 51, 71); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 16px;\"><p><span style=\"color: rgb(36, 51, 71); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 16px;\">Solo se recogen datos si tú los proporcionas voluntariamente mediante formularios de contacto u otros medios.</span></p>",
      acceptAllButtonText: "Aceptar",
      acceptAllButtonAccessibleLabel: "Accept all cookies",
      rejectNonEssentialButtonText: "Rechazar",
      rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
      preferencesButtonText: "Preferencia",
      preferencesButtonAccessibleLabel: "Toggle preferences"
    },
    preferences: {
      title: "Personaliza tus Cookies",
      description: "<p><strong data-start=\"231\" data-end=\"326\" style=\"color: rgb(36, 51, 71); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 16px; letter-spacing: normal;\">Esta web no utiliza cookies propias ni de terceros, ni recoge datos personales del usuario.</strong><br data-start=\"326\" data-end=\"329\" style=\"color: rgb(36, 51, 71); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 16px; letter-spacing: normal;\"><span style=\"color: rgb(36, 51, 71); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 16px; letter-spacing: normal;\">Solo se recogen datos si tú los proporcionas voluntariamente mediante formularios de contacto u otros medios.</span><br data-start=\"440\" data-end=\"443\" style=\"color: rgb(36, 51, 71); font-family: &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, Arial, sans-serif; font-size: 16px; letter-spacing: normal;\"><br></p>",
      creditLinkText: "Get this banner for free",
      creditLinkAccessibleLabel: "Get this banner for free"
    }
  }
});
</script>
