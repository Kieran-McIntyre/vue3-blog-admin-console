import { library } from "@fortawesome/fontawesome-svg-core"
import { faUser, faCalendar, faLocationDot, faUsers, faBook } from "@fortawesome/free-solid-svg-icons"

const FA_ICONS = [
  faUser,
  faCalendar,
  faLocationDot,
  faUsers,
  faBook,
]

export const createFontAwesomeLibrary = () => {
  FA_ICONS.forEach(faIcon => {
    library.add(faIcon)
  })
}
