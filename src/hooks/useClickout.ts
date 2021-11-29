import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const useClickOut = (target: React.MutableRefObject<null>): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [visible, setVisible] = useState<boolean>(false)
  const clickHandler = (e: MouseEvent) => {
    let el = e.target as HTMLElement
    while (el && target.current && !el.isEqualNode(target.current)) {
      el = el.parentNode as HTMLElement
    }
    if (!el && visible) {
      setVisible(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [visible])
  return [visible, setVisible]
}