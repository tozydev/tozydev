import dayjs from "dayjs"
import viLocale from "dayjs/locale/vi"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.locale(viLocale)
dayjs.extend(relativeTime)

export function formatDate(date: Date) {
  return dayjs(date).fromNow()
}
