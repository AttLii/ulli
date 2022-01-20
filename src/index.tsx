import React, {ElementType, ReactNode} from "react"

type Props<T> = {
  list: T[];
  itemFunc: (item: T, index: number) => ReactNode
  className?: string
  itemClassName?: string
  ListElement?: ElementType
  ItemElement?: ElementType
};

export const Ulli = <T,>({
  list,
  itemFunc,
  className = undefined,
  itemClassName = undefined,
  ItemElement = "li",
  ListElement = "ul"
}: Props<T>) => (
  list.length > 0 ? (
    <ListElement className={className}>
      {list.map((item, i) => (
        <ItemElement key={i} className={itemClassName}>
          {itemFunc(item, i)}
        </ItemElement>
      ))}
    </ListElement>
  ) : null
)


/* => (
  list.length > 0 ? (
    <ListElement className={className}>
      {list.map((item, i) => (
        <ItemElement key={i} className={itemClassName}>
          {itemFunc(item, i)}
        </ItemElement>
      ))}
    </ListElement>
  ) : null
) */