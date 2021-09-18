declare module "ulli" {
  import React from "react"

  interface Props<T> {
    list: T[]
    itemFunc: (item: T, index: number) => React.ReactNode
    className?: string
    itemClassName?: string
    ListElement?: string | React.ReactNode
    ItemElement?: string | React.ReactNode
  }

  export const Ulli: <T>({
    list,
    itemFunc,
    className,
    itemClassName,
    ListElement,
    ItemElement,
  }: Props<T>) => JSX.Element
}
