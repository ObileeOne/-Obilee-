<script>
  // Function to update language based on user selection
  function changeLanguage() {
    const selectedLanguage = document.getElementById('language').value;

    // Set the locale of Moment.js based on selected language
    moment.locale(selectedLanguage);

    // Update the entire page's language (for labels and text)
    updateLanguageStrings(selectedLanguage);

    // For example, we update the title of the page to reflect the selected language
    document.getElementById('pageTitle').innerText = moment().format('LLLL');
  }

  // Update text on the page based on language selection
  function updateLanguageStrings(language) {
    const langStrings = {
      english: {
        accountSettingsTitle: 'Account Settings',
        privacySettingsTitle: 'Privacy Settings',
        notificationSettingsTitle: 'Notification Settings',
        connectedAccountsTitle: 'Connected Accounts',
        languageAndRegionTitle: 'Language & Region',
        logoutTitle: 'Logout',
        changePasswordBtn: 'Change Password',
        updateEmailBtn: 'Update Email',
        updatePhoneNumberBtn: 'Update Phone Number',
        disableAccountBtn: 'Temporarily Disable Account',
        deleteAccountBtn: 'Delete Account',
        messagePrivacyLabel: 'Who can message you?',
        tagPrivacyLabel: 'Who can tag you in comments?',
        commentPrivacyLabel: 'Who can comment on your posts?',
        blockListLabel: 'Manage Blocked Accounts',
        spamProtectionLabel: 'Enable AI Spam Protection',
        newPostNotificationsLabel: 'New Post Notifications',
        followNotificationsLabel: 'Follow Notifications',
        messageNotificationsLabel: 'Message Notifications',
        languageLabel: 'Language',
        regionLabel: 'Region',
      },
      spanish: {
        accountSettingsTitle: 'Configuración de la cuenta',
        privacySettingsTitle: 'Configuración de privacidad',
        notificationSettingsTitle: 'Configuración de notificaciones',
        connectedAccountsTitle: 'Cuentas conectadas',
        languageAndRegionTitle: 'Idioma y región',
        logoutTitle: 'Cerrar sesión',
        changePasswordBtn: 'Cambiar contraseña',
        updateEmailBtn: 'Actualizar correo electrónico',
        updatePhoneNumberBtn: 'Actualizar número de teléfono',
        disableAccountBtn: 'Desactivar cuenta temporalmente',
        deleteAccountBtn: 'Eliminar cuenta',
        messagePrivacyLabel: '¿Quién puede enviarte mensajes?',
        tagPrivacyLabel: '¿Quién puede etiquetarte en los comentarios?',
        commentPrivacyLabel: '¿Quién puede comentar en tus publicaciones?',
        blockListLabel: 'Gestionar cuentas bloqueadas',
        spamProtectionLabel: 'Habilitar protección contra spam AI',
        newPostNotificationsLabel: 'Notificaciones de nuevas publicaciones',
        followNotificationsLabel: 'Notificaciones de seguimiento',
        messageNotificationsLabel: 'Notificaciones de mensajes',
        languageLabel: 'Idioma',
        regionLabel: 'Región',
      },
      french: {
        accountSettingsTitle: 'Paramètres du compte',
        privacySettingsTitle: 'Paramètres de confidentialité',
        notificationSettingsTitle: 'Paramètres de notification',
        connectedAccountsTitle: 'Comptes connectés',
        languageAndRegionTitle: 'Langue et région',
        logoutTitle: 'Se déconnecter',
        changePasswordBtn: 'Changer le mot de passe',
        updateEmailBtn: 'Mettre à jour l\'email',
        updatePhoneNumberBtn: 'Mettre à jour le numéro de téléphone',
        disableAccountBtn: 'Désactiver temporairement le compte',
        deleteAccountBtn: 'Supprimer le compte',
        messagePrivacyLabel: 'Qui peut vous envoyer un message ?',
        tagPrivacyLabel: 'Qui peut vous taguer dans les commentaires ?',
        commentPrivacyLabel: 'Qui peut commenter vos publications ?',
        blockListLabel: 'Gérer les comptes bloqués',
        spamProtectionLabel: 'Activer la protection AI contre le spam',
        newPostNotificationsLabel: 'Notifications des nouvelles publications',
        followNotificationsLabel: 'Notifications de suivi',
        messageNotificationsLabel: 'Notifications de messages',
        languageLabel: 'Langue',
        regionLabel: 'Région',
      },
      german: {
        accountSettingsTitle: 'Kontoeinstellungen',
        privacySettingsTitle: 'Datenschutzeinstellungen',
        notificationSettingsTitle: 'Benachrichtigungseinstellungen',
        connectedAccountsTitle: 'Verbundene Konten',
        languageAndRegionTitle: 'Sprache & Region',
        logoutTitle: 'Abmelden',
        changePasswordBtn: 'Passwort ändern',
        updateEmailBtn: 'E-Mail aktualisieren',
        updatePhoneNumberBtn: 'Telefonnummer aktualisieren',
        disableAccountBtn: 'Konto vorübergehend deaktivieren',
        deleteAccountBtn: 'Konto löschen',
        messagePrivacyLabel: 'Wer kann dir Nachrichten senden?',
        tagPrivacyLabel: 'Wer kann dich in Kommentaren taggen?',
        commentPrivacyLabel: 'Wer kann auf deine Beiträge kommentieren?',
        blockListLabel: 'Verwalte blockierte Konten',
        spamProtectionLabel: 'AI-Spamschutz aktivieren',
        newPostNotificationsLabel: 'Benachrichtigungen zu neuen Beiträgen',
        followNotificationsLabel: 'Benachrichtigungen über Follower',
        messageNotificationsLabel: 'Nachrichtenbenachrichtigungen',
        languageLabel: 'Sprache',
        regionLabel: 'Region',
      },
      chinese: {
        accountSettingsTitle: '账户设置',
        privacySettingsTitle: '隐私设置',
        notificationSettingsTitle: '通知设置',
        connectedAccountsTitle: '连接的帐户',
        languageAndRegionTitle: '语言与地区',
        logoutTitle: '登出',
        changePasswordBtn: '更改密码',
        updateEmailBtn: '更新电子邮件',
        updatePhoneNumberBtn: '更新电话号码',
        disableAccountBtn: '临时禁用账户',
        deleteAccountBtn: '删除账户',
        messagePrivacyLabel: '谁可以给你发消息？',
        tagPrivacyLabel: '谁可以在评论中标记你？',
        commentPrivacyLabel: '谁可以评论你的帖子？',
        blockListLabel: '管理被封锁的帐户',
        spamProtectionLabel: '启用AI垃圾邮件保护',
        newPostNotificationsLabel: '新帖子通知',
        followNotificationsLabel: '跟随通知',
        messageNotificationsLabel: '消息通知',
        languageLabel: '语言',
        regionLabel: '地区',
      }
    };

    // Set language text
    const strings = langStrings[language];
    Object.keys(strings).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        element.innerText = strings[key];
      }
    });
  }

  // Listen for language changes in the dropdown
  document.getElementById('language').addEventListener('change', changeLanguage);

  // Automatically update to English by default on page load
  window.onload = () => {
    changeLanguage(); // This will set the default language
  };
</script>