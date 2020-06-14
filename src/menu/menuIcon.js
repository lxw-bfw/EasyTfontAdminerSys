export default function getMenuIcons () {
  let iconNameString = 'fa-adjustfa-anchorfa-archivefa-area-chartfa-arrowsfa-arrows-hfa-arrows-vfa-asteriskfa-atfa-automobilefa-banfa-bankfa-bar-chartfa-bar-chart-ofa-barcodefa-barsfa-bedfa-beerfa-bellfa-bell-ofa-bell-slashfa-bell-slash-ofa-bicyclefa-binocularsfa-birthday-cakefa-boltfa-bombfa-bookfa-bookmarkfa-bookmark-ofa-briefcasefa-bugfa-buildingfa-building-ofa-bullhornfa-bullseyefa-busfa-cabfa-calculatorfa-calendarfa-calendar-ofa-camerafa-camera-retrofa-carfa-caret-square-o-downfa-caret-square-o-leftfa-caret-square-o-rightfa-caret-square-o-upfa-cart-arrow-downfa-cart-plusfa-ccfa-certificatefa-checkfa-check-circlefa-check-circle-ofa-check-squarefa-check-square-ofa-childfa-circlefa-circle-ofa-circle-o-notchfa-circle-thinfa-clock-ofa-closefa-cloudfa-cloud-downloadfa-cloud-uploadfa-codefa-code-forkfa-coffeefa-cogfa-cogsfa-commentfa-comment-ofa-commentsfa-comments-ofa-compassfa-copyrightfa-credit-cardfa-cropfa-crosshairsfa-cubefa-cubesfa-cutleryfa-dashboardfa-databasefa-desktopfa-diamondfa-dot-circle-ofa-downloadfa-editfa-ellipsis-hfa-ellipsis-vfa-envelopefa-envelope-ofa-envelope-squarefa-eraserfa-exchangefa-exclamationfa-exclamation-circlefa-exclamation-trianglefa-external-linkfa-external-link-squarefa-eyefa-eye-slashfa-eyedropperfa-faxfa-femalefa-fighter-jetfa-file-archive-ofa-file-audio-ofa-file-code-ofa-file-excel-ofa-file-image-ofa-file-movie-ofa-file-pdf-ofa-file-photo-ofa-file-picture-ofa-file-powerpoint-ofa-file-sound-ofa-file-video-ofa-file-word-ofa-file-zip-ofa-filmfa-filterfa-firefa-fire-extinguisherfa-flagfa-flag-checkeredfa-flag-ofa-flashfa-flaskfa-folderfa-folder-ofa-folder-openfa-folder-open-ofa-frown-ofa-futbol-ofa-gamepadfa-gavelfa-gearfa-gearsfa-genderlessfa-giftfa-glassfa-globefa-graduation-capfa-groupfa-hdd-ofa-headphonesfa-heartfa-heart-ofa-heartbeatfa-historyfa-homefa-hotelfa-imagefa-inboxfa-infofa-info-circlefa-institutionfa-keyfa-keyboard-ofa-languagefa-laptopfa-leaffa-legalfa-lemon-ofa-level-downfa-level-upfa-life-bouyfa-life-buoyfa-life-ringfa-life-saverfa-lightbulb-ofa-line-chartfa-location-arrowfa-lockfa-magicfa-magnetfa-mail-forwardfa-mail-replyfa-mail-reply-allfa-malefa-map-markerfa-meh-ofa-microphonefa-microphone-slashfa-minusfa-minus-circlefa-minus-squarefa-minus-square-ofa-mobilefa-mobile-phonefa-moneyfa-moon-ofa-mortar-boardfa-motorcyclefa-musicfa-naviconfa-newspaper-ofa-paint-brushfa-paper-planefa-paper-plane-ofa-pawfa-pencilfa-pencil-squarefa-pencil-square-ofa-phonefa-phone-squarefa-photofa-picture-ofa-pie-chartfa-planefa-plugfa-plusfa-plus-circlefa-plus-squarefa-plus-square-ofa-power-offfa-printfa-puzzle-piecefa-qrcodefa-questionfa-question-circlefa-quote-leftfa-quote-rightfa-randomfa-recyclefa-refreshfa-removefa-reorderfa-replyfa-reply-allfa-retweetfa-roadfa-rocketfa-rssfa-rss-squarefa-searchfa-search-minusfa-search-plusfa-sendfa-send-ofa-serverfa-sharefa-share-altfa-share-alt-squarefa-share-squarefa-share-square-ofa-shieldfa-shipfa-shopping-cartfa-sign-infa-sign-outfa-signalfa-sitemapfa-slidersfa-smile-ofa-soccer-ball-ofa-sortfa-sort-alpha-ascfa-sort-alpha-descfa-sort-amount-ascfa-sort-amount-descfa-sort-ascfa-sort-descfa-sort-downfa-sort-numeric-ascfa-sort-numeric-descfa-sort-upfa-space-shuttlefa-spinnerfa-spoonfa-squarefa-square-ofa-starfa-star-halffa-star-half-emptyfa-star-half-fullfa-star-half-ofa-star-ofa-street-viewfa-suitcasefa-sun-ofa-supportfa-tabletfa-tachometerfa-tagfa-tagsfa-tasksfa-taxifa-terminalfa-thumb-tackfa-thumbs-downfa-thumbs-o-downfa-thumbs-o-upfa-thumbs-upfa-ticketfa-timesfa-times-circlefa-times-circle-ofa-tintfa-toggle-downfa-toggle-leftfa-toggle-offfa-toggle-onfa-toggle-rightfa-toggle-upfa-trashfa-trash-ofa-treefa-trophyfa-truckfa-ttyfa-umbrellafa-universityfa-unlockfa-unlock-altfa-unsortedfa-uploadfa-userfa-user-plusfa-user-secretfa-user-timesfa-usersfa-video-camerafa-volume-downfa-volume-offfa-volume-upfa-warningfa-wheelchairfa-wififa-wrench'
  iconNameString = iconNameString.replace(/fa-/g, '|fa-')
  iconNameString = iconNameString.slice(1, iconNameString.length)
  let iconNameArray = iconNameString.split('|')
  let icons = []
  for (let i = 0; i < iconNameArray.length; i++) {
    icons.push(
      {
        iconBaseClass: 'fa', // fontAwsome图标基本类,选择图标的页面显示的
        iconName: iconNameArray[i], // 图标类名称，用于当前选择页面的图标显示
        menuIconTitle: iconNameArray[i].replace('fa-', '') // 用于侧边栏菜单显示图标，传给后台
      }
    )
  }
  return icons
}
