import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import localizedFormated from "dayjs/plugin/localizedFormat"

dayjs.locale('pt-br')
dayjs.extend(localizedFormated);

export { dayjs }